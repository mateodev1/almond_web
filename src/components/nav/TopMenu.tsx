import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const menu = ["Diseño Web", "Portfolio", "Quiénes Somos", "Contacto"];

export const TopMenu = () => {
  return (
    <header className="h-[85px] flex justify-center items-center text-xl border-b-2 w-full">
      <nav className="flex justify-between md:justify-around gap-4 w-full h-[30px]">
        <p className="font-bold hover:text-[#C8A162]  cursor-pointer transition-all ">
          Almanod Web
        </p>

        <ul className="hidden md:flex justify-around w-1/2 ">
          {menu.map((item) => (
            <li
              key={item}
              className="hover:text-[#C8A162] hover:border-b-2 border-[#C8A162] cursor-pointer transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
        <Sheet >
          <SheetTrigger asChild>
            <Button className="md:hidden bg-current ">
              <AlignJustify  className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[200px]">
            <ul className=" flex flex-col gap-4">
              {menu.map((item) => (
                <li
                  key={item}
                  className="hover:text-[#C8A162] hover:border-b-2 border-[#C8A162] cursor-pointer transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
