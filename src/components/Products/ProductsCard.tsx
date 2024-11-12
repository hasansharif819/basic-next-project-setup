/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState } from "react";

// Define the Product type
interface Product {
  id: string;
  title: string;
  featuredImg: string;
  payablePrice: number;
  unitPrice: number;
  discount?: number;
  discountType?: string;
}

// Use the interface for typing in ProductCard
const ProductCard = ({ product }: { product: Product }) => {
  const [isInWishList, setIsInWishList] = useState(false);
  return (
    <div className="px-4 py-3 flex flex-col relative overflow-hidden w-[355px] h-[547px] group duration-300 space-y-3 card-wrap product-card-shadow">
      <div className="w-[315px] h-[370px] flex justify-center mx-auto overflow-hidden relative">
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
          <img
            src={product.featuredImg}
            alt="Product Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      s
      <p className="space-x-3 text-base">
        <span>৳ {product.payablePrice}</span>
        <span className="line-through text-muted">৳ {product.unitPrice}</span>
        {product.discount && (
          <span className="inline-flex items-center text-xs pl-2 w-20 discountBadge">
            -{" "}
            {product.discount +
              `${product.discountType !== "Amount" ? "%" : "৳"}`}
          </span>
        )}
      </p>
      <p className="text-sm font-normal hover:underline line-clamp-2">
        {product.title}
      </p>
      <div className="absolute bg-white/70 inset-0 duration-500 opacity-0 group-hover:opacity-100 invisible group-hover:visible flex flex-col gap-5 items-center justify-center px-[90px] ">
        <button
          onClick={() => {
            setIsInWishList(!isInWishList);
          }}
          className="text-sm rounded-full border border-[#1B8058] text-[#1B8058] flex items-center gap-2 px-5 py-3 w-full justify-center overflow-hidden text-nowrap"
        >
          Add to Wishlist
        </button>

        <button
          onClick={() => {
            // Add to cart logic
          }}
          className="text-sm rounded-full bg-[#1B8058] text-[#F3F9F5] flex items-center gap-2 px-5 py-3 w-full justify-center overflow-hidden text-nowrap"
        >
          Add to cart
        </button>

        <Link
          href={`/products/${product.id}`}
          className="text-sm rounded-full bg-white shadow-md text-[#1B8058] flex items-center gap-2 px-5 py-3 w-full justify-center overflow-hidden text-nowrap"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
