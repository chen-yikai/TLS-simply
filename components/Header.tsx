"use client";
import Link from "next/link";
import { Input } from "./ui/input";
import { Search, WandSparkles, X } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ScrollArea } from "./ui/scroll-area";

export default function Header() {
  const [activeSearch, setActiveSearch] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchQueryResults, setSearchQueryResults] = React.useState<
    SearchResult[]
  >([]);
  React.useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim().length === 0) return;
      try {
        const response = await fetch(`/api/search?q=${searchQuery}&limit=10`);
        const data: Search = await response.json();
        setSearchQueryResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 300);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);
  return (
    <header className="top-0 fixed max-w-4xl w-full px-2 z-10">
      <div className="drop-shadow-md border rounded-b-lg bg-white w-full px-5 h-15 flex-row flex items-center justify-between gap-2">
        <div className={`${activeSearch ? "hidden" : "block"}`}>
          <Link href="/" className="flex items-center gap-2 py-2">
            <h1 className="text-md font-bold hover:underline underline-offset-4">
              手語通
            </h1>
          </Link>
        </div>
        <div
          className={`w-full transition-all relative duration-300 ${
            activeSearch ? "block" : "hidden"
          }`}
        >
          <Input
            type="search"
            placeholder="搜尋手語詞彙..."
            ref={inputRef}
            value={searchQuery}
            onChange={(x) => setSearchQuery(x.target.value)}
            onBlur={() => {
              setTimeout(() => {
                setActiveSearch(false);
              }, 200);
            }}
          />
          <ul
            className={`absolute top-full left-0 w-full bg-white border shadow-lg overflow-auto max-h-50 rounded-md mt-5 z-10 ${searchQueryResults.length === 0 ? "hidden" : ""}`}
          >
            {searchQueryResults.map((result) => (
              <li key={result.id} className="border-b last:border-0">
                <Link
                  href={`/details/${result.recordId}`}
                  className="block w-full p-2 hover:bg-gray-200"
                >
                  {result.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <nav className="flex items-center gap-2">
          {activeSearch || (
            <Link href="/translate">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <WandSparkles />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>翻譯</TooltipContent>
              </Tooltip>
            </Link>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setActiveSearch(!activeSearch);
                  if (!activeSearch) {
                    setTimeout(() => {
                      inputRef.current?.focus();
                    }, 100);
                  }
                }}
              >
                {activeSearch ? <X /> : <Search />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>搜尋</TooltipContent>
          </Tooltip>
        </nav>
      </div>
    </header>
  );
}
