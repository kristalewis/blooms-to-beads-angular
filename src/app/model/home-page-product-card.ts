import { RoutePath } from "../enum/route-path.enum";

export interface HomePageProductCard {
    productName: string;
    imageFileName: string;
    viewMoreRoute: RoutePath;
    isShortImage: boolean;
}