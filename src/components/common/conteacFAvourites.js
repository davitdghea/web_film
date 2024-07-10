import React, { createContext, useState, useContext } from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => {
    return useContext(FavouritesContext);
};

export const FavouritesProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    const addFavourite = (movie) => {
        setFavourites((prevFavourites) => [...prevFavourites, movie]);
    };

    const removeFavourite = (id) => {
        setFavourites((prevFavourites) => prevFavourites.filter(movie => movie.id !== id));
    };

    return (
        <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
            {children}
        </FavouritesContext.Provider>
    );
};
