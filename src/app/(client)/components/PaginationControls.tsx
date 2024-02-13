"use client";

import { Button } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? 4;

  return (
    <div className="w-full  flex justify-between items-center">
      <Button
        disabled={!hasPrevPage}
        className="text-[14px] font-bold "
        onClick={() =>
          router.push(
            `/collection/t-shirt/?page=${Number(page) - 1}&per_page=${Number(
              per_page
            )}`
          )
        }
      >
        Pre page
      </Button>

      <h1 className="text-[14px] font-bold ">
        {page} / {Math.ceil(8 / Number(per_page))}
      </h1>

      <Button
        disabled={!hasNextPage}
        className="text-[14px] font-bold "
        onClick={() =>
          router.push(
            `/collection/t-shirt/?page=${Number(page) + 1}&per_page=${Number(
              per_page
            )}`
          )
        }
      >
        Next page
      </Button>
    </div>
  );
};

export default PaginationControls;
