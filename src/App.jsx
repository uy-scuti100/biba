import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages

import Biba from "./pages/Biba";
import Aura from "./pages/Aura";
import Weird from "./pages/Weird";
import Contact from "./pages/Express";
import PageNotFound from "./pages/PageNotFound";
import Init from "./pages/Init";
import Navbar from "./components/globals/Navbar";
import ViewArt from "./pages/ViewArt";
import Exhibition from "./pages/Exhibition";
import WeirdTwo from "./pages/WeirdTwo";
import { useEffect, useState } from "react";
import ExpressTwo from "./pages/ExpressTwo";
import Beeba from "./pages/Beeba";
import BeebaTwo from "./pages/BeebaTwo";
import AuraTwo from "./pages/AuraTwo";

const Layout = () => {
  return (
    <main className="relative w-full h-screen max-w-5xl mx-auto overflow-hidden">
      <Navbar />
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Init />,
      },
      {
        path: "/biba",
        element: <Biba />,
      },
      {
        path: "/beeba",
        element: <Beeba />,
      },
      {
        path: "/beeba-two",
        element: <BeebaTwo />,
      },
      {
        path: "/yes",
        element: <Weird />,
      },
      {
        path: "/weird",
        element: <WeirdTwo />,
      },
      {
        path: "/aura",
        element: <Aura />,
      },
      {
        path: "/aura-two",
        element: <AuraTwo />,
      },
      {
        path: "/exhibition",
        element: <Exhibition />,
      },
      {
        path: "/express",
        element: <Contact />,
      },
      {
        path: "/express-two",
        element: <ExpressTwo />,
      },
      {
        path: "/view-art",
        element: <ViewArt />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (width > 465) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen text-4xl text-center uppercase">
        This web app is optimized for mobile only.
        <p>Please switch to a mobile device.</p>
      </div>
    );
  }

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
