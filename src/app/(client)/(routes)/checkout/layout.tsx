import { Metadata } from "next";
import Page from "./page";

export const metadata: Metadata = {
  title: "Pannier",
  description:
    "Nous espérons vivement que lorsque votre ou vos articles favoris arriveront de la boutique, vous ressentirez le même esprit d'originalité et d'euphorie que nous🤗. #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie #devStyle #devAttitude",
};

const Layout = () => {
  return <Page />;
};
export default Layout;
