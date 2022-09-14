import { React, useState} from "react";


const AddForm = ( {cocktails, setCocktails} ) => {
  const [newCocktailName, setNewCocktailName] = useState("");
  const [newCocktailCategory, setNewCocktailCategory] = useState("");
  const [newCocktailImage, setNewCocktailImage] = useState("");
  const [newCocktailGlass, setNewCocktailGlass] = useState("");

  //Handler Change Functions-----------

  function handleNameChange(event) {
    setNewCocktailName(event.target.value);
  };

  function handleCategoryChange(event) {
    setNewCocktailCategory(event.target.value);
  };

  function handleImageChange(event) {
    setNewCocktailImage(event.target.value);
  };

  
  function handleGlassChange(event) {
    setNewCocktailGlass(event.target.value);
  };

  //Handle Form Submit------------------

  function handleSubmit(event) {
    event.preventDefault();

    let newCocktail = { newCocktailName,
      newCocktailCategory,
      newCocktailImage,
      newCocktailGlass };

console.log(newCocktail) //!-----WORKS!

    fetch("http://localhost:9292/cocktails", {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({
        name: newCocktailName,
        category: newCocktailCategory,
        image: newCocktailImage,
        glass: newCocktailGlass
      })
    })
    .then(response => response.json())
    .then(newCocktail => {
console.log(newCocktail)  
      const addedCocktail = [newCocktail, ...cocktails]

      setCocktails(addedCocktail);
//console.log(addedCocktail)

      setNewCocktailName("");
      setNewCocktailCategory("");
      setNewCocktailImage("");
      setNewCocktailGlass("");
    })
  }


    return(
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="New Cocktail Name..." value={newCocktailName} onChange={handleNameChange}></input>
          <input type="text" placeholder="New Cocktail Category..." value={newCocktailCategory} onChange={handleCategoryChange}></input>
          <input type="text" placeholder="New Cocktail Image..." value={newCocktailImage} onChange={handleImageChange}></input>
          <input type="text" placeholder="New Cocktail Glass..." value={newCocktailGlass} onChange={handleGlassChange}></input>
          <button type="submit" id="submit" name="Submit">Add</button>
        </form>    
    );
};

export default AddForm;