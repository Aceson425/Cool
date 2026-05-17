export function Hero() {
  return (
    <section className="glass p-10 shadow-neon">
      <p className="text-cyan-300 mb-3">Cinematic AI Video Cartoonizer</p>
      <h1 className="text-5xl font-bold mb-4">Transform ordinary videos into animated masterpieces.</h1>
      <p className="text-white/70 max-w-3xl mb-6">Drag, drop, and stylize with anime, Pixar-style, comic, sketch, or cinematic cartoon pipelines powered by FFmpeg + diffusion + GAN workflows.</p>
      <div className="flex gap-4">
        <button className="glow-btn">Start Rendering</button>
        <button className="glass px-5 py-2.5">Watch Demo</button>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  const features = [
    'Drag-and-drop upload (MP4, MOV, AVI)', 'Real-time preview + style strength slider',
    'Before/After comparison slider', 'AI face detection + expression preservation',
    'Upscaling, color grading, edge outlining', 'Voice enhancement + auto music generator',
    '9:16 Shorts and 16:9 landscape export', '720p/1080p/4K one-click download',
    'Live cloud render progress', 'Credits, subscriptions, Stripe billing'
  ];
  return <section className="grid md:grid-cols-2 gap-4 mt-8">{features.map((f) => <div key={f} className="glass p-5">{f}</div>)}</section>;
}
