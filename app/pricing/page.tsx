const plans = [
  { name: 'Free', price: '$0', credits: '20 credits/mo', perks: ['720p export', 'Basic filters'] },
  { name: 'Pro', price: '$29', credits: '400 credits/mo', perks: ['1080p + 4K', 'All AI styles', 'Priority render'] },
  { name: 'Studio', price: '$99', credits: 'Unlimited fair-use', perks: ['Team dashboard', 'API access', 'Admin controls'] }
];

export default function PricingPage() {
  return <div><h1 className="text-4xl font-bold mb-6">Pricing</h1><div className="grid md:grid-cols-3 gap-6">{plans.map(p=><div key={p.name} className="glass p-6"><h2 className="text-2xl">{p.name}</h2><p className="text-4xl font-bold my-3">{p.price}<span className="text-sm text-white/60">/mo</span></p><p className="text-cyan-300 mb-4">{p.credits}</p><ul className="space-y-2 text-white/70">{p.perks.map(x=><li key={x}>• {x}</li>)}</ul><button className="glow-btn mt-5 w-full">Choose Plan</button></div>)}</div><p className="text-white/60 mt-6">Stripe integration ready for subscriptions and top-up credits.</p></div>;
}
