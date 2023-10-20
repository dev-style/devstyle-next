import mongoose from "mongoose";

export interface ICart {
  [key: string]: IGoodieForCart;
}

export interface IGoodie extends IGoodieForCart {
  availableColors: string[];
  likes: number;
  views: number;
}

export interface IGoodieForCart {
  cartID: string;
  id: string;
  slug: string;
  name: string;
  mainImage: IUrlWithColor;
  quantity: number;
  price: number;
  inPromo: boolean;
  promoPercentage: number;
  images: IUrlWithColor[];
  backgroundColors: string[];
  selectedColor?: string;
  selectedSize?: string;
  fromCollection: ICollectionForCart;
  sizes: IGoodieSize[];
  color: string;
}

export interface IUrlWithColor extends IUrl {
  color: string;
}
export interface IGoodieSize {
  id: string;
  size: string;
}

export interface ICollectionForCart {
  id: string;
  slug: string;
  title: string;
}

export interface ICollection extends ICollectionForCart {
  colors: string;
  image: IUrl;
  views: number;
}

export interface IUrl {
  url: string;
}

export interface IAnnouncement {
  _id: string;
  link: string;
  text: string;
}

export interface IPartner {
  id: string;
  name: string;
  logoColor: IUrl;
  logoWhite: IUrl;
  logoBlack: IUrl;
  link: string;
  show: boolean;
}

export interface IAffiliation {
  ambassadorId: mongoose.Schema.Types.ObjectId;
  affiliateCode: string;
  affiliateLink: string;
  clicksCount: number;
  createdAt: Date;
}

export interface IAmbassador {
  id: string;
  name: string;
  image: IUrl;
  social: (ISocial & { link: string })[];
  colors: string;
  show: boolean;
}

export interface ISocial {
  id: number;
  name: string;
}
