import { Link } from "react-router-dom";

export default function MealItem(props) {
    const {strMeal, strMealThumb, idMeal} = props;

    return (
        <div className="col card mb-3 me-2" style={{maxWidth: '20rem'}} >
        <img src={strMealThumb} className="card-img-top" alt={strMeal}/>
        <div className="card-body">
            <h5 className="card-title">{strMeal.length > 30 ? strMeal.slice(0, 30)+'...' : strMeal}</h5>
            <Link to={`/info/${idMeal}`} className="btn btn-primary">How to cook?</Link>
        </div>
        </div>
    )
}

