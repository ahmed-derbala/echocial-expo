import React, { Component, useState, useRef } from 'react'
import { Alert, Button, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { signin, saveToken, getToken } from './auth.service'
import { log } from '../../core/log'
import { errorHandler } from '../../core/error'

const AuthContext = React.createContext()

export default function AuthScreen({ navigation }) {
	const [loginId, setLoginId] = useState(null)
	const [password, setPassword] = useState(null)
	const { signIn } = React.useContext(AuthContext)

	const onLoginIdChange = (value) => {
		value = 'ahmed.derbala@esprit.tn'
		//value="647287f6a21ccbcb26b3de78"
		setLoginId(value)
	}

	const onPasswordChange = (value) => {
		value = '123'
		setPassword(value)
	}

	const onLogin = async () => {
		try {
			log({ lebel: 'debug', message: 'onLogin...' })
			const signinApiResp = await signin({ loginId, password })
			console.log(signinApiResp, 'signinApiResp')
			if (!signinApiResp || !signinApiResp.data?.token) return
			await saveToken(signinApiResp.data.token)
			const token = await getToken()
			//console.log(token,'token');
			//navigation.navigate('Auth')
		} catch (err) {
			errorHandler({ err })
		}
	}

	return (
		<View style={styles.container}>
			<TextInput value={loginId} onChangeText={(loginId) => onLoginIdChange(loginId)} placeholder={'loginId'} style={styles.input} />
			<TextInput value={password} onChangeText={(password) => onPasswordChange(password)} placeholder={'Password'} secureTextEntry={true} style={styles.input} />

			<Button title={'Login'} style={styles.input} onPress={onLogin} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ecf0f1'
	},
	input: {
		width: 200,
		height: 44,
		padding: 10,
		borderWidth: 1,
		borderColor: 'black',
		marginBottom: 10
	}
})

/*
function AuthScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign in" onPress={() => signIn({ username, password })} />
    </View>
  );
}
*/
