"use client"
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import { detectPrompt } from "@/libs/detectPrompt";
import { generateImage } from "@/libs/generateImage";
import { getRandomPrompt } from "@/libs/randomPrompt";
import { LinkBreak1Icon, LinkBreak2Icon, MagicWandIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Home() {
  // ... (other state variables and functions)

  // Function to convert base64 to data URL
  const toDataURL = (base64String: string) => {
    const type = base64String.substring(
      base64String.indexOf(":") + 1,
      base64String.indexOf(";")
    );
    const b64Data = base64String.substring(base64String.indexOf(",") + 1);
    return `data:${type};base64,${b64Data}`;
  };

  // Updated ImageLoader component
  function ImageLoader({ src, isLoading }: { src: string, isLoading: boolean }) {
    return (
      <img
        src={src}
        alt="Generated Image"
        className={`
          w-full h-auto max-w-full max-h-full
          bg-slate-200 ${isLoading ? "animate-pulse" : ""}
        `}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
    );
  }

  // ... (rest of the component's logic)

  // Inside doGenerateImg function
  const image: any = await generateImage(prompt);
  const imageSrc = typeof image === 'string' ? toDataURL(image) : image; // Use toDataURL if it's base64
  setImage(imageSrc);

  // ... (rest of the UI rendering)

      {image ? (
        <ImageLoader src={image} isLoading={isLoading} />
      ) : (
        <img
          className="md:h-[300px] md:w-[300px]"
          src="/placeholder.jpg"
          alt="placeholder image"
        />
      )}
