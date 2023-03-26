import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import Dish from './components/dish';
import AddDishModal from './components/addDishModal';


function App() {
  const [dishes, setDishes] = useState();

  const getDishes = async () => {
    try {
      const response = await api.get("/dish");
      console.log(response.data);
      setDishes(response.data);
    } 
    catch(err) {
      console.log(err);
    }   
  }

  useEffect(() => {
    getDishes();
  }, [])

  return (
    <div>
      <div className='bar'>
        {AddDishButton()}
      </div>
        {dishes && dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))}
      <div className='dishes-list'>
        
      </div>
    </div>
  );
}

function AddDishButton() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Add new dish</button>
      {openModal && <AddDishModal closeModal={handleCloseModal} />}
    </div>
  );
}

export default App;
