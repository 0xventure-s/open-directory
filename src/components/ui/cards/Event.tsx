
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from 'lucide-react'

interface EventCardProps {
  id: string
  title: string
  type: string
  date: string
  location: string
  
}

export function EventCard({ id, title, type, date, location }: EventCardProps) {
  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
        <Badge variant="secondary" className="w-fit">{type}</Badge>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full"
        >
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  )
}

