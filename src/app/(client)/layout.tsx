import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./lib/theme";

import CartContextProvider from "./contexts/cart/cartContextProvider";

//Components
import Nav from "@/app/(client)/components/nav";
import Customize from "@/app/(client)/components/customize";
import Newsletter from "@/app/(client)/components/newsletter";
import Footer from "@/app/(client)/components/footer";
import { ToastProvider } from "./lib/toastProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  // const location = useLocation();

  // useEffect(() => {
  //   ReactGA.pageview(location.pathname + location.hash);
  // }, [location]);

  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <Box>
          <Nav />
          {children}
          <Customize />
          <Newsletter />
          <Footer />
        </Box>
        <ToastProvider />
      </ThemeProvider>
    </CartContextProvider>
  );
}
