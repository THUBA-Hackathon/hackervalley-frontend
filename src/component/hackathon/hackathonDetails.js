// 单个黑客松详细信息, 对应设计稿03页的赛事详情部分
import React from "react";
import './hackathon.css';
import Tabs from '@uiw/react-tabs';
import PageTeam from "../team/pageTeam";
import footer from "../footer"
import Footer from "../footer";

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
let list = [
    {
        id: "0",
        intro: "一个Web 3.0下的社区项目",
        team_name: 'NFit',
        cap_name: '马克',
        email: '2568198278@qq.com',
        techList: ["Rust", "Mokoto", "数据结构", "前端设计"],
        showJoin: false,
        team_declaration: 'Hacker Valley，在交流中，实现创意；在实践中，进行创意',
        project_intro:'现有的黑客松平台主要面向项目方和开发团队，帮助项目方发布黑客松任务，帮助团队提交项目参与评奖。但是，对于个人开发者来说，参与黑客松有太多的门槛：缺少互补可靠的队友，新创意的市场反馈，除了比赛奖金缺乏更多元的激励... Hacker Valley更多侧重开发者方面，从开发者的感受和需求出发，创造最佳的环境供geek们创造和建设项目。并且，整个平台与中心化平台不同，geek们不仅仅是来参与项目比赛，更多也参与了平台的人才资源库建设、使用意见反馈甚至完成平台提供的优化任务，这些都能在平台上获取奖励。',
        people_list:people,
    },
    {
        id: "1",
        intro: "Web 3.0下的学校项目",
        team_name: 'NFit',
        cap_name: '皮特',
        email: '2583026353@qq.com',
        techList: ["Vue", "Typescript", "数据结构", "网络"],
        showJoin: true,
        team_declaration: 'Hacker Valley，在交流中，实现创意；在实践中，进行创意',
        project_intro:'现有的黑客松平台主要面向项目方和开发团队，帮助项目方发布黑客松任务，帮助团队提交项目参与评奖。但是，对于个人开发者来说，参与黑客松有太多的门槛：缺少互补可靠的队友，新创意的市场反馈，除了比赛奖金缺乏更多元的激励... Hacker Valley更多侧重开发者方面，从开发者的感受和需求出发，创造最佳的环境供geek们创造和建设项目。并且，整个平台与中心化平台不同，geek们不仅仅是来参与项目比赛，更多也参与了平台的人才资源库建设、使用意见反馈甚至完成平台提供的优化任务，这些都能在平台上获取奖励。',
        people_list:people,
    },
    {
        id: "2",
        intro: "NFT项目",
        team_name: 'NFit',
        cap_name: '华飞',
        email: '2568198278@qq.com',
        techList: ["Rust", "Mokoto", "数据结构", "前端设计"],
        showJoin: true,
        team_declaration: 'Hacker Valley，在交流中，实现创意；在实践中，进行创意',
        project_intro:'现有的黑客松平台主要面向项目方和开发团队，帮助项目方发布黑客松任务，帮助团队提交项目参与评奖。但是，对于个人开发者来说，参与黑客松有太多的门槛：缺少互补可靠的队友，新创意的市场反馈，除了比赛奖金缺乏更多元的激励... Hacker Valley更多侧重开发者方面，从开发者的感受和需求出发，创造最佳的环境供geek们创造和建设项目。并且，整个平台与中心化平台不同，geek们不仅仅是来参与项目比赛，更多也参与了平台的人才资源库建设、使用意见反馈甚至完成平台提供的优化任务，这些都能在平台上获取奖励。',
        people_list:people,
    },
]
// 传入的参数包括黑客松的海报图片url,赛事介绍详细内容words
class HackathonDetails extends React.Component{
    render() {
		return (
            <Tabs className="tabs" activeKey="1" type="line">
                    <Tabs.Pane label="赛事详情" key="1">
                        <div className="hackathon_details_words">
                            <div className="hackathon_date">{this.props.startdate} - {this.props.enddate}</div>
                            <div className="hackathon_words">{this.props.words}</div>
                        </div>
                    </Tabs.Pane>
                    <Tabs.Pane label="我要参赛" key="2">
                        <PageTeam teamList={list}/>
                    </Tabs.Pane>

            </Tabs>
		);
	}
}

export default HackathonDetails;
