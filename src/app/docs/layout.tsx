import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

/**
 * The docs frame: one header across the top of everything, the page tree on
 * the left, and the page itself on the right. Nothing else.
 *
 * The notebook layout with `nav.mode: "top"` is what puts the header above the
 * sidebar rather than inside it. The sidebar is grouped by area, the same
 * grouping the dashboard uses. `collapsible` is off: with eight sections and
 * forty pages the whole tree fits.
 */
export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...base}
      nav={{ ...base.nav, mode: "top" }}
      sidebar={{
        collapsible: false,
        footer: (
          <a
            href="https://nervestudios.net"
            className="flex flex-col gap-2 px-2 pt-3 text-fd-muted-foreground text-xs leading-relaxed transition-colors hover:text-fd-foreground"
          >
            {/* biome-ignore lint/performance/noImgElement: a small static logo; next/image adds nothing here */}
            <img
              src="/images/brand/nerve-studios.png"
              alt="Nerve Studios"
              width={480}
              height={191}
              className="h-8 w-auto self-start"
            />
            <span>Braven Bot is owned and operated by Nerve Studios.</span>
          </a>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
