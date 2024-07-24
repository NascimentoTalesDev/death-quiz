"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxProps{
    text: string;
}

export function CheckboxItem({ text }:CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="check" />
      <label
        htmlFor="check"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {text}
      </label>
    </div>
  )
}
