import { useSelector } from "react-redux";

export default function UserAuth() {
  const { user } = useSelector((state: any) => state.auth);

  console.log("voici la valeur de l'user : ", user);

  if (user.name) {
    return true;
  } else {
    return false;
  }
}
