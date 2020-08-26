<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
-->

<template>
	<!--start hero-->
	<div>
		<div class="hero content">
			<div class="hero__inner">
				<div class="container">
					<h2 class="section-title hero__title">
						Срочные выписки из ФГИС ЕГРН онлайн
					</h2>
					<p class="hero__subtitle">
						Закажите срочную выписку из Росреестра за 5 минут на квартиру, дом или земельный участок
						в форматах PDF, ZIP с электронной подписью Росреестра
					</p>
					<form class="search-form hero__form">
						<div class="search-form__inner">
							<div class="search-form__form-block">
								<div class="search-form__input-block">
									<input name="search" type="text" class="search-form__input" placeholder="Введите кадастровый номер или адрес объекта">
									<ul class="search-form__input-list">

										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
										<li>г. <span>Ярославль</span>, проспект <span>Ленина</span>, д. <span>10</span>, стр. 1</li>
									</ul>
								</div>
								<button type="button" class="button button--green search-form__button">
									<img class="search-form__button-img" src="images/icons/search.svg" alt="">
									Найти объект
								</button>
							</div>
							<p class="search-form__example">
								Например, 47:14:1203001:814 или г Москва, ул Кремль, д 1
							</p>
						</div>
					</form>


				</div>
			</div>
			<!--start advantages-->
			<section class="address content dn">
				<div class="container">
					<ul class="address__list">
						<li class="address__title">
							Уточните адрес
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
						<li class="address__list-item">
							г. Ярославль, проспект Ленина, д. 10, стр. 1а
							<span class="address__list-item-number">
								23:33:0907011:9
							</span>
						</li>
					</ul>
				</div>
			</section>
			<!--end advantages-->

			<!--start advantages-->
			<div class="advantages content">
				<div class="advantages__row">
					<div class="advantages__container">
						<div class="advantages__item">
							<div class="advantages__img-block">
								<img class="advantages__item-img" src="images/advantages/1.svg" alt="">

							</div>
							<p class="advantages__title">
								Быстро
							</p>
							<p class="advantages__text">
								90% заказов готовы в течение двух часов
							</p>
						</div>
					</div>
					<div class="advantages__container">
						<div class="advantages__item">
							<div class="advantages__img-block">
								<img class="advantages__item-img" src="images/advantages/2.svg" alt="">

							</div>
							<p class="advantages__title">
								Просто
							</p>
							<p class="advantages__text">
								Оформление заказа в пару кликов и без регистрации
							</p>
						</div>
					</div>
					<div class="advantages__container">
						<div class="advantages__item">
							<div class="advantages__img-block">
								<img class="advantages__item-img" src="images/advantages/3.svg" alt="">

							</div>
							<p class="advantages__title">
								Надежно
							</p>
							<p class="advantages__text">
								Гарантия возврата средств в случае отсутствия выписки
							</p>
						</div>
					</div>
					<div class="advantages__container">
						<div class="advantages__item">
							<div class="advantages__img-block">
								<img class="advantages__item-img" src="images/advantages/4.svg" alt="">

							</div>
							<p class="advantages__title">
								Безопасно
							</p>
							<p class="advantages__text">
								Только официальные данные с ЭЦП Росреестра
							</p>
						</div>
					</div>
				</div>
			</div>
			<!--end advantages-->

			<!--start search-result-->
			<div class="search-result">
				<div class="container">
					<div class="search-result__inner">
						<div class="search-result__number title--underline">
							23:33:0907011:9
							<span class="search-result__type">
								Земельный участок
							</span>
						</div>
						<div class="search-result__address">
							р-н Туапсинский, тер Небугское сельское поселение, с Агой, тер СТ Машиностроитель, д уч.№198
						</div>
						<div class="search-result__row">
							<div class="search-result__container">
								<div class="search-result-item">
									<div class="search-result-item__img-block">
										<img class="search-result-item__img" src="images/search-result/1.svg" alt="">
									</div>
									<div class="search-result-item__text-block">
										<div class="search-result-item__title">
											Площадь
										</div>
										<div class="search-result-item__value">
											620 кв. м.
										</div>
									</div>

								</div>
							</div>
							<div class="search-result__container">
								<div class="search-result-item">
									<div class="search-result-item__img-block">
										<img class="search-result-item__img" src="images/search-result/2.svg" alt="">
									</div>
									<div class="search-result-item__text-block">
										<div class="search-result-item__title">
											Статус
										</div>
										<div class="search-result-item__value">
											Ранее учтенный
										</div>
									</div>

								</div>
							</div>
							<div class="search-result__container">
								<div class="search-result-item">
									<div class="search-result-item__img-block">
										<img class="search-result-item__img" src="images/search-result/3.svg" alt="">
									</div>
									<div class="search-result-item__text-block">
										<div class="search-result-item__title">
											Дата учета
										</div>
										<div class="search-result-item__value">
											12.05.2012
										</div>
									</div>

								</div>
							</div>
						</div>
						<table class="search-result__table">
							<tr class="search-result__tr">
								<td class="search-result__td">
									Кадастровый номер
								</td>
								<td class="search-result__td">
									23:33:0907011:9
								</td>
							</tr>
							<tr class="search-result__tr">
								<td class="search-result__td">
									Адрес
								</td>
								<td class="search-result__td">
									р-н Туапсинский, тер Небугское сельское поселение, с Агой, тер СТ Машиностроитель, д
									уч.№198
								</td>
							</tr>
							<tr class="search-result__tr">
								<td class="search-result__td">
									Кадастровая стоимость
								</td>
								<td class="search-result__td">
									1700089.6 руб. (Земля)
								</td>
							</tr>
							<tr class="search-result__tr">
								<td class="search-result__td">
									Категория
								</td>
								<td class="search-result__td">
									Земли сельскохозяйственного назначения
								</td>
							</tr>
							<tr class="search-result__tr">
								<td class="search-result__td">
									Разрешенное использование
								</td>
								<td class="search-result__td">
									Для садоводства (для ведения гражданами садоводства и огородничества)
								</td>
							</tr>
							<tr class="search-result__tr">
								<td class="search-result__td">
									Дата определения стоимости
								</td>
								<td class="search-result__td">
									-
								</td>
							</tr>
						</table>
					</div>

				</div>
			</div>
			<!--end search-result-->

		</div>
		<!--end hero-->

	</div>
</template>