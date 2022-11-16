import "./App.css";
import { TableRow } from "./components/TableRow";
import { useEffect, useState } from "react";
import { TableSearch } from "./components/TableSearch";

function App() {
  const [chains, setChains] = useState([]);
  const [filteredChains, setFilteredChains] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://chainid.network/chains.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setChains(data);
        setFilteredChains(data);
      });
  }, []);

  const onChangeHandler = (event) => {
    setInputValue(event.currentTarget.value);
    const newArray = searchByFirstName(event.currentTarget.value);
    setFilteredChains(newArray);
  };

  const searchByFirstName = (str) => {
    if (str) {
      return chains.filter(
        (item) =>
          item.chain.toLowerCase().includes(str.toLowerCase()) ||
          item.name.toLowerCase().includes(str.toLowerCase())
      );
    } else {
      return chains;
    }
  };

  return (
    <>
      <nav className="navbar">
        <h1>ChainList</h1>
      </nav>
      <main className="container">
        <TableSearch value={inputValue} setValue={onChangeHandler} />
        <table className="table" id="prices-table" border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Chain</th>
              <th>ChainID</th>
              <th>NetworkId</th>
            </tr>
          </thead>
          <tbody>
            {filteredChains.map((test, index) => (
              <TableRow tableItem={test} key={index} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
