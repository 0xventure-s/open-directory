import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Heart,
  MessageCirclePlus,
  NotebookText,
  ShoppingBag,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay para cerrar el menú en pantallas pequeñas */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 overflow-y-auto`}
      >
        <div className="flex flex-col h-full">
          <div className="sticky top-0 z-10 bg-white">
            <div className="flex h-[80px] items-center border-b px-6">
              <Link className="flex items-center font-bold" href="/">
                <Image
                  src="/arbanner.png"
                  width={170}
                  height={170}
                  quality={100}
                  alt="imagen"
                  className="mb-2 object-contain w-[170px] h-auto"
                  priority // Añadir si es imagen importante
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
            <Button
              variant="ghost"
              className="absolute top-2 right-2 md:hidden"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2 p-2">
              <Link href="/startups">
                <Button
                  variant={pathname === "/startups" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={onClose}
                >
                  <Building2 className="h-4 w-4" />
                  Startups
                </Button>
              </Link>
              <Link href="/resources">
                <Button
                  variant={pathname === "/resources" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={onClose}
                >
                  <BookOpen className="h-4 w-4" />
                  Recursos
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant={pathname === "/" ? "ghost" : "ghost"}
                  className={`w-full justify-start gap-2 ${pathname === "/" ? '' : 'text-gray-500'}`}
                  onClick={onClose}
                  disabled
                >
                  <Users className="h-4 w-4" />
                  Builders (-)
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant={pathname === "/" ? "ghost" : "ghost"}
                  className={`w-full justify-start gap-2 ${pathname === "/" ? '' : 'text-gray-500'}`}
                  onClick={onClose}
                  disabled
                >
                  <Briefcase className="h-4 w-4" />
                  Venture Capitals (-)
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant={pathname === "/events" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                  disabled
                >
                  <Calendar className="h-4 w-4" />
                  Eventos (-)
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant={pathname === "/shop" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                  onClick={onClose}
                  disabled
                >
                  <ShoppingBag className="h-4 w-4" />
                  Shop (-)
                </Button>
              </Link>
            </div>
            <div className="border-t border-l-0 w-5/6 self-center bg-red-500 my-2"></div>
            <div className="flex flex-col gap-2 p-2">
              <Link href="/favorites">
                <Button
                  variant={pathname === "/favorites" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Mis Favoritos
                </Button>
              </Link>
              <Link href="/aracc">
                <Button
                  variant={pathname === "/aracc" ? "link" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <NotebookText className="h-4 w-4" />
                  Sobre Ar/acc
                </Button>
              </Link>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t p-4">
            <Link href={"https://wa.me/+543834293512"} target="_blank">
              <Button
                className="w-full gap-2 hover:bg-blue-400 hover:transition-all hover:text-white"
                variant="outline"
              >
                <MessageCirclePlus className="h-4 w-4" />
                Feedback
              </Button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
