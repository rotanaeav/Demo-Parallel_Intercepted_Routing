import { Product } from "@/lib/type/product";
import Image from "next/image";
import Link from "next/link";
import { BackButton } from "./BackButton";

export default function ProductDetailModal({ product }: { product: Product }) {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-lg w-full flex flex-col items-center">
                <Image
                  src={product.images?.[0] || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="rounded"
                />
                <h2 className="text-xl font-bold mt-4">{product.title}</h2>
                <div className="flex gap-4 pt-2 justify-end">
          <BackButton />
          <a
        href={`/product/${product.id}`}
        className="px-4 py-2 bg-blue-600 text-white rounded"
         >
        View Full Page
        </a>

                </div>
              </div>
               
            </div>
    )
}