"use client";
import { ToastProvider } from "../(client)/lib/toastProvider";
import { Providers } from "./Provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div>
        <ToastProvider />
        {children}
      </div>
    </Providers>
  );
}
