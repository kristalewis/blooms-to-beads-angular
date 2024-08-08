import { RoutePath } from "../enum/route-path.enum";
import { ProductCard } from "../model/product-card";

const jewelryCard: ProductCard = {
    productName: "Jewelry",
    imagePath: "assets/jewelry.jpg",
    viewMoreRoute: RoutePath.JEWELRY,
    hasViewMoreButton: true,
    description: "",
}

const nonJewelryCard: ProductCard = {
    productName: "Non Jewelry",
    imagePath: "assets/non-jewelry.jpg",
    viewMoreRoute: RoutePath.NONJEWELRY,
    hasViewMoreButton: true,
    description: "",
}

const shadowboxesCard: ProductCard = {
    productName: "Shadowboxes",
    imagePath: "assets/12-by-12-shadowbox.jpg",
    viewMoreRoute: RoutePath.SHADOWBOXES,
    hasViewMoreButton: true,
    description: "",
}

const charmsCard: ProductCard = {
    productName: "Charms",
    imagePath: "assets/charms.jpg",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "For items that feature a charm - a cross, a heart, or an angel are available. Alternative charms can be used upon request.",
}

const siwrlBeadsCard: ProductCard = {
    productName: "Swirled Beads",
    imagePath: "assets/swirled-beads.jpg",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Swirled beads have waves of white intermingled with the flowers to emphasize the coloration of the beads. Any bead product can be upgraded to have swirled beads.",
}

export const HOME_PAGE_PRODUCT_CARDS: Array<ProductCard> = [jewelryCard, nonJewelryCard, shadowboxesCard, charmsCard, siwrlBeadsCard];