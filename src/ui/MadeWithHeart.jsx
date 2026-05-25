export default function MadeWithHeart() {
  return (
    <p className="text-sm sm:text-xs text-text-secondary hover:text-accent-primary transition-colors duration-300 flex items-center gap-1">
      Made with
      <span className="text-red-500 inline-block animate-pulse text-base sm:text-sm">
        ❤️
      </span>
      by Mohammad
    </p>
  );
}
