"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { logoFont } from "./fonts"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"

export const Navigation = () => {
  return (
    <div className="flex items-center text-2xl py-8">
      <Link className={`text-slate-600 text-3xl ${logoFont.className}`} href="/" passHref>
        Krystian Mateusiak
      </Link>
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="#about" passHref>
                About
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="#projects" passHref>
                Projects
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link className={navigationMenuTriggerStyle()} href="#contact" passHref>
                Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-2xl font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-2xl leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
