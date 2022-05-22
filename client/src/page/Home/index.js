import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./style.css";

const Home = () => {

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState(``);
//Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
 
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  useEffect(()=>{
    

       getProduct();
       
  }, [pageNumber] );

  const getProduct = async () => {
    const response = await fetch(`/api/products?page=${pageNumber}`);
    const {totalPages,data} = await response.json();
    setNumberOfPages(totalPages);
    setProduct(data);
    console.log(data);
  }

  // const getProduct = async () => {
  //   const response = await axios.get(`/api/products`);
  //   setProduct(response.data.data);
  //   console.log(response);
  // }

  const deleteProducts = async (id) => {
    await axios.delete(`/api/products/${id}`);
      getProduct();
     
   }

  const searchProduct = product.filter(products => {
    return(
      products.name.toLowerCase().includes(search.toLowerCase() ) 
      
    ) 
  })


  return(

    <div>

<Navbar variant="dark" bg="danger" expand="lg" className="navbar-home" style={{width:"100%"}}>
  <Container fluid >
    <Navbar.Brand href="#">MERN Blog</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <LinkContainer to="/home">
            <Nav.Link active>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/tambah">
            <Nav.Link active>Tambah</Nav.Link>
        </LinkContainer>
        
      </Nav>
      

      <Form className="d-flex search-home" >
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />    
      </Form>

      <Nav>
      <LinkContainer to="/logout">
            <Nav.Link active>Logout</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 

      
        <div className="row row-home" >           
           {
           searchProduct.map && searchProduct.map((articles, i) => {
           return(
              <div key={i}  className="col-6 col-sm-4 col-md-3 " >
                <div className="card " style={{height:"400px", marginTop:"10px"}} >
                <Link to={`/detail/${articles._id}`} style={{textDecoration:"none",color:"black",cursor:"pointer"}} > 
                    <img src= {`/images/upload/${articles.image_url}`} className="card-img-top" alt="..." /> 
                </Link>
                  <div className="card-body card-home" >
                    <h5 className="card-title title"><Link to={`/detail/${articles._id}`} style={{textDecoration:"none",color:"black",cursor:"pointer"}} >{articles.name}</Link> </h5>
                      <small className="text-muted"> {new Date(articles.createdAt).toDateString()} </small> 
                    <p className="card-text text1"> {articles.description}</p>

                  </div>
        
                  <div className="card-footer" >
                    <span style={{cursor:"pointer"}} onClick={ ()=> {
                      const notif = window.confirm("Apakah anda ingin menghapus?");
                        if(notif === true){
                          deleteProducts(articles._id)
              
                        }
                      }  }><button className='btn btn-sm btn-outline-warning'><i className="fa fa-lg fa-trash text-danger"></i></button>
                   </span>
                   <span style={{cursor:"pointer"}}>
                      <Link to={`/edit/${articles._id}`} className="btn btn-sm btn-outline-success"><i className="fa fa-lg fa-edit text-primary"></i></Link>
                   </span> 
                   <span style={{cursor:"pointer"}}>
                      <Link to="/tambah" className="btn btn-sm btn-outline-primary"><i className="fa fa-lg fa-plus text-success "></i></Link>
                   </span>                
                </div>
               
                    </div>
                  </div>        
                    )  
                    })
              
                    }
            </div> 

     {/* Pagination */}
     <div className='pagination'>
            <button className='page-link' onClick={gotoPrevious}>Previous</button>
              {pages.map((pageIndex) => (
                <button className='page-link' key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
                  {pageIndex + 1}
                </button>
              ))}
      <button className='page-link' onClick={gotoNext}>Next</button>
    </div>

  </div>
  )
}

export default Home;