import Link from "next/link";

export const navlinks = [
    { name: "Home", path: "/" },
    { name: "Spaces", path: "/spaces" },
    { name: "Direct Messages", path: "/directmessage" },
    { name: "Help Center", path: "/help&support" },
];

const MainNavLinks = () => {
    return (
        <div className="hidden xl:flex gap-[50px]">
            {navlinks.map((item, i) => (
                <Link
                    href={item.path}
                    key={i}
                    className="background-text-color font-openSans font-[600] text-sm py-2 px-4 rounded-sm hover:bg-primaryGreen/10 transition duration-75"
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default MainNavLinks