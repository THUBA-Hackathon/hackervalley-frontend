// 黑客松, 对应设计稿01页的全部内容
import React from "react";
import './hackathon.css';
import HackathonList from "./hackathonList";
import Nav from "../nav"
import Footer from "../footer"

let list = [
    {
        url: '../../assets/example.png',
        name: '2021 DFINITY x IAF 中国首次黑客松',
        sponsor: 'DFINITY x IAF',
        startdate: '2020-03-01',
        enddate: '2021-05-24'
    },
    {
        url: '../../assets/example.png',
        name: '2021 DFINITY x IAF 中国首次黑客松',
        sponsor: 'DFINITY x IAF',
        startdate: '2020-03-01',
        enddate: '2021-05-24'
    },
    {
        url: '../../assets/example.png',
        name: '2021 DFINITY x IAF 中国首次黑客松',
        sponsor: 'DFINITY x IAF',
        startdate: '2020-03-01',
        enddate: '2021-05-24'
    },
]

// 每个HackathonInfo传入的参数包括黑客松的图片url,名称name,主办方sponsor,开始日期startdate和结束日期enddate,格式为上方list的格式
class Hackathon extends React.Component{
    // constructor(props) {
    //     super(props);
    
    //     console.log(this.props)
    // }
    componentDidMount() {
    }
  
    componentWillUnmount() {
    }

    getHackathonData(){
        // get到Hackathon数据,组织成上方List的格式,即若干黑客松信息的列表
    }
    render() {
        return(
            <div>
                <Nav />
                <HackathonList hackathonList={list} />
                <Footer />
            </div>
        )
	}
}

export default Hackathon;
