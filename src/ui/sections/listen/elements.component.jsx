import React, { Component } from 'react';
import './elements.css';

class Elements extends Component {

	render() {

			// convierte el valor de 'currentTimeSongPrecision' en un nro con un sólo decimal. Ej: 3.4
			var currentTimeSongPrecision = Number(this.props.currentTimeSong.toFixed(1));

		// Conditional rendering
		switch (currentTimeSongPrecision) {

			// 1 seconds
			case 1:
				var drums = document.getElementById("Element_one");
				var bass = document.getElementById("Element_two");
				var egNormal = document.getElementById("Element_three");
				var egEffects = document.getElementById("Element_four");
				var leadVoice = document.getElementById("Element_five");
				var chorusOne = document.getElementById("Element_six");
				var chorusTwo = document.getElementById("chorus-two");
				// egNormal.style.opacity = "0.15";
				// egEffects.style.opacity = "0.15";
				// leadVoice.style.opacity = "0.15";
				// chorusOne.style.opacity = "0.15";
				// chorusTwo.style.opacity = "0.15";
			break;

			// 9.4 seconds - Electric Guitar Normal
			case 9.4:
				var egNormal = document.getElementById("Element_one");
				egNormal.style.opacity = "1";
			break;

			// 15.1 seconds - Electric Guitar Effects - ON 🎸
			case 15.1:
				var leadVoice = document.getElementById("Element_two");
				leadVoice.style.opacity = "1";
			break;

			// 19.7 seconds - Lead Voice
			case 19.7:
				var leadVoice = document.getElementById("Element_three");
				leadVoice.style.opacity = "1";
			break;

			// 22.7 seconds - Electric Guitar Effects - OFF 🎸
			case 22.7:
				var egEffects = document.getElementById("Element_three");
				egEffects.style.opacity = "0.15";
			break;

			// // 36.2 seconds - Electric Guitar Effects - ON 🎸
			// case 36:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 39 seconds - Electric Guitar Effects - OFF 🎸
			// case 39:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;

			// // 58 seconds
			// case 58:
			// 	var egNormal = document.getElementById("electric-guitar-normal");
			// 	egNormal.style.opacity = "0.15";
			// break;

			// // 61.8 seconds - Electric Guitar Effects - ON 🎸
			// case 61.8:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 66.3 seconds - Electric Guitar Effects - OFF 🎸
			// case 66.3:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;

			// // 65 seconds
			// case 65:
			// 	var egNormal = document.getElementById("electric-guitar-normal");
			// 	egNormal.style.opacity = "1";
			// break;

			// // 74 seconds
			// case 74:
			// 	var egNormal = document.getElementById("electric-guitar-normal");
			// 	egNormal.style.opacity = "0.15";
			// break;

			// // 76.7 seconds - Electric Guitar Effects - ON 🎸
			// case 76.7:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 82.9 seconds - Electric Guitar Effects - OFF 🎸
			// case 82.9:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;

			// // 89.2 seconds - Electric Guitar Effects - ON 🎸
			// case 89.2:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 141.6 seconds - Electric Guitar Effects - OFF 🎸
			// case 141.6:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;
			
			// // 151 seconds - Electric Guitar Effects - ON 🎸
			// case 151:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 157.7 seconds - Electric Guitar Effects - OFF 🎸
			// case 157.7:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;

			// // 166.2 seconds - Electric Guitar Effects - ON 🎸
			// case 166.2:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 174.3 seconds - Electric Guitar Effects - OFF 🎸
			// case 174.3:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;


			// // 208.8 seconds - Electric Guitar Effects - ON 🎸
			// case 208.8:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "1";
			// break;

			// // 212 seconds - Electric Guitar Effects - OFF 🎸
			// case 212:
			// 	var egEffects = document.getElementById("electric-guitar-effects");
			// 	egEffects.style.opacity = "0.15";
			// break;

		}

		return (
			<div className="Elements_container">
	
				<div class="Element"
						 id="Element_one">
						<div class="Element_one_color"></div>
						<p>Guitar</p>
				</div>

				<div class="Element"
						 id="Element_two">
						<div class="Element_two_color"></div>
						<p>Bass</p>
				</div>

				<div class="Element"
						 id="Element_three">
						<div class="Element_three_color"></div>
						<p>Drums</p>
				</div>	

				<div class="Element"
						 id="Element_four">
						<div class="Element_four_color"></div>
						<p>Piano</p>
				</div>

				<div class="Element"
						 id="Element_five">
						<div class="Element_five_color"></div>
						<p>Voice</p>
				</div>

				<div class="Element"
						 id="Element_six">
						<div class="Element_six_color"></div>
						<p>Chorus</p>
				</div>


			</div>
			
		)
	}
}

export default Elements;