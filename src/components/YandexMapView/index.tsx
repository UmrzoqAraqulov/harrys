"use client";

import { logo_img } from "@/constants";
import { useEffect, useRef } from "react";

type Location = {
  name: string;
  lat: number;
  lng: number;
};

type Props = {
  locations: Location[];
};

declare global {
  interface Window {
    ymaps: any;
  }
}

const YandexMapView = ({ locations }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const loadScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (typeof window !== "undefined" && window.ymaps) {
        resolve(); // allaqachon bor
        return;
      }

      const existingScript = document.getElementById("ymaps-script");
      if (existingScript) {
        existingScript.addEventListener("load", () => resolve());
        return;
      }

      const script = document.createElement("script");
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=uz_UZ`;
      script.id = "ymaps-script";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject("Yandex Map script load error");
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript().then(() => {
      window.ymaps.ready(() => {
        if (mapRef.current) {
          mapRef.current.innerHTML = "";
          const map = new window.ymaps.Map(mapRef.current, {
            center: [locations[0].lat, locations[0].lng],
            zoom: 12,
          });

          locations.forEach((loc) => {
            const placemark = new window.ymaps.Placemark(
              [loc.lat, loc.lng],
              { balloonContent: loc.name },
              {
                iconLayout: "default#image",
                iconImageHref: logo_img.src,
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -42],
              }
            );
            map.geoObjects.add(placemark);
          });

          mapInstanceRef.current = map;
        }
      });
    });
  }, [locations]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default YandexMapView;
