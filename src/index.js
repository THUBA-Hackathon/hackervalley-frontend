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
import TeamCard from './component/team/team';
import PageTeam from './component/team/pageTeam';
import AddTeam from './component/team/newTeam';
import Mine from './component/mine/mine';
import MineTabs from './component/mine/mineTab';
import VerticalTabs from './component/mine/mineTab'
import TeamDetails from './component/team/teamDetails';


let list = [
  {
      intro: "一个Web 3.0下的社区项目",
      team_name: 'NFit',
      cap_name: '马克',
      email: '2568198278@qq.com',
      techList: [{tech:"Rust"}, {tech:"Mokoto"}, {tech:"数据结构"}],
  },
  {
      intro: "一个Web 3.0下的社区项目",
      team_name: 'NFit',
      cap_name: '马克',
      email: '2568198278@qq.com',
      techList: [{tech:"Rust"}, {tech:"Mokoto"}, {tech:"数据结构"}],
  },
  {
      intro: "一个Web 3.0下的社区项目",
      team_name: 'NFit',
      cap_name: '马克',
      email: '2568198278@qq.com',
      techList: [{tech:"Rust"}, {tech:"Mokoto"}, {tech:"数据结构"}],
  },
]

let list1 = [
  {
    applyer_name: "Celia",
    apply_area: '中国',
    apply_phone: '19829289829',
    apply_email: '2568198278@qq.com',
    apply_role_wanted: "Rust",
  },
  {
    applyer_name: "Zeo",
    apply_area: '中国',
    apply_phone: '15259289829',
    apply_email: '2568198278@qq.com',
    apply_role_wanted: "Mokoto",
  },
  {
    applyer_name: "Sean",
    apply_area: '中国',
    apply_phone: '19853689829',
    apply_email: '2568198278@qq.com',
    apply_role_wanted: "React & Smart Contracts",
  },
]
let data1 = {
  account_name: "马克",
  account_area: "中国",
  account_phone: "19829289829",
  account_email: "2568198278@qq.com",
  account_role_wanted : "前端设计"

}

var intro = `赛事介绍 2021中国数据内容大赛是balabala \r\n 赛事介绍 2021中国数据内容大赛是本周完成事项+输出：\n
完成CP-ABE在mac系统的支持和实现\n
完成CP-ABE命令行工具实现\n
下周工作计划\n
完成CP-ABE在windows系统的支持\n
完成demo中CP-ABE的版本更换\n
是否存在问题及需要的支持：\n
无`
let people = [
  {
    people_name: "Mark",
    email:'2568198278@qq.com',
  },
  {
    people_name: "Werk",
    email:'2568198278@qq.com',
  },
]
let teamdetail= {
  project_intro:```现有的黑客松平台主要面向项目方和开发团队，\n
  帮助项目方发布黑客松任务，帮助团队提交项目参与评奖。但是，对于个人开发者来说，参与黑客松有太多的门槛：\n
  缺少互补可靠的队友，新创意的市场反馈，除了比赛奖金缺乏更多元的激励... \n
  Hacker Valley更多侧重开发者方面，从开发者的感受和需求出发，创造最佳的环境供geek们创造和建设项目。并且，整个平台与中心化平台不同，\n
  geek们不仅仅是来参与项目比赛，更多也参与了平台的人才资源库建设、使用意见反馈甚至完成平台提供的优化任务，这些都能在平台上获取奖励。 ```,
  team_name: "Hacker Valley",
  cap_name:"Mark",
  email:"2568198278@qq.com",
  people_list:people
}
const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path={"" + "/"} element={<App />}/>
      <Route path={"" + "/details"} element={<PageDetails url={require("./assets/header_poster.png").default} words={intro} startdate="2021-12-01" enddate="2021-12-17" />}/>
      <Route path={"" + "/cap"} element={<PageTeam teamList={list}/>}></Route>
      <Route path={"" + "/add"} element={<AddTeam />}></Route>
      <Route path={"" + "/mine"} element={<Mine applyMessageList={list1} accountInfoData={data1} teamList={list}/>}></Route>
      {/* <Route path={"" + "/teamDetails"} element={<TeamDetails data={teamdetail} />}></Route> */}
    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
