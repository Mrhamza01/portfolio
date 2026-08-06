/** Ensure public asset paths are root-absolute to avoid broken icons on reload/route changes. */
export function assetUrl(path: string): string {
  if (!path) return "/img/icons/fallback.svg";
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  return path.startsWith("/") ? path : `/${path}`;
}

export const FALLBACK_ICON = "/img/icons/fallback.svg";
