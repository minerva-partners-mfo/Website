const Portals = [
  { name: "Admin Portal", desc: "Gestione operativa e monitoraggio asset." },
  { name: "Client Vault", desc: "Accesso riservato alla posizione patrimoniale consolidata." },
  { name: "Ecosystem Portal", desc: "Collaborazione per i partner della Confederazione." }
];

export default function PortalsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-minerva-blue/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-8">
        {Portals.map((p) => (
          <div key={p.name} className="border border-minerva-gold/20 p-8 hover:border-minerva-gold transition-colors flex flex-col h-64 justify-between group">
            <h3 className="font-titles text-xl text-minerva-gold group-hover:translate-x-2 transition-transform">{p.name}</h3>
            <p className="text-sm opacity-50 mb-6">{p.desc}</p>
            <button className="text-xs tracking-[0.3em] uppercase border-b border-minerva-gold w-fit">Accedi</button>
          </div>
        ))}
      </div>
    </div>
  );
}