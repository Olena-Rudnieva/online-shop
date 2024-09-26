'use client';

// import { useProductsQuery } from "@/api/queries"; - from Database
import { ProductsSection, SubsribeSection } from '@/components';
import { products } from '@/utils';

export default function Products() {
  // const { data: products, isLoading } = useProductsQuery(); - from Database
  return (
    <main className="flex flex-col">
      <ProductsSection products={products} />
    </main>
  );
}
