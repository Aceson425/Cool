export default function StudioPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Upload Studio</h1>
      <div className="glass p-8 border-dashed border-2 border-cyan-300/40 text-center">Drag & drop MP4, MOV, AVI</div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass p-6">
          <h2 className="font-semibold mb-3">AI Style Controls</h2>
          <p className="text-white/70">Anime, Pixar-style, comic book, sketch, cinematic cartoon. Prompt input + style strength slider.</p>
          <input className="w-full mt-4 bg-black/30 rounded-xl p-3" defaultValue='Turn this video into a colorful anime movie scene with cinematic lighting and smooth animated shading.'/>
        </div>
        <div className="glass p-6">
          <h2 className="font-semibold mb-3">Render Pipeline</h2>
          <ul className="text-white/70 list-disc pl-6 space-y-1">
            <li>Face detection with expression preservation</li>
            <li>Smooth animation interpolation</li>
            <li>Cartoon edge outlining + color grading</li>
            <li>Scene enhancement + upscaling</li>
          </ul>
        </div>
      </div>
      <div className="glass p-6">
        <p className="mb-2">Cloud Render Progress</p>
        <div className="w-full bg-white/10 h-3 rounded-full"><div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 w-2/3" /></div>
      </div>
    </div>
  );
}
