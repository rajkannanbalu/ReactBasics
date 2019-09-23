import React, { PureComponent} from 'react'
import ListItem from './ListItem';

class ListComponent extends PureComponent {
  constructor (props) {
    super(props); //Should call super(props) to allow to use this and props values
    this.state = { items: props.items }    
  }
  
  // Not needed since we are using PureComponent and it will update only changed <li> component because when items changes it points to new reference  
  // shouldComponentUpdate (nextProps) {  
  //     return nextProps.items !== this.props.items
  //  }
    
  renderElement (item) {
      //Warning only: should use key for each <li></li> component to differentiate react which components changes during rerender 
      //Recommeded: Should use on item level data which has unique id, name instead of index if the order of item changes
      //Using index as key is antipattern in react
    // return <ListItem key={item.id}  >{item.name} </ListItem>
    return <ListItem key={item.id} item={item}></ListItem>
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