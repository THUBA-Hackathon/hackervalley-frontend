// 队伍的详情，已经结束黑客松
import React from 'react';
import { useLocation,useParams } from "react-router-dom";
import './team.css';
import Captain from "./captain";
import People from "./people";
import SubmitCodeDialog from "./dialogSubmitCode";
import cookie from "react-cookies";


// 传入的参数包括队伍口号，队伍简介，队伍成员list，项目链接,队长信息
export function TeamDetails(props){
    // render() {
    let params = useParams()
    const id = params.team_id
    const team_detail = props.data[id]
    console.log(team_detail)
    let memberList = team_detail.people_list.map((item, index) => {
        return (<People key={index} {...item} />)
    });
    return (
            <div className="team_details">
                <div className="team_declaration">{team_detail.declaration}</div>
                <Captain team_name={params.team_name} cap_name={team_detail.cap_name} email={team_detail.email}/>
                <div className="divider">项目介绍</div>
                <div className="details_project_intro">{team_detail.project_intro}</div>
                {/*<div className="details_project_link">{params.project_link}</div>*/}
                <div className="divider1">团队成员</div>
                {memberList}
                <SubmitCodeDialog />
            </div>
        );
}

export default TeamDetails;
