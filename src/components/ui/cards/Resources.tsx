import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, FileText, Mic } from 'lucide-react'

interface ResourceCardProps {
  id: string
  title: string
  type: 'book' | 'video' | 'article' | 'podcast'
  author: string
  description: string
  topic: string

}

export function ResourceCard({ title, type, author, description, topic }: ResourceCardProps) {
  const TypeIcon = {
    book: BookOpen,
    video: Video,
    article: FileText,
    podcast: Mic,
  }[type] || (() => <span>Unknown Type</span>);

  return (
    <Card className="bg-card text-card-foreground">
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          {TypeIcon && <TypeIcon className="h-5 w-5 text-muted-foreground" />}
        </div>
        <p className="text-sm text-muted-foreground">{author}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant="secondary">{topic}</Badge>
        <Button variant="outline">Ver recurso</Button>
      </CardFooter>
    </Card>
  );
}


