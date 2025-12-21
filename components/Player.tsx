export default function Player({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return <video className={className} src={src} controls loop autoPlay muted />;
}
