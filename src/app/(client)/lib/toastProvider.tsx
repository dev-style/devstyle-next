"use client";

import { ToastContainer } from "react-toastify";

export function ToastProvider() {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{
          fontSize: "14px",
          fontFamily: "Roboto Slab",
          fontWeight: 350,
        }}
      />
    </>
  );
}
