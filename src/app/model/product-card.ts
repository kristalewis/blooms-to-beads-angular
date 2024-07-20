import { RoutePath } from "../enum/route-path.enum";

export interface ProductCard {
    productName: string;
    imageFileName: string;
    viewMoreRoute: RoutePath | null;
    hasViewMoreButton: boolean;
    description: string | null;
}