import { columns, Payment } from "./_components/columns"
import { DataTable } from "./_components/data-table"


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "concept",
      email: "Angelina.com",
    },
    {
      id: "728ed52f",
      amount: 90,
      status: "concept",
      email: "Bravo.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "concept",
      email: "Charlie.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
      {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "gepubliceerd",
      email: "Delta.com",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto w-full max-w-10xl px-4 py-10 lg:px-8">
       <h1 className="text-3xl font-bold text-[#52525C]">Blogs</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}