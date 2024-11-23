"use client";

import { ProductType } from "@/interfaces/product.type";
import React, { FC } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import OptimazeImage from "./image";
import { BsCurrencyDollar } from "react-icons/bs";
import { Button } from "./ui/button";
import { CiShoppingBasket } from "react-icons/ci";
import { DiscountStar } from "./ui/discount-star";
import { TbPercentage } from "react-icons/tb";
import DiscountPrice from "./discount-price";

const ProductBlog: FC<{ product: ProductType }> = ({ product }) => {
  console.log(product);

  return (
    <Card key={product.id}>
      <CardHeader className="relative p-2">
        {/* {product?.discount && (
          <DiscountStar className="bg-yellow-400 flex text-red-500 font-medium items-center justify-center w-16 h-16 absolute -top-4 -left-4">
            {product.discount} <TbPercentage />
          </DiscountStar>
        )} */}
        <div className="overflow-hidden rounded  mx-auto relative  w-[200px] xl:w-full h-[200px]">
          <OptimazeImage key={product.id} alt={product.title} src={product.img} fill className="mx-auto hover:scale-110" />
        </div>
      </CardHeader>
      <CardContent>
        {/* <span className="text-xs text-green-600 opacity-70">{product?.}</span> */}
        <div className="flex gap-2 items-start">
          <div>
            <CardTitle className="font-semibold text-gray-800 mb-2 dark:text-white">{product.title.slice(0, 15)}</CardTitle>
            {/* <CardDescription className="line-clamp-2 text-xs">{product.}</CardDescription> */}
          </div>
          {/* <DiscountPrice price={product.price} discount={product.discount} /> */}
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button variant={"outline"} className="gap-1 w-full" size={"sm"}>
          <IoEyeOutline className="h-5 w-5" /> More
        </Button>
        <Button className="gap-1 bg-green-500 w-full" size={"sm"}>
          <CiShoppingBasket className="h-5 w-5" /> Add to Card
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductBlog;
