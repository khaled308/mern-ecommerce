export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const { cart } = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(cart));

  return result;
};
