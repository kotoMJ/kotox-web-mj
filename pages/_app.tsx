import {AppProps} from 'next/app'
import '../styles/index.css'
import Script from 'next/script'

import {useRouter} from 'next/router';
import {useEffect} from "react";
import * as gtag from "../lib/gtag"
import {GA_TRACKING_ID} from "../lib/gtag";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></Script>
            <Script
                id='google-analytics'
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                      });
                      `,
                }}
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp