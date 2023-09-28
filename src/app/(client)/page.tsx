// import React, { useEffect, useState } from "react";
// import { Box, createTheme, ThemeProvider } from "@mui/material";
// import ReactGA from "react-ga";
// import { toast } from "react-toastify";

// const App = () => {

//       <Routes>
//         {/* <Route path="/" element={<ComingSoon />} /> */}
//         <Route path="/" element={<Home />} />
//         <Route path="/collection/:slug" element={<Collection />} />
//         <Route path="/our-ambassadors" element={<Ambassador />} />
//         <Route path="/about-us" element={<About />} />
//         <Route
//           path="/goodie/:slug"
//           element={<Goodie addToCart={addToCart} />}
//         />
//         <Route
//           path="/checkout"
//           element={
//             <Checkout
//               cart={cart}
//               deleteFromCart={deleteFromCart}
//               getTotalPrice={getTotalPrice}
//               getCartCount={getCartCount}
//               updateCart={updateCart}
//             />
//           }
//         />
//       </Routes>

//     </Box>
//   );
// };

// const theme = createTheme({
//   spacing: 10,
//   palette: {
//     common: {
//       black: "#220F00",
//     },
//     primary: {
//       main: "#220F00",
//     },
//     success: {
//       main: "#06C270",
//       dark: "#06C270",
//     },
//   },
// });

// const AppConfig = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Helmet defaultTitle={"_DevStyle"} titleTemplate={"_DevStyle | %s"}>
//         <meta name="robots" content="index, follow" />
//       </Helmet>
//       <App />
//     </ThemeProvider>
//   );
// };

// export default AppConfig;

import React from "react";

export default function page() {
  return <div>page</div>;
}
