'use client';
import { RiHome6Line, RiToolsLine, RiFolder2Line } from "react-icons/ri";
import { IoBriefcaseOutline, IoNewspaperOutline } from "react-icons/io5";
import { GrContact } from "react-icons/gr";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", icon: RiHome6Line, label: "Accueil" },
  { id: "skills", icon: RiToolsLine, label: "Compétences" },
  { id: "resume", icon: IoBriefcaseOutline, label: "Expériences" },
  { id: "projects", icon: RiFolder2Line, label: "Projets" },
  { id: "contact", icon: GrContact, label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isBlog = pathname.startsWith("/blog");

  return (
    <nav className="fixed w-80 mx-auto inset-x-0 bottom-5 z-50 rounded-2xl p-2.5 bg-bkgEnd/80 backdrop-blur-lg shadow-xl">
      <ul className="flex justify-between">
        {navItems.map(({ id, icon: Icon, label }) => (
          <li key={id} className="rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out">
            {isHomePage ? (
              <ScrollLink
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center justify-center w-8 h-8 rounded-xl"
                activeClass="bg-bkgStart text-accent rounded-xl"
                href={`/#${id}`}
                aria-label={label}
              >
                <Icon className="w-8 h-8 p-2" />
              </ScrollLink>
            ) : (
              <Link
                href={`/#${id}`}
                className="flex items-center justify-center w-8 h-8"
                aria-label={label}
              >
                <Icon className="w-8 h-8 p-2" />
              </Link>
            )}
          </li>
        ))}
        <li className={`rounded-xl cursor-pointer hover:scale-150 transition-all duration-500 ease-in-out ${isBlog ? "bg-bkgStart text-accent" : ""}`}>
          <Link href="/blog" className="flex items-center justify-center w-8 h-8" aria-label="Blog">
            <IoNewspaperOutline className="w-8 h-8 p-2" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
