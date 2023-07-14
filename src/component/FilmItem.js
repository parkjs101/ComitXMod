import React from 'react'
import classes from '../css/filmitem.module.css'

function FilmItem(props) {
	return (
		<div className={classes.filmItem}>
			<h1>{props.index}</h1>
		</div>
	)
}

export default FilmItem
