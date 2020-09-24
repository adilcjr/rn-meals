import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { Switch } from 'react-native-paper'

import Colors from '../constants/Colors'

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
          value={props.state} 
          onValueChange={props.onChange}
          thumbColor={Platform.OS === 'android' ? 'white' : ''}
          trackColor={{true: Colors.primaryColor}}
        />
      </View>
  )
}

const FiltersScreen = (props) => {
  const { navigation } = props
  const [isGlutenFree, setGlutenFree] = useState(false)
  const [isLactoseFree, setLactoseFree] = useState(false)
  const [isVegan, setVegan] = useState(false)
  const [isVegetarian, setVegetarian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    }
    console.log(appliedFilters)
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

  useEffect(() => {
    navigation.setParams({save: saveFilters})
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch 
        label='Gluten-free'
        onChange={(newValue) => setGlutenFree(newValue)}
        state={isGlutenFree}
      />
      <FilterSwitch 
        label='Lactose-free'
        onChange={(newValue) => setLactoseFree(newValue)}
        state={isLactoseFree}
      />
      <FilterSwitch 
        label='Vegan'
        onChange={(newValue) => setVegan(newValue)}
        state={isVegan}
      />
      <FilterSwitch 
        label='Vegetarian'
        onChange={(newValue) => setVegetarian(newValue)}
        state={isVegetarian}
      />
    </View>
  )
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title='Save'
          iconName='ios-save'
          onPress={
            navData.navigation.getParam('save')
          }
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '80%',
  }
})

export default FiltersScreen