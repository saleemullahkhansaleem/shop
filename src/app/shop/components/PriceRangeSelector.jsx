"use client";

import { useState } from "react";

export default function PriceRangeSelector() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center mt-2">
        <input
          type="number"
          min={0}
          max={maxPrice}
          className="border border-gray-300 rounded-md w-full p-2 mr-4"
          value={minPrice}
          onChange={(e) => {
            e.target.value >= 0 &&
              e.target.value <= maxPrice &&
              setMinPrice(e.target.value);
          }}
          placeholder="Min"
        />
        <span className="text-gray-500">to</span>
        <input
          type="number"
          min={minPrice}
          max={999}
          className="border border-gray-300 rounded-md w-full p-2 ml-4"
          value={maxPrice}
          onChange={(e) => {
            e.target.value >= minPrice &&
              e.target.value <= 999 &&
              setMaxPrice(e.target.value);
          }}
          placeholder="Max"
        />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-primary"
        />
        <input
          type="range"
          min={minPrice}
          max={999}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 appearance-none cursor-pointer accent-primary"
        />
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Selected range: ${minPrice} - ${maxPrice}
      </div>
    </div>
  );
}
