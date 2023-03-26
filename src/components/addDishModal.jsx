import React, {Component} from "react";
import "./addDishModal.css"

class AddDishModal extends Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         category: '',
         ingredientQuantities: [''],
         ingredientNames: [''],
         maxIngredientsReached: false
      };

      this.maxIngredients = 10;
   }

   handleNameChange = e => {
      this.setState({ name: e.target.value });
   };

   handleCategoryChange = e => {
      this.setState({ category: e.target.value });
   };

   handleIngredientQuantityChange = (e, index) => {
      const newIngredients = [...this.state.ingredientQuantities];
      newIngredients[index] = e.target.value;
      this.setState({ ingredientQuantities: newIngredients });
   };

   handleIngredientNameChange = (e, index) => {
      const newIngredients = [...this.state.ingredientNames];
      newIngredients[index] = e.target.value;
      this.setState({ ingredientNames: newIngredients });
   };

   handleAddIngredient = () => {
      if (this.state.maxIngredientsReached) {
         return;
      }
      const newIngredientNames = [...this.state.ingredientNames, ''];
      this.setState({ ingredientNames: newIngredientNames });

      const newIngredientQuantities = [...this.state.ingredientQuantities, ''];
      this.setState({ ingredientQuantities: newIngredientQuantities });

      this.setState({ maxIngredientsReached: newIngredientNames.length >= this.maxIngredients || newIngredientQuantities.length >= this.maxIngredients })
   };

	render() {
		return (
			<div className="background">
				<div className="content">
               <div className="header">
                  <h3>Add new dish</h3>
               </div>
               
               <div className="input-group dish-name">
                  <label className="input-label">Name:</label>
                  <input className="input-field" type="text" value={this.state.name} onChange={this.handleNameChange}></input>
               </div>

               <div className="input-group category">
                  <label className="input-label">Category:</label>
                  <input className="input-field" type="text" value={this.state.category} onChange={this.handleCategoryChange}></input>
               </div>

               <div className="input-group ingredients">
                  <div className="info-container">
                     <label className="input-label">Ingredients:</label>
                     <button className="add-ingredient-button" onClick={this.handleAddIngredient} disabled={this.state.maxIngredientsReached}>Add Ingredient</button>
                  </div>

                  <div className="ingredient-group quantity">
                     <label className="label">Quantity</label>
                     {this.state.ingredientQuantities.map((ingredient, index) => (
                        <div key={index}>
                           <input className="input-field" id={`quantity${index}`} type="text" value={ingredient} onChange={e => this.handleIngredientQuantityChange(e, index)} />
                        </div>
                     ))}
                  </div>

                  <div className="ingredient-group name">
                     <label className="label">Name</label>
                     {this.state.ingredientNames.map((ingredient, index) => (
                        <div key={index}>
                           <input className="input-field" id={`name${index}`} type="text" value={ingredient} onChange={e => this.handleIngredientNameChange(e, index)} />
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="footer">
                  <button className="footer-button cancel-button" onClick={this.props.closeModal}>Cancel</button>
                  <button className="footer-button add-dish-button">Add dish</button>
               </div>
				</div>
			</div>
		);
	}
}

export default AddDishModal;