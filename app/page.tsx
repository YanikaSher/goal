"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { AppDescription } from "@/components/home/appDescription";
import Cookies from "js-cookie";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 md:py-10">
      <AppDescription />
    </section>
  );
}
