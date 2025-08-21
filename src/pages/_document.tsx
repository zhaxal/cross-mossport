/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Московский спорт представляет массовый забег «Кросс нации» для взрослых и детей 13 сентября 2025 г."
        />
        <meta property="og:title" content="Кросс Нации" />
        <meta
          property="og:description"
          content="Московский спорт представляет массовый забег «Кросс нации» для взрослых и детей 13 сентября 2025 г."
        />
        <meta property="og:url" content="https://cross.sport.mos.ru/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/cross_preview.jpg" />
      </Head>
      <body className="antialiased">
        <div
          style={{ display: "none" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <span itemProp="name">Кросс Нации 2025</span>
          <div
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            Адрес:
            <span itemProp="streetAddress">Москва, Ул. Крылатская, д. 10</span>
          </div>
          <div itemScope itemType="https://schema.org/ImageObject">
            <img
              src="/cross_preview.jpg"
              itemProp="contentUrl"
              alt="Кросс Нации 2025"
            />
          </div>
        </div>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
