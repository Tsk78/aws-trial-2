"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Ratings} from "../data/data"
import { Task } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-Rating="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-Rating="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[120px]">{row.getValue("Name")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "Rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ratings" />
    ),
    cell: ({ row }) => {
      const Rating = Ratings.find((Rating) => Rating.value === row.original.Rating)

      return (
        <div className="flex space-x-2">
          {Rating && <Badge variant="outline">{Rating.Rating}</Badge>}
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("Rating")}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "Experience",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Experience" />
    ),
    cell: ({ row }) => <div className="w-[140px]">{row.getValue("Experience")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "Specialisation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Specialisation" />
    ),
    cell: ({ row }) => <div className="w-[140px]">{row.getValue("Specialisation")}</div>,
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]