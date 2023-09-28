export interface CartContextProviderProps {
  children: JSX.Element;
}

export type Action =
  | { type: "SET_CART"; payload: Cart }
  | { type: "ADD_TO_CART"; payload: GoodieForCart }
  | { type: "UPDATE_QUANTITY"; payload: { cartID: string; quantity: number } }
  | { type: "DELETE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART"; payload: null };

export interface CartContent {
  cartContent: Cart;
  cartDispatch: React.Dispatch<Action>;
}

export type State = CartContent;
