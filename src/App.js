import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">CountryList</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/country/:id" element={<CountryDetails />}></Route>
          <Route path="/" element={<CountryList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
