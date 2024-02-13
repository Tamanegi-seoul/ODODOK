// import "./App.css";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Write from "./pages/Write";
import { useState, useEffect } from "react";
import axios from "axios";
import convert from "xml-js";

function App() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://data4library.kr/api/loanItemSrch?authKey=${KEY}&startDt=2024-01-01&endDt=2024-02-01`
      );

      // xml을 json으로 변환
      const result = convert.xml2json(res.data, {
        compact: true,
        spaces: 4,
      });

      // json parse
      const obj = JSON.parse(result);
      return obj;
    };

    fetchData().then((obj) => setData(obj));
  }, []);

  // console.log("result", data);
  const bookList: object = data.response;
  console.log("책 리스트", bookList);

  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/home" element={<Home bookList={bookList} />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/write" element={<Write />}></Route>
    </Routes>
  );
}

export default App;
