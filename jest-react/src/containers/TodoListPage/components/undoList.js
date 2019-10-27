import React, {Component} from 'react';

class UndoList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.change = this.change.bind(this);
    //     this.keyup = this.keyup.bind(this);
    //     this.state = {
    //         value: ''
    //     };
    // }
   
    render() {
        const {list, deleteItem, changeStatus,handelBlur,valuechange} = this.props;
        return <div className="undo-list">
            <div className="undo-list-title">正在进行
            <div data-test="input" className="undo-list-count">{list.length}</div>
            </div>
            
            <ul className="undo-list-content">{
                list.map((item, index) => {
                    return (<li className="undo-list-item"
                        data-test="list-item"
                        key={index}
                        onClick={() => changeStatus(index)}
                        >
                        {item.status === 'div' ? item.value : (
                            <input data-test="input"
                            className='undo-item-input'
                            value={item.value}
                            onBlur={()=>handelBlur(index)}
                            onChange={(e)=>valuechange(index, e.target.value)}
                            />
                        )}
                        <div data-test="delete-item" 
                        className="undo-list-delete"
                        onClick={(e)=>{
                            e && e.stopPropagation();
                            deleteItem(index);

                        }}>-</div>
                    </li>)
                })
            }</ul>
        </div>
    }
}

export default UndoList;
