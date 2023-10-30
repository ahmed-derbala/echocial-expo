import { Button, Text, View } from 'react-native'
import { Image, ImageBackground, Linking, ListView, Platform, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AuthContext } from '../../core/auth'
import { getMyProfileAPI } from './profile.api'
import { errorHandler } from '../../core/error'
import { log } from '../../core/log'
import config from '../../config/config'
import SingleRowTextInput from '../../core/components/Single-Row-Text-Input'
import SingleRowSwitch from '../../core/components/Single-Row-Switch'
import profileStyles from './profile.style'
import { Card, Icon } from 'react-native-elements'
import Avatar from './Avatar'
import { colorScheme } from '../../core/theme'
export const ProfileScreen = ({ navigation, onValueChange }) => {
	/*
	const colorScheme = useColorScheme();
	const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
	const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
	*/
	//const themeContainerStyle =colorScheme({style})

	const { signOut } = React.useContext(AuthContext)
	const [profile, setProfile] = useState([])
	const [loading, setLoading] = useState(true)

	const getMyProfileFromAPI = async () => {
		try {
			log({ level: 'debug', message: 'getMyProfileFromAPI...', caller: getMyProfileFromAPI.name })
			const getMyProfileAPIResp = await getMyProfileAPI({ page: 1, limit: 10 })
			if (!getMyProfileAPIResp || !getMyProfileAPIResp.data) {
				return errorHandler({ err: 'Network error' })
			}
			setProfile(getMyProfileAPIResp.data)
			setLoading(false)
		} catch (err) {
			errorHandler({ err, caller: getMyProfileFromAPI.name })
		}
	}

	useEffect(() => {
		getMyProfileFromAPI()
	}, [])

	/*	return (
			<View>
				<Button title="Sign outt" onPress={signOut} />
			</View>
		)*/
	return (
		<ScrollView style={[colorScheme({ style: profileStyles.scroll }), colorScheme({ style: profileStyles.container })]}>
			<View style={colorScheme({ style: profileStyles.container })}>
				<Card containerStyle={profileStyles.cardContainer}>
					<Avatar onPressAvatar={() => console.log('Avatar pressed')} />
					<SingleRowTextInput id="fullName" caption="Full name" placeholder="Your full name as public info" value={profile.fullName} onValueChange={onValueChange} />

					<SingleRowTextInput id="userName" caption="User name" placeholder="Your user name" value={profile.userName} onValueChange={onValueChange} />

					<SingleRowTextInput id="website" caption="Website" placeholder="Your website url" value={profile.website} onValueChange={onValueChange} />

					<SingleRowTextInput id="info" caption="Info" placeholder="Some info about yourself" value={profile.info} onValueChange={onValueChange} />

					<SingleRowSwitch id="isAnonymous" caption="Anonymous" value={profile.isAnonymous} onValueChange={onValueChange} />

					<SingleRowTextInput id="email" caption="Email" placeholder="Your email address" value={profile.email} onValueChange={onValueChange} />

					<SingleRowTextInput id="mobile" caption="Mobile" placeholder="Your phone number" value={profile.mobile} onValueChange={onValueChange} />
				</Card>
			</View>
		</ScrollView>
	)
}

//renderItem={({ item }) => <TimelineCard facebook={item.facebook} rating={item.rating} _id={item._id} />}
