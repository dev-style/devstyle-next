import { FC, useEffect, useState } from "react";
import { useGetSizesQuery } from "../../redux/features/Sizes/sizesApi";

import { styles } from "../../styles/style";
import { redirect } from "next/navigation";
import {
  useEditOrderMutation,
  useGetAllOrdersQuery,
} from "../../redux/features/orders/ordersApi";

type Props = {
  id: string;
};
const EditOrder: FC<Props> = ({ id }) => {
  const [editOrder, { isSuccess, error }] = useEditOrderMutation({});

  const {
    data: dataOrders,
    isLoading,
    refetch,
  } = useGetAllOrdersQuery({}, { refetchOnMountOrArgChange: true });

  console.log("les commandes", dataOrders);

  const editOrderData =
    dataOrders && dataOrders.message.find((i: any) => i._id === id);

  useEffect(() => {
    if (isSuccess) {
      console.log("l'update du status de la commande  a reussit");
      redirect("/admin/list-orders");
    }

    if (error) {
      console.log(
        "That is the error we have when we try to update goodie",
        error
      );
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (editOrderData) {
      setOrderInfo({
        status: editOrderData.status,
      });
    }
  }, [editOrderData]);

  const [orderInfo, setOrderInfo] = useState({
    status: "",
  });

  const handleOrderUpdate = async (e: any) => {
    const data = orderInfo;
    console.log("That is the update data", data);
    await editOrder({ id: editOrderData?._id, data });
  };

  return (
    <div className="flex  w-full min-h-screen py-10 justify-center items-center">
      <div className="w-[80%] h-[90%]">
        <form className="mt-24">
          <div className="w-full flex justify-between">
            <div className="w-[45%]">
              <label className={`${styles.label}`}>Show</label>
              <select
                name=""
                id=""
                className={`${styles.input}`}
                value={orderInfo.status}
                onChange={(e: any) =>
                  setOrderInfo({
                    ...orderInfo,
                    status: e.target.value,
                  })
                }
              >
                <option value="">Selection status</option>
                <option value="initiate">initiate</option>
                <option value="Pending">Pending</option>
                <option value="Pending">Finish</option>
              </select>
            </div>
          </div>

          <div
            className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={handleOrderUpdate}
          >
            Update
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;



