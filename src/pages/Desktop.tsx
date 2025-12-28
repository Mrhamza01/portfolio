import React, { useEffect, useState } from "react";
import { apps, wallpapers } from "~/configs";
import { minMarginY } from "~/utils";
import type { MacActions } from "~/types";
import DesktopIcon from "~/components/DesktopIcon";
import AppWindow from "~/components/AppWindow";
import TopBar from "~/components/menus/TopBar";
import Spotlight from "~/components/Spotlight";
import Launchpad from "~/components/Launchpad";
import Dock from "~/components/dock/Dock";
import { useStore } from "~/stores";

export default function Desktop(props: MacActions) {
  const [toggleLaunchpadState, setToggleLaunchpadState] = useState(false);
  const [spotlightState, setSpotlightState] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("Finder");
  const [hideDockAndTopbar, setHideDockAndTopbar] = useState(false);

  const [spotlightBtnRef, setSpotlightBtnRef] =
    useState<React.RefObject<HTMLDivElement> | null>(null);

  const {
    dark, brightness,
    setBearCategory,
    showApps, appsZ, maxApps, minApps,
    openApp, closeApp, setAppMax, setAppMin, minimizeApp, initApps
  } = useStore((state) => ({
    dark: state.dark,
    brightness: state.brightness,
    setBearCategory: state.setBearCategory,
    showApps: state.showApps,
    appsZ: state.appsZ,
    maxApps: state.maxApps,
    minApps: state.minApps,
    openApp: state.openApp,
    closeApp: state.closeApp,
    setAppMax: state.setAppMax,
    setAppMin: state.setAppMin,
    minimizeApp: state.minimizeApp,
    initApps: state.initApps
  }));

  useEffect(() => {
    initApps(apps);

    // Spotlight keyboard shortcut
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === "Space") {
        e.preventDefault();
        toggleSpotlight();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleLaunchpad = (target: boolean): void => {
    const r = document.querySelector(`#launchpad`) as HTMLElement;
    if (target) {
      r.style.transform = "scale(1)";
      r.style.transition = "ease-in 0.2s";
    } else {
      r.style.transform = "scale(1.1)";
      r.style.transition = "ease-out 0.2s";
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
    const app = apps.find(a => a.id === id);
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
      className="size-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`
      }}
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
      />

      <div className="absolute top-16 right-4 flex flex-col gap-2 items-center z-10 text-blue-500">
        <DesktopIcon id="profile" title="Resume" icon="i-fluent:folder-24-filled" openApp={() => openFolder("profile")} />
        <DesktopIcon id="project" title="Projects" icon="i-fluent:folder-24-filled" openApp={() => openFolder("project")} />
        <DesktopIcon id="education" title="Certificates" icon="i-fluent:folder-24-filled" openApp={() => openFolder("education")} />
        <DesktopIcon id="profile" title="Experience" icon="i-fluent:folder-24-filled" openApp={() => openFolder("profile")} />
      </div>

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
    </div>
  );
}
