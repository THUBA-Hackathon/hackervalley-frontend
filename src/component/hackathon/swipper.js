// 首页轮播图
import React from "react";
import './hackathon.css';


class Swipper extends React.Component{
    render() {
		return (
      <div className="swipper">
        <div className="swipper_temp"><img src={require("../../assets/hackathon_1.png").default} alt="" style={inlineStyles}/></div>
      </div>

    );
	}
}
const inlineStyles = {
    width: '100%'
};

export default Swipper;
