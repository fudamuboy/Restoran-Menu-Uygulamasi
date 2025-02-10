import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data'
import FoodGrid from '../components/FoodGrid'
import { useLayoutEffect, useContext, useCallback } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoritesContext } from '../store/favoritescontext'

export default function FoodDetailScreen({ route, navigation }) {

    const favoriteFoodContext = useContext(FavoritesContext)

    const foodId = route.params.foodId
    const selectedFood = FOODS.find((food) => food.id === foodId)

    const foodIsFavorite = favoriteFoodContext.ids.includes(foodId)

    const changeFavorite = useCallback(() => {
        if (foodIsFavorite) {
            favoriteFoodContext.removeFavorite(foodId)
        } else {
            favoriteFoodContext.addFavorite(foodId)
        }
    }, [foodIsFavorite, favoriteFoodContext, foodId])

    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => {
                return (
                    <Pressable
                        onPress={changeFavorite}
                        style={({ pressed }) => (pressed ? styles.iconPressed : null)}
                    >
                        {/* ✅ Ionicons ile düzeltildi */}
                        <Ionicons
                            name={foodIsFavorite ? 'star' : 'star-outline'}
                            size={24}
                            color="orange"
                        />
                    </Pressable>
                )
            }
        })

    }, [navigation, changeFavorite, foodIsFavorite])

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectedFood.imageUrl }} style={styles.img} />
            <Text style={styles.title}>{selectedFood.title} </Text>
            <View style={styles.detail}>
                <Text style={styles.detailItem}>{selectedFood.affordability} </Text>
                <Text style={styles.detailItem}>{selectedFood.complexity} </Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.SubTitle}>
                    <Text style={styles.inside}>Icindekiler</Text>
                </View>
                <FoodGrid data={selectedFood.ingredients} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    img: {
        width: '100%',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,

    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,

    },
    detailItem: {
        color: 'red',
        fontSize: 16,
        marginHorizontal: 4,
        marginBottom: 8,
    },
    listContainer: {
        paddingHorizontal: 10,
    },
    SubTitle: {},
    inside: {
        color: 'orange',
        textAlign: 'center',
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: 'orange',
        fontWeight: 'bold',
    },
    iconPressedpressed: {
        opacity: 0.5,
    },
})