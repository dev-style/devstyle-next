"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import Image from "next/image";

import GoodieCard from "@/app/(client)/components/goodieCard";
import GoodieCardSkeleton from "@/app/(client)/components/goodieCardSkeleton";
import Spinner from "@/app/(client)/components/spinner";

import myAxios from "@/app/(client)/lib/axios.config";
import { ICollection, IGoodie } from "@/app/lib/interfaces";

import "./styles.scss";
import PaginationControls from "@/app/(client)/components/PaginationControls";
import { useSearchParams } from "next/navigation";
const ScrollToTop = dynamic(() => import("@/app/(client)/lib/scrollToTop"), {
  ssr: false,
});

const Collection = (props: any) => {
  const [isLoadingCollection, setIsLoadingCollection] = useState(true);
  const [collection, setCollection] = useState<{
    collection: ICollection;
    goodies: IGoodie[];
  }>();
  let onAllGoodies = props.slug === "all-goodies";

  useEffect(() => {
    if (!onAllGoodies) {
      myAxios
        .get("/collection/goodies/" + props.slug)
        .then((response) => {
          if (response.status === 200) {
            setCollection({
              collection: response.data.message?.collection,
              goodies: response.data.message?.goodies,
            });
            setIsLoadingCollection(false);
          } else {
            console.log(response.data.message);
            setIsLoadingCollection(false);
          }
        })
        .catch((error) => {
          setIsLoadingCollection(false);
          toast.error(<div style={{ color: "#fff" }}>{error.message}</div>, {
            icon: "🌐",
            style: { textAlign: "center" },
          });
          console.log(error);
        });
    } else {
      myAxios
        .get("/goodie/all")
        .then((response) => {
          if (response.status === 200) {
            setCollection({
              collection: {
                colors: "#220f00df-#220f00",
                title: "TOUS NOS GOODIES🛍️",
                image: {
                  url: "",
                },
                views: 0,
                _id: "all-goodies",
                slug: "all-goodies",
              },
              goodies: response.data.message,
            });
            setIsLoadingCollection(false);
          } else {
            console.log(response.data.message);
            setIsLoadingCollection(false);
          }
        })
        .catch((error) => {
          toast.error(<div style={{ color: "#fff" }}>{error.message}</div>, {
            icon: "🌐",
            style: { textAlign: "center" },
          });
          console.log(error);
        });
    }
  }, [props.slug, onAllGoodies]);

  useEffect(() => {
    if (!onAllGoodies) {
      myAxios
        .put("/collection/update/views/" + props.slug)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [props.slug, onAllGoodies]);
  console.log(collection);

  // pagination feature

  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const per_page = searchParams.get("per_page") ?? "4";

  const start = (Number(page) - 1) * Number(per_page);

  const end = start + Number(per_page);

  const goodiesFilter = collection?.goodies.slice(start, end) as IGoodie[];

  console.log("le goodie slice est", collection?.goodies);

  return (
    <Box className="collection-wrapper">
      <ScrollToTop />
      <Box
        className="collection-hero-section-wrapper"
        style={{
          background: `linear-gradient(90deg, ${
            collection?.collection.colors.split("-")[0]
          } 0%, ${collection?.collection.colors.split("-")[1]} 100%)`,
        }}
        padding={10}
      >
        {isLoadingCollection ? (
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner size={100} thickness={10} color={"#220f0055"} />
          </Box>
        ) : (
          <Box className="collection-hero-section-container">
            <Typography
              className="text"
              style={{
                margin: onAllGoodies ? "auto" : "",
              }}
            >
              {collection?.collection.title}
            </Typography>
            {collection?.collection?.image?.url && (
              <Image
                src={collection.collection.image.url}
                alt="collection hero"
                width={500}
                height={200}
              />
            )}
          </Box>
        )}
      </Box>
      <Box className="goodies-container" marginY={20}>
        <Grid container spacing={5}>
          {isLoadingCollection ? (
            <>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <GoodieCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <GoodieCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <GoodieCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <GoodieCardSkeleton />
              </Grid>
            </>
          ) : (
            goodiesFilter.map((goodie, i) => (
              <Grid
                key={i + " " + goodie._id}
                item
                xs={12}
                md={6}
                lg={4}
                xl={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoodieCard {...goodie} />
              </Grid>
            ))
          )}
        </Grid>
        <div className="mt-10 px-5 w-full max-w-2xl mx-auto border border-slate-900/90 py-3">
          <PaginationControls
            hasNextPage={end < [1, 2, 3, 4, 5].length}
            hasPrevPage={start > 0}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Collection;
