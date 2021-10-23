import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'


import * as newsActions from '../store/actions/newsActions'

const Card = (props) => {

    const dispatch = useDispatch()
    const isFav = useSelector(state => state.news.favorite.some(article => article.url === props.url))


    return (

        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image style={styles.Image}
                    // source={require('../../assets/pipeline engieering.jpg')}
                    // source={{ uri: 'https://images.pexels.com/photos/8938662/pexels-photo-8938662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                    source={{ uri: props.image ? props.image : 'https://images.pexels.com/photos/8938662/pexels-photo-8938662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    {props.title && props.title.length > 25 ? props.title.slice(0, 25) + '...' : props.title}
                </Text>
                <MaterialIcons name={isFav ? 'favorite' : 'favorite-border'} color="#72bcd4" size={24}
                    onPress={() => {
                        dispatch(newsActions.toggleFavorite(props.url))
                    }}
                />
            </View>
            <View style={styles.descWrapper} >
                <Text onPress={() => {
                    props.navigation.navigate("NewsDetails",{
                        articleUrl: props.url
                    })
                }} style={styles.desc}>{props.desc && props.desc.substring(0, 100) + '...readmore'}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0, height: 2
        },
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    descWrapper: {
        paddingHorizontal: 15
    },
    Image: {
        height: '100%',
        width: '100%'
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,


    },
    desc: {
        fontFamily: 'Ubuntu',
        fontSize: 15,
        marginTop: 10,
    }
})

export default Card;