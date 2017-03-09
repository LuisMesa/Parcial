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
    this.props.obtenerFotosWithQuery(query);
  }


  render()
  {
    return (
        <div className="col-md-12">
          <input type="text" onChange={(event) => this.buscar(event.target.value)}/>
        </div>
    )
  }
}

export default Buscador;