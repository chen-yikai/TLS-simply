export default function CustomPlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      className={`${className} max-w-md mx-auto md:mx-0 rounded-lg w-full relative overflow-hidden`}
      src={src}
      controls
      loop
      autoPlay
      muted
    />
  );
}
