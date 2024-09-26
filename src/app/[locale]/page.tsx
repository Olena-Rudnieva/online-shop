'use client';

// import { useProductsQuery } from '@/api/queries'; - from Database
import { FeaturedProducts, Hero, ReviewSection } from '@/components';
import { products, reviews } from '@/utils';

export default function Home() {
  // const { data: products, isLoading } = useProductsQuery(); - from Database

  return (
    <main className="flex flex-col">
      <Hero />
      <FeaturedProducts products={products} />
      <ReviewSection reviews={reviews} />
    </main>
  );
}
