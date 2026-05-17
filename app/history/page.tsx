const renders = [
  ['Travel Vlog', 'Anime', '1080p', 'Complete'],
  ['Podcast Clip', 'Comic Book', '9:16', 'Processing'],
  ['Gameplay Reel', 'Pixar-Style', '4K', 'Complete']
];
export default function HistoryPage() {
  return <div><h1 className="text-4xl font-bold mb-6">Render History</h1><div className="glass overflow-hidden"><table className="w-full text-left"><thead className="bg-white/5"><tr>{['Project', 'Style', 'Export', 'Status'].map(h=><th key={h} className="p-4">{h}</th>)}</tr></thead><tbody>{renders.map((r,i)=><tr key={i} className="border-t border-white/10">{r.map(c=><td key={c} className="p-4">{c}</td>)}</tr>)}</tbody></table></div></div>;
}
