import React, {Component} from 'react';
import axios from 'axios';
import Foto from './foto';
import Buscador from './Buscador';

const URL = 'http://localhost:1337';

class App extends Component {
  constructor(props)
  {
    super(props);

    this.state = {
      fotos: []
    }
  }


  obtenerFotos()
  {
    axios.get(URL + "/fotos").then(response =>
    {
      console.log(response.data.photos.photo);
      this.setState({
        fotos: response.data.photos.photo
      })
    })
  }

  obtenerFotosWithQuery(query)
  {

    axios.get(URL + "/fotos/" + query).then(response =>
    {
      console.log(response.data.photos.photo);
      this.setState({
        fotos: response.data.photos.photo
      })
    })
  }


  render()
  {
    return (
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="principalContainer">
              <Buscador obtenerFotosWithQuery={this.obtenerFotosWithQuery.bind(this)}/>

              <div className="row">

                {this.state.fotos.map(fotoActual =>
                {
                  return <Foto foto={fotoActual}/>
                })}

              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

    )
  }
}

export default App;
