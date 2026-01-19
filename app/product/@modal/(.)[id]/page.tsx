import ProductDetailModal from "@/components/ProductDetailModal";
import { getProductById } from "@/lib/data/getData";
import Image from "next/image";

export default async function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) return null;

  return (
   <ProductDetailModal product={product} />
  );
}
