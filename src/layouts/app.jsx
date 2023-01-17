import { Footer, Header } from "components";
import { Outlet, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <>
      {<Header />}
      {<Outlet />}
      {<Footer />}
    </>
  );
}
