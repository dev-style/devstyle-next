"use client";

import React from "react";
import Protected from "./hooks/adminProtected";

const page = () => {
  return (
    <Protected>
      <div>page</div>
    </Protected>
  );
};

export default page;
