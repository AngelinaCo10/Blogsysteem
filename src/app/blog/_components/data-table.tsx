"use client"
import * as React from "react"

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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
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

  return (
    <>
      <div className="flex items-center gap-4 py-4">
        {/* Filter input */}
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        {/* New blog button */}
        <Button className="bg-[#415732] text-white hover:bg-[#CDD12A]">
          Nieuwe blog
        </Button>
      </div>
      <div className="overflow-hidden rounded-md border">
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
                  No results.
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
          {/* {Array.from({ length: table.getPageCount() }, (_, i) => (
            <Button className="h-8 w-8"
              key={i}
              variant={table.getState().pagination.pageIndex === i ? "default" : "outline"}
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </Button>
          ))} */}
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