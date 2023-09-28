export const importAll = (paths: { [index: string]: string }) => {
  let images: { [index: string]: string } = {};
  Object(paths)
    .keys()
    .map(
      (item: string, index: string) =>
        (images[item.replace("./", "")] = paths[item])
    );
  return images;
};

export const calculatePromoPrice = (price: number, promoPercentage: number) =>
  Number((price - (price * promoPercentage) / 100).toFixed(0));

export const scrollToTop = () => {
  try {
    if (document.querySelector("body")) {
      document.querySelector("body")?.scrollIntoView(true);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTotalPrice = (cart: Cart) => {
  let total = Object.values(cart).reduce(
    (acc, goodie, i) =>
      (acc +=
        goodie.quantity *
        (goodie.inPromo
          ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
          : goodie.price)),
    0
  );

  return total;
};

export const getCartCount = (cart: Cart) => {
  let count = Object.entries(cart).length;
  return count;
};
