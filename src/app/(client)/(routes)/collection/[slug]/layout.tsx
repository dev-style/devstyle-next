import { Metadata } from "next";
import Page from "./page";
import myAxios from "@/app/(client)/lib/axios.config";

export async function generateMetadata({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const response = myAxios.get("/collection/goodies/" + slug);
  const collection = (await response).data.message;

  return {
    title: `Collection ${collection.collection.title}`,
    description:
      "Nous espérons vivement que lorsque votre ou vos articles favoris arriveront de la boutique, vous ressentirez le même esprit d'originalité et d'euphorie que nous🤗. #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie #devStyle #devAttitude",
  };
}

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

const Layout = ({ params: { slug } }: CollectionPageProps) => {
  return <Page slug={slug} />;
};
export default Layout;
