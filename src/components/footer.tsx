"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { buttonVariants } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Utama",
      links: [
        { name: "Home", href: "#home" },
        { name: "Fitur", href: "#features" },
        { name: "Testimoni", href: "#testimonial" },
        { name: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Komunitas",
      links: [
        { name: "Tentang Kami", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Karir", href: "#careers" },
        { name: "Kontak", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Dokumentasi", href: "#docs" },
        { name: "Pusat Bantuan", href: "#help" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaTwitter className="w-5 h-5 text-sky-400" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaGithub className="w-5 h-5 text-foreground" />,
      href: "https://github.com/ifalfahri/imphnen-lp",
      label: "GitHub",
    },
    {
      icon: <FaDiscord className="w-5 h-5 text-indigo-500" />,
      href: "https://discord.com",
      label: "Discord",
    },
    {
      icon: <RiFacebookFill className="w-5 h-5 text-blue-600" />,
      href: "https://facebook.com/groups/programmerhandal",
      label: "Facebook",
    },
  ];

  return (
    <footer className="w-full border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container mx-auto px-4 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">IMPHNEN</span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Ingin Menjadi Programmer Handal Namun Enggan Ngoding
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, idx) => (
                <Link
                  key={`social-${idx}`}
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <div
              key={`footer-section-${idx}`}
              className="flex flex-col space-y-4"
            >
              <h3 className="font-semibold text-black dark:text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={`footer-link-${idx}-${linkIdx}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800 md:flex-row">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {currentYear} IMPHNEN Landing Page. Made by{" "}
            <Link
              className="hover:text-primary transition-colors"
              href="https://ifal.me"
            >
              Aldo
            </Link>
            . All rights reserved.
          </p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "text-sm"
              )}
            >
              Bergabung dengan Kami
            </Link>
          </div>
        </div>

        {/* Full Width IMPHNEN Text */}
        <div className="absolute left-0 mx-auto w-full overflow-hidden">
          <h1 className="text-[22.7vw] font-extrabold tracking-tighter text-foreground/5">
            IMPHNEN
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
