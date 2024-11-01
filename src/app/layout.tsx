import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import Sidebar from "@/components/sidebar";
import "@/styles/layout.css"
import Search from "@/components/search";
import Image from 'next/image'
import { HandleDayTime } from "@/utils/handle-day-time";
const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Container fluid className="container-fluid__Container" >
          {HandleDayTime() ? (<>
            <Image className='background-image__Image'
            src="/images/background-day.jpg"
            alt="Picture of the author"
            fill // Tự động điều chỉnh kích thước
          />
          </>) : (<>
            <Image className='background-image__Image'
            src="/images/background-night.jpg"
            alt="Picture of the author"
            fill // Tự động điều chỉnh kích thước
          />
          </>)}    
          <div className="row container-row__div" >
            <div className="col-1" >
              <Sidebar />
            </div>
            <div className="col-11" >
              {/* <div className="row" >
                <div className="col-8" >
                  <div className="container-search__div" >
                    <Search />
                  </div>
                  <div className="col-4"></div>
                </div>
              </div> */}
              <div className="row" >
                <div className="container-content__div" >
                  {children}
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
                  {/* Same as */}
                  <ToastContainer />
                </div>

              </div>
            </div>
          </div>
        </Container>

      </body>
    </html>
  );
}
