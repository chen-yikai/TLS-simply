import Image from "next/image";

export default async function HomePage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <Image
          src="/favicon.png"
          alt="手語通Logo"
          className="drop-shadow-lg my-5"
          width={120}
          height={120}
        />
        <h1 className="font-bold text-2xl leading-10">手語通</h1>
        <p className="text-gray-400 mt-2">簡單、聰明的台灣手語辭典</p>
      </div>
    </section>
  );
}
