import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext(null);

// Create the provider component
const CartContextProvider = ({ children }) => {
  const [cartActive, setCartActive] = useState(false);

  const contextValue = {
    cartActive,
    setCartActive,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
