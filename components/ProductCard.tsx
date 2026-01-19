

import { Product } from "@/lib/type/product"
import Image from "next/image"
import { Badge } from "./ui/badge"


export function ProductCard({ product }: { product: Product }   ) {
  const mainImage = product.images?.[0];
    if(!mainImage.startsWith('https://')){
        return null
    }
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={mainImage || '/placeholder.svg'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute left-3 top-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {product.category.name}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground">
            {product.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        </div>

        <div className="mt-4">
          <span className="text-2xl font-bold text-foreground">
            ${product.price}
          </span>
        </div>
      </div>
    </div>
  )
}