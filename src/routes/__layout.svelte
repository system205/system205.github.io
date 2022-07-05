<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.css';
	import Footer from '../components/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>
<Footer />

<style>
	main {
		flex-grow: 1;
		align-items: center;
		padding: 5px;
		width: 80vw;
		margin: 5px auto;
		border: 1px solid #212f3c;
		border-radius: 40px;
		box-sizing: border-box;
	}
</style>
