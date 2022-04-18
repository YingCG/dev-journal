import React,{Component} from 'react'
import NewShapeForm from './NewShapeForm';
import ShapeC from './ShapeC';

class ShapeListC extends Component {
    constructor(props) {
        super(props);
        this.state = { shapes: [{ width: 10, height: 10, color: "orange"}] }
        this.create = this.create.bind(this)
    }
    
    remove(id){
        this.setState({
            shapes: this.state.shapes.filter(shape => shape.id !== id)
        })
    }
    create(newShape){
        this.setState({
            shapes: [...this.state.shapes, newShape]
        })
    } 

    render() {
        const shapes = this.state.shapes.map(shape => (
            <ShapeC key={shape.id} id={shape.id} width = {shape.width} height={shape.height} color={shape.color} removeShape={()=> this.remove(shape.id)}/>
        ))
        return (
            <div>
                <h1>Color Shape Maker</h1>
                <NewShapeForm createShape={this.create}/>
                {shapes}
            </div>
        )
    }
}

export default ShapeListC
