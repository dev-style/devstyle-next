import React, { useEffect, useState } from "react";
import { useDeleteGoodieMutation, useGetAllGoodiesQuery } from "../../redux/features/goodies/goodiesApi";
import Link from "next/link";
import { FiEdit2 } from "react-icons/fi";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import Loader from "../Loader/Loader";
import { DataGrid } from "@mui/x-data-grid";
import { styles } from "../../styles/style";


type Props = {};

const AllGoodies = (prop: Props) => {
  const [goodieId, setGoodieId] = useState("");
  const [open, setOpen] = useState(false);
  const { isLoading, data, refetch } = useGetAllGoodiesQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

  const [deleteGoodie , {isSuccess , error} ] = useDeleteGoodieMutation({})


  const columns = [

    {field:"id" , headerName:"ID" , flex:0.5
},
{field:"name" , headerName:"name " , flex:1},
{field:"description" , headerName:"Description " , flex:1},
{field:"slug" , headerName:"slug " , flex:1},
{field:"fromCollection" , headerName:"fromCollection " , flex:1},
{field:"promoPercentage" , headerName:"promoPercentage " , flex:1},
{field:"price" , headerName:"price " , flex:1},
{field:"inPromo" , headerName:"inPromo " , flex:1},
{field:"views" , headerName:"views " , flex:1},
{field:"size" , headerName:"size " , flex:1},
{field:"images" , headerName:"images " , flex:1},
{field:"availableColors" , headerName:"availableColors " , flex:1},
{field:"backgroundColors" , headerName:"backgroundColors " , flex:1},
{field:"likes" , headerName:"likes " , flex:1},
{field:"show" , headerName:"show " , flex:1},
{ field: "created_at", headerName: "Created At", flex: 0.5 },
{
    field:"",headerName:"Edit",flex:0.2,
    renderCell:(params:any)=>{
        return(
            <>
            <Link href={`/admin/edit-goodie/${params.row.id}`}>
            <FiEdit2 className=" text-black" size={20} />

                  </Link>
            </>
        )
    }

},
{
    field: " ",
    headerName: "Delete",
    flex: 0.2,
    renderCell: (params: any) => {
      return (
        <>
          <Button
            onClick={() => {
              setOpen(!open);
              setGoodieId(params.row.id);
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

  ]

  const rows:any = [];

  {data && data.message.forEach((item:any)=>{
    rows.push({

        id:item._id,
        name:item.name,
        description:item.description,
        slug:item.slug,
        fromCollection:item.fromCollection,
        promoPercentage:item.promoPercentage,
        price:item.price,
        inPromo:item.inPromo,
        views:item.views,
        size:item.size,
        images:item.images,
        availableColors:item.availableColors,
        backgroundColors:item.backgroundColors,
        likes:item.likes,
        show:item.show,


    })
  })}



  useEffect(()=>{

    if(isSuccess){
      setOpen(false)
      refetch()
    }

    if(error){
      console.log("that is the error i have when i try to delete goodie" , error)
    }

  },[isSuccess , error , refetch])

  const handleDelete = async () => {
    const id = goodieId;
    await deleteGoodie(id);
  };


return  (
<div className="mt-[120px]">

{isLoading ? (<Loader/>) : (
    <Box m="20px">
        <Box m="40px 0 0 0"  height="80vh" className="overflow-x-auto" >

<DataGrid checkboxSelection rows ={rows} columns={columns} />


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


</div>)
};

export default AllGoodies;
