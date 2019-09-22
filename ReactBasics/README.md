# React ListComponent

## Problems found
- Should use super(props) to use this.props inside the constructor ### [L5](https://github.com/rajkannanbalu/ReactBasics/blob/master/ReactBasics/src/ListComponent.js#L5) 
- Should use arrow function or bind(this) for any event handler function declared inside class component ### [L15](https://github.com/rajkannanbalu/ReactBasics/blob/master/ReactBasics/src/ListComponent.js#L15) 
- Should use key in li component to tell React to differentiate which li component changed [L23](https://github.com/rajkannanbalu/ReactBasics/blob/master/ReactBasics/src/ListComponent.js#L23)
- Don't need to use this.props.onClick here
- suggestion: avoid use shouldComponentUpdate and use PureComponent here to avoid loading of all the components incase of multiple items in the list

## Author

- B. Raj kannan
