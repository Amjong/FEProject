const findItem = (cartItems, newItem) => {
  return cartItems.findIndex((element) => {
    return element.item.id === newItem.id;
  });
};

export default function cartReducer(cartItems, action) {
  const newItem = action.item;
  switch (action.type) {
    case 'add': {
      const findIdx = findItem(cartItems, newItem);
      if (findIdx === -1) {
        return [
          ...cartItems,
          {
            item: newItem,
            count: 1,
          },
        ];
      } else {
        return cartItems.map((item, index) => {
          if (findIdx === index) {
            return {
              item: item.item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        });
      }
    }
    case 'remove': {
      const findIdx = findItem(cartItems, newItem);
      if (findIdx === -1) {
        return [...cartItems];
      }
      if (cartItems[findIdx].count <= 1) {
        return cartItems.filter((item, index) => index !== findIdx);
      } else {
        return cartItems.map((item, index) => {
          if (findIdx === index) {
            return {
              item: item.item,
              count: item.count - 1,
            };
          } else {
            return item;
          }
        });
      }
    }
    default:
      return undefined;
  }
}
