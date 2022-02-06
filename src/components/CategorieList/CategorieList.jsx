import CategorieItem from "../CategorieItem/CategorieItem";

export default function CategorieList({catalog = []}) {
    return (
        <>
        <div className="row row-cols-3 mt-3">
            {catalog.map(el => {
                return <CategorieItem key={el.idCategory} {...el} />
            })}
        </div>
        </>
    )
}