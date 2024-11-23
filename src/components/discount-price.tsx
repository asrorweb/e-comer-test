import { FC } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

interface PropsType {
  price: number;
  discount?: number;
}

const DiscountPrice: FC<PropsType> = ({ price, discount }) => {
  return (
    <div className="flex items-center">
      {discount ? (
        <>
          <BsCurrencyDollar />
          <span className="relative">
            <span className="font-medium line-through decoration-black  text-red-500">{price}</span>
            <span className="absolute -top-full right-3 animate-pulse text-green-500 underline flex items-center -rotate-12">
              <BsCurrencyDollar /> {price - price * (discount / 100)}
            </span>
          </span>
        </>
      ) : (
        <>
          <BsCurrencyDollar /> <span className="font-medium">{price}</span>
        </>
      )}
    </div>
  );
};

export default DiscountPrice;
