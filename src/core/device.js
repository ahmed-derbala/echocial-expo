const { Dimensions } = require('react-native')

let width = () => {
	return Math.round(Dimensions.get('window').width)
}

let height = () => {
	return Math.round(Dimensions.get('window').height)
}

module.exports = {
	width: width(),
	height: height()
}
