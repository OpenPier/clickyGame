import Score from './scoring';
import GameItems from "./game";

class MainPart extends Component{
	state = {
		score: 0,
		bestScore: 0,
		clickedChars:{"": false
		, "Alien 1": false
		, "Alien 2": false
		, "Alien 3": false
		, "Alien 5": false
		, "Alien 6": false
		, "Devil": false
		, "evilMorty": false
		, "Maid": false
		, "mytholog": false
		, "Phoenix": false
		, "Snowball": false}
	};

	constructor(props){
		super(props);
		this.guessChar = this.guessChar.bind(this);
	}

	guessChar = event =>{
		let char = event.target.getAttribute("char"),score;
		var updatedState = this.state.clickedChars;
		if(this.state.clickedChars[char]){
			score = 0;
			for(let name in updatedState){
				updatedState[name]=false;
			}

		}else{
			score = this.state.score+1;
			score > this.state.bestScore && this.setState({bestScore:  score})
			updatedState[char]=true;
		}

		this.setState({
			clickedChars : updatedState, score: score
		});
	};

	render(){
		return (
			<main className="container center-align">
			<h2 id="1" key="asda" className="hide-on-small-only">Hello %username%</h2>
			<div className="row">
			<div className="col s12 m9">
			<game onClick={this.guessChar}></game>
			</div>
			<div className="col m3 ">
			<Score score={this.state.score} bScore={this.state.bestScore}></Score>
			</div>
			
			</div>
			</main>
			);
	}	
}

export default villians;