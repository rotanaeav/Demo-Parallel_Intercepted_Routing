import { Product } from "../type/product";
const url = `${process.env.NEXT_PUBLIC_API_URL}`;

export default async function fetchProducts(){
    const res = await fetch(`${url}/products`);
    const products: Product[] = await res.json();
    return products;
}

export async function getProductById(id: number){
    const res = await fetch(`${url}/products/${id}`);
    const product: Product = await res.json();
    return product;
}