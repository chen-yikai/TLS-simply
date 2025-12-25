"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { submitTranslate } from "./actions";
import Link from "next/link";

export default function TranslateForm() {
  const [state, formAction, pending] = useActionState(
    submitTranslate,
    undefined,
  );
  return (
    <>
      <form action={formAction} className="w-full">
        <div className="mt-5 flex flex-col gap-3">
          <Textarea
            placeholder="在此輸入要翻譯的語句..."
            className="w-full p-5 min-h-25"
            name="source"
            defaultValue={state?.query || ""}
          />
          <Button type="submit" disabled={pending}>
            翻譯
          </Button>
        </div>
      </form>
      {state && (
        <div className="mt-5 border rounded-lg">
          {state.results.map((item, index) => (
            <div
              key={index}
              className={`border-b ${index === state.results.length - 1 ? "border-none" : ""} p-3`}
            >
              <Link href={`/details/${item.recordId}`} className="flex">
                {item.result}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
