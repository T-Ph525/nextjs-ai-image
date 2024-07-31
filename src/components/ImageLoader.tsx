"use client";
import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt?: string; // Optional alt text for accessibility
  isLoading?: boolean;
}

export default function ImageLoader({ src, alt = "Loading...", isLoading }: ImageLoaderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`
      w-full h-auto max-w-full max-h-full
      bg-slate-200 ${isLoading || !isLoaded ? "animate-pulse" : ""}
    `}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${isLoaded ? 'opacity-100' : 'opacity-0'}`} // Fade in when loaded
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">Image failed to load.</p>
        </div>
      )}
    </div>
  );
}
