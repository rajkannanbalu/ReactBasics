import React from 'react'

class ListComponent extends React.Component {
  constructor (props) {
    super(props); //Should call super(props) to allow to use this and props values
    this.state = { items: props.items }    
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.items !== this.props.items
  }

  //Should use 
  //this.handleClick = this.handleClick.bind(this) or use arrow functions to use lexical scope
  handleClick = (item) => {
    alert("Clicked item: " + item.name);
  }

  renderElement (item) {
      //Warning only: should use key for each <li></li> component to differentiate react which components changes during rerender 
      //Recommeded: Should use on item level data which has unique id, name instead of index if the order of item changes
      //Using index as key is antipattern in react
    return <li key={item.id}  style={{ backgroundColor: 'white', height: 40 }} onClick={() => this.handleClick(item)}>{item.name} </li>
  }

  render () {
    return (
      <ul >          
        {this.state.items.map((item) => this.renderElement(item))}        
      </ul>      
    )
  }
}

export default ListComponent