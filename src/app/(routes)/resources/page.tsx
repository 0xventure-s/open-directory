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

export default function ResourcesPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recursos</h1>
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
    logo: "https://ph-static.imgix.net/ph-favicon.png",
  },
  {
    id: 3,
    title: "Indie Hackers",
    category: "Comunidad",
    description: "Historias de emprendedores bootstrapped",
    url: "https://www.indiehackers.com/",
    logo: "https://www.indiehackers.com/images/ih-logo.svg",
  },
  {
    id: 4,
    title: "Crunchbase",
    category: "Datos",
    description: "Información sobre startups, inversores y tendencias",
    url: "https://www.crunchbase.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Crunchbase_logo.png",
  },
  {
    id: 5,
    title: "AngelList",
    category: "Inversión",
    description: "Plataforma para startups que buscan inversión o talento",
    url: "https://angel.co/",
    logo: "https://angel.co/images/icons/favicon-32x32.png",
  },
  {
    id: 6,
    title: "Startup Stash",
    category: "Recursos",
    description: "Herramientas y recursos para startups",
    url: "https://startupstash.com/",
    logo: "https://startupstash.com/wp-content/uploads/2022/03/favicon.png",
  },
  {
    id: 7,
    title: "NoCode.tech",
    category: "No Code",
    description: "Recursos y herramientas para crear sin programar",
    url: "https://www.nocode.tech/",
    logo: "https://www.nocode.tech/assets/img/logos/nocode-logo.png",
  },
  {
    id: 8,
    title: "MicroAcquire",
    category: "Adquisición",
    description: "Compra y vende startups fácilmente",
    url: "https://microacquire.com/",
    logo: "https://microacquire.com/static/images/logo.svg",
  },
  {
    id: 9,
    title: "SaaS Hub",
    category: "SaaS",
    description: "Lista curada de herramientas y recursos SaaS",
    url: "https://www.saashub.com/",
    logo: "https://www.saashub.com/favicon.ico",
  },
  {
    id: 10,
    title: "First Round Review",
    category: "Blog",
    description: "Consejos y estrategias de expertos en startups",
    url: "https://review.firstround.com/",
    logo: "https://firstround.com/assets/logos/first-round-capital-logo.png",
  },
  {
    id: 11,
    title: "Hacker News",
    category: "Comunidad",
    description: "Noticias y debates sobre startups y tecnología",
    url: "https://news.ycombinator.com/",
    logo: "https://news.ycombinator.com/favicon.ico",
  },
  {
    id: 12,
    title: "BetaList",
    category: "Validación",
    description: "Descubre startups en etapa temprana",
    url: "https://betalist.com/",
    logo: "https://betalist.com/assets/favicon/favicon-32x32.png",
  },
  {
    id: 13,
    title: "Founder Institute",
    category: "Aceleradora",
    description: "Programa global para ayudar a lanzar startups",
    url: "https://fi.co/",
    logo: "https://fi.co/img/fi-logo.svg",
  },
  {
    id: 14,
    title: "500 Startups",
    category: "Inversión",
    description: "Fondo de inversión y aceleradora global",
    url: "https://500.co/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/500_Startups_logo.svg/1024px-500_Startups_logo.svg.png",
  },
  {
    id: 15,
    title: "OpenVC",
    category: "Inversión",
    description: "Directorio de inversores con filtros avanzados",
    url: "https://openvc.app/",
    logo: "https://openvc.app/assets/favicon/favicon-32x32.png",
  },
  {
    id: 16,
    title: "Failory",
    category: "Aprendizaje",
    description: "Historias de fracasos y aprendizajes de startups",
    url: "https://failory.com/",
    logo: "https://failory.com/favicon.ico",
  },
  {
    id: 17,
    title: "Stripe Atlas",
    category: "Legal/Finanzas",
    description: "Crea una empresa en EE.UU. desde cualquier parte del mundo",
    url: "https://stripe.com/atlas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png",
  },
  {
    id: 18,
    title: "Toptal Startups",
    category: "Talento",
    description: "Encuentra talento de primer nivel para tu startup",
    url: "https://www.toptal.com/startups",
    logo: "https://www.toptal.com/apple-touch-icon.png",
  },
  {
    id: 19,
    title: "TechCrunch",
    category: "Noticias",
    description: "Últimas noticias y análisis sobre startups y tecnología",
    url: "https://techcrunch.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/TechCrunch_logo.svg",
  },
  {
    id: 20,
    title: "SaaStr",
    category: "Educación",
    description: "Recursos y eventos para emprendedores SaaS",
    url: "https://www.saastr.com/",
    logo: "https://www.saastr.com/wp-content/uploads/2019/04/saastr-logo.png",
  },
];

