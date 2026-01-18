
import { ProductCard } from "@/components/ProductCard";
import fetchProducts from "@/lib/data/getData";
import { Product } from "@/lib/type/product";
import { Link } from "lucide-react";

export default async function ProductListPage() {
    const data: Product[] = await fetchProducts();
    return (
            <Link href="/product"
             className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            
            </Link>
    );
}
