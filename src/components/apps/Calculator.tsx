import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [prev, setPrev] = useState<number | null>(null);
  const [op, setOp] = useState<string | null>(null);

  const input = (v: string) => {
    setDisplay((d) => (d === "0" && v !== "." ? v : d + v));
  };

  const clear = () => {
    setDisplay("0");
    setPrev(null);
    setOp(null);
  };

  const operate = (nextOp: string) => {
    const n = parseFloat(display);
    if (prev === null) {
      setPrev(n);
    } else if (op) {
      let r = prev;
      if (op === "+") r += n;
      if (op === "-") r -= n;
      if (op === "×") r *= n;
      if (op === "÷") r /= n;
      setPrev(r);
      setDisplay(String(r));
    }
    setOp(nextOp);
    setDisplay("0");
  };

  const equals = () => {
    if (op && prev !== null) {
      const n = parseFloat(display);
      let r = prev;
      if (op === "+") r += n;
      if (op === "-") r -= n;
      if (op === "×") r *= n;
      if (op === "÷") r /= n;
      setDisplay(String(r));
      setPrev(null);
      setOp(null);
    }
  };

  const keys = [
    ["C", "±", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const handleKey = (k: string) => {
    if (k === "C") clear();
    else if (k === "=") equals();
    else if (["+", "-", "×", "÷"].includes(k)) operate(k);
    else if (k === "±") setDisplay((d) => String(-parseFloat(d)));
    else if (k === "%") setDisplay((d) => String(parseFloat(d) / 100));
    else input(k);
  };

  return (
    <div className="size-full bg-[#333] p-4 flex flex-col">
      <div className="text-right text-4xl text-white font-light py-4 truncate">{display}</div>
      <div className="grid grid-cols-4 gap-2 flex-1">
        {keys.flat().map((k) => (
          <button
            key={k}
            type="button"
            className={`rounded-full text-xl font-medium ${
              ["+", "-", "×", "÷", "="].includes(k)
                ? "bg-orange-500 text-white"
                : k === "C"
                  ? "bg-gray-500 text-white"
                  : "bg-gray-600 text-white"
            } ${k === "0" ? "col-span-2" : ""}`}
            onClick={() => handleKey(k)}
          >
            {k}
          </button>
        ))}
      </div>
    </div>
  );
}
