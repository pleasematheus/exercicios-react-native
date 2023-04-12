import React from 'react'
import { View, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
// import CompPradrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
	<View style={style.App}>
		<Aleatorio min={60} max={144} />
		<MinMax min={3} max={20}/>
		<MinMax min={1} max={94}/>
		{/* <CompPradrao/>
		<Comp1/>
		<Comp2/>
		<Primeiro/> */}
	</View>
)

const style = StyleSheet.create({
	App: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20
	}
})