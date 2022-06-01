import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Navigation from "../../component/Navigation";


const Detail = () => {

    const [description, setDescription] = useState(``);
    const [name, setName] = useState(``);
    const [image, setImage] = useState(``);
    const [author, setAuthor] = useState(``);
    const {id} = useParams();
  
    useEffect(() => {
      getProductById();
    },[]);
    
    const getProductById = async () => {
      const response = await axios.get(`/api/products/${id}`);
      setDescription(response.data.description);
      setName(response.data.name);
      setImage(response.data.image_url)
      setAuthor(response.data.author)
      console.log(response);
    };
      
  
    return (
        <div>
            <Navigation />
          <div className="container-detail">
            <div className="card card-detail" >
                    <img src= {`/images/upload/${image}`} className="card-img-top img-detail" alt="..." />
          
                  <div className="card-body card-body-Detail"  >
                    <h5 className="card-title title text-center">{name}</h5>
                      <label className="text-muted" style={{whiteSpace:"nowrap"}}>Author: {author} 
                        <span className="publish-detail" >
                          {new Date().toDateString()} 
                        </span> 
                      </label>
                      <br/>
                        <p className="card-text description-detail"> {description}</p>
                      <Link to="/home" className="btn btn-primary " style={{marginLeft:"10px"}}>Kembali</Link>
                
       
                  </div>
               </div>
            </div>
  
 </div>
  )
}

export default Detail;