import { createContext, useReducer } from "react";
import { DUMMY_Products } from "../Pages/Products/dummy-products.js";
export const CartContext = createContext({
  items: [],
  subTotal:0,
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});
function shoppingCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload,
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      console.log(DUMMY_Products);
      const product = DUMMY_Products.find(
        (product) => product.id === action.payload,
      );
      updatedItems.push({
        id: action.payload,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        sku: product.sku,
      });
    }

    return {
      ...state, //not needed here because we have only one value
      items: updatedItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "DELETE_ITEM") {
    const updatedItems = [...state.items];
    const deletedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId,
    );
    updatedItems.splice(deletedItemIndex, 1);

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}
export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    },
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }
  function handleDeleteItemFromCart(id) {
    shoppingCartDispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

   const totalPrice = shoppingCartState.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const CtxValue = {
    items: shoppingCartState.items,
    subTotal:totalPrice,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    deleteItemFromCart: handleDeleteItemFromCart,
  };
  return (
    <CartContext.Provider value={CtxValue}>{children}</CartContext.Provider>
  );
}
