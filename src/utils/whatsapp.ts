import type { Product } from '../data/products';
import type { CartItem } from '../context/CartContext';

export const WHATSAPP_NUMBER = '919347506301';
export const WHATSAPP_DISPLAY_PHONE = '+91 9347506301';

export const getWhatsAppProductUrl = (product: Product, quantity: number = 1): string => {
  const totalPrice = product.price * quantity;
  const ingredientsStr = product.ingredients.join(', ');

  const message = `Hi Bowlful! 👋 I would like to order:

🍉 *${product.name}* (${product.size})
• Quantity: ${quantity}
• Total Price: ₹${totalPrice}
• Fresh Fruits: ${ingredientsStr}

Please confirm my order and share delivery timing for Hyderabad. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppCartUrl = (cart: CartItem[], total: number): string => {
  const itemsText = cart
    .map(
      (item) =>
        `• *${item.product.name}* (${item.product.size}) x${item.quantity} - ₹${item.product.price * item.quantity}`
    )
    .join('\n');

  const message = `Hi Bowlful! 👋 I would like to place an order:

${itemsText}

*Total Amount: ₹${total}*

Please confirm my order and delivery details for Hyderabad. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppGeneralUrl = (customMessage?: string): string => {
  const text = customMessage || `Hi Bowlful! 👋 I would like to order fresh-cut fruit bowls in Hyderabad.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};
