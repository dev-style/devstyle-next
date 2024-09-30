"use client"
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./lib/theme";
import CartContextProvider from "./contexts/cart/cartContextProvider";

//Components
import Nav from "@/app/(client)/components/nav";
import Customize from "@/app/(client)/components/customize";
import Newsletter from "@/app/(client)/components/newsletter";
import Footer from "@/app/(client)/components/footer";
import { ToastProvider } from "./lib/toastProvider";
import { Providers } from "../admin/Provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../admin/redux/features/store";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("test")
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <Box>
          <Nav />
          <Providers>
              {children}
          </Providers>
          <Customize />
          <Newsletter />
          <Footer />
        </Box>
        <ToastProvider />
      </ThemeProvider>
    </CartContextProvider>
  );
}
