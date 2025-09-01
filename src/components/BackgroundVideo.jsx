export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10">
      <video
        className="h-full w-full object-cover"
        src="/somnia.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* super subtle vignette for legibility but keep video visible */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
    </div>
  );
}
