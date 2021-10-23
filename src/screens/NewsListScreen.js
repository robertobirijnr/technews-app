import React, { useEffect } from "react";
import { StyleSheet, View, FlatList } from 'react-native'
import Card from "../components/Card";
import { useSelector, useDispatch } from 'react-redux'

import * as newsAction from '../store/actions/newsActions'



const NewsListsScreen = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(newsAction.fetchArticles())
  }, [dispatch])


  const { articles } = useSelector(state => state.news.articles)
  // console.log(articles)


  return (
    <FlatList
      data={articles}
      keyExtractor={item => item.url}
      renderItem={({ item }) => (
        <Card
          navigation={props.navigation}
          image={item.urlToImage}
          title={item.title}
          desc={item.description}
          url={item.url}
        />
      )}
    />

  )
}

const styles = StyleSheet.create({

})

export default NewsListsScreen;