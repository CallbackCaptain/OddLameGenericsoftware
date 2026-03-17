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
    <header className="w-full flex items-center justify-between px-4 md:px-10 pt-[15px] pb-3 h-auto">
      {/* Logo */}
      <img
        className="w-[50px] h-[50px] md:w-[67px] md:h-[67px] object-cover flex-shrink-0"
        alt="Image"
        src="/figmaAssets/-----1.png"
      />

      {/* Navigation Links — hidden on mobile */}
      <NavigationMenu className="hidden lg:flex flex-1 justify-center">
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
        className="h-auto flex-shrink-0 px-4 py-3 md:px-[25px] md:py-5 rounded-[32px] border border-solid border-[#dcdcdc] bg-transparent hover:bg-transparent shadow-none [font-family:'Manrope',Helvetica] font-semibold text-[#333333] text-[13px] md:text-[15px] tracking-[0] leading-[22.5px] whitespace-nowrap"
      >
        Оставить заявку
      </Button>
    </header>
  );
};
