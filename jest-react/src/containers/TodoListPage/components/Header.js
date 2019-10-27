import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../store';

class Header extends Component {
    constructor(props) {
        super(props);
        this.keyup = this.keyup.bind(this);
    }
   
    keyup(e) {
        const {value} = this.props;
        if (e.keyCode===13 && value){
            this.props.addUndoItem(value);
            this.props.handleInputChange('');
        }
    }
    render() {
        const {value, handleInputChange} = this.props;
        return <div className="header">
            <div className="header-content">
                Todolistk
                <input data-test="header-input"
                className="header-input"
                value={value}
                onChange={e=>handleInputChange(e.target.value)}
                onKeyUp={this.keyup}/>
            </div>
        </div>
    }
}

const mapState = (state) => {
    return {
        value: state.todo.inputValue
    }
}

const mapDispatch = dispatch => ({
    handleInputChange(value){
        dispatch(actions.changeInputValue(value));
    }
});
 export default connect(mapState, mapDispatch)(Header);
