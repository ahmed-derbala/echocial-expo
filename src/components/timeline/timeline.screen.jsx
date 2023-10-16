import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import Header from '../header/header'
import TimelineCard from './timeline.card'
import { getReputations } from '../reputation/reputation.service'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native-gesture-handler'
import { successHandler } from '../../core/success'

const TimelineScreen = () => {
	const [reputations, setReputations] = useState([])
	const [loading, setLoading] = useState(true)

	const getReputationsFromAPI = async () => {
		try {
			log({ level: 'debug', message: 'getReputationsFromAPI...', caller: getReputationsFromAPI.name })
			const getReputationsResp = await getReputations({ page: 1, limit: 10 })
			if (!getReputationsResp || !getReputationsResp.data) {
				return errorHandler({ err: 'Network error' })
			}
			setReputations(getReputationsResp.data)
			setLoading(false)
		} catch (err) {
			errorHandler({ err, caller: getReputationsFromAPI.name })
		}
	}

	useEffect(() => {
		getReputationsFromAPI()
	}, [])

	return (
		<View style={styles.container}>
			{!loading && reputations.length !== 0 && (
				<View>
					<SafeAreaView style={styles.container}>
						<FlatList
							data={reputations}
							renderItem={({ item }) => <TimelineCard facebook={item.facebook} rating={item.rating} _id={item._id} />}
							keyExtractor={(item) => item.facebook.id}
							refreshControl={<RefreshControl refreshing={loading} onRefresh={getReputationsFromAPI} />}
						/>
					</SafeAreaView>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default TimelineScreen
