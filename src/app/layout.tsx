import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import "animate.css";
import { useGetAllGoodiesQuery } from "./admin/redux/features/goodies/goodiesApi";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: {
    template: "%s | La premiere boutique dedié aux amoureux de la Tech #TT237",
    default:
      "_DevStyle | La premiere boutique dedié aux amoureux de la Tech #TT237",
  },
  description:
    "Devstyle est une platforme de vente des Tshirts, Stickers, Hoodies, Mugs, Hats, Sweatshirts, Polos, Posters, et Bracelets pour les amoureux de la Tech #TT237",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { isLoading, data, refetch } = useGetAllGoodiesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );


  return (
    <html lang="en">
      <body className={(poppins.className, robotoSlab.className)}>
        {children}
      </body>
    </html>
  );
}
