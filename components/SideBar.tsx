'use client'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import useShipModelStore from '@/store/ShipModelStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { FolderIcon } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'

// Mock data for files in a folder
const filesInFolder = [
  'ship1',
  'ship2',
  'ship3',
  'ship4',
  'ship5',
  'ship6',
  'ship7',
  'ship9',
]

const formSchema = z.object({
  selectedFile: z.string().min(1, 'Please select a file'),
})

type FormData = z.infer<typeof formSchema>

export default function Sidebar() {
  const setSelectedShipModel = useShipModelStore((state) => state.setSelectedShipModel);
  const { toast } = useToast()
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedFile: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data.selectedFile);
    setSelectedShipModel(data.selectedFile);
    toast({
      title: 'File submitted',
      description: `You submitted: ${data.selectedFile}`,
    })
  }

  return (
    <div className="w-64 rounded-md border-5 border-blue bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-4">File Selector</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="selectedFile"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a file" />
              </SelectTrigger>
              <SelectContent>
                {filesInFolder.map((file) => (
                  <SelectItem key={file} value={file}>
                    <div className="flex items-center">
                      <FolderIcon className="mr-2 h-4 w-4" />
                      {file}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.selectedFile && (
          <p className="text-red-500 text-sm">{errors.selectedFile.message}</p>
        )}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}