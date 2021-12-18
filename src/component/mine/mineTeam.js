import React from "react"
import TeamCard from '../team/team'
import './mine.css';


class MineTeam extends React.Component{
    render(){
        let teamList = this.props.teamList.map((item, index) => {
            return (<TeamCard key={index} {...item} />)
        });
        return(
            <div className="mine_team">
               {teamList}
            </div>
        )
    }
}
  
export default MineTeam;