<template>
	<div id="app wrapper" class="wrapper">
		<Header></Header>
<!--
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/price">About</router-link>
		</div>
-->
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Footer from '@/components/Footer.vue';
	import Header from '@/components/Header.vue';

	export default {
		components: {
			Footer,
			Header
		}
	}
</script>
