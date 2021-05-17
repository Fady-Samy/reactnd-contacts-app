import React, {Component} from 'react';

class List extends Component{
    state = {
        btnTxt:"Hide Number Of Games",
        show:true
    }
    showhideNum = ()=>{
        const {btnTxt, show} = this.state;
        if(show){
            this.setState({
                btnTxt: "Show Number Of Games",
                show:false
            })
        }else{
            this.setState({
                btnTxt: "Hide Number Of Games",
                show:true
            })
        }
    };
    render(){
        return (
            <div>
                <button onClick={this.showhideNum}>{this.state.btnTxt}</button>
                <ul className="item-list">
                    {this.props.users.map((user) => <li >{user.userName} has played {this.state.show ? user.numGames : "*"} games</li>)}
                </ul>
            </div>
        );
    }
}

export default List;