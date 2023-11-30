import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function App() {
  const data = [
    {
      productImage:"https://www.apple.com/in/iphone/home/images/meta/iphone__ky2k6x5u6vue_og.png",
      productName: "Iphone 14promax",
      price: 100000,
      rating: 91,
    },
    {
      productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAmZcKm3NQoK8tlikVJsPAfm3cAhr_IKelWibDsJj3vgZ5BCZuvssOPGjIbljbkWR68&usqp=CAU",
      productName: "Samsung Galaxy",
      price: 95000,
      rating: 90,
    },
    {
      productImage:"https://images.officeworks.com.au/api/2/img/https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GPX7PR128H_A_google_pixel_7_pro_5g_unlocked_smartphone_128gb_hazel.jpg/resize?size=600&auth=MjA5OTcwODkwMg__",
      productName: "Google Pixel 7pro",
      price: 70000,
      rating: 80,
    },
    {
      productImage:"https://image01.oneplus.net/ebp/202304/19/1-M00-43-A2-CkvLh2Q_r6GAJgToAAD0wMl_B5I63.webp?x-amz-process=image/format,webp/quality,Q_80",
      productName: "Oneplus 11 5G",
      price: 64000,
      rating: 50,
    },
  ];

  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
      <Badge bg="success">
        Cart {count}
      </Badge>
      </div>
     <div className="card-container">

      {data.map((product, idx)=>(
          <Product
          key ={idx}
          prod ={product}
          count ={count}
          setCount ={setCount}
          />
      ))}
      </div>
    </div>
  );
}

export default App;


function Product({prod, count, setCount}){
  const[show, setshow] = useState(false)
  function addtocart(){
    setCount(count+1);
    setshow(!show)

  }
  function removecart(){
    setCount(count-1);
    setshow(!show)

  }
 return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
      <Card.Title>{prod.productName}</Card.Title>
      <Card.Text>{prod.price}</Card.Text>
      <Card.Text>{prod.rating}</Card.Text>
      {                     }
       {!show ?
        <Button variant="primary"
        onClick={addtocart}
        >Add to Cart</Button> : 
        <Button variant="danger"
        onClick={removecart}
        >Remove cart</Button>
        }
       
      </Card.Body>
    </Card>

    </div>
  )
}


