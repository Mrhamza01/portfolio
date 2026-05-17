const CACHE_TTL_MS = 5 * 60 * 1000;

function cacheGet<T>(key: string): T | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL_MS) return null;
    return data as T;
  } catch {
    return null;
  }
}

function cacheSet(key: string, data: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    /* ignore */
  }
}

export interface WeatherData {
  temperature: number;
  humidity: number;
  weatherCode: number;
  label: string;
}

const WMO_LABELS: Record<number, string> = {
  0: "Clear",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Foggy",
  48: "Foggy",
  51: "Drizzle",
  61: "Rain",
  71: "Snow",
  80: "Showers",
  95: "Thunderstorm",
};

export function weatherLabel(code: number): string {
  return WMO_LABELS[code] ?? "Cloudy";
}

export async function fetchWeather(
  lat = 31.42,
  lon = 73.08
): Promise<WeatherData> {
  const key = `weather_${lat}_${lon}`;
  const cached = cacheGet<WeatherData>(key);
  if (cached) return cached;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`;
  const res = await fetch(url);
  const data = await res.json();
  const c = data.current;
  const result: WeatherData = {
    temperature: Math.round(c.temperature_2m),
    humidity: c.relative_humidity_2m,
    weatherCode: c.weather_code,
    label: weatherLabel(c.weather_code),
  };
  cacheSet(key, result);
  return result;
}

export interface ForecastDay {
  date: string;
  max: number;
  min: number;
  code: number;
}

export async function fetchWeatherForecast(
  lat = 31.42,
  lon = 73.08
): Promise<ForecastDay[]> {
  const key = `forecast_${lat}_${lon}`;
  const cached = cacheGet<ForecastDay[]>(key);
  if (cached) return cached;

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FKarachi&forecast_days=5`;
  const res = await fetch(url);
  const data = await res.json();
  const d = data.daily;
  const days: ForecastDay[] = d.time.map((date: string, i: number) => ({
    date,
    max: Math.round(d.temperature_2m_max[i]),
    min: Math.round(d.temperature_2m_min[i]),
    code: d.weather_code[i],
  }));
  cacheSet(key, days);
  return days;
}

export async function fetchExchangeRate(
  base = "USD",
  target = "PKR"
): Promise<{ rate: number; updated: string }> {
  const key = `fx_${base}_${target}`;
  const cached = cacheGet<{ rate: number; updated: string }>(key);
  if (cached) return cached;

  const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
  const data = await res.json();
  const result = {
    rate: data.rates[target],
    updated: data.time_last_update_utc ?? new Date().toISOString(),
  };
  cacheSet(key, result);
  return result;
}

export async function fetchGitHubUser(username = "Mrhamza01") {
  const key = `gh_${username}`;
  const cached = cacheGet<{
    public_repos: number;
    followers: number;
    name: string;
  }>(key);
  if (cached) return cached;

  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("GitHub API error");
  const data = await res.json();
  const result = {
    public_repos: data.public_repos,
    followers: data.followers,
    name: data.name ?? username,
  };
  cacheSet(key, result);
  return result;
}

export async function fetchRandomQuote(): Promise<{ content: string; author: string }> {
  const res = await fetch("https://api.quotable.io/random?maxLength=120");
  const data = await res.json();
  return { content: data.content, author: data.author };
}

export async function fetchKarachiTime(): Promise<string> {
  const key = "worldtime_karachi";
  const cached = cacheGet<string>(key);
  if (cached) return cached;

  const res = await fetch("https://worldtimeapi.org/api/timezone/Asia/Karachi");
  const data = await res.json();
  const dt = new Date(data.datetime);
  const formatted = dt.toLocaleString("en-PK", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  cacheSet(key, formatted);
  return formatted;
}

export interface NewsArticle {
  title: string;
  source: { name: string };
  url: string;
  urlToImage?: string;
  publishedAt: string;
}

export async function fetchTechNews(limit = 4): Promise<NewsArticle[]> {
  const key = `news_${limit}`;
  const cached = cacheGet<NewsArticle[]>(key);
  if (cached) return cached;

  const res = await fetch(
    `https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}`
  );
  const data = await res.json();
  const articles: NewsArticle[] = data.results.map((item: {
    title: string;
    news_site?: string;
    url: string;
    image_url?: string;
    published_at: string;
  }) => ({
    title: item.title,
    source: { name: item.news_site || "Tech News" },
    url: item.url,
    urlToImage: item.image_url,
    publishedAt: item.published_at,
  }));
  cacheSet(key, articles);
  return articles;
}

/** Offline-friendly responses for Chat/Siri when no Gemini key */
export async function handleOfflineIntent(
  text: string
): Promise<string | null> {
  const lower = text.toLowerCase();
  if (lower.includes("weather")) {
    const w = await fetchWeather();
    return `It's ${w.temperature}°C and ${w.label.toLowerCase()} in Faisalabad with ${w.humidity}% humidity.`;
  }
  if (lower.includes("quote")) {
    const q = await fetchRandomQuote();
    return `"${q.content}" — ${q.author}`;
  }
  if (lower.includes("github")) {
    const g = await fetchGitHubUser();
    return `Hamza's GitHub (@Mrhamza01) has ${g.public_repos} public repositories and ${g.followers} followers.`;
  }
  if (
    lower.includes("dollar") ||
    lower.includes("exchange") ||
    lower.includes("pkr")
  ) {
    const fx = await fetchExchangeRate();
    return `1 USD ≈ ${fx.rate.toFixed(2)} PKR (updated ${new Date(fx.updated).toLocaleDateString()}).`;
  }
  if (lower.includes("time")) {
    const t = await fetchKarachiTime();
    return `Current time in Karachi: ${t}.`;
  }
  if (lower.includes("architecture") || lower.includes("cicd") || lower.includes("ci/cd")) {
    return "Open the Architecture app from the dock to see ERP platform and CI/CD pipeline case studies with visual diagrams.";
  }
  if (lower.includes("certificate") || lower.includes("certification")) {
    return "Open the Certificates app from the dock for freeCodeCamp and IBM credentials.";
  }
  return null;
}
