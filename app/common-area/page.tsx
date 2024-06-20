import { ContentOfArea } from "@/components/common-area/content";
import { GoalsFilter } from "@/components/common-area/goalsFilter";

function CommonAreaPage() {

  return (
    <section className="cap-main-page flex flex-col gap-4 p-5">
      <header className="flex flex-col gap-3">
        <h1 className="text-3xl">Общая площадка</h1>
        <GoalsFilter />
      </header>
      <main>
      <ContentOfArea />
      </main>
    </section>
  );
}

export default CommonAreaPage;
