import { useEffect, useState } from "react";
import List from "./component/List";
function App() {
  const [data, setData] = useState([]);
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  useEffect(() => {
    const getData = async() => {
      const response = await fetch(url)
      const json = await response.json();
      setData(json);
    }
    getData();
  }, [])
  return (
    <div className="App">
      <List data = {data}/>
    </div>
  );
}

export default App;
