import React from 'react'
import { View, StyleSheet } from 'react-native'

import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/Aleatorio'
// import CompPradrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
	<View style={style.App}>
		<Pai />
		{/*
		<Contador inicial={100} passo={13} />
		<Contador/>
		<Botao/>
		<Titulo principal="Cadastro Produto"
		secundario="Tela de cadastro do Produto"/>
		<Aleatorio min={60} max={144}/>
		<MinMax min={3} max={20}/>
		<MinMax min={1} max={94}/>
		<CompPradrao/>
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