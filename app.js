class App extends React.Component {
    
    state = {
        name: "josé",
        comment:"Tourelle",
        comments:[]
    }
    
    changeName = (event) => {
        console.log(event.target.value);

        this.setState({
            name: event.target.value
        })
    }

    changeComment  = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    store = (event) => {
        event.preventDefault();
        const tmp = this.state.comments.concat({"name": this.state.name, "comment": this.state.comment})
        this.setState({comments: tmp})

        console.log(this.state.comments)
    }

    render() {
        return(
            <form onSubmit={this.store} >
                <h1 className="title">Say Something</h1>
                <input type="text" className="name" value={this.state.name} onChange={this.changeName}></input>
                <textarea className="comment" value={this.state.comment} onChange={this.changeComment}></textarea>
                <input className="btn" type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));