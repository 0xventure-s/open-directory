import { Download, LinkIcon, ImagesIcon } from "lucide-react";
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
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">Recursos</h1>
        <Button variant="outline" asChild>
              <Link href="https://forms.gle/Dz91AfLy57kTcUUv9">Agregar Recurso +</Link>
            </Button>
      </div>

      <Tabs defaultValue="images" className="space-y-4">
        <TabsList className="grid grid-cols-2 gap-4 w-full md:w-fit ">
          <TabsTrigger value="images" className="flex items-center gap-2">
            <ImagesIcon className="h-4 w-4 text-foreground" />
            Fondos
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
  {
    id: 4,
    title: "Logotipo White",
    url: "/arcccc.png",
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
    title: "Product Hunt",
    category: "Descubrimiento",
    description: "Encuentra las mejores startups y productos tecnológicos",
    url: "https://www.producthunt.com/",
    logo: "/ph.png",
  },
  {
    id: 7,
    title: "Appgentina",
    category: "Descubrimiento",
    description: "Encontra las mejores Startups Argentinas",
    url: "www.appgentina.com.ar",
    logo: "/appgentina.png",
  },
  {
    id: 9,
    title: "Techhubs",
    category: "Comunidades",
    description: "Lista curada de comunidades tech de Argentina",
    url: "https://techhubs.ar/",
    logo: "/Th.png",
  },
  {
    id: 3,
    title: "Indie Hackers",
    category: "Comunidad",
    description: "Historias de emprendedores bootstrapped",
    url: "https://www.indiehackers.com/",
    logo: "/Ih.png",
  },
  {
    id: 4,
    title: "Crunchbase",
    category: "Datos",
    description: "Información sobre startups, inversores y tendencias",
    url: "https://www.crunchbase.com/",
    logo: "/Cb.png",
  },
  {
    id: 5,
    title: "AngelList",
    category: "Inversión",
    description: "Plataforma para startups que buscan inversión o talento",
    url: "https://angel.co/",
    logo: "/Al.png",
  },
  {
    id: 11,
    title: "Hacker News",
    category: "Comunidad",
    description: "Noticias y debates sobre startups y tecnología",
    url: "https://news.ycombinator.com/",
    logo: "https://news.ycombinator.com/favicon.ico",
  },
  
];

