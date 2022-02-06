import API_URL from "./config";

const getAllCategories = async () => {
    const response = await fetch(`${API_URL}categories.php`);
    return await response.json();
}

const getMealByCategorie = async (catName) => {
    const response = await fetch(`${API_URL}filter.php?c=${catName}`);
    return await response.json();
}

const getMealInfo = async (id) => {
    const response = await fetch(`${API_URL}lookup.php?i=${id}`);
    return await response.json();
}
export {getAllCategories, getMealByCategorie, getMealInfo}