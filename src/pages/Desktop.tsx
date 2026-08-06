import React, { useEffect, useState } from "react";
import { apps, wallpapers } from "~/configs";
import { minMarginY, getTourState } from "~/utils";
import type { MacActions } from "~/types";
import DesktopIcon from "~/components/DesktopIcon";
import AppWindow from "~/components/AppWindow";
import TopBar from "~/components/menus/TopBar";
import Spotlight from "~/components/Spotlight";
import Launchpad from "~/components/Launchpad";
import Dock from "~/components/dock/Dock";
import QuickLook from "~/components/QuickLook";
import NewsWidget from "~/components/NewsWidget";
import WeatherWidget from "~/components/widgets/WeatherWidget";
import ClockCalendarWidget from "~/components/widgets/ClockCalendarWidget";
import StocksWidget from "~/components/widgets/StocksWidget";
import GuidedTour from "~/components/GuidedTour";
import InstallPrompt from "~/components/InstallPrompt";
import RecruiterIntro from "~/components/RecruiterIntro";
import { useStore } from "~/stores";

const INTRO_KEY = "portfolio-recruiter-intro-dismissed";

export default function Desktop(props: MacActions) {
  const [toggleLaunchpadState, setToggleLaunchpadState] = useState(false);
  const [spotlightState, setSpotlightState] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Finder");
  const [hideDockAndTopbar, setHideDockAndTopbar] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return localStorage.getItem(INTRO_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const [spotlightBtnRef, setSpotlightBtnRef] =
    useState<React.RefObject<HTMLDivElement> | null>(null);

  const dark = useStore((s) => s.dark);
  const brightness = useStore((s) => s.brightness);
  const setBearCategory = useStore((s) => s.setBearCategory);
  const showApps = useStore((s) => s.showApps);
  const appsZ = useStore((s) => s.appsZ);
  const maxApps = useStore((s) => s.maxApps);
  const minApps = useStore((s) => s.minApps);
  const openApp = useStore((s) => s.openApp);
  const closeApp = useStore((s) => s.closeApp);
  const setAppMax = useStore((s) => s.setAppMax);
  const setAppMin = useStore((s) => s.setAppMin);
  const minimizeApp = useStore((s) => s.minimizeApp);
  const initApps = useStore((s) => s.initApps);
  const toggleQuickLook = useStore((s) => s.toggleQuickLook);
  const lastSelectedIcon = useStore((s) => s.lastSelectedIcon);
  const setLastSelectedIcon = useStore((s) => s.setLastSelectedIcon);

  const dismissIntro = () => {
    setShowIntro(false);
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    initApps(apps);
  }, [initApps]);

  useEffect(() => {
    if (!getTourState()) {
      const t = window.setTimeout(() => setTourOpen(true), 800);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "Space") {
        e.preventDefault();
        toggleSpotlight();
      } else if (e.code === "Space" && lastSelectedIcon && !toggleLaunchpadState && !spotlightState) {
        e.preventDefault();
        toggleQuickLook(lastSelectedIcon);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lastSelectedIcon, toggleLaunchpadState, spotlightState, toggleQuickLook]);

  const toggleLaunchpad = (target: boolean): void => {
    const r = document.querySelector(`#launchpad`) as HTMLElement;
    if (target) {
      r.style.transform = "scale(1)";
      r.style.transition = "transform 280ms cubic-bezier(0.32, 0.72, 0, 1)";
    } else {
      r.style.transform = "scale(1.1)";
      r.style.transition = "transform 180ms cubic-bezier(0.32, 0.72, 0, 1)";
    }
    setToggleLaunchpadState(target);
  };

  const toggleSpotlight = (): void => {
    setSpotlightState(!spotlightState);
  };

  const setWindowPosition = (id: string): void => {
    const r = document.querySelector(`#window-${id}`) as HTMLElement;
    if (!r) return;
    const rect = r.getBoundingClientRect();
    r.style.setProperty(
      "--window-transform-x",
      (window.innerWidth + rect.x).toFixed(1).toString() + "px"
    );
    r.style.setProperty(
      "--window-transform-y",
      (rect.y - minMarginY).toFixed(1).toString() + "px"
    );
  };

  const openAppHandler = (id: string): void => {
    openApp(id);
    const app = apps.find((a) => a.id === id);
    if (app) setCurrentTitle(app.title);
  };

  const openFolder = (id: string): void => {
    setBearCategory(id);
    openAppHandler("finder");
  };

  const renderAppWindows = () => {
    return apps.map((app) => {
      if (app.desktop && showApps[app.id]) {
        const propsArr = {
          id: app.id,
          title: app.title,
          width: app.width,
          height: app.height,
          minWidth: app.minWidth,
          minHeight: app.minHeight,
          aspectRatio: app.aspectRatio,
          x: app.x,
          y: app.y,
          z: appsZ[app.id],
          max: maxApps[app.id],
          min: minApps[app.id],
          close: closeApp,
          setMax: setAppMax,
          setMin: (id: string) => minimizeApp(id, setWindowPosition),
          focus: openAppHandler
        };

        return (
          <AppWindow key={`desktop-app-${app.id}`} {...propsArr}>
            {app.content}
          </AppWindow>
        );
      } else {
        return <div key={`desktop-app-${app.id}`} />;
      }
    });
  };

  return (
    <div
      className="size-full overflow-hidden bg-center bg-cover min-h-[100dvh]"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness(${(brightness ?? 80) * 0.7 + 50}%)`
      }}
      onClick={() => setLastSelectedIcon(null)}
    >
      <TopBar
        title={currentTitle}
        setLogin={props.setLogin}
        shutMac={props.shutMac}
        sleepMac={props.sleepMac}
        restartMac={props.restartMac}
        toggleSpotlight={toggleSpotlight}
        hide={hideDockAndTopbar}
        setSpotlightBtnRef={setSpotlightBtnRef}
        onTakeTour={() => setTourOpen(true)}
      />

      {/* Desktop widgets - Left Side */}
      <div
        data-tour-id="widgets"
        className="absolute top-12 left-4 z-10 scale-90 sm:scale-100 origin-top-left flex flex-col gap-3 max-h-[calc(100dvh-5rem)] overflow-y-auto scrollbar-hide max-md:hidden"
      >
        <NewsWidget />
        <WeatherWidget onOpenApp={() => openAppHandler("weather")} />
        <ClockCalendarWidget />
        <StocksWidget />
      </div>

      {/* Desktop Icons - Right Side */}
      <div className="absolute top-12 right-4 flex flex-col gap-2 items-center z-10 text-blue-500 max-md:top-14 max-md:right-2">
        <DesktopIcon
          id="chat"
          title="AI Chat"
          img="/img/icons/ai-chat.svg"
          openApp={() => openAppHandler("chat")}
        />
        <DesktopIcon id="profile" title="Resume" icon="i-fluent:folder-24-filled" openApp={() => openFolder("profile")} />
        <DesktopIcon id="project" title="Projects" icon="i-fluent:folder-24-filled" openApp={() => openFolder("project")} />
        <DesktopIcon
          id="education"
          title="Certificates"
          img="/img/icons/certificates.svg"
          openApp={() => openAppHandler("certificates")}
        />
        <DesktopIcon id="experience" title="Experience" icon="i-fluent:folder-24-filled" openApp={() => openFolder("profile")} />
      </div>

      {showIntro && (
        <RecruiterIntro
          onOpenResume={() => {
            openFolder("profile");
            dismissIntro();
          }}
          onOpenArchitecture={() => {
            openAppHandler("architecture");
            dismissIntro();
          }}
          onDismiss={dismissIntro}
        />
      )}

      <div className="window-bound z-10 absolute" style={{ top: minMarginY }}>
        {renderAppWindows()}
      </div>

      {spotlightState && (
        <Spotlight
          openApp={openAppHandler}
          toggleLaunchpad={toggleLaunchpad}
          toggleSpotlight={toggleSpotlight}
          btnRef={spotlightBtnRef as React.RefObject<HTMLDivElement>}
        />
      )}

      <Launchpad show={toggleLaunchpadState} toggleLaunchpad={toggleLaunchpad} />

      <Dock
        open={openAppHandler}
        showApps={showApps}
        showLaunchpad={toggleLaunchpadState}
        toggleLaunchpad={toggleLaunchpad}
        hide={hideDockAndTopbar}
      />

      <QuickLook />

      <GuidedTour open={tourOpen} onClose={() => setTourOpen(false)} />
      <InstallPrompt hidden={tourOpen} />
    </div>
  );
}
