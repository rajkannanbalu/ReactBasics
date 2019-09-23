import React, { PureComponent} from 'react'

class ListItem extends PureComponent {

    handleClick(item) {
        //If we want to propogate this event to parent component, we can call the props function which called from parent component
        alert("Clicked item: " + item.name);
      }

    render() {
        return <li style={{ backgroundColor: 'white', height: 40 }} onClick={() => this.handleClick(this.props.item)}> {this.props.item.name} </li>
    }
}

export default ListItem;