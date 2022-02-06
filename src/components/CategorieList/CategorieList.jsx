import CategorieItem from "../CategorieItem/CategorieItem";

export default function CategorieList({catalog = []}) {
    return (
        <>
        <div className="row mt-3 ms-0 me-0" style={{width: '100%'}}>
            {catalog.map(el => {
                return <CategorieItem key={el.idCategory} {...el} />
            })}
        </div>
        </>
    )
}