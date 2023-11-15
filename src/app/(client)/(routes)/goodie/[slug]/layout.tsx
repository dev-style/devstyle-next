import { Metadata } from "next";
import Page from "./page";
import myAxios from "@/app/(client)/lib/axios.config";
import { calculatePromoPrice } from "@/app/(client)/lib/utils-script";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const response = myAxios.get("/goodie/" + params.slug);
  const goodie = (await response).data.message;

  return {
    title: `${goodie?.name}`,
    description: `Un Goodie de chez _DevStyle | Collection: ${
      goodie?.fromCollection.title
    } Prix promo: ${
      goodie?.inPromo
        ? calculatePromoPrice(goodie?.price, goodie?.promoPercentage)
        : goodie?.price
    } FCFA`,
  };
}

const Layout = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return <Page slug={params.slug} />;
};
export default Layout;
