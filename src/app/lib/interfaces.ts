interface Cart {
  [key: string]: GoodieForCart;
}

interface Goodie extends GoodieForCart {
  availableColors: string[];
  likes: number;
  views: number;
}

interface GoodieForCart {
  cartID: string;
  id: string;
  slug: string;
  name: string;
  mainImage: Url;
  quantity: number;
  price: number;
  inPromo: boolean;
  promoPercentage: number;
  images: Url[];
  backgroundColors: string[];
  selectedColor?: string;
  selectedSize?: string;
  fromCollection: CollectionForCart;
  size: GoodieSize;
  color: string;
}

interface GoodieSize {
  id: string;
  size: string;
}

interface CollectionForCart {
  id: string;
  slug: string;
  title: string;
}

interface Collection extends CollectionForCart {
  colors: string;
  images: Url;
  views: number;
}

interface Url {
  url: string;
}

interface Announcement {
  id: string;
  link: string;
  text: string;
}

interface Partner {
  id: string;
  name: string;
  logoColor: Url;
  logoWhite: Url;
  logoBlack: Url;
  link: string;
  show: boolean;
}
