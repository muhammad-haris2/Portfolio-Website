import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: "video" | "square" | "portrait";
}

export function OptimizedImage({
  src,
  alt,
  className,
  containerClassName,
  aspectRatio = "video",
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  if (error) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-bg-elevated",
          aspectClasses[aspectRatio],
          containerClassName,
        )}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 text-text-muted">
          <ImageIcon className="h-8 w-8" />
          <span className="text-xs">Image coming soon</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-bg-elevated",
        aspectClasses[aspectRatio],
        containerClassName,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-white/5" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
