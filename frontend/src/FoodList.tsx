import { useEffect, useState } from 'react';
import { food } from './types/food';

function FoodList() {
  const { foods, setFoods } = useState<food[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
      const response = await fetch('https://localhost:5000/api/MarriottFood');
      const data = await response.json();
      setFoods(data);
    };
    fetchFood();
  }, []);

  return (
    <>
      <h1>Marriott Food</h1>
      <table>
        <thead>
          <tr>
            <td>Event Name</td>
            <td>Vendor</td>
            <td>Foot Rating</td>
          </tr>
        </thead>
        <tbody>
          {foods.map((f) => (
            <tr key={f.foodId}>
              <td>{f.eventName}</td>
              <td>{f.vendor}</td>
              <td>{f.foodRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
