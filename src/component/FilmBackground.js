import React from 'react'
import FilmItem from './FilmItem'
import classes from "../css/filmbackground.module.css"

function FilmBackground() {
	return (
		<div className={classes.filmBackground}>
			<FilmItem />
		</div>
	)
}

export default FilmBackground
