import React, {Component} from "react";

class game extends Component{
	constructor() {
		super();

		this.displaygame = ()=>{
			let list=[];
			let images = require.context('../../public/imgs', false, /\.(png|jpe?g|svg)$/);
			images = images.keys().map(function(image){
				return image;
			});
			const charsNameList =images.map(x=>x.substring(11, x.indexOf(".png")));
			let len = images.length;
			for (let i=0; i<9; i++){
				let random = Math.floor((Math.random()*len));
				list.push(<img key={Math.floor((Math.random()*9239))} src={"/images/"+ images[random]} alt="Character" onClick={this.clickHandler} char={charsNameList[random]}></img>);
			}
			return list;
		}; 
		this.list =this.displaygame();
		this.clickHandler = this.clickHandler.bind(this);
	};
	clickHandler = event=>{
		this.list =this.displaygame();
		this.props.onClick(event);

	}
	render(){
		return this.list
	}
}

export default game;  