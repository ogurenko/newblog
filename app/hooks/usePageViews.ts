import { useEffect } from "react";
import { useRouter } from "next/router";
import { pageView } from "../lib/gtag";

export const usePageViews = (): void => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) return;
      pageView(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
