import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { width, height } from '../../core/device';
import React, { useState, useEffect } from 'react'


const TimelineCard = ({ _id, facebook, rating }) => {
  const [count, setCount] = useState(0);

  const submitMyRating = ({ value, reputationId }) => {
    console.log(value, reputationId)
  }


  return (
    <View style={styles.cardContainer}>
      <Text>Facebook</Text>
      <Text>id: {facebook.id}</Text>
      <Text>url: {facebook.url}</Text>
      <Text>rating: {rating.currentValue}</Text>
      <Text>raters: {rating.ratersCount}</Text>
      <View style={styles.myRatingContainer}>
        <TouchableOpacity style={[styles.ratingButtons, styles.plusButton]}
          onPress={() => { setCount(count + 1) }} title="+"
        />
        <Text style={styles.myRating}>my rating: {count}</Text>
        <TouchableOpacity style={styles.submitButton}
          onPress={() => { submitMyRating({ value: count, reputationId: _id }) }} title="send"
        />
        <TouchableOpacity style={[styles.ratingButtons, styles.minusButton]}
          onPress={() => { setCount(count - 1) }} title="-"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: width / 1.1,
    height: height / 4,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'right',
    marginBottom: 100
  },
  ratingButtons: {
    width: 10,
    height: 10,
    fontSize: 20
  },
  plusButton: {
    backgroundColor: 'blue',
    fontSize: 20
  },
  minusButton: {
    backgroundColor: 'red',
  },
  submitButton: {
    backgroundColor: 'orange',
    width: 10,
    height: 10,
  },
  myRating: {
    color: 'red'
  },
  myRatingContainer: {
    alignItems: 'center',
  }
});


export default TimelineCard