import Link from "next/link";
import { Input } from "./ui/input";

export default function Header() {
  return (
    <header className="flex-row flex items-center justify-between px-5 py-3 top-0 border rounded-b-lg fixed max-w-4xl w-full bg-white">
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
    </header>
  );
}
