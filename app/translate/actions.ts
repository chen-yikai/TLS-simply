"use server";

import { apiHost } from "@/lib/utils";

export async function submitTranslate(initState: any, formData: FormData) {
  const source = formData.get("source")?.toString() || "";
  if (source.trim().length === 0) {
    return {
      query: source,
      message: "輸入不可為空",
      results: [],
    };
  }
  const req = await fetch(
    `${apiHost}/translate?source=${encodeURIComponent(source)}`,
    {
      method: "POST",
    },
  );

  const data = await req.json();
  // TODO: Handle exceptions response
  if (!data.results)
    return {
      query: source,
      message: "翻譯失敗，請稍後再試",
      results: [],
    };
  return data as TranslateResult;
}
