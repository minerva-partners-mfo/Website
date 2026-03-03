import { BlindCard } from "@/components/BlindCard";

export default function OpportunitiesPage() {
  return (
    <div className="pt-32 px-8 max-w-6xl mx-auto">
      <header className="mb-20">
        <h2 className="font-titles text-3xl mb-4">Deal Flow Confidenziale</h2>
        <p className="opacity-60">L'accesso ai dettagli sensibili richiede la firma di un NDA digitale.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlindCard title="Project Chronos" sector="Luxury Real Estate - Svizzera" />
        <BlindCard title="Alpha Tech Fund" sector="Fintech M&A - Singapore" />
        <BlindCard title="Estate Heritage" sector="NPL Portfolio - Italia" />
      </div>
    </div>
  );
}