<template>
	<footer class="footer" id="footer">
		<div class="footer__inner">
			<div class="footer__container">
				<a class="logo footer__logo" href="/">
					<img class="logo__img" src="images/logo.svg" alt="">
					<span class="logo__text">
						Россегрн
					</span>
				</a>
				<div class="footer__text footer__subtitle footer__text--grey">
					Заказ выписок из ЕГРН,
					предоставление онлайн-сведений
				</div>
				<router-link to="/privacy" class="footer__link">
					Обработка персональных данных
				</router-link>
				<router-link to="/oferta" class="footer__link">
					Публичная оферта
				</router-link>
			</div>
			<div class="footer__container">
				<p class="footer__text">
					Время получения выписки: <br>
					от 5 минут до 3 суток
				</p>
				<p class="footer__text footer__text--medium">
					Время получения выписки зависит <br>
					от скорости обработки запроса Росреестром
				</p>
				<p class="footer__text">
					Если Вы не получили выписку <br>
					по прошествии 3 рабочих дней, <br>
					мы вернём Вам деньги
				</p>
			</div>
			<div class="footer__container">
				<p class="footer__text">
					Техническия поддержка сервиса: <br>
					<a class="footer__link" href="mailto:support@rossegrn.info">
						support@rossegrn.info
					</a>
				</p>
				<p class="footer__text">
					Сервис не является органом государственной власти <br>
					или ее ведомственным подразделением.
				</p>
				<p class="footer__text">
					Сервис не изготавливает выписки из ЕГРН, а оказывает <br>
					услугу онлайн-заказа выписок из Росреестра.
				</p>
			</div>
		</div>
	</footer>
</template>