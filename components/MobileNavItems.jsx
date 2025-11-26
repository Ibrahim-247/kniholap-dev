'use client'

import { Popover } from "antd";
import { useRouter } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLink from "./common/NavLink";
import LanguageSwitch from "./LanguageSwitch";
import GlobalSearch from "./GlobalSearch";
import Notifications from "./Notifications";
import { useUser } from "@/hooks/get-user.hook";
import { useAuth } from "@/hooks/auth.hook";

const MobileNavItems = () => {
    const router = useRouter();
    const { accessToken } = useUser();
    const { logout } = useAuth();

    // Unified navigation handler
    const handleLibraryNavigate = (type) => {
        router.push(`/library?type=${type}`);
    };

    // Build nav items – Dashboard first if logged in
    const navItems = [];

    if (accessToken) {
        navItems.push({ name: "Dashboard", link: "/dashboard", end: false });
    }

    navItems.push(
        { name: "Library", link: "/library", end: true },
        { name: "Bookmark", link: "/bookmark", end: false }
    );

    return (
        <Popover
            placement="bottomLeft"
            trigger="click"
            content={
                <PopoverContent
                    navItems={navItems}
                    accessToken={accessToken}
                    onLibraryNavigate={handleLibraryNavigate}
                    onLogout={() => logout.mutate()}
                />
            }
        >
            <button className="bg-primary cursor-pointer xl:hidden flex size-10 shrink-0 items-center justify-center rounded-lg text-white font-medium">
                <FaBarsStaggered size={20} />
            </button>
        </Popover>
    );
};

const PopoverContent = ({ navItems, accessToken, onLibraryNavigate, onLogout }) => {
    return (
        <div className="flex min-w-60 pt-3 pb-2 flex-col gap-4">
            <nav className="flex flex-col gap-2 text-xl">
                {navItems.map((item) => (
                    <NavLink
                        key={item.link}
                        href={item.link}
                        aria-label={item.name}
                        title={item.name}
                        prefetch
                        end={item.end}
                        activeClassName="!text-primary"
                        className="hover:text-primary transition"
                    >
                        {item.name}
                    </NavLink>
                ))}

                {/* Library Filters */}
                <button
                    onClick={() => onLibraryNavigate("premium")}
                    className="hover:text-primary cursor-pointer text-start transition"
                >
                    Premium
                </button>
                <button
                    onClick={() => onLibraryNavigate("ebook")}
                    className="hover:text-primary cursor-pointer text-start transition"
                >
                    Ebooks
                </button>
                <button
                    onClick={() => onLibraryNavigate("physical")}
                    className="hover:text-primary cursor-pointer text-start transition"
                >
                    Physical Books
                </button>

                {/* Sign Out - only if logged in */}
                {accessToken && (
                    <button
                        onClick={onLogout}
                        className="hover:text-red-500 cursor-pointer text-start transition text-red-400 font-medium"
                    >
                        Sign Out
                    </button>
                )}
            </nav>

            <div className="flex items-center justify-end gap-2">
                <LanguageSwitch />
                <Notifications />
                <GlobalSearch />
            </div>
        </div>
    );
};

export default MobileNavItems;