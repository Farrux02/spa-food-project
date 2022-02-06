import MealItem from "../MealItem/MealItem";

export default function MealList({meals = []}) {
    return (
        <>
        <div className="row mt-3 ms-0 me-1">
            {meals.map((el) => {
               return <MealItem key={el.idMeal} {...el} />
            })}
        </div>
        </>
    )
}