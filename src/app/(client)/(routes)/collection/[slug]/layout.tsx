import { Metadata } from "next";
import Page from "./page";
import myAxios from "@/app/(client)/lib/axios.config";

interface ICollectionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ICollectionPageProps): Promise<Metadata> {
  const response = myAxios.get("/collection/goodies/" + params.slug);
  const collection = (await response).data.message;

  return {
    title: `Collection ${collection.collection.title}`,
    description:
      "Nous espérons vivement que lorsque votre ou vos articles favoris arriveront de la boutique, vous ressentirez le même esprit d'originalité et d'euphorie que nous🤗. #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie #devStyle #devAttitude",
  };
}

const Layout = ({ params }: ICollectionPageProps) => {
  return <Page slug={params.slug} />;
};
export default Layout;
