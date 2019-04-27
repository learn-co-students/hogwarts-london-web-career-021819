import piggy from '../porco.png'
import React, {Component} from 'react'
import Filter from './Filter'
import SpecialCard from './SpecialCard'
import SearchBar from './SearchBar'

export default class Nav extends Component {

render(){
	return (
		<div>
			<div className="navWrapper" style={{margin: '2rem'}} >
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>

				<SearchBar
				updateSearchTerm={this.props.updateSearchTerm}
				/>

			<div className="ui grid container">
				<Filter
				hogs={this.props.hogs}
				toggleGrease={this.props.toggleGrease}
				toggleUngrease={this.props.toggleUngrease}
				toggleAll={this.props.toggleAll}
				sortByNameDesc={this.props.sortByNameDesc}
				sortByNameAsc={this.props.sortByNameAsc}
				sortByWeightDesc={this.props.sortByWeightDesc}
				sortByWeightAsc={this.props.sortByNameAsc}
				/>
			</div>
			<div className="ui grid container">
				{this.props.specialhogs.map(hog =>
				<SpecialCard
				hog={hog}
				key={hog.name}
				unspecialHog={this.props.unspecialHog}
				/> )}
			</div>
		</div>
		) }

}
