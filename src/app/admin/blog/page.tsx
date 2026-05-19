import { columns, Blog } from "./_components/columns"
import { DataTable } from "./_components/data-table"


async function getData(): Promise<Blog[]> {
  // Fetch data from your API here.
  return [
 {
    id: "1",
    titel: "Waarom kiezen voor een groendak?",
    status: "gepubliceerd",
    categorie: "Groendaken",
    tags: ["sedum", "duurzaamheid"],
    auteur: "Mark de Vries",
    datum: "2026-01-04",
  },
  {
    id: "2",
    titel: "5 voordelen van zonnepanelen",
    status: "concept",
    categorie: "Zonnepanelen",
    tags: ["energie", "besparing"],
    auteur: "Pien Strik",
    datum: "2026-01-08",
  },
  {
    id: "3",
    titel: "Hoe werkt een laadpaal thuis?",
    status: "ingepland",
    categorie: "Laadpalen",
    tags: ["elektrisch rijden", "woning"],
    auteur: "Angela Jansen",
    datum: "2026-01-12",
  },
  {
    id: "4",
    titel: "Duurzaam wonen voor beginners",
    status: "gepubliceerd",
    categorie: "Duurzaam wonen",
    tags: ["woning", "tips"],
    auteur: "Mark de Vries",
    datum: "2026-01-15",
  },
  {
    id: "5",
    titel: "Sedumdaken en wateropvang",
    status: "concept",
    categorie: "Groendaken",
    tags: ["regenwater", "sedum"],
    auteur: "Pien Strik",
    datum: "2026-01-18",
  },
  {
    id: "6",
    titel: "Waarom elektrisch rijden populairder wordt",
    status: "gepubliceerd",
    categorie: "Laadpalen",
    tags: ["mobiliteit", "duurzaam"],
    auteur: "Angela Jansen",
    datum: "2026-01-20",
  },
  {
    id: "7",
    titel: "De impact van groene energie",
    status: "ingepland",
    categorie: "Energie",
    tags: ["groene energie", "toekomst"],
    auteur: "Mark de Vries",
    datum: "2026-01-23",
  },
  {
    id: "8",
    titel: "Tips voor een energiezuinig huis",
    status: "gepubliceerd",
    categorie: "Duurzaam wonen",
    tags: ["energie", "woning"],
    auteur: "Pien Strik",
    datum: "2026-01-25",
  },
  {
    id: "9",
    titel: "Hoe onderhoud je een groendak?",
    status: "concept",
    categorie: "Groendaken",
    tags: ["onderhoud", "sedum"],
    auteur: "Angela Jansen",
    datum: "2026-01-28",
  },
  {
    id: "10",
    titel: "Subsidies voor zonnepanelen in 2026",
    status: "gepubliceerd",
    categorie: "Zonnepanelen",
    tags: ["subsidie", "energie"],
    auteur: "Mark de Vries",
    datum: "2026-02-01",
  },

  // 11 - 20
  {
    id: "11",
    titel: "De toekomst van duurzame steden",
    status: "ingepland",
    categorie: "Duurzaamheid",
    tags: ["stad", "innovatie"],
    auteur: "Pien Strik",
    datum: "2026-02-03",
  },
  {
    id: "12",
    titel: "Waarom isolatie belangrijk is",
    status: "concept",
    categorie: "Duurzaam wonen",
    tags: ["isolatie", "energie"],
    auteur: "Angela Jansen",
    datum: "2026-02-06",
  },
  {
    id: "13",
    titel: "Groene trends van dit jaar",
    status: "gepubliceerd",
    categorie: "Duurzaamheid",
    tags: ["trends", "groen"],
    auteur: "Mark de Vries",
    datum: "2026-02-08",
  },
  {
    id: "14",
    titel: "De voordelen van warmtepompen",
    status: "ingepland",
    categorie: "Energie",
    tags: ["warmtepomp", "woning"],
    auteur: "Pien Strik",
    datum: "2026-02-10",
  },
  {
    id: "15",
    titel: "Meer biodiversiteit met groendaken",
    status: "gepubliceerd",
    categorie: "Groendaken",
    tags: ["natuur", "biodiversiteit"],
    auteur: "Angela Jansen",
    datum: "2026-02-14",
  },
  {
    id: "16",
    titel: "Zo bespaar je stroom in huis",
    status: "concept",
    categorie: "Energie",
    tags: ["besparing", "tips"],
    auteur: "Mark de Vries",
    datum: "2026-02-18",
  },
  {
    id: "17",
    titel: "Wat kost een laadpaal installeren?",
    status: "gepubliceerd",
    categorie: "Laadpalen",
    tags: ["kosten", "installatie"],
    auteur: "Pien Strik",
    datum: "2026-02-20",
  },
  {
    id: "18",
    titel: "Waarom duurzaam bouwen groeit",
    status: "ingepland",
    categorie: "Duurzaamheid",
    tags: ["bouwen", "innovatie"],
    auteur: "Angela Jansen",
    datum: "2026-02-22",
  },
  {
    id: "19",
    titel: "Zonnepanelen in de winter",
    status: "concept",
    categorie: "Zonnepanelen",
    tags: ["winter", "energie"],
    auteur: "Mark de Vries",
    datum: "2026-02-25",
  },
  {
    id: "20",
    titel: "Duurzame keuzes voor bedrijven",
    status: "gepubliceerd",
    categorie: "Duurzaamheid",
    tags: ["bedrijven", "groen"],
    auteur: "Pien Strik",
    datum: "2026-02-28",
  },

  // 21 - 50
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `${i + 21}`,
    titel: `Duurzame blog ${i + 21}`,
    status: ["concept", "gepubliceerd", "ingepland"][
      i % 3
    ] as "concept" | "gepubliceerd" | "ingepland",
    categorie: [
      "Groendaken",
      "Zonnepanelen",
      "Laadpalen",
      "Duurzaam wonen",
      "Energie",
    ][i % 5],
    tags: [
      ["duurzaam", "energie"],
      ["woning", "groen"],
      ["innovatie", "toekomst"],
      ["sedum", "dak"],
      ["elektrisch", "mobiliteit"],
    ][i % 5],
    auteur: [
      "Mark de Vries",
      "Pien Strik",
      "Angela Jansen",
    ][i % 3],
    datum: `2026-03-${String((i % 28) + 1).padStart(2, "0")}`,
  })),
]}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto w-full max-w-10xl px-4 py-10 lg:px-8">
      <h1 className="text-3xl font-bold text-[#52525C]">Blogs</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}