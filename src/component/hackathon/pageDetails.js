// 单个黑客松详细信息, 对应设计稿03页页面
import React from "react";
import './hackathon.css';
import HackathonDetails from "./hackathonDetails";
import Nav from "../nav";


// 传入的参数包括黑客松的海报图片url,赛事介绍详细内容words
class PageDetails extends React.Component{
    render() {
		return (
            <div>
                <Nav />
                <div className="details_btn">赛事详情</div>
                <div className="join_btn">我要参赛</div>
                <div className="details_line"></div>
                <div className="btn_line"></div>
                <HackathonDetails url={this.props.url} words={this.props.words}/>
            </div>

		);
	}
}

export default PageDetails;
