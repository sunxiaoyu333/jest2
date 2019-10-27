import React, {Component} from 'react';
import Head from './components/Header';
import UndoList from './components/undoList';
import axios from 'axios';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.addUndoItem = this.addUndoItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handelBlur = this.handelBlur.bind(this);
        this.valuechange = this.valuechange.bind(this);
        this.state = {
            undoList: []
        };
    }
    
    componentDidMount(){
        // 案列1
        // axios.get('/undolist.json').then((res) => {
        //     this.setState({
        //         undoList: res.data
        //     })
        // }).catch(e=>{
        //     console.log(e);
        // });
        // 案列2
        setTimeout(() => {axios.get('/undolist.json').then((res) => {
            this.setState({
                undoList: res.data
            })
        }).catch(e=>{
            console.log(e);
        })}, 500);
    }

    handelBlur(listIndex) {
        const newList = this.state.undoList.map((item, index)=>{
            if(index === listIndex){
                return {
                    ...item,
                    status: 'div'
                }
            }
            return item;
        });
        this.setState({
            undoList: newList
        })

    }
    addUndoItem(value) {
      this.setState({
        undoList: [...this.state.undoList, {
            status: 'div',
            value: value
        }]
      });
    }
    changeStatus(listIndex) {
        const newList = this.state.undoList.map((item, index)=>{
            if(index === listIndex){
                return {
                    ...item,
                    status: 'input'
                }
            }
            return {
                ...item,
                status: 'div'
            }
        });
        this.setState({
            undoList: newList
        })
    }
    valuechange(listIndex, value) {
        const newList = this.state.undoList.map((item, index)=>{
            if(index === listIndex){
                return {
                    ...item,
                    value
                }
            }
            return item;
        });
        this.setState({
            undoList: newList
        })

    }
    deleteItem(index) {
        const newList = [...this.state.undoList];
        newList.splice(index, 1);
        this.setState({
            undoList: newList
        });
    }
    render() {
        const {undoList} = this.state;
        return <div>
            <Head addUndoItem={this.addUndoItem}/>
            <UndoList list={undoList}
            handelBlur={this.handelBlur}
            deleteItem={this.deleteItem}
            changeStatus={this.changeStatus}
            valuechange={this.valuechange}/>
        </div>
    }
}

export default TodoList;
