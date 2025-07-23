import { Button } from "@/components/ui";
import { GraduationCap, LayoutDashboard, LogOut, Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-background/90 shadow-lg backdrop-blur-md py-2 px-2">
      <nav
        className="responsive-wrapper flex h-16 items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <div className="flex items-center rounded">
          <Image
            src="/images/logo.webp"
            alt="Logo ACFOPS."
            width={180}
            height={60}
            className="h-auto w-40"
            priority
          />
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <Button
              variant="outline"
              size="lg"
              className="group cursor-default"
              tabIndex={-1}
              type="button"
            >
              <GraduationCap className="mr-2 h-5 w-5" aria-hidden="true" />
              Formations
            </Button>
          </li>
          <li>
            <Button
              variant="outline"
              size="lg"
              className="group cursor-default"
              tabIndex={-1}
              type="button"
            >
              <LayoutDashboard className="mr-2 h-5 w-5" aria-hidden="true" />
              Tableau de bord
            </Button>
          </li>
          <li>
            <Button
              variant="destructive"
              size="lg"
              className="group cursor-default"
              tabIndex={-1}
              type="button"
            >
              <LogOut className="mr-2 h-5 w-5" aria-hidden="true" />
              Déconnexion
            </Button>
          </li>
        </ul>

        {/* Menu mobile */}
        <div className="md:hidden">
          <div className="flex items-center justify-center h-12 w-12">
            {/* Icône menu mobile Lucide */}
            <Menu
              className="size-8 text-primary-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
