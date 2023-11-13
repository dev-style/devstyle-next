import { useState } from "react";
import DashboardHeader from "./DashboardHeader";

type Props = {
  isDashboard: boolean;
};

const DashboardHero = ({ isDashboard }: Props) => {

    const [open , setOpen] = useState(false)

  return (
    <div>
    <DashboardHeader open={open} setOpen={setOpen} />
    {
      isDashboard && (
        <div>
            salut
        </div>
      )
    }
  </div>
  )
};

export default DashboardHero;
