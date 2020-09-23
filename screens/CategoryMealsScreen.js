import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import MealList from '../components/MealList'

import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  //const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId))

  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  
})

export default CategoryMealsScreen