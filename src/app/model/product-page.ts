import { ProductCard } from "./product-card";

export interface ProductPage {
    title: string;
    productCards: Array<ProductCard>;
}