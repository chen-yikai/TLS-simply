"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { submitTranslate } from "./actions";
import React from "react";
import { LoaderIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import CustomPlayer from "@/components/CustomPlayer";
import { Badge } from "@/components/ui/badge";

export default function TranslatePage() {
  const [state, formAction, pending] = useActionState(
    submitTranslate,
    undefined,
  );
  const [currentVideo, setCurrentVideo] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (state?.results && state.results.length > 0) {
      setCurrentVideo(state.results[currentIndex].sourceInfo.clip);
    }
  }, [state, currentIndex]);

  React.useEffect(() => {
    setCurrentIndex(0);
  }, [state]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current?.currentTime === videoRef.current?.duration) {
      if (currentIndex + 1 >= (state?.results.length || 0)) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex((prevIndex) => {
        return prevIndex + 1;
      });
    }
  };

  return (
    <section>
      <div className="p-5">
        <h1 className="font-bold text-2xl flex items-center gap-2">
          翻譯<Badge variant="outline">實驗功能</Badge>
        </h1>
        <p className="text-gray-400">將語句使用存在於辭典中的條目表達</p>
        <form action={formAction} className="w-full">
          <div className="mt-5 flex flex-col gap-3">
            <Textarea
              placeholder="在此輸入要翻譯的語句..."
              className="w-full p-5 min-h-25"
              name="source"
              defaultValue={state?.query || ""}
              required
            />
            <Button type="submit" disabled={pending}>
              {pending ? <LoaderIcon className="animate-spin" /> : "翻譯"}
            </Button>
          </div>
        </form>
        <div className="mt-10">
          {!pending && currentVideo !== null && state?.results && (
            <div className="flex flex-col justify-center items-center text-center">
              <CustomPlayer
                src={currentVideo}
                ref={videoRef}
                loop={false}
                className="aspect-4/3 max-w-xl"
                onTimeUpdate={handleVideoTimeUpdate}
              />
              <div className="mt-2 w-full">
                <h1 className="font-bold text-xl">
                  {state.results[currentIndex].result}
                </h1>
                <p className="text-gray-400">
                  {state.results[currentIndex].sourceInfo.description}
                </p>
              </div>
            </div>
          )}
          {pending && <Skeleton className="h-12 w-full mt-5 rounded-lg" />}
          {state?.results && !pending && (
            <div className="mt-5 border border-dashed rounded-lg flex flex-row p-2 gap-2 flex-wrap">
              {state.results.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`border rounded-lg px-2 py-1 hover:border-sky-500 transition bg-white ${currentIndex === index ? "border-sky-500 drop-shadow-lg" : ""}`}
                >
                  {item.result}
                </Button>
              ))}
            </div>
          )}
          <p className="text-gray-400 m-2 text-right select-none">
            翻譯結果為AI生成，經常出錯，僅供參考。
          </p>
        </div>
      </div>
    </section>
  );
}
