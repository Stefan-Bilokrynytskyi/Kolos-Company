export const findInfo = (color, product) => {
  const index = product.sizes_color_quantity.findIndex(
    (item) => item.hex === color
  );
  const slides = product.sizes_color_quantity[index].photo_urls;
  const colorName = product.sizes_color_quantity[index].color;
  let sizes = [];
  product.sizes_color_quantity.forEach((item) =>
    item.hex === color && item.quantity > 0 ? sizes.push(item.size) : null
  );
  const isProductAvailable =
    product.sizes_color_quantity.find((item) => item.hex === color).quantity >
    0;
  const priceActual = product.sizes_color_quantity[index].price_final;
  const priceDefault = product.sizes_color_quantity[index].price_default;
  return {
    slides,
    colorName,
    sizes,
    isProductAvailable,
    priceActual,
    priceDefault,
  };
};
