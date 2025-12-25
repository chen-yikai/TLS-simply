"use server";

import { apiHost } from "@/lib/utils";

export async function submitTranslate(initState: any, formData: FormData) {
  const source = formData.get("source")?.toString() || "";
  const req = await fetch(
    `${apiHost}/translate?source=${encodeURIComponent(source)}`,
    {
      method: "POST",
    },
  );
  const data = await req.json();
  return data as TranslateResult;
}
