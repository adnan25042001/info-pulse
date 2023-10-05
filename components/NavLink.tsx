import Link from "next/link";

type props = {
    category: string;
    isActive: boolean;
};

const NavLink = ({ category, isActive }: props) => {
    return (
        <Link
            href={`/news/${category}`}
            className={`navLink ${
                isActive &&
                "underline decoration-orange-500 underline-offset-4 font-bold text-lg"
            }`}
        >
            {category}
        </Link>
    );
};

export default NavLink;
