import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [searchText, setSearchText] = useState([])
    useEffect(() => {
        const url = `www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Meals;