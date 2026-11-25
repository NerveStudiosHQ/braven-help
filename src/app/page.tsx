import { redirect } from "next/navigation";

/**
 * There is no landing page: the docs are the site. Anyone arriving at the root
 * lands on the first page, with the sidebar and header already in place.
 */
export default function Home() {
  redirect("/docs");
}
