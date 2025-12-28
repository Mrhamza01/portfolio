import type { StateCreator } from "zustand";
import { enterFullScreen, exitFullScreen } from "~/utils";

export interface SystemSlice {
  dark: boolean;
  volume: number;
  brightness: number;
  wifi: boolean;
  bluetooth: boolean;
  airdrop: boolean;
  fullscreen: boolean;
  toggleDark: () => void;
  toggleWIFI: () => void;
  toggleBluetooth: () => void;
  toggleAirdrop: () => void;
  toggleFullScreen: (v: boolean) => void;
  setVolume: (v: number) => void;
  setBrightness: (v: number) => void;
  bearCategory: string;
  setBearCategory: (v: string) => void;
  bearContentID: string;
  setBearContentID: (v: string) => void;
  showApps: { [key: string]: boolean };
  appsZ: { [key: string]: number };
  maxApps: { [key: string]: boolean };
  minApps: { [key: string]: boolean };
  maxZ: number;
  openApp: (id: string) => void;
  closeApp: (id: string) => void;
  setAppMax: (id: string, target?: boolean) => void;
  setAppMin: (id: string, target?: boolean) => void;
  minimizeApp: (id: string, setWindowPosition: (id: string) => void) => void;
  initApps: (apps: any[]) => void;
  quickLookOpen: boolean;
  quickLookTarget: string | null;
  toggleQuickLook: (target?: string | null) => void;
  lastSelectedIcon: string | null;
  setLastSelectedIcon: (id: string | null) => void;
}

export const createSystemSlice: StateCreator<SystemSlice> = (set) => ({
  dark: false,
  volume: 100,
  brightness: 80,
  wifi: true,
  bluetooth: true,
  airdrop: true,
  fullscreen: false,
  toggleDark: () =>
    set((state) => {
      if (!state.dark) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return { dark: !state.dark };
    }),
  toggleWIFI: () => set((state) => ({ wifi: !state.wifi })),
  toggleBluetooth: () => set((state) => ({ bluetooth: !state.bluetooth })),
  toggleAirdrop: () => set((state) => ({ airdrop: !state.airdrop })),
  toggleFullScreen: (v) =>
    set(() => {
      v ? enterFullScreen() : exitFullScreen();
      return { fullscreen: v };
    }),
  setVolume: (v) => set(() => ({ volume: v })),
  setBrightness: (v) => set(() => ({ brightness: v })),
  bearCategory: "profile",
  setBearCategory: (v) => set(() => ({ bearCategory: v })),
  bearContentID: "resume",
  setBearContentID: (v) => set(() => ({ bearContentID: v })),
  showApps: {},
  appsZ: {},
  maxApps: {},
  minApps: {},
  maxZ: 2,
  initApps: (apps) =>
    set(() => {
      let showApps: { [key: string]: boolean } = {},
        appsZ: { [key: string]: number } = {},
        maxApps: { [key: string]: boolean } = {},
        minApps: { [key: string]: boolean } = {};
      apps.forEach((app) => {
        showApps[app.id] = !!app.show;
        appsZ[app.id] = 2;
        maxApps[app.id] = false;
        minApps[app.id] = false;
      });
      return { showApps, appsZ, maxApps, minApps };
    }),
  openApp: (id) =>
    set((state) => {
      const showApps = { ...state.showApps, [id]: true };
      const appsZ = { ...state.appsZ, [id]: state.maxZ + 1 };
      const minApps = { ...state.minApps, [id]: false };
      return { showApps, appsZ, maxZ: state.maxZ + 1, minApps };
    }),
  closeApp: (id) =>
    set((state) => ({
      showApps: { ...state.showApps, [id]: false },
      maxApps: { ...state.maxApps, [id]: false }
    })),
  setAppMax: (id, target) =>
    set((state) => {
      const maxApps = { ...state.maxApps };
      if (target === undefined) target = !maxApps[id];
      maxApps[id] = target;
      return { maxApps };
    }),
  setAppMin: (id, target) =>
    set((state) => {
      const minApps = { ...state.minApps };
      if (target === undefined) target = !minApps[id];
      minApps[id] = target;
      return { minApps };
    }),
  minimizeApp: (id, setWindowPosition) => {
    setWindowPosition(id);
    set((state) => ({
      minApps: { ...state.minApps, [id]: true }
    }));
  },
  quickLookOpen: false,
  quickLookTarget: null,
  toggleQuickLook: (target) =>
    set((state) => ({
      quickLookOpen: target !== undefined ? !!target : !state.quickLookOpen,
      quickLookTarget: target || null
    })),
  lastSelectedIcon: null,
  setLastSelectedIcon: (id) => set(() => ({ lastSelectedIcon: id }))
});
