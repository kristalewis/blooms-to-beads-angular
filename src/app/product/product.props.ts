import { RoutePath } from "../enum/route-path.enum";
import { ProductCard } from "../model/product-card";
import { ProductPage } from "../model/product-page";

const braceletCard: ProductCard = {
    productName: "Bracelet",
    imageFileName: "bracelet",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "One of my more popular items, bracelets are made from 12 beads and 12 sterling silver spacers that alternate on an elastic band. The elastic band makes them easy to put on or take off. They start at 7 1/2 inches long but can be made longer or shorter to fit any wrist size. Adding a bead and a spacer increases bracelet length by 1 inch. Bracelets are made to size at no extra charge.",
};

const pandoarBeadCard: ProductCard = {
    productName: "Pandora Bead",
    imageFileName: "pandora",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Already have a bracelet you love but want to add to it? Pandora beads are sure to add some extra charm. On a silver colored center, these beads make a cute addition to any bracelet.",
};

const necklaceCard: ProductCard = {
    productName: "Necklace",
    imageFileName: "necklace",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Necklaces have 3 beads and 2 sterling silver spacers that are strung on an 18 inch sterling silver chain. More beads and spacers can be added to them to make them whatever length you'd like. However many beads you want, these necklaces are an easy way to keep cherished memories close to your heart.",
};

const leatherBraceletCard: ProductCard = {
    productName: "Leather Bracelet",
    imageFileName: "leather-bracelet",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Three flower beads are highlighted on a leather band to create this distinctive bracelet for a male or female.",
};

const necklacePendantCard: ProductCard = {
    productName: "Necklace Pendant",
    imageFileName: "pendant",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "On a 16mm silver colored pendant, these are perfect if you already have a chain you love or if you perfer larger necklace pieces.",
};

const studEarringsCard: ProductCard = {
    productName: "Stud Earrings",
    imageFileName: "stud-earrings",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Put on sterling silver studs with matching sterling silver backs, these earrings are sensitive skin approved.",
};

const dropEarringsCard: ProductCard = {
    productName: "Drop Earrings",
    imageFileName: "drop-earrings",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "These drop earrings feature sterling silver earwires that hang about a half inch. Clear plastic pieces secure them from the back as to not take attention away from the earrings themselves.",
};

const jewelryPageLayout: ProductPage = {
    title: "Jewelry",
    productCards: [braceletCard, pandoarBeadCard, necklaceCard, leatherBraceletCard, necklacePendantCard, studEarringsCard, dropEarringsCard],
};

const suncatcherCard: ProductCard = {
    productName: "Suncatcher",
    imageFileName: "suncatcher",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Suncathers have 6 beads, 7 crystal spacers, and a charm of your choice strung on a clasped chain. The crystal spacers know how to catch the light just right, making these the perfect item to hang by a window or on a vehicle's rearview mirror.",
};

const bookmarkCard: ProductCard = {
    productName: "Bookmark",
    imageFileName: "bookmark",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Not interested in jewelry? No problem, these bookmarks have you covered! They're made with a black leather string that has a single bead on top and 3 beads on the bottom, bottomed off with a charm of your choice.",
};

const keychainCard: ProductCard = {
    productName: "Keychain",
    imageFileName: "keychain",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "These keychains are great for people who are always on the go. They feature 3 beads and your choice of charm. They easily hook to your keys with a 32mm swivel lobster clasp.",
};

const ornamentCard: ProductCard = {
    productName: "Ornament",
    imageFileName: "ornament",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Put in a clear shell and hanging on a 9in tall silver colored stand, these make classy additions to any coffee table, fireplace mantle or china cabinet. A singular flower is the focal point, making them simple yet bold pieces.",
};

const rosaryCard: ProductCard = {
    productName: "Rosary",
    imageFileName: "rosary",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "The basic rosary is a series of solid colored beads separated by crystal spacers linked together in the rosary pattern.",
};

const specialtyRosaryCard: ProductCard = {
    productName: "Specialty Rosary",
    imageFileName: "specialty-rosary",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "The specialty rosary features primuim swirled beads with sterling silver end caps and separators. This makes for a stunning rosary.",
};

const nonJewelryPageLayout: ProductPage = {
    title: "Non Jewelry",
    productCards: [suncatcherCard, bookmarkCard, keychainCard, ornamentCard, rosaryCard, specialtyRosaryCard],
};

const fiveBySevenShadowboxCard: ProductCard = {
    productName: "5 x 7 Shadowbox",
    imageFileName: "5-by-7-shadowbox",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "These are great if you want to preserve your flowers as a whole. They feature sawtooth hooks on the back so they can easily be mounted on a wall. These shadowboxes typically have one focal flower with smaller supporting foliage.",
};

const eightByTenShadowboxCard: ProductCard = {
    productName: "8 x 10 Shadowbox",
    imageFileName: "8-by-10-shadowbox",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "Also having sawtooth hooks on the back for hanging, these 8 by 10 shadowboxes can display a larger number of flowers. The designs for the 8 by 10's can get more intricate than the 5 by 7's becuase of the extra room to work with.",
};

const twelveByTwelveShadowboxCard: ProductCard = {
    productName: "12 x 12 Shadowbox",
    imageFileName: "12-by-12-shadowbox",
    viewMoreRoute: null,
    hasViewMoreButton: false,
    description: "These are the most popular shadowboxes I make. They can display a large number of flowers, making the design possibilities endless. A common request for these is to re-create a bride's bouquet. As with the other shadowboxes, they too have sawtooth hooks on the back for easy hanging.",
};

const shadowboxsPageLayout: ProductPage = {
    title: "Shadowboxes",
    productCards: [fiveBySevenShadowboxCard, eightByTenShadowboxCard, twelveByTwelveShadowboxCard],
};

export const PRODUCT_PAGE_PRODUCT_CARDS: Map<RoutePath, ProductPage> =  new Map([
    [RoutePath.JEWELRY, jewelryPageLayout],
    [RoutePath.NONJEWELRY, nonJewelryPageLayout],
    [RoutePath.SHADOWBOXES, shadowboxsPageLayout],
]);