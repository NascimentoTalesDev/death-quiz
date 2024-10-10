import { Button } from '@/components/ui/button'
import React from 'react'

interface PublishedProps {
  id: string
}

export const Published = ({ id }: PublishedProps) => {
  return (
      <Button variant={"default"}>Publicar</Button>
  )
}
