import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"
import PageDetails from './component/hackathon/pageDetails';
import NewsList from './component/hackathon/tabsTest';


const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path={"" + "/"} element={<App />}/>
      <Route path={"" + "/details"} element={<PageDetails url={require("./assets/header_poster.png").default} words="赛事介绍 2021中国数据内容大赛是balabala" />}/>
      <Route path={"" + "/list"} element= {<NewsList/>}/>
    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
