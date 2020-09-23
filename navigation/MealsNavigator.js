import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealDetailsScreen'
import FiltersScreen from '../screens/FiltersScreen'

import Colors from '../constants/Colors'

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories',
    }
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetails: {
    screen: MealDetailsScreen,
  }
}, {
  //initialRouteName: 'Categories' , // Default 
  defaultNavigationOptions: defaultStackNavOptions
})

const FavoritesNavigator = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen
  },
  MealDetails: {
    screen: MealDetailsScreen
  },
}, {
  //initialRouteName: 'Categories' , // Default 
  defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfiguration = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' 
        ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text>
        : 'Meals'
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel: Platform.OS === 'android' 
        ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites!</Text>
        : 'Favorites!'
    }
  }
}

const MealsFavTabNavigator = 
  Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(
    tabScreenConfiguration, {
      activeTintColor: 'white',
      shifting: true,
    }
  )
  : createBottomTabNavigator(
    tabScreenConfiguration, {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans'
        },
        activeTintColor: Colors.accentColor
      }
    }
  )

const FiltersNavigator = createStackNavigator({
  Filters: {
    screen: FiltersScreen
  }
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filter Meals'
    }
  }
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold',
    }
  }
})

export default createAppContainer(MainNavigator)