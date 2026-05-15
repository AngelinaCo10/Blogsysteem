import { columns, Payment } from "./_components/columns"
import { DataTable } from "./_components/data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Angelina.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Bravo.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Charlie.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
      {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "Delta.com",
    },

  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}