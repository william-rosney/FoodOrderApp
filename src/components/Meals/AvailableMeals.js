import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Phò",
    description: "Vietnamese soup.. Just for you.",
    price: 2.00,
  },
  {
    id: "m6",
    name: "Escalope Normande",
    description: "Chicken cutlet cooked with butter in a sauce based on sour cream",
    price: 24.00,
  },
  {
    id: "m7",
    name: "Sweet potato fries",
    description: "Everything is said in the title",
    price: 11.00,
  },
  {
    id: "m8",
    name: "Tiramisu ",
    description: "Il miglior dolce del mondo",
    price: 15.11,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
    
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
