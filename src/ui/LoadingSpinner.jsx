import { FaCode } from "react-icons/fa";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-border border-t-accent-primary border-r-accent-secondary animate-spin"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center animate-pulse backdrop-blur-sm">
              <FaCode className="text-accent-primary text-2xl animate-pulse" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          <div
            className="w-3 h-3 bg-accent-primary rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent-secondary rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent-primary rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        <p className="text-white mt-4 text-sm tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
