import React, {Component} from 'react';
import axios from 'axios';
import Foto from './foto';
import Buscador from './Buscador';

const URL = 'http://localhost:1337';

const colores = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
const numFilas = 6;
const numCols = 6;

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
      console.log(response.data);
      this.setState({
        fotos: response.data
      })
    })
  }

  obtenerFotosWithQueryColor(query)
  {
    axios.get(URL + "/fotosColores/" + query).then(response =>
    {
      console.log(response.data);
      this.setState({
        fotos: response.data
      })
    })

  }

  obtenerFotosWithQuery(query)
  {
    axios.get(URL + "/fotos/" + query).then(response =>
    {
      console.log(response.data);
      this.setState({
        fotos: response.data
      })
    })
  }

  render()
  {
    return (


        <div className="row">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6  buscador">
              <div className="group">
                <Buscador obtenerFotosWithQueryColor={this.obtenerFotosWithQueryColor.bind(this)}/>
                <p className="info">Search for something on Flicker and you will see a rainbow of it, if you want to see
                  some image on Flicker.com just click on it</p>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="espacio"></div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="principalContainer">

                <div className="row">

                  {this.state.fotos.map((fotoActual) =>
                  {
                    return <Foto foto={fotoActual}/>
                  })}

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

    )
  }
}

export default App;
