import React from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'

import Produtos from './Produtos'

export default props => {
	return (
		<>
			<Text style={Estilo.txtG}>Lista de produtos</Text>
			{Produtos.map(p => {
				return <Text key={p.id}>{p.id}) {p.nome} tem o preço de R$ {p.preco}</Text>
			})}
		</>
	)
}