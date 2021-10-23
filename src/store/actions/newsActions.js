
export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const ADD_FAVORITES = 'ADD_FAVORITES'
import Config from 'react-native-config'

export const fetchArticles = () => {
    return async dispatch => {

        const results = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${Config.API_KEY}`)

        const resultData = await results.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        })

    }
}

export const toggleFavorite = url => {
    return {
        type: ADD_FAVORITES,
        payload: url
    }
}