

// import './index.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navigation from "../../component/Navigation";
import { useSelector } from 'react-redux'
import "./style.css";

const Tambah = () => {
  const auth = useSelector(state => state.auth)
 
  const [name, setName] = useState(``);
  const [description, setDescription] = useState(``);
  const [image, setImage] = useState(``);
  const [author, setAuthor] = useState(auth.user.full_name); 
  const [error, setError] = useState(false);
  const history = useHistory();

  
  const saveProduct = async (e) => {
  e.preventDefault();

  if(name.length < 3 || name === "" ){
    setError(true)
    return false;
  }
  
    
  const data = new FormData();
  data.append(`name`, name);
  data.append(`description`, description);
  data.append(`image`, image);
  data.append(`author`, author);

  
    await axios.post(`/api/products/`, data)
  .then(() => {
    history.push(`/home`);
  })
  .catch((error)=> {
    console.log(error);
  })
};


  return (
    <div>
       <Navigation />
   
       <div className='container container-tambah' >
  <div className='card' >
      <div className='card-header'>Tambah Article</div>
        <div className='card-body'>
          <form onSubmit={saveProduct} autoComplete="off" >
          <div className='row' style={{width:"100%"}}>
              <div className="form-group col mb-2">
                <label >Name</label>
                <input type="text" name="name" className="form-control" placeholder="Enter name"  onChange={ (event) => {
                  const {value} = event.target;
                  setName(value); }} />
                <small className="form-text text-danger"> 
                  {
                  (error && name === "" &&  `nama tidak boleh kosong`) || 
                  (error && name.length < 3 &&  `nama minimal 3 karakter` )
                
                  } 
                 </small>
              </div>

            </div>

          <div className='row' style={{width:"100%"}}>
            <div className="form-group col">
                <label >Description</label>
                  <textarea name="description" style={{width:"100%", height:"80px",resize:"none"}} onChange={ (e) => {
                      setDescription(e.target.value)}} >   
                  </textarea>
                <small className="form-text text-danger"> 
                  {
                  (error && description === "" &&  `description tidak boleh kosong`) || 
                  (error && description.length < 5 &&  `description minimal 5 karakter`) 
                
                  } 
                 </small>
              </div>  
            </div>

                <input type="hidden" name="author" className="form-control" placeholder="Enter description"  onChange={ (event) => {
                  const {value} = event.target;
                  setAuthor(value); }} />
            
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

export default Tambah;