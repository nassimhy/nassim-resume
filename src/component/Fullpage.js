import React, {Component} from 'react';
import './Fullpage.css'; 
class Fullpage extends Component{
    render(){ 
        const {children} = this.props;
        return(
            <div className={'fullPage ${this.props.className || ""}'}>
                {children}
            </div>
        )
    }
}
export default Fullpage