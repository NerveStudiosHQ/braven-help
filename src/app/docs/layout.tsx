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
      sidebar={{ collapsible: false }}
    >
      {children}
    </DocsLayout>
  );
}
