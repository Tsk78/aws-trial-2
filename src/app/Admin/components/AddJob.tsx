import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddJob() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Add Job</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create a New Job</DialogTitle>
          <DialogDescription>
          Add the job name and description below
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="JobTitle" className="text-right">
              Title
            </Label>
            <Input
              id="JobTitle"
              placeholder="Title of the Job"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="JobDescription" className="text-right">
            Description
            </Label>
            <Input
              id="JobDescription"
              placeholder="Description of the Job"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create Job</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
