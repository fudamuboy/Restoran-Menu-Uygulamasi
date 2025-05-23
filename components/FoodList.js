import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FoodItem from './FoodItem'

export default function FoodList({ items }) {

  function renderFoodItem(itemData) {
    console.log(itemData)

    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,

    }
    return <FoodItem {...foodItemProps} /> // importation du props
  } return (
    <View>
      <FlatList data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem} />
    </View>
  )

}

const styles = StyleSheet.create({})