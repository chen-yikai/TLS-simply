import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "翻譯 | 手語通",
  description: "將語句使用存在於辭典中的條目表達",
};

export default function TranslateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
