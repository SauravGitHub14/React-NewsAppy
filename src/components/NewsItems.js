import React, {Component} from 'react';

export class NewsItems extends Component {
    render(){
        let {title, description, imageUrl,newsUrl, author, date } = this.props;
        return(
            <div className='my-4 d-flex align-items-center justify-content-center'>
                <div className="card" style={{width:'18rem', height:"30rem",justifyContent:"center"}}>
              <img src={imageUrl?imageUrl:"https://img.etimg.com/thumb/msid-101539626,width-1070,height-580,imgsize-38130,overlay-economictimes/photo.jpg"} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark  btn-primary">Read More</a>
              </div>
               </div>
            </div>
        )
    }
}

export default NewsItems;