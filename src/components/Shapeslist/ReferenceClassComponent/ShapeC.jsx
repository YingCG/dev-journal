import React,{Component} from 'react'

class ShapeC extends Component {
    render(){
        return (
            <>
            <div style={{
                height: `${this.props.height}em`,
                width: `${this.props.width}em`,
                backgroundColor: this.props.color
            }}/>
            <button onClick={this.props.removeShape}>x</button>
            </>
        )
}
}
export default ShapeC;