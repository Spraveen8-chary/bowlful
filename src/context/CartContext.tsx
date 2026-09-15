import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  id: string;
  items: CartItem[];
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  landmark: string;
  pincode: string;
  paymentMethod: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  status: 'PLACED' | 'PREPARING' | 'PACKED' | 'OUT_FOR_DELIVERY' | 'DELIVERED';
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isTrackerOpen: boolean;
  setIsTrackerOpen: (open: boolean) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  activeOrder: OrderDetails | null;
  placeOrder: (customerData: Omit<OrderDetails, 'id' | 'items' | 'subtotal' | 'deliveryFee' | 'total' | 'createdAt' | 'status'>) => void;
  subtotal: number;
  deliveryFee: number;
  total: number;
  totalItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bowlful_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeOrder, setActiveOrder] = useState<OrderDetails | null>(() => {
    try {
      const saved = localStorage.getItem('bowlful_active_order');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Lock background scroll when any modal or drawer is active
  useEffect(() => {
    const isAnyModalOpen = isCartOpen || isCheckoutOpen || isTrackerOpen || selectedProduct !== null;
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen, isCheckoutOpen, isTrackerOpen, selectedProduct]);

  useEffect(() => {
    try {
      localStorage.setItem('bowlful_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    if (activeOrder) {
      try {
        localStorage.setItem('bowlful_active_order', JSON.stringify(activeOrder));
      } catch (e) {
        console.error(e);
      }
    }
  }, [activeOrder]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal === 0 ? 0 : subtotal >= 500 ? 0 : 35;
  const total = subtotal + deliveryFee;
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const placeOrder = (customerData: Omit<OrderDetails, 'id' | 'items' | 'subtotal' | 'deliveryFee' | 'total' | 'createdAt' | 'status'>) => {
    const newOrder: OrderDetails = {
      ...customerData,
      id: `BWL-${Math.floor(100000 + Math.random() * 900000)}`,
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'PLACED',
    };

    setActiveOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    setIsTrackerOpen(true);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isTrackerOpen,
        setIsTrackerOpen,
        selectedProduct,
        setSelectedProduct,
        activeOrder,
        placeOrder,
        subtotal,
        deliveryFee,
        total,
        totalItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
