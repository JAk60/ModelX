"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface Equipment {
  name: string
  url: string
}

const carEquipment: Equipment[] = [
  { name: "Engine", url: "/equipment/engine" },
  { name: "Transmission", url: "/equipment/transmission" },
  { name: "Suspension", url: "/equipment/suspension" },
  { name: "Brakes", url: "/equipment/brakes" },
  { name: "Wheels", url: "/equipment/wheels" },
]

export default function RightEquipmentSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="h-[80%] z-50 flex"
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-full rounded-none border-r border-t border-b border-input"
        >
          <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          <span className="sr-only">Toggle car equipment sidebar</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-[250px] bg-background border-l border-t border-b border-input">
        <div className="flex flex-col h-full p-4">
          <h2 className="text-lg font-semibold mb-4">Car Equipment</h2>
          <nav className="space-y-2">
            {carEquipment.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}