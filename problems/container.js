const findSuitableContainer = (containers, products, order) => {
  // compute the total volume of the order
  let totalOrderVolume = 0;
  order.forEach((item) => {
    const { length, breadth, height } = products.find(
      (productItem) => productItem.productId === item.productId
    );
    totalOrderVolume += length * breadth * height * item.quantity;
  });

  for (let { id, length, breadth, height } of containers) {
    let containerVolume = length * breadth * height;
    if (containerVolume >= totalOrderVolume) {
      return id;
    }
  }

  return -1;
};

const maxOrderFitInAContainer = (container, products, orders) => {
  let totalOrderVolume = 0;
  orders.forEach((order) => {
    const { length, breadth, height } = products.find(
      (productItem) => productItem.productId === order.productId
    );

    totalOrderVolume += length * breadth * height * order.quantity;
  });

  let containerVolume = container.length * container.breadth * container.height;

  return Math.floor(containerVolume / totalOrderVolume);
};

const containers = [
  { id: 1, length: 20, breadth: 20, height: 30 },
  { id: 2, length: 50, breadth: 60, height: 70 },
  { id: 3, length: 100, breadth: 200, height: 300 },
];

const products = [
  { productId: 1, length: 2, breadth: 4, height: 10 },
  { productId: 2, length: 10, breadth: 30, height: 4 },
  { productId: 3, length: 5, breadth: 6, height: 7 },
];

const order = [
  { productId: 1, quantity: 3 },
  { productId: 2, quantity: 7 },
];

console.log(findSuitableContainer(containers, products, order));
console.log(maxOrderFitInAContainer(containers[0], products, order));
