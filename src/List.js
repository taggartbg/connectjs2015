import React from 'react';

export default class List extends React.Component {

    constructor() {
        super();

        this.updateData = this.updateData.bind(this);
        this.addData = this.addData.bind(this);

        this.state = { myData: [
                                    {
                                        title: "Intro to React",
                                        speaker: "Taggart & Andrew",
                                        time: "10:10am"
                                    },
                                    {
                                        title: "Navigating the React Ecosystem",
                                        speaker: "Ben Ilegbodu",
                                        time: "11:20am"
                                    },
                                    {
                                        title: "Making Designers Happy with React",
                                        speaker: "Brian Douglas",
                                        time: "1:20pm"
                                    },
                                    {
                                        title: "Testing React",
                                        speaker: "Kent C. Dodds",
                                        time: "2:30pm"
                                    },
                                    {
                                        title: "Building distributed systems with Redux",
                                        speaker: "Clint Ayres",
                                        time: "4:00pm"
                                    },
                                    {
                                        title: "Isomorphic React w/o Node??",
                                        speaker: "Ben Ilegbodu",
                                        time: "5:10pm"
                                    }
                                ]
                    }
    }

    render() {
        return (
            <div className="list">
                <div className="list-title" onClick={ this.updateData }>
                    React Track - Connect.Tech
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
