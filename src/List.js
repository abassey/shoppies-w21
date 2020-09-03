import React, { Component }  from 'react';
import "./List.css";

class List extends Component {
  delete(key){     
    this.props.delete(key);  
  }

  createList = (item) => {

      return <li onClick={() => this.delete(item.key)} style={{textAlign: 'left'}} key={item.key}>{item.text}</li>
  }
 
  render() {
    var nomEntries = this.props.entries;
    var listItems = nomEntries.map(this.createList);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default List;