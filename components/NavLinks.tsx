"use client";

import { categories } from "@/contants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };
    return (
        <nav className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 text-xs sm:text-sm md:text-base pb-10 border-b dark:border-gray-200 border-zinc-900">
            {categories.map((category) => (
                <NavLink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                />
            ))}
        </nav>
    );
};

export default NavLinks;
