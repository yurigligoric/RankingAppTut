import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItems from "./components/RankItems";
import ErnExperiment from "./components/ErnExperiment";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
    {
        path: '/rank-items',
        element: <RankItems />
    },
    {
        path: '/show-experiment',
        element: <ErnExperiment />
    }
];

export default AppRoutes;
