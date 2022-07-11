<script lang="ts">
	import FactBlock from './FactBlock.svelte';

	const e = 2;
</script>

<div id="flex">
	<div id="intro">
		<h2>Hello everyone and welcome to my personal website</h2>
		<p>My friends call me "Arsen"</p>
	</div>
	<FactBlock />
</div>

<style>
	#flex {
		display: flex;
		flex-direction: column;
		height: calc(100vh - 220px);
	}
	#intro {
		flex-grow: 1;
		text-align: center;
	}
</style>
