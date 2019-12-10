import React, {Component} from 'react'
import './PrintType.css';

class PrintType extends Component {
    render() {
        return(
            <>
                <p>Print Type: </p>
                <select 
                    id='print-type'
                    name='print-type'
                    onChange={e => this.props.printChanged(e.target.value)}>
                    <option value='All'>All</option>
                    <option value='Books'>Books</option>
                    <option value='Magazines'>Magazines</option>
                </select>
            </>
        )
    }
}

export default PrintType;