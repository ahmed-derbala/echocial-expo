import React, { useState, useEffect } from 'react'
import config from '../config/config'
import { useColorScheme } from 'react-native'

export const ThemeContext = React.createContext({
	isDark: false,
	colors: config.styles.colors.light,
	setScheme: () => {}
})

export const ThemeProvider = (props) => {
	// Getting the device color theme, this will also work with react-native-web
	//const colorScheme = useColorScheme() // Can be dark | light | no-preference
	const colorScheme = config.styles.colors.useColorScheme

	/*
	 * To enable changing the app theme dynamicly in the app (run-time)
	 * we're gonna use useState so we can override the default device theme
	 */
	const [isDark, setIsDark] = React.useState(colorScheme === 'dark')

	// Listening to changes of device appearance while in run-time
	React.useEffect(() => {
		setIsDark(colorScheme === 'dark')
	}, [colorScheme])

	const defaultTheme = {
		isDark,
		// Chaning color schemes according to theme
		colors: isDark ? config.styles.colors.dark : lightColors,
		// Overrides the isDark value will cause re-render inside the context.
		setScheme: (scheme) => setIsDark(scheme === 'dark')
	}

	return <ThemeContext.Provider value={defaultTheme}>{props.children}</ThemeContext.Provider>
}

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext)

export const colorScheme = ({ style }) => {
	const mode = useColorScheme() // light or dark
	switch (mode) {
		case 'light':
			return style.light ? style.light : style

		default:
			return style.dark ? style.dark : style
	}
}
