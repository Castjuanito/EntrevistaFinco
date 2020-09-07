import React from 'react';
import {getListName} from '../../Services/ListService';

class Entrevista extends React.Component  {

  constructor(){
    super();
    this.state = {
        news: []
    }

  }

  componentDidMount = () => {
    getListName().then(response => {
      this.setState({news : response.results})
    } )
  }


  render (){

    return(
      <div>
        <ul>
          {this.state.news.map(news => (
            <li>{news.list_name}</li>
          ))}
       </ul>
      </div>
    )
  }
}





export default Entrevista;
