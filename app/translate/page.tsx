"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { submitTranslate } from "./actions";
import Link from "next/link";
import React from "react";
import { LoaderIcon } from "lucide-react";

export default function TranslatePage() {
  const [state, formAction, pending] = useActionState(
    submitTranslate,
    undefined,
  );
  const [currentVideo, setCurrentVideo] = React.useState<string | null>(null);
  return (
    <section>
      <div className="p-5">
        <h1 className="font-bold text-2xl">翻譯</h1>
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
        <div></div>
        {state?.results && (
          <div className="mt-5 border border-dashed rounded-lg flex flex-row p-2 gap-2">
            {state.results.map((item, index) => (
              <Link
                key={index}
                href={`/details/${item.recordId}`}
                className="border rounded-lg px-2 py-1 hover:border-sky-500 transition bg-white"
              >
                {item.result}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
