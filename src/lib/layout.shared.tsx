import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, siteUrl } from "./shared";

/**
 * The chrome around every page.
 *
 * No `githubUrl`: the repository is private, so an "Edit on GitHub" link would
 * be a 404 for every reader. The links that matter to a customer are the
 * dashboard and the invite, so those take its place.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        // The same lockup as the main site's header: the transparent mark
        // beside the word set in Inter.
        <span className="inline-flex items-center gap-2.5 font-bold text-lg leading-none tracking-tight">
          {/* biome-ignore lint/performance/noImgElement: a 32px static mark; next/image adds nothing here */}
          <img
            src="/images/brand/braven-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 object-contain"
          />
          {appName}
        </span>
      ),
    },
    links: [
      { text: "Dashboard", url: `${siteUrl}/dashboard`, external: true },
      { text: "Pricing", url: `${siteUrl}/pricing`, external: true },
    ],
  };
}
