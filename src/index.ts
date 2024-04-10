import { Product } from "./product";

const product = [
  new Product(
    1,
    "圖像 Angular 開發入門 第二版",
    "博碩文化",
    500,
    true,
    new Date(2024, 3, 10)
  ),
  new Product(
    1,
    "金魚都能懂的 CSS 必學屬性",
    "博碩文化",
    500,
    true,
    new Date(2024, 3, 10)
  ),
];
setProductDisplay(product[1], false);
console.log(product);

function setProductDisplay(product: Product, isShow: boolean) {
  product.isShow = isShow;
}
