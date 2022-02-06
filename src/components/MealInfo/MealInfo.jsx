import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealInfo } from "../../api";
import "./MealInfo.css";

export default function MealInfo() {
  const { goBack } = useHistory();
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    getMealInfo(id).then((data) => setInfo(data.meals[0]));
  });

  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = info;

  const tableShow = () => {
    setShowRecipe(!showRecipe);
  };
  const videoShow = () => {
    setShowVideo(!showVideo);
    if (!info.strYoutube) {
      alert("Sorry, video is unavailable!");
    }
  };

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={goBack}>
        Go back
      </button>
      {info.length ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="card mb-3">
          <img src={strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions}</p>
            {strArea ? (
              <p className="card-text">
                <small className="text-muted">Area: {strArea}</small>
              </p>
            ) : null}
            <p className="card-text">
              <small className="text-muted">Category: {strCategory}</small>
            </p>
            <button className="btn btn-secondary" onClick={tableShow}>
              <strong className="text">Watch Recipe</strong>
            </button>
            <button className="btn btn-secondary ms-3" onClick={videoShow}>
              <strong className="text">Watch Video</strong>
            </button>
            {showRecipe ? (
              <table class="table table-bordered border-secondary table-hide">
                <thead>Recipe</thead>
                <tbody>
                  {Object.keys(info).map((key) => {
                    if (key.includes("Ingredient") && info[key]) {
                      return (
                        <tr key={key}>
                          <td className="table-active">{info[key]}</td>
                          <td>{info[`strMeasure${key.slice(13)}`]}</td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            ) : null}
            {showVideo && info.strYoutube ? (
              <div className="row">
                <h5 style={{ margin: "2rem 0 1.5rem" }}>Vedio recipe</h5>
                <iframe
                  title={id}
                  src={`https://www.youtube.com/embed/${info.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
