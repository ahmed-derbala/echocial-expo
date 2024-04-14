import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { width, height } from '../../core/device'
import React, { useState, useEffect } from 'react'
import { setRatingApi } from '../reputation/reputation.api'

const TimelineCard = ({ _id, facebook, rating }) => {
	const [count, setCount] = useState(0)

	const submitMyRating = ({ value, reputationId }) => {
		setRatingApi({ reputationId, rating: { currentValue: value }, facebook })
	}

	return (
		<View style={styles.cardContainer}>
			<Text>Facebook</Text>
			<Text>id: {facebook.id}</Text>
			<Text>url: {facebook.url}</Text>
			<Text>rating: {rating.currentValue}</Text>
			<Text>raters: {rating.ratersCount}</Text>
			<View style={styles.myRatingContainer}>
				<TouchableOpacity
					style={[styles.ratingButtons, styles.plusButton]}
					onPress={() => {
						setCount(count + 1)
					}}
					title="+"
				/>
				<Text style={styles.myRating}>my rating: {count}</Text>

				<TouchableOpacity
					style={[styles.ratingButtons, styles.minusButton]}
					onPress={() => {
						setCount(count - 1)
					}}
					title="-"
				/>
			</View>
			<TouchableOpacity
				style={styles.submitButton}
				onPress={() => {
					submitMyRating({ value: count, reputationId: _id })
				}}
				title="SUBMIT"
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		width: width / 1.1,
		height: height / 4,
		borderRadius: 10,
		backgroundColor: '#4C22D5',
		alignItems: 'right',
		marginBottom: 100
	},
	ratingButtons: {
		width: 25,
		height: 25,
		fontSize: 20
	},
	plusButton: {
		backgroundColor: 'blue'
	},
	minusButton: {
		backgroundColor: 'red'
	},
	submitButton: {
		backgroundColor: 'orange',
		tintColor: 'red',
		fontSize: 100,
		width: 40,
		height: 30
	},
	myRating: {
		color: 'red'
	},
	myRatingContainer: {
		alignItems: 'center'
	}
})

export default TimelineCard
