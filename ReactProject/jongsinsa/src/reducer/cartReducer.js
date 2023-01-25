import { v4 as uuidv4 } from 'uuid';

const findItem = (cartItems, newItem) => {
  return cartItems.findIndex((element) => {
    return (
      element.item.productId === newItem.productId &&
      element.item.options === newItem.options
    );
  });
};

export default function cartReducer(cartItems, action) {
  const newItem = action.item;
  const findIdx = findItem(cartItems, newItem);
  switch (action.type) {
    case 'increase': {
      if (findIdx === -1) {
        return [
          ...cartItems,
          {
            id: uuidv4(),
            item: newItem,
            count: 1,
          },
        ];
      } else {
        return cartItems.map((item, index) => {
          if (findIdx === index) {
            return {
              ...item,
              count: item.count + 1,
            };
          } else {
            return item;
          }
        });
      }
    }
    case 'decrease': {
      if (findIdx === -1) {
        return [...cartItems];
      }
      if (cartItems[findIdx].count <= 1) {
        alert('1개 미만은 구매할 수 없습니다!');
        return [...cartItems];
      } else {
        return cartItems.map((item, index) => {
          if (findIdx === index) {
            return {
              ...item,
              count: item.count - 1,
            };
          } else {
            return item;
          }
        });
      }
    }
    case 'remove': {
      if (!newItem.id) {
        alert('올바르지 않은 삭제 요청입니다.');
        return [...cartItems];
      }
      return cartItems.filter((item) => item.id !== newItem.id);
    }
    default:
      return undefined;
  }
}
