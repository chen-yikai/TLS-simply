export default function CustomPlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video
      className={`${className} max-w-md mx-auto md:mx-0 rounded-lg w-full`}
      src={src}
      controls
      autoPlay
      loop
    />
  );
}
