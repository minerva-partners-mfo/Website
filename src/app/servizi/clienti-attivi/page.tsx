import type { Metadata } from "next";
import { SEO_MAP } from "@/lib/seo-metadata";
import PageContent from "./PageContent";

export const metadata: Metadata = SEO_MAP["/servizi/clienti-attivi"];

export default function Page() {
  return <PageContent />;
}
