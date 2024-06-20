"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
  Kbd,
  Link,
  Input,
  link as linkStyles,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { LoginWin } from "./auth/login/loginWin";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  SearchIcon,
} from "@/components/icons";
import { SignInBtn } from "./auth/login/displaySignInButton";
import { Logo } from "@/components/icons";
import { useState } from "react";
import Cookies from "js-cookie";

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100 hidden sm:flex md:flex",
  //       input: "text-sm",
  //     }}
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="flex" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>
      <div className="justify-end flex gap-4 mr-2">
        <SignInBtn />
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <LoginWin />
        </Modal>
        <ThemeSwitch />
        <NavbarMenuToggle className="self-center h-5"  />
        <NavbarMenu className="sm:hidden">
          {/* {searchInput} */}
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </div>
    </NextUINavbar>
  );
};
