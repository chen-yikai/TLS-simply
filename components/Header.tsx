import Link from "next/link";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="top-0 fixed max-w-4xl w-full px-2">
      <div className="border rounded-b-lg bg-white w-full px-5 py-3 flex-row flex items-center justify-between ">
        <div>
          <Link href="/">
            <h1 className="text-md font-bold hover:underline underline-offset-4">
              手語通
            </h1>
          </Link>
        </div>
        <nav>
          <Input type="search" placeholder="Search..." className="w-64" />
        </nav>
      </div>
    </header>
  );
}
