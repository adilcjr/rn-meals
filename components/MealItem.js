import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import DefaultText from '../components/DefaultText'

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground 
              source={{uri: props.image}}
              style={styles.backgroundImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <DefaultText>{props.duration}min</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '90%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  mealItem: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    height: 200,
    marginVertical: 5,
    overflow: 'hidden',
    width: '100%',
  },
  mealDetails: {
    alignItems: 'center',
    //height: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
  }
})

export default MealItem