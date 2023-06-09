import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import Estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {
	state = {
		qtdeNumeros: this.props.qtdeNumeros,
		numeros: []
	}

	alterarQtdeNumero = (qtde) => {
		this.setState({qtdeNumeros: +qtde})
	}

	gerarNumeroNaoContido = nums => {
		const novo = parseInt(Math.random() * 60) + 1
		return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
	}

	gerarNumeros = () => {
		const numeros = Array(this.state.qtdeNumeros)
			.fill()
			.reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
			.sort((a: number, b: number) => a - b)
		this.setState({numeros})
	}

	exibirNumeros = () => {
		const nums = this.state.numeros

		return nums.map(num => {
			return <MegaNumero key={num} num={num} />
		})
	}

	render() {
		return (
			<>
				<Text style={Estilo.txtG}>
					Gerador de Mega-Sena
				</Text>
				<TextInput
					keyboardType={"number-pad"}
					style={{borderBottomWidth: 1}}
					placeholder='Qtde de números'
					value={this.state.qtdeNumeros}
					onChangeText={this.alterarQtdeNumero}
				/>

				<Button
					title='Gerar'
					onPress={this.gerarNumeros}
				/>
				<View style={{
					flexDirection: "row",
					flexWrap: 'wrap',
					justifyContent: 'center'
				}}>
					{this.exibirNumeros()}
				</View>
			</>
		)
	}
}