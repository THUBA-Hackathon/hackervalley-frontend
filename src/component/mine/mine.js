import React from "react"
import Nav from "../nav";
import MineTabs from "./mineTab";


class Mine extends React.Component{
    
    render(){
        return(
            <div className="container">
                <Nav />
                <MineTabs applyMessageList={this.props.applyMessageList}/>
               
            </div>
        )
    }
}
  
export default Mine;