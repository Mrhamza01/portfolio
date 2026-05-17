import React, { useEffect, useState } from "react";
import { fetchExchangeRate } from "~/utils/publicApis";

export default function Stocks() {
  const [rates, setRates] = useState<{ PKR?: number; EUR?: number; GBP?: number }>({});
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((r) => r.json())
      .then((data) => {
        setRates({
          PKR: data.rates.PKR,
          EUR: data.rates.EUR,
          GBP: data.rates.GBP,
        });
        setUpdated(data.time_last_update_utc ?? "");
      })
      .catch(console.error);
  }, []);

  const rows = [
    { sym: "USD/PKR", val: rates.PKR },
    { sym: "USD/EUR", val: rates.EUR },
    { sym: "USD/GBP", val: rates.GBP },
  ];

  return (
    <div className="size-full bg-white dark:bg-[#1a1b1e] p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold dark:text-white">Stocks</h1>
      <p className="text-sm opacity-50 mt-1 dark:text-white">Exchange rates (USD base)</p>
      <table className="w-full mt-6 text-sm">
        <thead>
          <tr className="text-left opacity-50 border-b dark:border-gray-700">
            <th className="pb-2">Pair</th>
            <th className="pb-2 text-right">Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.sym} className="border-b border-gray-100 dark:border-gray-800">
              <td className="py-3 font-medium dark:text-white">{r.sym}</td>
              <td className="py-3 text-right dark:text-white">
                {r.val?.toFixed(4) ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {updated && (
        <p className="text-xs opacity-40 mt-6 dark:text-white">
          Updated {new Date(updated).toLocaleString()}
        </p>
      )}
    </div>
  );
}
