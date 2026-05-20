"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontalIcon, Trash2 } from "lucide-react"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import { Trash2Icon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Blog = {
  id: string
  titel: string
  status: "Mijn" | "concept" | "gepubliceerd" | "prullenbak" | "ingepland"
  auteur: string
  categorie: string
  tags: string[]
  datum: string
}

export const columns: ColumnDef<Blog>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="data-[state=active]:bg-[#415732]!"

      />
    ),
    cell: ({ row }) => (
      <div onClick={(event) => event.stopPropagation()}>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="data-[state=active]:border-[#E6E6E6]"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "titel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Titel
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <Link
        href={`/admin/${row.original.id}/edit`}
        className="font-medium text-[#52525C] hover:underline"
      >
        {row.original.titel}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "auteur",
    header: ({ column }) => {
      const auteurs = ["Angela Jansen", "Mark de Vries", "Pien Strik"]

      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Auteur
        //   <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              Auteur
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem
              checked={column.getFilterValue() === undefined}
              onCheckedChange={() => column.setFilterValue(undefined)}
            >
              Alle
            </DropdownMenuCheckboxItem>

            {auteurs.map((auteur) => (
              <DropdownMenuCheckboxItem
                key={auteur}
                checked={column.getFilterValue() === auteur}
                onCheckedChange={() =>
                  column.setFilterValue(
                    column.getFilterValue() === auteur ? undefined : auteur
                  )
                }
              >
                {auteur}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "categorie",
    header: ({ column }) => {
      const categories = ["Duurzaam wonen", "Energie", "Duurzaamheid", "Groendaken", "Laadpalen", "Zonnepanelen"]

      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Categorieën
        //   <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              Categorie
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem
              checked={column.getFilterValue() === undefined}
              onCheckedChange={() => column.setFilterValue(undefined)}
            >
              Alle
            </DropdownMenuCheckboxItem>

            {categories.map((categorie) => (
              <DropdownMenuCheckboxItem
                key={categorie}
                checked={column.getFilterValue() === categorie}
                onCheckedChange={() =>
                  column.setFilterValue(
                    column.getFilterValue() === categorie ? undefined : categorie
                  )
                }
              >
                {categorie}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

      )
    },
  },
  {
    accessorKey: "tags",
    header: ({ column }) => {
      const tags = ["advies", "toekomst,woning", "co2", "nieuwbouw", "verkoeling", "laden"]

      return (
        // <Button
        //   variant="ghost"
        //   onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        // >
        //   Tags
        //   <ArrowUpDown className="ml-2 h-4 w-4" />
        // </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
              Tags
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start">
            <DropdownMenuCheckboxItem
              checked={column.getFilterValue() === undefined}
              onCheckedChange={() => column.setFilterValue(undefined)}
            >
              Alle
            </DropdownMenuCheckboxItem>

            {tags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={column.getFilterValue() === tag}
                onCheckedChange={() =>
                  column.setFilterValue(
                    column.getFilterValue() === tag ? undefined : tag
                  )
                }
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  {
    accessorKey: "datum",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Datum
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    id: "actions",
    header: () => <span className="sr-only">Acties</span>,
    enableSorting: false,
    enableHiding: false,
    cell: () => {
      return (
        <div
          onClick={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <AlertDialog>
            <AlertDialogTrigger asChild>
            <div className=" flex justify-center p-[5px] opacity-0 transition-opacity group-hover:opacity-100 hover:bg-[#FDE6E7] rounded-md ">
              <Trash2 size={30} strokeWidth={1.25} />
            </div>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
              <AlertDialogHeader>
                <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                  <Trash2Icon />
                </AlertDialogMedia>
                <AlertDialogTitle>Verplaatsen naar prullenbak?</AlertDialogTitle>
                <AlertDialogDescription>
                  Blog wordt verplaatst naar prullenbak.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel variant="outline">Annuleren</AlertDialogCancel>
                <AlertDialogAction variant="destructive">Prullenbak</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          </div>
      )
    },
  },
]
