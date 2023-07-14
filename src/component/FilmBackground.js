import React from 'react'
import FilmItem from './FilmItem'
import classes from "../css/filmbackground.module.css"

function FilmBackground(props) {
	return (
		<div className={classes.filmBackground}>
			<FilmItem index={props.index}/>
		</div>
	)
}

export default FilmBackground
