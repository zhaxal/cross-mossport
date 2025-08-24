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

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103870555', 'ym');

              ym(103870555, 'init', {ssr:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/103870555"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
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
