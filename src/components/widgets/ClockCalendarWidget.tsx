import React, { useEffect, useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from "date-fns";

export default function ClockCalendarWidget() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const monthStart = startOfMonth(now);
  const monthEnd = endOfMonth(now);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startPad = getDay(monthStart);

  return (
    <div className="w-72 sm:w-80">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-5 shadow-2xl">
        <p className="text-4xl font-extralight dark:text-white tabular-nums">
          {format(now, "h:mm")}
          <span className="text-lg ml-1 opacity-60">{format(now, "a")}</span>
        </p>
        <p className="text-sm opacity-60 dark:text-white mt-1">
          {format(now, "EEEE, MMM d")} · Karachi
        </p>
        <p className="text-[10px] font-bold uppercase tracking-wider opacity-40 mt-4 mb-2 dark:text-white">
          {format(now, "MMMM yyyy")}
        </p>
        <div className="grid grid-cols-7 gap-0.5 text-[9px] text-center opacity-50 dark:text-white">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <span key={d}>{d.slice(0, 1)}</span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-0.5 text-[10px] text-center mt-1">
          {Array.from({ length: startPad }).map((_, i) => (
            <span key={`pad-${i}`} />
          ))}
          {days.map((d) => (
            <span
              key={d.toISOString()}
              className={`py-0.5 rounded-full ${
                isToday(d) ? "bg-blue-500 text-white font-bold" : "dark:text-white opacity-80"
              }`}
            >
              {format(d, "d")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
