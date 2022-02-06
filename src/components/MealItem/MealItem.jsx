import { Link } from "react-router-dom";

export default function MealItem(props) {
    const {strMeal, strMealThumb, idMeal} = props;

    return (
        <div className="col-md-4 col-lg-3 mb-3 " >
            <div className="card">
            <img src={strMealThumb} className="card-img-top" alt={strMeal}/>
        <div className="card-body">
            <h5 className="card-title">{strMeal.length > 20 ? strMeal.slice(0, 20)+'...' : strMeal}</h5>
            <Link to={`/info/${idMeal}`} className="btn btn-primary">How to cook?</Link>
        </div>
            </div>
        </div>
    )
}

