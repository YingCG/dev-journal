import React,{Component} from 'react'
import Shape from "./Shape"
import NewShapeForm from './ShapeForm'

class ShapeList extends Component {
    constructor(props) {
        super(props)
        this.state = {Shape: [{width: 10, height: 40, color: 'orange' }]}
        this.create = this.create.bind(this)
    }

    create(newShape){
        this.setState({
            boxes: [...this.state.boxes, newShape]
        })
    }

    render() {
        const boxes = this.state.Shape.map( box => (
            <Shape width={box.width} height={box.height} color={box.color}/>
        ))
        return (
            <div>
                <h1>Color box Maker Thingy</h1>
                <NewShapeForm createShape={this.create}/>
                {boxes}
            </div>
        )
    }
}

export default ShapeList
