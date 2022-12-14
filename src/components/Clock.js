import React from "react";

class Clock extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            date: props.date
        }
    }

    componentDidMount(){

        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);

    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date()
        });

    }

    render(){
        const {date} =this.state; //{date: 06.12.2022}
        const min =date.getMinutes();
        const second = date.getSeconds();
        return  <div>    
        {/* {date.toLocaleTimeString()} */}
        {date.toLocaleDateString()} <br/>
        {min}:{second}
      </div>;
    }
}
export default Clock;