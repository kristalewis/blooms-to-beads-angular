import { RoutePath } from "../enum/route-path.enum";
import { HomePageProductCard } from "../model/home-page-product-card";

const jewelryCard: HomePageProductCard = {
    productName: "Jewelry",
    imageFileName: "jewelry",
    viewMoreRoute: RoutePath.JEWELRY,
    isShortImage: false,
}

const nonJewelryCard: HomePageProductCard = {
    productName: "Non Jewelry",
    imageFileName: "non-jewelry",
    viewMoreRoute: RoutePath.NONJEWELRY,
    isShortImage: false,
}

const shadowboxesCard: HomePageProductCard = {
    productName: "Shadowboxes",
    imageFileName: "12-by-12-shadowbox",
    viewMoreRoute: RoutePath.SHADOWBOXES,
    isShortImage: true,
}


export const HOME_PAGE_PRODUCT_CARDS: Array<HomePageProductCard> = [jewelryCard, nonJewelryCard, shadowboxesCard];