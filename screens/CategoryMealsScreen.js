import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import MealItem from '../components/MealItem'

import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId')

  //const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId))

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate(
            'MealDetails', 
            { mealId: itemData.item.id }
          )
        }}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={styles.mealList}
      />
    </View>
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
  screen: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  mealList: {
    width: '90%',
    paddingVertical: 5,
  }
})

export default CategoryMealsScreen