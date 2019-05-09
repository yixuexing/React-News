
import React from "react";
import ReactDOM from "react-dom";
import Root from "./js/root";


class Index extends React.Component{
    render(){
        return(
            <div>Init</div>
        );
    };
}
ReactDOM.render(<Root />,document.getElementById("example"));

