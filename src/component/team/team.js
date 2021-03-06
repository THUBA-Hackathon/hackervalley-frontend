// 队伍信息展示卡片
import React from "react";
import './team.css';
import {Route} from "react-router-dom";
import Captain from "./captain"
import PageTeamDetails from "./pageTeamDetails";
import TechStack from "./techstack"
import JoinTeamDialog from "./dialogJoinTeam";
import cookie from "react-cookies";
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom';
const history = createBrowserHistory()




// 传入的参数包括项目简介，队伍名称，队长昵称，队长email,技术栈列表
class TeamCard extends React.Component{
    render() {
        const handleOnClick = (() => {
            console.log(this.props)
            //this.props.history.push({pathname:"/#/teamDetails",query: { name : 'sunny' }});
            history.push('/#/teamDetails/'+ parseInt(this.props.id))
            window.location.reload()
        })
		return (
            <div className="team_card">
                <div className="project_intro_btn" onClick={handleOnClick}>{this.props.intro}</div>
                <Captain team_name={this.props.team_name} cap_name={this.props.cap_name} email={this.props.email}/>
                <TechStack techList={this.props.techList}/>
                {this.props.showJoin? <JoinTeamDialog />: ''}
            </div>
		);
	}
}

export default TeamCard;
