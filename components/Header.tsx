import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
    return (
        <header className="max-w-6xl mx-auto px-3">
            <div className="flex py-5 sm:py-7 md:py-10 items-center justify-between">
                <Link href="/" prefetch={false}>
                    <h1 className="font-serif text-4xl text-center underline decoration-4 decoration-orange-500">
                        InfoPulse
                    </h1>
                </Link>

                {/* Dark mode button */}
                <DarkModeButton />
            </div>

            {/* Nav links */}
            <NavLinks />

            {/* Search Bar */}
            <SearchBox />
        </header>
    );
};

export default Header;
