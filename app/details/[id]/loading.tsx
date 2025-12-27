import { Loader } from "lucide-react";

export default function DetailsLoading() {
  return (
    <section className="h-50 flex justify-center items-center">
      <Loader className="animate-spin" />
    </section>
  );
}
