import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
	return (
		<Text style={Estilo.txtG}>O número aletório é {parseInt(Math.random() * (props.max - props.min) + props.min)}!</Text>
	)
}