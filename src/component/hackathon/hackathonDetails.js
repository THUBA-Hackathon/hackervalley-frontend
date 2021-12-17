// 单个黑客松详细信息, 对应设计稿03页的赛事详情部分
import React from "react";
import './hackathon.css';


// 传入的参数包括黑客松的海报图片url,赛事介绍详细内容words
class HackathonDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {tabName:"赛事详情",id:1},
                {tabName:"我要参赛",id:2},
            ],
            currentIndex:1,
        };
    }
    componentDidMount() {
        
    }
    tabChoiced=(id)=>{
        //tab切换到方法
        this.setState({
            currentIndex:id
        });
    }
    render() {
        var _this=this;
        var isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        var isBox2Show=this.state.currentIndex==2 ? 'block' : 'none';

        var tabList= this.state.tabs.map(function(res,index) {
              // 遍历标签页，如果标签的id等于tabid，那么该标签就加多一个active的className
            var tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';
            return <div key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</div>
        }.bind(_this));
		return (
            <div>
                <img className="hackathon_poster_img" src={this.props.url} alt=""/>

                <div style={{"display":isBox1Show}}>                    
                    <div className="hackathon_details_words"> {this.props.words}</div>
                </div>
                <div style={{"display":isBox2Show}}>

                </div>
            </div>
		);
	}
}

export default HackathonDetails;
