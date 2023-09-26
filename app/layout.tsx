import "@/assets/styles/globals.css";
import "@/assets/styles/components.css";
import type { Metadata } from "next";
import { LayoutInterface } from "@/interface";
import { Footer, Header } from "@/components";
import { LayoutProvider } from "@/context/layoutContext";

export const metadata: Metadata = {
  title: "Task Tracker",
};

export default function RootLayout({ children }: LayoutInterface) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <LayoutProvider>
            <div className="container">
              <Header />
              {children}
              <Footer />
            </div>
          </LayoutProvider>
        </div>
      </body>
    </html>
  );
}
