export const pageView = (url: URL) =>
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
    page_path: url,
  });

export const event = (
  action: Gtag.EventNames,
  { event_category, event_label, value }: Gtag.EventParams
) =>
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
