import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heros</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heros</Link>{" "}
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
