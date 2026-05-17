import React, { useEffect, useState } from "react";

const DISMISS_KEY = "hamza_pwa_install_dismissed";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface InstallPromptProps {
  hidden?: boolean;
}

export default function InstallPrompt({ hidden = false }: InstallPromptProps) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* ignore */
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setVisible(false);
    setDeferred(null);
  };

  if (!visible || hidden) return null;

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[90] max-w-sm w-[calc(100%-2rem)]">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-gray-900/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl">
        <span className="i-ri:download-2-line text-xl shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium">Install Portfolio</p>
          <p className="text-xs opacity-70">Add to your home screen for quick access</p>
        </div>
        <button
          type="button"
          className="text-xs px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 shrink-0"
          onClick={install}
        >
          Install
        </button>
        <button
          type="button"
          className="text-xs opacity-60 hover:opacity-100 shrink-0"
          onClick={dismiss}
          aria-label="Dismiss"
        >
          <span className="i-gg:close" />
        </button>
      </div>
    </div>
  );
}
