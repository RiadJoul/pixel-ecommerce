'use client'
import { Order } from '@/Types';
import { randomUUID } from 'crypto';
import { createContext, useContext, useState } from 'react';

interface CartContextProps {
  cart: Order[];
  addToCart: (order: Order) => void;
  removeFromCart: (orderId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Order>();



  const addToCart = ({ products, customerEmail, customerAddress }: Order) => {
    const id = randomUUID()

    if (cart?.products.length == 0) {
      const order: Order = {
        orderId: id,
        products: products,
        customerEmail: customerEmail,
        customerAddress: customerAddress
      }

      setCart(order);
    }

  };

  const removeFromCart = (orderId: number) => {

  };

  const clearCart = () => {

  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};