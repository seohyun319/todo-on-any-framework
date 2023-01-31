<link
	href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
	rel="stylesheet"
/>
<div>progress</div>

<style>
	div {
		font-family: 'Libre Barcode 39 Text', cursive;
		font-size: 2.8rem;
		display: flex;
		justify-content: center;
	}

	div:before {
		content: '';
		position: absolute;
		width: 11rem;
		height: 0.3rem;
		transform: translateX(-3px) translateY(-6px);
		background: rgba(255, 0, 0, 0);
		transition: 800ms;
	}

	div:hover:before {
		animation: line 500ms forwards;
	}

	div:hover {
		animation: blink 500ms 300ms;
	}

	@keyframes line {
		from {
			background: rgba(255, 0, 0, 0.8);
		}
		to {
			background: rgba(255, 0, 0, 0.8);
			transform: translateX(-3px) translateY(38px);
		}
	}

	@keyframes blink {
		from {
			color: #eee;
		}
		to {
			color: black;
		}
	}

	div:focus {
		outline: none;
	}
</style>
