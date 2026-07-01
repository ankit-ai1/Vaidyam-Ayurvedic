import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Flame } from "lucide-react";

export const metadata = {
  title: "Recipes",
  description: "Simple, Ayurveda-aligned recipes for everyday cooking.",
};

const RECIPES = [
  {
    title: "Golden Turmeric Milk",
    time: "10 min",
    dosha: "Vata-Pacifying",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1778449303540-3274878cdc85?q=80&w=800&auto=format&fit=crop",
    alt: "A cup of golden turmeric milk garnished with rose petals",
  },
  {
    title: "Kitchari for Gentle Digestion",
    time: "35 min",
    dosha: "Tridoshic",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?q=80&w=800&auto=format&fit=crop",
    alt: "A plate of yellow kitchari made with rice and lentils",
  },
  {
    title: "Cooling Cucumber Raita",
    time: "10 min",
    dosha: "Pitta-Pacifying",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?q=80&w=800&auto=format&fit=crop",
    alt: "A bowl of cooling cucumber yogurt raita",
  },
  {
    title: "Warming Ginger-Cumin Soup",
    time: "25 min",
    dosha: "Kapha-Pacifying",
    difficulty: "Medium",
    image: "https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?q=80&w=800&auto=format&fit=crop",
    alt: "A warming bowl of ginger-cumin soup",
  },
  {
    title: "Ashwagandha Energy Balls",
    time: "20 min",
    dosha: "Vata-Pacifying",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1678554500191-3885a6fbf8c2?q=80&w=800&auto=format&fit=crop",
    alt: "A wooden bowl of nuts and dates used for ashwagandha energy balls",
  },
  {
    title: "Triphala Digestive Tea",
    time: "5 min",
    dosha: "Tridoshic",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=800&auto=format&fit=crop",
    alt: "A clear glass mug of herbal triphala tea",
  },
];

export default function RecipesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Eat Well"
          title="Ayurvedic Recipes"
          description="Everyday recipes built around dosha balance, not restriction."
          breadcrumbs={[{ label: "Recipes" }]}
        />
        <div className="container-vaidyam py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECIPES.map((recipe) => (
              <Card key={recipe.title} className="overflow-hidden hover:shadow-lifted transition-shadow">
                <div className="aspect-[4/3] bg-gradient-to-br from-turmeric-400/15 to-sage-400/15 relative overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <Badge variant="gold">{recipe.dosha}</Badge>
                  <h3 className="font-display text-lg font-medium text-ink-900 mt-2">
                    {recipe.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-3 text-xs text-ink-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5" /> {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
