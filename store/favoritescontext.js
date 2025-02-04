import { Children, createContext, useState } from "react";
export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
})

function FavoritesContextProvider({ children }) {
    const [favoriteFoodIds, setfavoriteFoodIds] = useState([])

    function addFavorite(id) {
        setfavoriteFoodIds((current) => [...current, id])
    }
    function removeFavorite(id) {
        setfavoriteFoodIds((current) => current.filter((foodId) => foodId !== id))
    }
    const value = {
        ids: favoriteFoodIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return (
        <FavoritesContext.Provider value={value}>{children} </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider