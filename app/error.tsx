"use client";

export default function ErrorPage() {
  return (
    <section>
      <div className="p-5 flex flex-col items-center justify-center h-[50vh]">
        <h1 className="font-bold text-2xl">發生錯誤</h1>
        <p className="text-gray-400 mt-2">很抱歉，載入資料時發生錯誤</p>
      </div>
    </section>
  );
}
