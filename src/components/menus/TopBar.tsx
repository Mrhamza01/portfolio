import React from "react";
import { format } from "date-fns";
import { isFullScreen } from "~/utils";
import { fetchWeather, type WeatherData } from "~/utils/publicApis";
import type { MacActions } from "~/types";
import { useAudioContext } from "~/context/AudioContext";
import AboutMacModal from "./AboutMacModal";
import SystemPreferencesModal from "./SystemPreferencesModal";
import AppStoreModal from "./AppStoreModal";
import { AiMenuIcon, WeatherMenuIcon } from "~/components/icons/MenuBarIcons";
import { useStore } from "~/stores";
import { profile } from "~/configs/profile";

interface TopBarItemProps {
  hideOnMobile?: boolean;
  forceHover?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  "data-tour-id"?: string;
  "aria-label"?: string;
  title?: string;
}

const TopBarItem = forwardRef(
  (props: TopBarItemProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const hide = props.hideOnMobile ? "hidden sm:inline-flex" : "inline-flex";
    const bg = props.forceHover
      ? "bg-gray-100/30 dark:bg-gray-400/40"
      : "hover:(bg-gray-100/30 dark:bg-gray-400/40)";

    return (
      <div
        ref={ref}
        role={props.onClick ? "button" : undefined}
        tabIndex={props.onClick ? 0 : undefined}
        aria-label={props["aria-label"]}
        title={props.title || props["aria-label"]}
        data-tour-id={props["data-tour-id"]}
        className={`hstack space-x-1 h-6 px-1 cursor-default rounded ${hide} ${bg} ${
          props.className || ""
        } ${props.onClick ? "cursor-pointer" : ""}`}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onKeyDown={(e) => {
          if (props.onClick && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            props.onClick();
          }
        }}
      >
        {props.children}
      </div>
    );
  }
);

const CCMIcon = ({ size }: { size: number }) => {
  return (
    <svg
      viewBox="0 0 29 29"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
    </svg>
  );
};

interface TopBarProps extends MacActions {
  title: string;
  setSpotlightBtnRef: (value: React.RefObject<HTMLDivElement>) => void;
  hide: boolean;
  toggleSpotlight: () => void;
  onTakeTour: () => void;
}

interface TopBarState {
  date: Date;
  showControlCenter: boolean;
  showWifiMenu: boolean;
  showAppleMenu: boolean;
  showAboutMac: boolean;
  showSystemPreferences: boolean;
  showAppStore: boolean;
}

