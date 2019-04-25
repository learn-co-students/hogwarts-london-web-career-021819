import piggy from '../porco.png'
import React from 'react'

import SearchBar from './SearchBar'
import Sort from './Sort'
import Filter from './Filter'

const Nav = props => {

  const { updateSearchTerm, setSort, turnOnFilter } = props

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
      <SearchBar updateSearchTerm={updateSearchTerm}/>
      <Sort setSort={setSort} />
      <Filter turnOnFilter={turnOnFilter} />
		</div>
	)
}

export default Nav
