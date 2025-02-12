import { Download, Book, LinkIcon, ImagesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recursos</h1>
      </div>

      <Tabs defaultValue="images" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-4 w-full md:w-fit ">
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
        </TabsList>

        <TabsContent value="images" className="grid gap-4 md:grid-cols-3">
          {images.map((image) => {
            // Generar nombre de archivo desde la URL
            const fileName =
              image.url.split("/").pop()?.split("?")[0] || "download";
            const safeFileName = fileName.replace(/[^a-z0-9.]/gi, "_"); // Eliminar caracteres inválidos

            return (
              <Card key={image.id}>
                <CardContent className="p-4">
                  <Image
                    height={300}
                    width={3000}
                    quality={100}
                    src={image.url || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
                  <h3 className="font-medium">{image.title}</h3>

                  <a
                    href={image.url}
                    download={safeFileName}
                    className="inline-block w-full"
                  >
                    <Button variant="ghost" className="w-full mt-2">
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="books" className="grid gap-4 md:grid-cols-3">
          {books.map((book) => (
            <Card key={book.id}>
              <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {book.description}
                </p>
                <Button variant="outline" className="w-full">
                  <Book className="h-4 w-4 mr-2" />
                  Ver más
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent
          value="links"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {links.map((link) => (
            <Card key={link.id} className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center space-y-0">
                <Image
                  src={link.logo || "/placeholder.svg"}
                  alt={`${link.title} logo`}
                  className="h-12 w-12 rounded-lg object-contain"
                  width={48}
                  height={48}
                />
                <div className="space-y-1">
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {link.description}
                </p>
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
      </Tabs>
    </div>
  );
}

// Sample data
const images = [
  {
    id: 1,
    title: "Logotipo Ar/acc",
    url: "/arbanner.png",
  },
  {
    id: 2,
    title: "WallPaper PC",
    url: "/pcbanner.png",
  },
  {
    id: 3,
    title: "WallPaper Mobile",
    url: "/fondodepantalla.png",
  },
];

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
];

const links = [
  {
    id: 1,
    title: "Y Combinator Startup School",
    category: "Educación",
    description: "Recursos gratuitos para fundadores de startups",
    url: "https://www.startupschool.org/",
    logo: "/yc.png",
  },
  {
    id: 2,
    title: "Appgentina",
    category: "Plataforma",
    description: "Descubrí y compartí los mejores productos digitales",
    url: "https://appgentina.com.ar/",
    logo: "/appgentina.png",
  },
];
