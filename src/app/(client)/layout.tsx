import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./lib/theme";
import CartContextProvider from "./contexts/cart/cartContextProvider";

//Components
import Nav from "@/app/(client)/components/nav";
import Customize from "@/app/(client)/components/customize";
import Newsletter from "@/app/(client)/components/newsletter";
import Footer from "@/app/(client)/components/footer";
import ComingSoon from "@/app/(client)/components/comingSoon.component";
import { ToastProvider } from "./lib/toastProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let inComingSoonMode = true;
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        {inComingSoonMode ? (
          <ComingSoon />
        ) : (
          <Box>
            <Nav />
            {children}
            <Customize />
            <Newsletter />
            <Footer />
          </Box>
        )}
        <ToastProvider />
      </ThemeProvider>
    </CartContextProvider>
  );
}
