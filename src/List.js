import React from 'react';

export default class List extends React.Component {

    constructor() {
        super();

        this.updateData = this.updateData.bind(this);
        this.addData = this.addData.bind(this);

        this.state = { myData: [
                                    {
                                        title: "Intro to React",
                                        speaker: "Taggart Bowen-Gaddy",
                                        time: "10:00am"
                                    },
                                    {
                                        title: "Lets talk about Flux",
                                        speaker: "Andrew Smith",
                                        time: "11:00am"
                                    },
                                    {
                                        title: "Dataflow through React",
                                        speaker: "Clint Ayres",
                                        time: "1:00pm"
                                    },
                                    {
                                        title: "Building HUGE Flux Applications",
                                        speaker: "Jordan Garcia",
                                        time: "2:00pm"
                                    },
                                    {
                                        title: "Exploring React Native",
                                        speaker: "Josh Jensen",
                                        time: "3:30pm"
                                    },
                                    {
                                        title: "Why is React Functional",
                                        speaker: "John K Paul",
                                        time: "4:30pm"
                                    }
                                ]
                    }
    }

    render() {
        return (
            <div className="list">
                <div className="list-title" onClick={ this.updateData }>
                    React Track - Connect JS
                </div>
                <div className="list-items">
                    { this.state.myData.map(datum => (<ListItem itemData={ datum } key={ datum.title } />))}
                </div>
                <button onClick={ this.addData }>Add Item</button>
            </div>
        )
    }

    updateData(newData) {
        this.setState({ data: newData });
    }

    addData(evt) {
        var newItem = {
                        title: "Reacting with React",
                        speaker: "George P. Burdell",
                        time: "11:30pm"
                    };
        var newData = this.state.myData.push(newItem);
        this.updateData(newData);
    }
};

class ListItem extends React.Component {

    constructor() {
        super();

        this.toggleFavorited = this.toggleFavorited.bind(this);

        this.state = {};
    }

    render() {
        return (
            <div className="list-item" style={{backgroundColor: this.state.favorited ? 'gold' : '#eee'}} onClick={ this.toggleFavorited }>
                <div className="title">
                    { this.props.itemData.title }
                </div>
                <div className="speaker">
                    { this.props.itemData.speaker }
                </div>
                <div className="time">
                    { this.humanizeTime(this.props.itemData.time) }
                </div>
            </div>
        )
    }

    humanizeTime(hourOfDay) {
        // Make the time human readable
        return hourOfDay;
    }

    toggleFavorited() {
        this.setState({
            favorited: !this.state.favorited
        });
    }
}

