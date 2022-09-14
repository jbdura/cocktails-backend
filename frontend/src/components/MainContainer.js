import React from 'react';
import CocktailCard from './CocktailCard';
import { Container, Row, Col} from 'react-bootstrap';
import AddForm from './AddForm';



const MainContainer = ( {cocktails, setCocktails, deleteCocktailCard, reviews} ) => {

//console.log(eachReview)

  return(

    <Container fluid="md" className='card-container'>

      <AddForm cocktails={cocktails} setCocktails={setCocktails} />

      <Row md={5} >

        {cocktails.map(cocktail => {
          let eachReview = reviews.filter(review => {
            if (review.cocktail_id === cocktail.id) {
            return review
          } return "" 
          })

          return(
            <Col key={cocktail.id}>
              <CocktailCard  
                cocktail={cocktail} 
                deleteCocktailCard={deleteCocktailCard}  
                eachReview={eachReview}
                />
            </Col>)
        })}

      </Row>
      
</Container>
  )
};

export default MainContainer;