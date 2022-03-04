import React, {Component} from 'react'

class Shape extends Component {
    render() {
        return (
            <>
            <div style={{
                height: `${this.props.height}em`,
                width: `${this.props.width}em`,
                backgroundColor: this.props.color
            }}/>
            <button>x</button>
            </>
        )
    }
}

export default Shape;