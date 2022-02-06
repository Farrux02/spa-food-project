import MealItem from "../MealItem/MealItem";

export default function MealList({meals = []}) {
    return (
        <>
        <div className="row row-cols-3 mt-3">
            {meals.map((el) => {
               return <MealItem key={el.idMeal} {...el} />
            })}
        </div>
        </>
    )
}