import React, { propTypes } from 'react';
import ClassNames from 'classnames';
import FontAwesome from 'react-fontawesome';


class Dimension extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          locked: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    _handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    toogleLock = () =>{
      //this.setState({locked: !this.state.locked})
    }

    render() {
      let lock = this.state.locked ? <FontAwesome style={{pointer:'cursor'}} onClick={this.toogleLock} name='lock'></FontAwesome> : <FontAwesome style={{pointer:'not-allowed', color:'#ccc'}} onClick={this.toogleLock} name='unlock-alt'></FontAwesome>
        return (
            <div className="Grid-item single">
                <div className="text">
                    <p className="action-label">{this.props.name} <span style={{color:'#ccc'}}>(px)</span></p>
                </div>
                <div className="input">
                    <input
                        placeholder="height"

                        className="text-box"
                        type="number"
                        value={this.props.ivalue[0]}
                        onChange={this.props.func.bind(this, this.props.propname[0])}
                    />
                    <div style={{cursor:'pointer'}}>{lock}</div>
                    <input
                        placeholder="width"
                        className="text-box"
                        type="number"
                        value={this.props.ivalue[1]}
                        onChange={this.props.func.bind(this, this.props.propname[1])}
                    />
                </div>
            </div>

        );
    }
};

Dimension.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.array,
    func: React.PropTypes.func,
    propname: React.PropTypes.array,
}

export default Dimension;
