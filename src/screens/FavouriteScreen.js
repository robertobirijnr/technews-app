import React from "react";
import { StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import Card from "../components/Card";


const FavoriteScreen = (props) => {
    const favorite = useSelector(state => state.news.favorite)

    // console.log(favorite)


    return (
        <FlatList
            data={favorite}
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

export default FavoriteScreen