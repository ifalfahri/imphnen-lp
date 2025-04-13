"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/navbar";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

export function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Fitur",
      link: "#features",
    },
    {
      name: "Testimoni",
      link: "#testimonial",
    },
    {
      name: "FAQ",
      link: "#faq",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      import("@/lib/utils").then(({ scrollToElement }) => {
        scrollToElement(href);
        setIsMobileMenuOpen(false); // Close mobile menu after clicking
      });
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="z-20">
                  Gabung
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link
                    href="https://facebook.com/groups/programmerhandal"
                    className="flex items-center gap-2 font-medium text-sm"
                  >
                    <RiFacebookFill className="text-blue-600" />
                    Facebook
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="https://discord.com"
                    className="flex items-center justify-center gap-2 font-medium text-sm"
                  >
                    <FaDiscord className="text-indigo-500" />
                    Discord
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => handleAnchorClick(e, item.link)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex justify-center gap-4">
              <Link
                href="https://discord.com"
                className={
                  buttonVariants({ variant: "outline" }) +
                  "flex items-center justify-center gap-2 font-medium text-sm"
                }
              >
                <RiFacebookFill className="text-blue-600" />
                Facebook
              </Link>
              <ModeToggle />
              <Link
                href="https://discord.com"
                className={
                  buttonVariants({ variant: "outline" }) +
                  "flex items-center justify-center gap-2 font-medium text-sm"
                }
              >
                <FaDiscord className="text-indigo-500" />
                Discord
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}
    </div>
  );
}
