import Detail from "@/components/Detail";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { getProductById } from "@/lib/data/getData";
import Image from "next/image";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params; // ✅ unwrap the Promise

  const product = await getProductById(Number(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
   <Detail product={product} />
  );
}
