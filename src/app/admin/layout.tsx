"use client";
import { ToastProvider } from "../(client)/lib/toastProvider";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "./redux/features/api/apiSlice";
import { FC, useEffect } from "react";

import { persistor } from "./redux/features/store";
import { PersistGate } from "redux-persist/integration/react";

import socketIO from "socket.io-client";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider>
          <Custom>
            <div>
              {children}
            </div>
          </Custom>
          <ToastProvider />
        </SessionProvider>
      </PersistGate>
    </Providers>
  );
}

const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});

  useEffect(() => {
    socketId.on("connection", () => {});
  }, []);

  return (
    <div>
      {isLoading
        ? <div>Loading</div>
        : <div>
            {children}{" "}
          </div>}
    </div>
  );
};
