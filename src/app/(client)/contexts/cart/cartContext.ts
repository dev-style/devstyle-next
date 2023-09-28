import { createContext } from "react";

import { CartContent } from "./cartInterface";

const CartContext = createContext<CartContent>({
  cartContent: {},
  cartDispatch: () => null,
});

export default CartContext;
