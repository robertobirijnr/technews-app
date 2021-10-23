import { ADD_FAVORITES, FETCH_ARTICLES } from "../actions/newsActions";


const initialState = {
    articles: [],
    favorite: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case ADD_FAVORITES:
            // Add or remove item from favorite
            const exist = state.favorite.findIndex(article => article.url === action.payload)
            if (exist >= 0) {
                //  exist
                const favorite = [...state.favorite];
                favorite.splice(exist, 1)
                return {
                    ...state,
                    favorite
                }

            } else {
                const article = state.articles.articles.find(article => article.url === action.payload)
                return {
                    ...state,
                    favorite: state.favorite.concat(article)
                }
            }
    }
    return state;
}