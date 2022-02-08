import {getAllCategories} from '../../api';
import { useEffect, useState } from 'react';
import CategorieList from '../CategorieList';
import { useLocation, useHistory } from "react-router-dom";
import Search from '../Search/Search';

export default function Home() {
  const [categorie, setCategorie] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const {pathname, search} = useLocation();
  const {push} = useHistory();

  const handleSearch = (str) => {
    setFilteredCatalog(
      categorie.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
    );
    push({
        pathname, search: `?search=${str}`
    })
}

  useEffect(() => {
    getAllCategories().then(data => {
      setCategorie(data.categories);
      setFilteredCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())): data.categories);
    });
  }, [search])
  
    return(
        <>
          <Search handleSearch={handleSearch} />
          {!categorie.length ? 
          <div className="text-center">
            <div className="spinner-border" role="status"></div>
            <p>Loading...</p>
          </div> : 
          <CategorieList catalog={filteredCatalog} />}
        </>
    )
}