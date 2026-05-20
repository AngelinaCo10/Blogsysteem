"use client"

const tabLeft = "!rounded-tl-md rounded-none border-b-0 border-[#E6E6E6] px-10 text-[#52525c] shadow-none data-active:border-[#D7DB2D] data-active:!bg-[#D7DB2D] data-[state=active]:border-[#E6E6E6] data-[state=active]:!bg-[#415732] data-[state=active]:text-[#FFFFFF]"
const tabStyle = "rounded-none border-b-0 border-l-0 border-[#E6E6E6] px-10 text-[#52525c] shadow-none data-active:border-[#D7DB2D] data-active:!bg-[#D7DB2D]  data-[state=active]:border-[#E6E6E6] data-[state=active]:!bg-[#415732] data-[state=active]:text-[#FFFFFF]"
const tabRight = "!rounded-tr-md rounded-none border-b-0 border-l-0 border-[#E6E6E6] px-10 text-[#52525c] shadow-none data-active:border-[#D7DB2D] data-[state=active]:border-[#E6E6E6] data-[state=active]:!bg-[#415732] data-[state=active]:text-[#FFFFFF]"
import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


interface DataTableProps<TData extends { id: string | number }, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onBulkDelete?: (selectedIds: Array<string | number>) => void
}

export function DataTable<TData extends { id: string | number }, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

const router = useRouter()
  return (
    <>
      <div className="flex items-center gap-4 py-4">
        {/* Filter input */}
        <Input
          placeholder="Filter blogs..."
          value={(table.getColumn("titel")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("titel")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />



        {/* New blog button */}
        <Button
          asChild
          className="rounded-sm bg-[#415732] text-white hover:bg-[#CDD12A]"
        >
          <Link href="/admin/admin-new">
            Nieuwe blog
          </Link>
        </Button>
      </div>
      <Tabs
        defaultValue="alle"
        className="mt-3"
        onValueChange={(value) => {
          table
            .getColumn("status")
            ?.setFilterValue(value === "alle" ? undefined : value)
          table.setPageIndex(0)
        }}
      >
        <div className="w-full overflow-x-auto">
          <TabsList className="min-w-full p-0 rounded-b-none bg-white">
            <TabsTrigger value="alle" className={tabLeft}>Alle</TabsTrigger>
            <TabsTrigger value="Mijn" className={tabStyle}>Mijn</TabsTrigger>
            <TabsTrigger value="gepubliceerd" className={tabStyle}>Gepubliceerd</TabsTrigger>
            <TabsTrigger value="concept" className={tabStyle}>Concepten</TabsTrigger>
            <TabsTrigger value="ingepland" className={tabStyle}>Ingepland</TabsTrigger>
            <TabsTrigger value="prullenbak" className={tabRight}>Prullenbak</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      {/* Delete button */}
      {/* <Button
        variant="destructive"
        disabled={table.getSelectedRowModel().rows.length === 0}
        onClick={() => {
          const selectedBlogs = table.getSelectedRowModel().rows.map((row) => row.original)

          console.log(selectedBlogs)
        }}
      >
        Verplaats naar prullenbak
      </Button> */}

      <div className="overflow-x-auto rounded-md border rounded-tl-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="odd:bg-[#F6F7F7] cursor-pointer "
                  onClick={() =>
                    router.push(`/admin/${row.original.id}/edit`)
                   }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Geen resultaten.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div>
        <div className="flex items-center justify-end space-x-2 py-4">
          {/* First page button */}
          <Button className="bg-[#D7DB2D] text-white hover:bg-[#CDD12A] border-[#D7DB2D]"
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronsLeft className="h-4 w-4 text-[#717336]" />
          </Button>

          {/* Previous page button */}
          <Button className="bg-[#D7DB2D] text-white hover:bg-[#CDD12A] border-[#D7DB2D]"
            variant="outline"
            size="icon"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="h-4 w-4 text-[#717336]" />

          </Button>

          {/* Page number buttons */}
          {Array.from({ length: table.getPageCount() }, (_, i) => {
            const isActive = table.getState().pagination.pageIndex === i

            return (
              <Button
                key={i}
                variant="outline"
                className={
                  isActive
                    ? "h-8 w-8 bg-[#F4F4F5] text-black "
                    : "h-8 w-8 border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100"
                }
                onClick={() => table.setPageIndex(i)}
              >
                {i + 1}
              </Button>
            )
          })}

          {/* Next page button */}
          <Button className="bg-[#D7DB2D] text-white hover:bg-[#CDD12A] border-[#D7DB2D]"
            variant="outline"
            size="icon"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="h-4 w-4 text-[#717336]" />

          </Button>

          {/* Last page button */}
          <Button className="bg-[#D7DB2D] text-white hover:bg-[#CDD12A] border-[#D7DB2D]"
            variant="outline"
            size="icon"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <ChevronsRight className="h-4 w-4 text-[#717336]" />
          </Button>
        </div>
      </div>
    </>
  );
}
