import { getProductById } from "@/lib/data/getData";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Product } from "@/lib/type/product";

export default async function Detail({product}: {product: Product}) {

  
    return (
         <main className="min-h-screen bg-background py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images?.[0] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category.name}</Badge>
              <h1 className="text-4xl font-bold">{product.title}</h1>
            </div>

            <p className="text-3xl font-bold">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-2 border-t pt-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID</span>
                <span className="font-medium">#{product.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SKU</span>
                <span className="font-medium">{product.slug}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
}