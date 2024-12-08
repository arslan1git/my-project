"use client";
import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import Newsletter from "@/components/sections/Newsletter";

type CartItem = {
  id: number;
  image: string;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number; // Add quantity property
};

const mockCartItems: CartItem[] = [
  {
    id: 1,
    image: "/cart1.png",
    name: "T-Shirt",
    size: "Medium",
    color: "Red",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    image: "/arrival3.png",
    name: "Hoodie",
    size: "Large",
    color: "Black",
    price: 80,
    quantity: 1,
  },
  {
    id: 3,
    image: "/arrival2.png",
    name: "Jeans",
    size: "32",
    color: "Blue",
    price: 100,
    quantity: 1,
  },
];

function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(20);

  const handleApplyPromo = () => {
    if (promoCode.trim() === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid promo code.");
      setDiscount(0);
    }
  };

  const handleQuantityChange = (
    itemId: number,
    action: "increment" | "decrement"
  ) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(
                1,
                action === "increment" ? item.quantity + 1 : item.quantity - 1
              ),
            }
          : item
      )
    );
  };

  const handleDeleteItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const deliveryFee = 5; // Flat delivery fee
  const subtotal = calculateSubtotal();
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-6 lg:px-16">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Product List */}
        <div className="w-full lg:w-3/4 bg-white p-4 border shadow-md rounded-lg">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4 gap-4"
            >
              {/* Left side: Product details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                  <p className=" font-semibold">${item.price}</p>
                </div>
              </div>

              {/* Right side: Price, Quantity, Delete */}
              <div className="flex flex-col items-end gap-12">
                {/* Price */}

                {/* Delete Button */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
                {/* Quantity Buttons */}
                <div className="flex bg-slate-200 rounded-full items-center gap-2">
                  <button
                    className="px-2 py-1 bg-transparent hover:bg-slate-300"
                    onClick={() => handleQuantityChange(item.id, "decrement")}
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    className="px-2 py-1  bg-transparent hover:bg-slate-300"
                    onClick={() => handleQuantityChange(item.id, "increment")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-2/3 bg-white p-4 border shadow-md rounded-md mt-4 lg:mt-0">
          <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold text-lg">${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span className="font-semibold text-red-500 text-lg">-${discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee:</span>
              <span className="font-semibold text-lg">${deliveryFee}</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="flex gap-4 mt-4">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="border w-2/3 border-gray-300 rounded-full px-4 text-sm"
              placeholder="Enter promo code"
            />
            <button
              onClick={handleApplyPromo}
              className="px-10 py-2 bg-black hover:bg-gray-800 text-white rounded-full"
            >
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-4 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full">
            Go to Checkout
          </button>
        </div>
      </div>
      <section className="mt-20">
      <Newsletter/>
      </section>
    </div>
  );
}

export default CartPage;
