import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainFrame from "./components/MainFrame";
import { GamesPlayed } from "./pages/GamesPlayed";
import { Home } from "./pages/Home";
import { MyGames } from "./pages/MyGames";

function App(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainFrame />,
      errorElement: <Home />,
      children: [
        {
          path: "/games-played",
          element: <GamesPlayed />,
        },
        {
          path: "/my-games",
          element: <MyGames />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
