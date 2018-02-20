<template lang="pug">
.draw-in
	div {{styleObject}}
	svg.draw-in__svg
		symbol#text
			text.draw-in__ads( x="50%" y="98%" text-anchor="middle" :style="styleObject") {{text}}
		use.text(xlink:href='#text')
	.draw-in__presents Presents
	.draw-in__dots
		.draw-in__dot
		.draw-in__dot
		.draw-in__dot
</template>

<script>
	export default{
		name: "draw_in",
		props:['text', 'color'],
		data(){
			return {
				styleObject:{
					stroke: this.color || 'black',
					fill: this.color || 'black'
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>

@mixin draw_in($color){
	.draw-in{

		$stroke-dash: 400;
		$animation-speed: 1000ms;
		$dot-size: 10px;
		display:flex;
		flex-direction:column;
		align-items:center;
		&__svg{
			width:15em;
			height:4em;
			animation: shadow 1s 2s linear forwards;
		}

		&__ads{
			fill: transparent;
			font-family:"Arial", Gadget, sans-serif;
			font-weight:bold;
			stroke-dashoffset: $stroke-dash;
			stroke-width: 2;
			stroke: $color;
			stroke-dasharray: $stroke-dash;
			animation: text 3s linear forwards;
			font-size:5em;
			box-shadow:2px 2px 3px black;
		}

		&__presents{
			animation: go-up 1s 1s ease-in-out forwards;
			opacity:0;
			color:#444;
		}

		&__dots{
			display: flex;
			justify-content: center;
		}

		&__dot {
			width: $dot-size;
			height: $dot-size;
			border: ($dot-size / 5) solid gray;
			border-radius: 50%;
			float: left;
			margin: 0 ($dot-size / 2);
			transform: scale(0);

			animation: fx $animation-speed ease infinite 2s;

			&:nth-child(2) {
				animation: fx $animation-speed ease infinite  2.3s;
			}
			&:nth-child(3) {
				animation: fx $animation-speed ease infinite 2.6s;
			}
		}
	}

	@keyframes shadow {
		0%{filter: none;}
		100%{filter: drop-shadow( 1px 1px 4px #ccc );}
	}
	@keyframes go-up {
		from{
			transform: translateY(1em);
			opacity:0;
		}
		to{
			transform: translateY(0);
			opacity:1;
		}
	}
	@keyframes text {
		50%{
			stroke-dashoffset: 0;
			fill:transparent;
		}
		100%{
			stroke-dashoffset: 0;
			fill: lighten($color, 20%);
		}
	}
	@keyframes fx {
		50% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
}//draw_in end


@include draw_in(red);
</style>