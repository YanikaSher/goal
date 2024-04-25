"use client";

import { AppDescription } from "@/components/home/appDescription";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 md:py-10">
      <AppDescription />
    </section>
  );
}
