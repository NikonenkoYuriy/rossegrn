<template>
	<header class="header" id="header" 
	v-scroll="handleScroll"
	:class="{ 'header--white' : addClassHeaderWhite }">
		<a class="logo" href="/">
			<img class="logo__img" src="images/logo.svg" alt="">
			<span class="logo__text">
				Россегрн
			</span>
		</a>
		<nav class="menu">
			<ul class="menu__list">
				<li class="menu__list-item">
					<router-link to="/" 
					exact
					class="menu__list-link" 
					active-class="active">
						<img src="images/icons/search-header.svg" alt="">
						Найти объект
					</router-link>
				</li>
				<li class="menu__list-item">
					<router-link to="/price" 
					class="menu__list-link" 
					active-class="active">
						Выписки и цены
					</router-link>
				</li>
				<li class="menu__list-item"> 
					<router-link to="/questions" class="menu__list-link" active-class="active">
						Вопросы и ответы
					</router-link>
				</li>
				<li class="menu__list-item ">
					<router-link to="/order-login" class="menu__list-link" active-class="active">
						Мои заказы
					</router-link>
				</li>
				<li class="menu__list-item">
					<router-link to="/basket" class="menu__list-link" active-class="active">
						<div class="menu__basket-img-block">
							<div class="basket-mobile__total">2</div>
							<img class="menu__basket-img" src="images/basket.svg" alt="">
						</div>
						<span>Корзина</span>
					</router-link>
				</li>

			</ul>
			<div class="menu__support">
				Техническия поддержка сервиса: <br>
				<a class="menu__support-link" href="mailto:support@rossegrn.info">support@rossegrn.info</a>
			</div>
		</nav>
		<div class="mobile-icons">
			<a class="search-header" href="#">
				<img class="search-header__img" src="images/icons/search-header.svg" alt="">
			</a>
			<a class="basket-mobile basket-tab" href="#">
				<div class="basket-mobile__total">2</div>
				<img class="basket-mobile__img" src="images/basket.svg" alt="">
			</a>

		</div>
		<button class="nav-toggle">
			<span class="bar-top"></span>
			<span class="bar-mid"></span>
			<span class="bar-bot"></span>
		</button>


	</header>
	<!--end header-->
</template>

<script>
	import Vue from 'vue';
	Vue.directive('scroll', {
		inserted: function (el, binding) {
			let f = function (evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f)
			}
		}
		window.addEventListener('scroll', f)
		}
	});
	

	export default {
		data () {
			return {
				addClassHeaderWhite: false
			}
		},
		methods: {
			handleScroll (evt, el) {
				
				if (window.scrollY > 50) this.addClassHeaderWhite = true;	
			 	else this.addClassHeaderWhite = false;
				
			}
		}
	}
	

</script>
