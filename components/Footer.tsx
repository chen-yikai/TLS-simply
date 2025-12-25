import { Copyright } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Footer() {
  const dataSource = [
    "蔡素娟、戴浩一、劉世凱、陳怡君 2025 《台灣手語線上辭典（中文版第五版）》",
    "《台灣手語線上辭典（中文版第五版）》",
    "嘉義：國立中正大學手語語言學台灣研究中心",
    "https://twtsl.ccu.edu.tw",
  ];
  return (
    <footer className="p-2">
      <div className="flex flex-col items-center justify-center border rounded-lg mt-10">
        <Accordion type="single" className="w-full" collapsible>
          <AccordionItem value="data-source" className="px-5">
            <AccordionTrigger>資料來源</AccordionTrigger>
            <AccordionContent className="px-2">
              <ul>
                {dataSource.map((line, index) => (
                  <li key={index} className="text-gray-500">
                    {index + 1}. {line}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="copyright" className="px-5">
            <AccordionTrigger>版權聲明</AccordionTrigger>
            <AccordionContent className="px-2">
              <p className="text-gray-500">
                手語通 {new Date().getFullYear()} EliasChen, MIT License
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </footer>
  );
}
