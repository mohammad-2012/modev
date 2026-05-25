export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center -mt-20 lg:-mt-28">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary blur-2xl opacity-40 animate-pulse scale-110"></div>
      <div className="relative blob-animation w-[420px] h-[420px] md:w-[600px] md:h-[600px] shadow-2xl group overflow-visible">
        <div className="absolute inset-0 rounded-inherit bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
}
