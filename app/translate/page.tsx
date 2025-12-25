import { Metadata } from "next";
import TranslateForm from "./translate-form";

export const metadata: Metadata = {
  title: "翻譯 | 手語通",
  description: "將語句使用存在於辭典中的條目表達",
};

export default function TranslatePage() {
  return (
    <section>
      <div className="p-5">
        <h1 className="font-bold text-2xl">翻譯</h1>
        <p className="text-gray-400">將語句使用存在於辭典中的條目表達</p>
        <TranslateForm />
      </div>
    </section>
  );
}
