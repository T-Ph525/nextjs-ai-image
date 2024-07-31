export default function ImageLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <div className={`
      w-full h-auto max-w-full max-h-full 
      bg-slate-200 ${isLoading ? "animate-pulse" : ""}
    `} />
  );
}
