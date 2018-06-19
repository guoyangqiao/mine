import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/cover.css'
import ReactDOM from "react-dom";


class TemperatureBlock extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <input value={parseFloat(this.props.tempeature)} onChange={e => this.props.selfChange(e.target.value)}/>
            <span>water {this.props.condition(this.props.tempeature)} when {this.props.tempeature} in {this.props.scale}</span>
        </div>

    }
}

class Blocker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {temperature: '', scale: ''}
    }

    render() {
        return <div>
            <TemperatureBlock scale='Celsius'
                              selfChange={e => {
                                  this.setState({
                                      scale: 'Celsius',
                                      temperature: e
                                  })
                              }}
                              tempeature={this.state.scale === 'Fahrenheit' ? this.state.temperature === '' ? '' : parseFloat(this.state.temperature) - 31 : this.state.temperature}
                              condition={e => {
                                  return e >= 100 ? 'boiling' : 'cool'
                              }}/>
            <TemperatureBlock scale='Fahrenheit'
                              selfChange={e => {
                                  this.setState({
                                      scale: 'Fahrenheit',
                                      temperature: e
                                  });
                              }}
                              tempeature={this.state.scale === 'Celsius' ? this.state.temperature === '' ? '' : parseFloat(this.state.temperature) + 31 : this.state.temperature}
                              condition={e => {
                                  return e >= 131 ? 'boiling' : 'cool'
                              }}/>
        </div>
    }

}


ReactDOM.render(<Blocker/>, document.getElementById('root'));