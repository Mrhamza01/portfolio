export const TOUR_STORAGE_KEY = "hamza_portfolio_tour_v1";

export type TourState = "completed" | "skipped";

export function getTourState(): TourState | null {
  try {
    const v = localStorage.getItem(TOUR_STORAGE_KEY);
    if (v === "completed" || v === "skipped") return v;
    return null;
  } catch {
    return null;
  }
}

export function setTourState(state: TourState): void {
  try {
    localStorage.setItem(TOUR_STORAGE_KEY, state);
  } catch {
    /* ignore */
  }
}
