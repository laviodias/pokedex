import Homepage from "./components/Homepage";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Homepage />
    </SearchProvider>
  );
}

export default App;
