import React from "react";
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux'


const NewsDetailsScreen = (props) => {



    const { articleUrl } = props.route.params

    const article = useSelector(state => state.news.articles.articles.find(art => art.url === articleUrl))
    // console.log(article)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{article.title}</Text>
            </View>

            <View>
                <ImageBackground source={{ uri: article.urlToImage }} style={styles.Image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.author}>{article.author}</Text>
                        <MaterialIcons />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.desc}>
                <Text style={styles.descText}>{article.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    header: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 24
    },
    Image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    author: {
        fontFamily: 'Ubuntu',
        fontSize: 20,
        color: 'white'
    },
    desc: {
        fontSize: 20,
        fontFamily: 'Ubuntu'
    },
    descText:{
        fontSize:20,
        fontFamily:'Ubuntu',
        paddingTop:8
    }
})

export default NewsDetailsScreen