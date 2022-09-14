import React from 'react';
import { Card, Button } from "react-bootstrap";


const CocktailCard = ( {cocktail, deleteCocktailCard, eachReview} ) => {
  const {id, cocktail_name, category, image, glass} = cocktail;
  
 //console.log(eachReview)

 let score = eachReview.map(obj=>{
   return (
     <div key={obj.id}>{obj.score} out of 10</div>
    
   )
 })

 let comment = eachReview.map(obj=>{
   return (
    <li key={obj.id}>{obj.comment}</li>
   )
 })



  return(

<Card className='card' style={{ width: "10rem" }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{cocktail_name}</Card.Title>
    <Card.Text>
      Category: {category} 
    </Card.Text>
    <Card.Text>
      Glass: {glass}
    </Card.Text>
      Recent Scores: {score}
    <div>
      Comments:
      {comment}
    </div>
    <Button variant="danger" className='card-button' onClick={()=>deleteCocktailCard(id)}>Delete</Button>
    <Button variant="warning" className='card-button'>Edit</Button>
  </Card.Body>
</Card>
  )
};



export default CocktailCard;