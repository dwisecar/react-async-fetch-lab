// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json => {
            this.setState({
                peopleInSpace: json.people
            })
        })
    }

    render() {
        return(
            <div>
                {this.state.peopleInSpace.map(people => people.name)}
            </div>
        )
    }
}
export default App