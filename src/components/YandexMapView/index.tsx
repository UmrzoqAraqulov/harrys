"use client";

import { logo_icon } from "@/constants";
import { useEffect, useRef } from "react";

type Location = {
  name: string;
  lat: number;
  lng: number;
};

type Props = {
  locations: Location[];
  locale: string;
};

declare global {
  interface Window {
    ymaps?: any;
  }
}

const YandexMapView = ({ locations, locale }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // locale bo‘yicha til kodi
  const getLangCode = (locale: string) => (locale === "uz" ? "uz_UZ" : "ru_RU");

  // Scriptni yuklab beradi
  const loadScript = (lang: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined") return reject("No window");

      // Avvalgi scriptni o‘chirib tashlash
      const oldScript = document.getElementById("yandex-map-script");
      if (oldScript) oldScript.remove();

      const script = document.createElement("script");
      script.id = "yandex-map-script";
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YANDEX_API_KEY}&lang=${lang}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject("Yandex Map script load error");

      document.body.appendChild(script);
    });
  };

  // Mapni yaratish
  const initMap = () => {
    if (!window.ymaps || !mapRef.current) return;

    mapRef.current.innerHTML = "";

    const map = new window.ymaps.Map(mapRef.current, {
      center: [locations[0].lat, locations[0].lng],
      zoom: 12,
      controls: ["zoomControl"],
    });

    locations.forEach((loc) => {
      const placemark = new window.ymaps.Placemark(
        [loc.lat, loc.lng],
        { balloonContent: loc.name },
        {
          iconLayout: "default#image",
          iconImageHref: logo_icon.src,
          iconImageSize: [30, 30],
          iconImageOffset: [-15, -42],
        }
      );
      map.geoObjects.add(placemark);
    });

    mapInstanceRef.current = map;
  };

  // Har safar `locale` o‘zgarganda script qayta yuklanadi
  useEffect(() => {
    const langCode = getLangCode(locale);

    loadScript(langCode)
      .then(() => {
        window.ymaps.ready(initMap);
      })
      .catch((err) => {
        console.error("Yandex Map init error:", err);
      });

    return () => {
      // Cleanup: eski scriptni o‘chirish
      const script = document.getElementById("yandex-map-script");
      if (script) script.remove();
    };
  }, [locale, locations]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default YandexMapView;
