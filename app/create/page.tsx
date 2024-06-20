"use client";

import { title } from "@/components/primitives";
import { Input, Button } from "@nextui-org/react";
import { CreatePartOne } from "@/components/create/partOne";
import { CreatePartTwo } from "@/components/create/partTwo";

export default function DocsPage() {

  return (
    <section className="flex flex-col">

      <header>
        <h1 className={title({ color: "cyan" })}>Создайте цель</h1>
      </header>

      <main className="flex flex-col lg:flex-row">
        <CreatePartOne />
        <CreatePartTwo />
      </main>

      <footer>
        <center>
          <Button
            className="font-sans mt-5"
            size="md"
            variant="flat"
            color="secondary"
            type="submit"
            onClick={() => {
              console.log("goal");
            }}
          >
            <b>Создать</b>
          </Button>
        </center>
      </footer>

    </section>
  );
}
