import { Badge } from "@/components/ui/badge";
import { apiHost } from "@/lib/utils";

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const data: Detail = await fetch(`${apiHost}/details?id=${id}`).then(
    async (res) => await res.json(),
  );
  return (
    <section>
      <div className="p-5 flex flex-col md:flex-row gap-5 justify-between">
        <div>
          <h1 className="font-bold text-2xl">{data.name}</h1>
          <h2 className="mb-2 text-gray-400">{data.description}</h2>
        </div>
        <video
          className="max-w-md mx-auto md:mx-0 rounded-lg w-full"
          src={data.clip}
          controls
          loop
          autoPlay
          muted
        />
      </div>
      {data.sentences.length > 0 && (
        <div className="p-5 border-t">
          <h2 className="font-bold text-xl">例句</h2>
          <div className="space-y-5">
            {data.sentences.map((sentence) => (
              <div
                key={sentence.id}
                className="border-b py-5 flex md:flex-row flex-col gap-5"
              >
                <video
                  className="max-w-md rounded-lg md:mx-0 mx-auto w-full"
                  src={sentence.clip}
                  controls
                  loop
                  muted
                />
                <div className="flex flex-col gap-2 text-lg">
                  <p>
                    <Badge>手語</Badge>&ensp;{sentence.gloss}
                  </p>
                  <p>
                    <Badge variant={"secondary"}>翻譯</Badge>&ensp;
                    {sentence.translation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
