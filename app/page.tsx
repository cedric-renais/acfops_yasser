import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACFOPS",
  description:
    "Un organisme de formation professionnelle et continue au service du mouvement social.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="responsive-wrapper px-6 py-20 pt-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            ACFOPS
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto">
            Un organisme de formation professionnelle et continue au service du
            mouvement social
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="responsive-wrapper px-6">
          <h2 className="text-3xl text-center mb-16">
            Pourquoi choisir ACFOPS ?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-secondary">
                  Qui sommes-nous ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty">
                  L&apos;Académie de Formation Populaire et Sociale propose des
                  parcours conçus pour renforcer l&apos;efficacité et
                  l&apos;émancipation des acteurs du mouvement social.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-secondary">
                  Accompagnement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty">
                  Nous vous aidons dans toutes vos démarches (CPF, plan de
                  formation), prenons en charge l&apos;administratif et
                  facilitons vos échanges avec OPCO et directions.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-secondary">
                  Formations inclusives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty">
                  Un catalogue évolutif pour militantes, élues et salariées du
                  monde associatif et syndical, adapté aux besoins du terrain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
