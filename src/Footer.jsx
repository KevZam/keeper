import React from 'react';
import ReactDOM from 'react-dom'

let currentYear = new Date().getFullYear();

function Footer() {
	return (
		<footer>
			<p>Copyright ©{currentYear}</p>
		</footer>
	)
}

export default Footer;