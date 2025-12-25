export default function CustomPlayer({
  src,
  className,
  ref,
  ...rest
}: {
  src: string;
  className?: string;
  ref?: React.Ref<HTMLVideoElement>;
} & React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <video
      className={`${className} max-w-md mx-auto md:mx-0 rounded-lg w-full`}
      src={src}
      ref={ref}
      controls
      autoPlay
      loop
      {...rest}
    />
  );
}
