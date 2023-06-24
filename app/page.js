import ProductCard from './ProductCard';
import { getStripeProducts } from '@/lib/getStripeProducts';

export default async function Home() {
  const products = await getStripeProducts();

  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1
      sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, productIndex) => {
          
          return (
            <ProductCard key={productIndex} product={product}/>
          )

        })}
      </div>
    </main>
  )
}