import { useHistory, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealByCategorie } from "../../api";
import MealList from "../MealList";
import Search from '../Search/Search';

export default function Meal() {
  const { goBack } = useHistory();
  const { name } = useParams();

  const [meals, setMeals] = useState([]);

  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const {pathname, search} = useLocation();
  const {push} = useHistory();

  useEffect(() => {
    getMealByCategorie(name).then((data) => {
      setMeals(data.meals);
      setFilteredCatalog(search ? data.meals.filter(item => item.strMeal.toLowerCase().includes(search.split('=')[1].toLowerCase())): data.meals);
    });
  }, [name, search]);


    const handleSearch = (str) => {
      setFilteredCatalog(
        meals.filter((item) => item.strMeal.toLowerCase().includes(str.toLowerCase()))
      );
      push({
          pathname, search: `?search=${str}`
      })
  }

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={goBack}>
        Go back
      </button>
      {!meals.length ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
        <Search handleSearch={handleSearch} />
        <MealList meals={filteredCatalog} />
        </>
      )}
    </>
  );
}
