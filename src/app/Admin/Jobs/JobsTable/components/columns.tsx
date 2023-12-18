"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Experience, Ratings, Specialisation} from "../data/data"
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
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
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
      <DataTableColumnHeader column={column} title="Rating" />
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
    cell: ({ row }) => {
      const Experiences = Experience.find(
        (Experience) => Experience.value === row.getValue("Experience")
      )

      if (!Experiences) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("Experience")}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "Specialisation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Specialisation" />
    ),
    cell: ({ row }) => {
      const Specialisations = Specialisation.find(
        (Specialisation) => Specialisation.value === row.getValue("Specialisation")
      )

      if (!Specialisations) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          <span>{row.getValue("Specialisation")}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]