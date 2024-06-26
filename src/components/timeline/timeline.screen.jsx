import { StatusBar } from 'expo-status-bar'
import { Text, View, SafeAreaView, FlatList } from 'react-native'
import Header from '../../core/common/header'
import TimelineCard from './timeline.card'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import React, { useState, useEffect } from 'react'
import { RefreshControl } from 'react-native-gesture-handler'
import { successHandler } from '../../core/success'
import * as reputationAPI from '../reputation/reputation.api'
import timelineStyles from './timeline.style'
//import { colorScheme } from '../../core/theme'

const TimelineScreen = () => {
	const [reputations, setReputations] = useState([])
	const [loading, setLoading] = useState(true)

	const getReputationsFromAPI = async () => {
		try {
			log({ level: 'debug', message: 'getReputationsFromAPI...', caller: getReputationsFromAPI.name })
			const getReputationsResp = await reputationAPI.getReputations({ page: 1, limit: 10 })
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
		<View style={timelineStyles.container}>
			{!loading && reputations.length !== 0 && (
				<View>
					<SafeAreaView style={timelineStyles.container}>
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

export default TimelineScreen
