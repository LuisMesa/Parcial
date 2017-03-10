import React, {Component} from 'react';
import axios from 'axios';
const URL='http://localhost:1337';
//c1.staticflickr.com/{farm}/{server}/{id}_{secret}.jpg
class Foto extends Component
{

  render()
  {
    var farm=this.props.foto.farm;
    var server=this.props.foto.server;
    var id=this.props.foto.id;
    var secret=this.props.foto.secret;
    var url ="http://c1.staticflickr.com/"+farm+"/"+server+"/"+id+"_"+secret+".jpg";
    var owner=this.props.foto.owner;
    var url2='https://www.flickr.com/photos/'+owner+'/'+id;
    return(
        <div className="col-md-2">
        <div className="boxFoto">
          <a href={url2}><img className="imagen" src={url} width="200" height="175"> </img></a>
        </div>
        </div>
    );
  }
}

export default Foto;
