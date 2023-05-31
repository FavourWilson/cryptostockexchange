"use client";
import { useEffect, useRef, useState } from "react";

let tvScriptLoadingPromise;

const ChartOne = () => {
  const onLoadScriptRef = useRef();
  const wid = useState("");

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_b961d") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: wid,
          height: 500,
          symbol: "COINBASE:BTCUSD",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_top_toolbar: true,
          save_image: false,
          container_id: "tradingview_b961d",
        });
      }
    }
  }, []);
  return (
    <>
      <section className="bg-main-700 bg-opacity-10 2xl:py-24 2xl:bg-white">
        <div className="px-4 mx-auto overflow-hidden bg-white lg:bg-main-900 max-w-7xl sm:px-6 lg:px-8">
          <div className="py-10" id="chartOne">
            <div className="">
              <div className="tradingview-widget-container">
                <div id="tradingview_b961d" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChartOne;
