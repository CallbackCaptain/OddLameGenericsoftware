import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Обо мне" },
  { label: "Услуги" },
  { label: "Кейсы" },
  { label: "Отзывы" },
  { label: "Контакты" },
  { label: "FAQ" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="w-full flex items-center justify-between px-10 py-3 h-[67px]">
      {/* Logo */}
      <img
        className="w-[67px] h-[67px] object-cover flex-shrink-0"
        alt="Image"
        src="/figmaAssets/-----1.png"
      />

      {/* Navigation Links */}
      <NavigationMenu className="flex-1 flex justify-center">
        <NavigationMenuList className="flex items-center gap-[50px]">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink className="[font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap cursor-pointer hover:opacity-70 transition-opacity">
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="h-auto flex-shrink-0 px-[25px] py-5 rounded-[32px] border border-solid border-[#dcdcdc] bg-transparent hover:bg-transparent shadow-none [font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap"
      >
        Оставить заявку
      </Button>
    </header>
  );
};
