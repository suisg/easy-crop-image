"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { name: "Circle Crop", href: "/circle-crop" },
  { name: "Resize Image", href: "/image-resizer" },
  { name: "Avatar Cropper", href: "/avatar-cropper" },
  { name: "Square Image", href: "/square-image" },
  { name: "Grid Maker", href: "/instagram-grid-maker" },
  {
    name: "More Tools",
    children: [
      { name: "Resize Image to 1920x1080", href: "/resize-image-to-1920x1080" },
      { name: "Resize Image to 3000x3000", href: "/3000x3000-image-converter" },
      { name: "Resize Image to 512x512", href: "/512x512-image-converter" },
      { name: "Resize Image to 300x300", href: "/300x300-image-converter" },
      { name: "Discord PFP Cropper", href: "/discord-pfp-cropper" },
      { name: "Youtube Thumbnail Resizer", href: "/youtube-thumbnail-resizer" },
    ]
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 z-30">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center h-14">
          <Link
            href="/"
            className="flex items-center text-xl font-bold text-blue-600 tracking-tight mr-8 h-14"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/EasyCrop-image-cropper-logo.png"
              alt="EasyCrop Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            EasyCrop
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden sm:flex" viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="text-base font-semibold h-14">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-52">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href!}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href!}
                        className={cn(navigationMenuTriggerStyle(), "text-base font-semibold h-14")}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ml-auto"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" className="text-blue-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="sm:hidden bg-white py-2 border-t border-gray-100"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div className="space-y-2">
                    <div className="text-gray-700 px-2 text-base font-medium">
                      {item.name}
                    </div>
                    <ul className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href!}
                            className="block text-gray-600 px-2 py-2 rounded transition text-sm"
                            onClick={() => setOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block text-gray-700 px-2 py-2 rounded transition text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
} 