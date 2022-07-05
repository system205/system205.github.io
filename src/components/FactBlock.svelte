<script lang="ts">
	let what = '500';
	let fact = 'Server';
	async function newFact() {
		try {
			const response = await fetch('http://numbersapi.com/random/math');
			const data: string[] = (await response.text()).split(' is ');
			fact = data[1];
			what = data[0];
		} catch (e) {
			fact = 'Server';
			what = '500';
		}
	}
</script>

<div id="slider">
	<div id="fact">
		<p>«{fact}»</p>
		<span>is {what}</span>
	</div>
	<button on:click={newFact}>Next</button>
</div>

<style>
	#slider {
		display: flex;
		width: 90%;
		margin: 0 auto 5px auto;
		box-sizing: border-box;
	}
	#slider div {
		flex-grow: 1;
	}
	#slider button {
		margin: 0;
		border: 0;
		border-radius: 0 10px 10px 0;
		border: 1px solid grey;
		border-left-width: 0;
	}
	#fact {
		border: 1px solid grey;
		border-right-width: 0;
		border-radius: 10px 0 0 10px;
		text-align: center;
	}
</style>
