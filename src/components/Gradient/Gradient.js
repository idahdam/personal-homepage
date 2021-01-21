import React from 'react'
import { Container } from '../../globalStyles'
import { Color } from './Gradient.Element.js'

const Gradient = ({light}) => {
	return(
		<>
			<Color light={light}></Color>
		</>
	)
}

export default Gradient;