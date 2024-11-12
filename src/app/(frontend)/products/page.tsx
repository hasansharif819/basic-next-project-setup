/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import ProductCard from "@/components/Products/ProductsCard";
import { useGetAllQuery } from "@/redux/api/productsApi";

const ProductPage = () => {
  const { data, isLoading } = useGetAllQuery({});

  if (isLoading) {
    <p>Loading...</p>;
  }

  const products = data?.data;

  return (
    <>
      <section className="bg-slate-600">
        <div className="container flex gap-5 py-5">
          <div className="flex flex-col gap-5 w-full">
            <div className="grid grid-cols-3 gap-5 ">
              {products?.map((product: any) => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </div>

            <button className="load-more-button mx-auto">
              load more products
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
