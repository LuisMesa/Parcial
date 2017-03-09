import React, {Component} from 'react';
import axios from 'axios';
const URL='http://localhost:1337';
//c1.staticflickr.com/{farm}/{server}/{id}_{secret}.jpg
class Foto extends Component
{

  render()
  {
    var farm=this.props.foto.farm ;
    var server=this.props.foto.server ;
    var id=this.props.foto.id ;
    var secret=this.props.foto.secret ;
    var url ="http://c1.staticflickr.com/"+farm+"/"+server+"/"+id+"_"+secret+".jpg";
    return(
        <div className="col-md-3">
        <div className="boxFoto">
          <img className="imagen" src={url} alt="Smiley face" width="300" height="300"> </img>
        </div>
        </div>
    );
  }
}

export default Foto;
