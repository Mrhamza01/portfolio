import React, { useEffect, useState } from "react";
import { fetchExchangeRate } from "~/utils/publicApis";

export default function StocksWidget() {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExchangeRate("USD", "PKR")
      .then((r) => setRate(r.rate))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-72 sm:w-80">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-5 shadow-2xl">
        <div className="flex items-center space-x-2 mb-3">
          <span className="i-heroicons-outline:chart-bar text-green-400" />
          <h3 className="text-[11px] font-bold uppercase tracking-wider opacity-50 dark:text-white">
            Stocks
          </h3>
        </div>
        {loading ? (
          <div className="h-10 animate-pulse bg-white/10 rounded-lg" />
        ) : (
          <div>
            <p className="text-lg font-semibold dark:text-white">USD / PKR</p>
            <p className="text-2xl font-light dark:text-white">
              {rate?.toFixed(2) ?? "—"}
            </p>
            <p className="text-[10px] opacity-40 mt-1 dark:text-white">open.er-api.com · live</p>
          </div>
        )}
      </div>
    </div>
  );
}
