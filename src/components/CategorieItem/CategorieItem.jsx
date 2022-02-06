import { Link } from "react-router-dom";

export default function CategorieItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <>
      <div className="col card mb-3 me-2" style={{maxWidth: '20rem'}}>
        <img src={strCategoryThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strCategory}</h5>
          <p className="card-text">{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-body">
          <Link to={`/meal/${strCategory}`} className="btn btn-primary">
            Watch category
          </Link>
        </div>
      </div>
    </>
  );
}
