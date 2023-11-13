import { ICart, IGoodieForCart } from "@/app/lib/interfaces";

export interface CartContextProviderProps {
  children: JSX.Element;
}

export type Action =
  | { type: "SET_CART"; payload: ICart }
  | { type: "ADD_TO_CART"; payload: IGoodieForCart }
  | { type: "UPDATE_QUANTITY"; payload: { cartID: string; quantity: number } }
  | { type: "DELETE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART"; payload: null };

export interface CartContent {
  cartContent: ICart;
  cartDispatch: React.Dispatch<Action>;
}

export type State = CartContent;
