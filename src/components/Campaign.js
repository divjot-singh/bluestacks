import React from 'react';
import data from '../data';
import Listitem from './Listitem';
import Modal from './Modal';

export default class Campaign extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            currentView:"past",
            showModal:false,
            modalData:{}
        }
    }
    componentDidMount() {
        console.log(data);
        this.setState({
            data:data
        });
    }
    change = (currentView) => {
        this.setState({
            currentView:currentView
        })
    }
    close = (currentView) => {
        this.setState({
            showModal:false,
            modalData:{}
        })
    }
    showModal = (item) => {
        this.setState({
            showModal:true,
            modalData:item
        })
    }
    changeValue= (id,value) => {
        console.log(id,value);
        var item=this.state.data[id];
        item.date=value;
        this.setState((state)=>{
            state.data.splice(id,1,item)
            return{
                data:state.data
            }
        });
    }
    render(){
        return (
        <div className="content">
            <p>Manage <b>Campaigns</b></p>
            <nav>
                <button className={"campaign-nav-buttons "+(this.state.currentView === "upcoming"? "active" :"")} onClick={() => this.change("upcoming")}>Upcoming campaigns</button>
                <button className={"campaign-nav-buttons "+(this.state.currentView === "live"? "active" :"")} onClick={() => this.change("live")}>Live campaigns</button>
                <button className={"campaign-nav-buttons "+(this.state.currentView === "past"? "active" :"")} onClick={() => this.change("past")}>Past campaigns</button>
            </nav>

        <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Campaign</th>
                    <th>View</th>
                    <th>Actions</th>
                </tr>
                {
                    this.state.data.filter((item) => {
                        var currentdate=new Date();
                        if(this.state.currentView === "upcoming"){
                            return currentdate- (new Date(item.date)) < 0;
                        }
                        if(this.state.currentView === "past"){
                            return new Date(item.date) -currentdate < 0;
                        }
                        else if(this.state.currentView === "live"){
                            return item.date === "2019-09-20"
                        }
                    }).map((item,index) => {
                        return <Listitem key={index} id={index} item={item} changeValue={this.changeValue} showModal={this.showModal}/>
                    })
                }
            </tbody>
        </table>
        {(this.state.showModal ? <Modal close={this.close} item={this.state.modalData} /> : "" )}
        </div>
        );
    }
}