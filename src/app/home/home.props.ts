import { RoutePath } from "../enum/route-path.enum";
import { ProductCard } from "../model/product-card";

const jewelryCard: ProductCard = {
    productName: "Jewelry",
    imageFileName: "jewelry",
    viewMoreRoute: RoutePath.JEWELRY,
    description: "",
}

const nonJewelryCard: ProductCard = {
    productName: "Non Jewelry",
    imageFileName: "non-jewelry",
    viewMoreRoute: RoutePath.NONJEWELRY,
    description: "",
}

const shadowboxesCard: ProductCard = {
    productName: "Shadowboxes",
    imageFileName: "12-by-12-shadowbox",
    viewMoreRoute: RoutePath.SHADOWBOXES,
    description: "",
}

export const HOME_PAGE_PRODUCT_CARDS: Array<ProductCard> = [jewelryCard, nonJewelryCard, shadowboxesCard];