import {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navigation from "../../component/Navigation";
import "./style.css";

const Edit = () => {
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [image, setImage] = useState(``);
  const {id} = useParams();

const history = useHistory();
   

const updateProduct = async (e) => {
 e.preventDefault();

    const data = new FormData();
    data.append(`name`, name);
    data.append(`description`, description);
    data.append(`image`, image);

   await axios.put(`/api/products/${id}`, data)
  .then(() => {
    history.push(`/home`)
  })
  .catch((error)=> {
    console.log(error);
  })
}

useEffect(() => {
  getProductById();
},[]);

const getProductById = async () => {
  const response = await axios.get(`/api/products/${id}`);
  setName(response.data.name);
  setDescription(response.data.description);
  console.log(response);
};

  

  return (
    <div >
  
      <Navigation />
   
   <div className='container container-edit' >
<div className='card' >
  <div className='card-header'>Edit Article</div>
    <div className='card-body'>
      <form onSubmit={updateProduct} autoComplete="off" >
      <div className='row' style={{width:"100%"}}>
          <div className="form-group col mb-2">
            <label >Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name" value={name}  onChange={ (event) => {
              const {value} = event.target;
              setName(value); }} />
          </div>

        </div>

      <div className='row' style={{width:"100%"}}>
        <div className="form-group col mb-2">
            <label >Description</label>
              <textarea name="description" style={{width:"100%", height:"80px",resize:"none"}} value={description} onChange={ (e) => {
              setDescription(e.target.value)}} >   
            </textarea>
          </div> 
      </div> 

      <div className='row' style={{width:"100%"}}>
        <div className="form-group col">
          <label >Image</label>
          <input type="file" className="form-control"  placeholder="Gambar" onChange={(event) => {
            const file = event.target.files[0];
            setImage(file);
            }}/>
        </div>
      </div>        
        <button type="submit" className="btn btn-primary mt-3">Simpan</button>
        <Link to="/home" className="btn btn-success mt-3" style={{marginLeft:"5px"}}>Kembali</Link>
  </form>
  </div>
</div>
</div>   

    </div>
  )
}

export default Edit;
