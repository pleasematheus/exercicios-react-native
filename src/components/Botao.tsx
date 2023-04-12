import React from 'react'
import { Button } from 'react-native'

export default props => {

	function executar() {
		console.warn('Executar')
	}

	return (
		<>
			<Button
				title="Executar 1"
				onPress={executar}
			/>
			<Button
				title="Executar 2"
				onPress={function () {
					console.warn('Executar 2')
				}}
			/>
			<Button
				title="Executar 3"
				onPress={() => console.warn('Executar 3')}
			/>
		</>
	)
}