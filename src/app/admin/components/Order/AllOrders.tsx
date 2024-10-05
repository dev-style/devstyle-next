import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import Loader from "../Loader/Loader";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "../../styles/style";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
} from "../../redux/features/orders/ordersApi";
import { AnyAaaaRecord } from "dns";

type Props = {};

const AllOrders = (prop: Props) => {
  const [orderId, setOrderId] = useState("");
  const [open, setOpen] = useState(false);
  const { isLoading, data, refetch } = useGetAllOrdersQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const [deleteOrder, { isSuccess, error }] = useDeleteOrderMutation({});

  console.log("voici les commandes", data);

  let totalPrice = 0;

  // useEffect(()=>{

  //     data.message.goodies.forEach((item:any)=>{

  //         totalPrice += item.price*item.quantity

  //         console.log("le prix total est" , totalPrice)

  //     })

  // },[data])

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "name ", flex: 0.5 },
    { field: "email", headerName: "email", flex: 1 },
    { field: "number", headerName: "number", flex: 0.5 },
    { field: "goodieName", headerName: "goodieName ", flex: 1 },
    { field: "totalPrice", headerName: "totalPrice ", flex: 0.5 },
    { field: "status", headerName: "status ", flex: 1 },
    {
      field: "",
      headerName: "Edit status",
      flex: 0.5,
      renderCell: (params: any) => {
        return (
          <>
            <Link href={`/admin/edit-order/${params.row.id}`}>
              <FiEdit2 className=" text-black" size={20} />
            </Link>
          </>
        );
      },
    },

    {
      field: " ",
      headerName: "Delete",
      flex: 0.7,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open);
                setOrderId(params.row.id);
              }}
            >
              <AiOutlineDelete
                className=" text-black"
                size={20}
              />
            </Button>
          </>
        );
      },
    },
  ];

  const rows: any = [];

  {
    data &&
      data.message.forEach((item: any) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          number: item.number,
          goodieName: item.goodies.map(
            (goodie: any) => `${goodie.name} x ${goodie.quantity}`
          ),
          totalPrice: item.goodies.reduce(
            (acc: any, goodie: any) => acc + goodie.price * goodie.quantity,
            0
          ),
          status: item.status,
        });
      });
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      refetch();
    }

    if (error) {
      console.log(
        "that is the error i have when i try to delete goodie",
        error
      );
    }
  }, [isSuccess, error, refetch]);

  const handleDelete = async () => {
    const id = orderId;
    await deleteOrder(id);
  };

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box m="40px 0 0 0" height="80vh" className="overflow-x-auto">
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>

          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white  rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>
                  Are you sure you want to delete this order?
                </h1>
                <div className="flex w-full items-center justify-between mb-6 mt-4">
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#47d097]`}
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
                    onClick={handleDelete}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </Box>
      )}
    </div>
  );
};

export default AllOrders;
