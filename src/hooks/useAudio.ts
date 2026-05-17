export interface HTMLAudioState {
  volume: number;
  playing: boolean;
}

export interface HTMLAudioProps {
  src: string;
  autoReplay?: boolean;
}

export function useAudio(props: HTMLAudioProps) {
  const ref = useRef<HTMLAudioElement | null>(null);
  if (!ref.current) {
    ref.current = new Audio(props.src);
  }

  const [state, setState] = useState<HTMLAudioState>({
    volume: 1,
    playing: false
  });

  const controls = useMemo(
    () => ({
      play: (): Promise<void> | void => {
        const el = ref.current;
        if (el) {
          setState((prev) => ({ ...prev, playing: true }));
          return el.play();
        }
      },

      pause: (): Promise<void> | void => {
        const el = ref.current;
        if (el) {
          setState((prev) => ({ ...prev, playing: false }));
          return el.pause();
        }
      },

      toggle: (): Promise<void> | void => {
        const el = ref.current;
        if (!el) return;
        setState((prev) => {
          if (prev.playing) {
            el.pause();
            return { ...prev, playing: false };
          }
          void el.play();
          return { ...prev, playing: true };
        });
      },

      volume: (value: number): void => {
        const el = ref.current;
        if (el) {
          value = Math.min(1, Math.max(0, value));
          el.volume = value;
          setState((prev) => ({ ...prev, volume: value }));
        }
      }
    }),
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = () => {
      if (props.autoReplay) void controls.play();
    };

    el.addEventListener("ended", handler);
    return () => el.removeEventListener("ended", handler);
  }, [props.autoReplay, controls]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setState({
      volume: el.volume,
      playing: !el.paused
    });
  }, [props.src]);

  return [ref.current, state, controls, ref] as const;
}
