import type { Metadata } from "next";
import { SEO_MAP } from "@/lib/seo-metadata";
import PageContent from "./PageContent";

export const metadata: Metadata = SEO_MAP["/network/nextgen-genexit"];

export default function Page() {
  return <PageContent />;
}
