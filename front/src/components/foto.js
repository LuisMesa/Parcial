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
        <div className="boxFoto">
          <img src={url} alt="Smiley face" width="200" height="200"> </img>
        </div>
    );
  }
}

export default Foto;
