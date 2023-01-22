import { Footer, Header } from "components";

import { Head } from "router";
import { Outlet } from "react-router-dom";

export default function App() {
  const title = "Holiday Country Club";
  const description = "Holiday Country Club";
  const image = "/vite.svg";
  const url = "https://vitefilerouter.com";
  return (
    <>
      <Head title={title} image={image} url={url} description={description} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
