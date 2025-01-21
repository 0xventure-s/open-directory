import { Download, Book, LinkIcon, ImagesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recursos</h1>
       
      </div>

      <Tabs defaultValue="images" className="space-y-4">
      <TabsList className="grid grid-cols-4 gap-4 w-full md:w-fit ">
  <TabsTrigger value="images" className="flex items-center gap-2">
    <ImagesIcon className="h-4 w-4 text-foreground" />
    Fondos
  </TabsTrigger>
  <TabsTrigger value="books" className="flex items-center gap-2">
    <Book className="h-4 w-4 text-foreground" />
    Libros
  </TabsTrigger>
  <TabsTrigger value="links" className="flex items-center gap-2">
    <LinkIcon className="h-4 w-4 text-foreground z-10" />
    Links
  </TabsTrigger>
  <TabsTrigger value="downloads" className="flex items-center gap-2">
    <Download className="h-4 w-4 text-foreground z-10" />
    Descargas
  </TabsTrigger>
</TabsList>

        <TabsContent value="images" className="grid gap-4 md:grid-cols-3">
          {images.map((image) => (
            <Card key={image.id}>
              <CardContent className="p-4">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-medium">{image.title}</h3>
                <Button variant="ghost" className="w-full mt-2">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="books" className="grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                <Button variant="outline" className="w-full">
                  <Book className="h-4 w-4 mr-2" />
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="links" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Card key={link.id} className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center space-y-0">
                <img
                  src={link.logo || "/placeholder.svg"}
                  alt={`${link.title} logo`}
                  className="h-12 w-12 rounded-lg object-contain"
                />
                <div className="space-y-1">
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground flex-1 mb-4">{link.description}</p>
                <Button asChild variant="ghost" className="w-full">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Visitar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="downloads" className="grid gap-4 md:grid-cols-2">
          {downloads.map((download) => (
            <Card key={download.id}>
              <CardHeader>
                <CardTitle>{download.title}</CardTitle>
                <CardDescription>{download.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{download.description}</p>
                <Button variant="secondary" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Descargar
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const images = [
  {
    id: 1,
    title: "Startup Growth Chart",
    url: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Innovation Framework",
    url: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Business Model Canvas",
    url: "/placeholder.svg?height=400&width=600",
  },
]

const books = [
  {
    id: 1,
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups, or how to build the future",
  },
  {
    id: 2,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "How Today's Entrepreneurs Use Continuous Innovation",
  },
  {
    id: 3,
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    description: "Building a Business When There Are No Easy Answers",
  },
]

const links = [
  {
    id: 1,
    title: "Y Combinator Startup School",
    category: "Educación",
    description: "Recursos gratuitos para fundadores de startups",
    url: "https://www.startupschool.org/",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Product Hunt",
    category: "Plataforma",
    description: "Descubre los mejores productos nuevos en tecnología",
    url: "https://www.producthunt.com/",
    logo: "/placeholder.svg?height=40&width=40",
  },
]

const downloads = [
  {
    id: 1,
    title: "Pitch Deck Template",
    type: "Plantilla",
    description: "Plantilla profesional para presentaciones de startups",
  },
  {
    id: 2,
    title: "Financial Model",
    type: "Spreadsheet",
    description: "Modelo financiero para startups en etapa temprana",
  },
]

