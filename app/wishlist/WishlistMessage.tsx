"use client";
import React, { useEffect, useState } from "react";

const WishlistMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleShowMessage = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    };

    window.addEventListener("wishlist:add", handleShowMessage);

    return () => {
      window.removeEventListener("wishlist:add", handleShowMessage);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">
      Item added to wishlist
    </div>
  );
};

export default WishlistMessage;
