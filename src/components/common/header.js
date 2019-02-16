import React,{Component} from "react";

 class Header extends Component{
    render(){
        let {icon,text} = this.props;
        return (
            <div className="header">
                {icon?<div>{icon}</div>:""}
                <h2>{text}</h2>
            </div>
        )
    }
}
Header.defaultProps = {
    icon:"",
    text:"猫眼电影"
}

export default Header;
