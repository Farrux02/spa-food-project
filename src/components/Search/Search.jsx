import { useState } from "react";

export default function Search({handleSearch = Function.prototype}) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter'){
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        handleSearch(value);
    };
    
    return (
        <div className="d-flex">
          <input
            className="form-control me-2"
            style={{maxWidth: '75rem'}}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onKeyDown={handleKey}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button className="btn btn-outline-success" type="button" onClick={handleSubmit}>
            Search
          </button>
        </div>
    )
}