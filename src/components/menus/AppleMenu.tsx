import React from "react";

interface AppleMenuProps {
  logout: () => void;
  shut: (e: React.MouseEvent<HTMLLIElement>) => void;
  restart: (e: React.MouseEvent<HTMLLIElement>) => void;
  sleep: (e: React.MouseEvent<HTMLLIElement>) => void;
  toggleAppleMenu: () => void;
  btnRef: React.RefObject<HTMLDivElement>;
  onAboutMac: () => void;
  onSystemPreferences: () => void;
  onAppStore: () => void;
  onTakeTour: () => void;
}

export default function AppleMenu({
  logout,
  shut,
  restart,
  sleep,
  toggleAppleMenu,
  btnRef,
  onAboutMac,
  onSystemPreferences,
  onAppStore,
  onTakeTour,
}: AppleMenuProps) {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, toggleAppleMenu, [btnRef]);

  const open = (fn: () => void) => () => {
    toggleAppleMenu();
    fn();
  };

  return (
    <div className="menu-box left-2 w-56" ref={ref}>
      <MenuItemGroup>
        <MenuItem onClick={open(onAboutMac)}>About This Mac</MenuItem>
        <MenuItem onClick={open(onTakeTour)}>Take Tour</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={open(onSystemPreferences)}>System Preferences...</MenuItem>
        <MenuItem onClick={open(onAppStore)}>App Store...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={open(() => window.open("/resume.pdf", "_blank"))}>
          Recent Items
        </MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={toggleAppleMenu}>Force Quit...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup>
        <MenuItem onClick={sleep}>Sleep</MenuItem>
        <MenuItem onClick={restart}>Restart...</MenuItem>
        <MenuItem onClick={shut}>Shut Down...</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup border={false}>
        <MenuItem onClick={logout}>Lock Screen</MenuItem>
        <MenuItem onClick={logout}>Log Out Hamza...</MenuItem>
      </MenuItemGroup>
    </div>
  );
}
