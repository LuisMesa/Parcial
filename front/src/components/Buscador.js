import React, {Component} from 'react';

class Buscador extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      query: ''
    }
  }


  buscar(query)
  {
    this.setState({query: query});
    this.props.obtenerFotosWithQueryColor(query);
  }


  render()
  {
    return (
              <input type="text" label="Type Something.." onChange={(event) => this.buscar(event.target.value)}/>


    )
  }
}

export default Buscador;