const TopBar = (props: TopBarProps) => {
  const appleBtnRef = useRef<HTMLDivElement>(null);
  const controlCenterBtnRef = useRef<HTMLDivElement>(null);
  const wifiBtnRef = useRef<HTMLDivElement>(null);
  const spotlightBtnRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<TopBarState>({
    date: new Date(),
    showControlCenter: false,
    showWifiMenu: false,
    showAppleMenu: false,
    showAboutMac: false,
    showSystemPreferences: false,
    showAppStore: false,
  });

  const [menuBarWeather, setMenuBarWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetchWeather()
      .then(setMenuBarWeather)
      .catch(() => {});
  }, []);

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  // const [audio, audioState, controls, audioRef] = useAudio({
  //   src: music.audio,
  //   autoReplay: true
  // });
  const {audio, audioState, controls, audioRef} = useAudioContext();
  const { winWidth, winHeight } = useWindowSize();

  const volume = useStore((state) => state.volume);
  const wifi = useStore((state) => state.wifi);
  const fullscreen = useStore((state) => state.fullscreen);
  const toggleFullScreen = useStore((state) => state.toggleFullScreen);
  const setVolume = useStore((state) => state.setVolume);
  const setBrightness = useStore((state) => state.setBrightness);
  const openApp = useStore((state) => state.openApp);

  useInterval(() => {
    setState((prev) => ({
      ...prev,
      date: new Date(),
    }));
  }, 60 * 1000);

  useEffect(() => {
    props.setSpotlightBtnRef(spotlightBtnRef);
    controls.volume(volume / 100);
  }, []);

  useEffect(() => {
    const isFull = isFullScreen();
    if (isFull !== fullscreen) {
      toggleFullScreen(isFull);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync fullscreen on resize only
  }, [winWidth, winHeight]);

  const setAudioVolume = (value: number): void => {
    setVolume(value);
    controls.volume(value / 100);
  };

  const setSiteBrightness = (value: number): void => {
    setBrightness(value);
  };

  const toggleControlCenter = (): void => {
    setState((prev) => ({
      ...prev,
      showControlCenter: !prev.showControlCenter,
    }));
  };

  const toggleAppleMenu = (): void => {
    setState((prev) => ({
      ...prev,
      showAppleMenu: !prev.showAppleMenu,
    }));
  };

  const toggleWifiMenu = (): void => {
    setState((prev) => ({
      ...prev,
      showWifiMenu: !prev.showWifiMenu,
    }));
  };

  const logout = (): void => {
    controls.pause();
    props.setLogin(false);
  };

  const shut = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.shutMac(e);
  };

  const restart = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.restartMac(e);
  };

  const sleep = (e: React.MouseEvent<HTMLLIElement>): void => {
    controls.pause();
    props.sleepMac(e);
  };

  return (
    <div
      className={`w-full h-8 px-2 fixed top-0 hstack justify-between ${
        props.hide ? "z-0" : "z-20"
      } text-sm text-black dark:text-white bg-gray-700/10 backdrop-blur-2xl shadow transition`}
    >
      <div className="hstack space-x-1">
        <TopBarItem
          className="px-2"
          forceHover={state.showAppleMenu}
          onClick={toggleAppleMenu}
          ref={appleBtnRef}
          data-tour-id="apple-menu"
        >
          <span className="i-ri:apple-fill text-base" />
        </TopBarItem>
        <TopBarItem
          className="font-semibold px-2"
          onMouseEnter={() => {
            if (state.showAppleMenu) toggleAppleMenu();
          }}
        >
          {props.title}
        </TopBarItem>
      </div>

      {/* Open this when clicking on Apple logo */}
      {state.showAppleMenu && (
        <AppleMenu
          logout={logout}
          shut={shut}
          restart={restart}
          sleep={sleep}
          toggleAppleMenu={toggleAppleMenu}
          btnRef={appleBtnRef}
          onAboutMac={() => setState((s) => ({ ...s, showAboutMac: true }))}
          onSystemPreferences={() =>
            setState((s) => ({ ...s, showSystemPreferences: true }))
          }
          onAppStore={() => setState((s) => ({ ...s, showAppStore: true }))}
          onTakeTour={props.onTakeTour}
        />
      )}

      {state.showAboutMac && (
        <AboutMacModal onClose={() => setState((s) => ({ ...s, showAboutMac: false }))} />
      )}
      {state.showSystemPreferences && (
        <SystemPreferencesModal
          onClose={() => setState((s) => ({ ...s, showSystemPreferences: false }))}
        />
      )}
      {state.showAppStore && (
        <AppStoreModal onClose={() => setState((s) => ({ ...s, showAppStore: false }))} />
      )}

      <div className="hstack flex-row justify-end space-x-2">
        <TopBarItem hideOnMobile className="text-xs gap-1.5 text-green-700 dark:text-green-400">
          <span className="size-2 rounded-full bg-green-500 shrink-0" />
          <span className="hidden md:inline">Open to work</span>
        </TopBarItem>
        <TopBarItem
          hideOnMobile
          className="gap-1"
          onClick={() => openApp("chat")}
          aria-label="Open AI Chat"
        >
          <AiMenuIcon size={14} />
          <span className="hidden lg:inline text-xs font-medium">AI</span>
        </TopBarItem>
        <TopBarItem hideOnMobile className="gap-1" aria-label="Chat on WhatsApp">
          <a
            href={profile.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hstack gap-1 no-underline text-inherit"
            onClick={(e) => e.stopPropagation()}
          >
            <img src="/img/icons/whatsapp.svg" alt="" width={14} height={14} className="size-3.5" />
            <span className="hidden xl:inline text-xs font-medium">WhatsApp</span>
          </a>
        </TopBarItem>
        {menuBarWeather && (
          <TopBarItem
            hideOnMobile
            className="text-xs gap-1.5"
            onClick={() => openApp("weather")}
            aria-label={`Weather ${menuBarWeather.temperature}°C, ${menuBarWeather.label}`}
          >
            <WeatherMenuIcon code={menuBarWeather.weatherCode} size={15} />
            <span className="tabular-nums font-medium">{menuBarWeather.temperature}°</span>
          </TopBarItem>
        )}
        <TopBarItem hideOnMobile={true}>
          <Battery />
        </TopBarItem>
        <TopBarItem
          hideOnMobile={true}
          forceHover={state.showWifiMenu}
          onClick={toggleWifiMenu}
          ref={wifiBtnRef}
        >
          {wifi ? (
            <span className="i-material-symbols:wifi text-lg" />
          ) : (
            <span className="i-material-symbols:wifi-off text-lg" />
          )}
        </TopBarItem>
        <TopBarItem ref={spotlightBtnRef} onClick={props.toggleSpotlight}>
          <span className="i-bx:search text-[17px]" />
        </TopBarItem>
        <TopBarItem
          forceHover={state.showControlCenter}
          onClick={toggleControlCenter}
          ref={controlCenterBtnRef}
        >
          <CCMIcon size={16} />
        </TopBarItem>

        {/* Open this when clicking on Wifi button */}
        {state.showWifiMenu && (
          <WifiMenu toggleWifiMenu={toggleWifiMenu} btnRef={wifiBtnRef} />
        )}

        {/* Open this when clicking on Control Center button */}
        {state.showControlCenter && (
          <ControlCenterMenu
            playing={audioState.playing}
            toggleAudio={controls.toggle}
            setVolume={setAudioVolume}
            setBrightness={setSiteBrightness}
            toggleControlCenter={toggleControlCenter}
            btnRef={controlCenterBtnRef}
          />
        )}

        <TopBarItem>
          <span>{format(state.date, "eee MMM d")}</span>
          <span>{format(state.date, "h:mm aa")}</span>
        </TopBarItem>
      </div>
    </div>
  );
};

export default TopBar;
