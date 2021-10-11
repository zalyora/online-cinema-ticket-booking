*{
  box - sizing: border - box;
}
body {
  /* background: linear-gradient(180deg, rgba(31, 2, 98, 0.31) 0%, #1c0262 85.62%); */
  font - family: 'Montserrat', sans - serif;
  background: #621402;

  color:# FFFFFF;
}

/* .wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
} */
.container {
  width: 1170 px;
  margin: auto;
}
.gradient {

}
.website__header {
  background - image: linear - gradient(180 deg, rgba(98, 20, 2, 0.31) 0 % , #621402 85.62%),

  url(../images/dune-poster_image.jpg);

  background-size: cover;

  background-position: top center;

  background-repeat: no-repeat;

  /* , */

  min-height: 100vh;

  padding: 30px 0;

}



.navbar {

  display: flex;

  flex-direction: row;

  align-items: center;

  vertical-align: middle;

  font-size: 14px;

  line-height: 16px;

}

.nav__menu {

  list-style-type: none;

  width: 425px;

  display: flex;

  flex-direction: row;

  justify-content: space-between;

  margin-left: 57px;

}

.menu__link {

  color: # FFFFFF; text - decoration: none;
    }
    .user {
      display: flex;
      flex - direction: row;
      align - items: center;
      vertical - align: middle;
      margin - left: auto;
      color: #FFFFFF;
    }
    .user__avatar {
      width: 33 px;
      height: 33 px;
      border - radius: 50 % ;
      margin - left: 12 px;
    }
    /* movie */
    .movie {
      display: flex;
      align - items: center;
      color: #FFFFFF;
      margin - top: 90 px;
    }
    .movie__director {
      font - size: 24 px;
      line - height: 150 % ;
      opacity: 0.5;
    }
    .movie__title {
      font - weight: bold;
      font - size: 36 px;
      line - height: 42 px;
      margin - top: 12 px;
      margin - bottom: 24 px;
    }
    .movie__description {
      font - size: 16 px;
      line - height: 150 % ;
      max - width: 570 px;
    }
    .movie__trailer {
      margin: auto;
    }
    .movie__details {
      display: flex;
      align - items: center;
      margin - top: 52 px;
    }
    .time {
      display: flex;
      align - items: center;

    }
    .time__icon {
      margin - right: 14 px;
    }
    .rating {
      display: flex;
      align - items: center;
      margin - left: 34 px;
    }
    .rating__icon {
      margin - right: 14 px;
    }
    .rating__current {
      font - weight: bold;
      font - size: 24 px;
      line - height: 150 % ;
    }
    .session {
      padding: 46 px 0 64 px;
      margin - top: 68 px;
      border - top: 1 px solid rgba(255, 255, 255, 0.5);
      border - bottom: 1 px solid rgba(255, 255, 255, 0.5);
      display: flex;
      justify - content: space - between;
      align - items: flex - start;
    }
    .session__label {
      display: block;
      margin - bottom: 20 px;
    }
    .session__date__block {
      display: flex;
      align - items: center;
    }

    .session__date__item {
      width: 90 px;
      height: 90 px;
      border: 1 px solid rgba(255, 255, 255, 0.5);
      border - radius: 5 px;
      text - align: center;
      margin - right: 16 px;
      display: flex;
      flex - direction: column;
      align - items: center;
      justify - content: center;
      transition: 0.3;
      cursor: pointer;
    }
    .session__date__item: hover {
      background: #FE8E05;
      color: #621402;

}

.session__month {

  font-size: 16px;

  line-height: 19px;

  text-transform: uppercase;

}

.session__day {

  font-weight: bold;

  font-size: 30px;

  line-height: 35px;

}

.session__time {

  font-size: 19px;

  line-height: 22px;

  text-transform: uppercase;

}

.cinema__select,

.time__select {

  background: rgba(255, 255, 255, 0.15);

  border: 1px solid rgba(255, 255, 255, 0.5);

  box-sizing: border-box;

  border-radius: 5px;

  font-size: 16px;

  line-height: 150%;

  color: # FFFFFF;
      padding: 18 px;
      cursor: pointer;
      margin - top: 14 px;
    }
    .cinema__select {
      min - width: 470 px;
    }
    .cinema__select: hover,
    .time__select: hover {
      background: #FE8E05;
      color: #621402;

}

.seats__scheme {

  background: rgba(36, 36, 36, 0.18);

  border-radius: 10px;

}

.seats__scheme path:not(.light) {

  fill: rgba(255, 255, 255, 0.2);

  cursor: pointer;

}

.seats__scheme path:not(.light):hover {

  fill: rgba(255, 255, 255, 0.5);

}

.seats__scheme path.booked,

.seats__scheme path.booked:hover {

  fill: rgba(255, 255, 255, 0.05);

  cursor: not-allowed;

}

.legend {

  display: flex;

  align-items: center;

  border-top: 1px solid rgba(255, 255, 255, 0.5);

  padding:22px 0 38px;

  max-width: 1024px;

  margin: auto;

}

.legend__label {

  display: flex;

  align-items: center;

  margin-right: 30px;

  color:rgba(255, 255, 255, 0.5);

}

.legend__selected {

  color:# FE8E05;
    }
    .legend__selected path.active,
    .seats__scheme path.active {
      fill: rgba(254, 142, 5, 1);
    }
    .legend__selected path.active: hover,
    .seats__scheme path.active: hover {
      fill: rgba(254, 142, 5, 0.75);
    }
    .legend svg {
      margin - right: 15 px;
    }

    .price {
      padding: 60 px 0 160 px;
      display: flex;
      align - items: center;
      justify - content: space - between;
    }
    .price__label {
      display: block;
      font - size: 18 px;
      line - height: 21 px;
      margin - bottom: 12 px;
    }
    .total__price {
      font - size: 52 px;
      line - height: 61 px;
    }
    .price__button {
      background: #FE8E05;
      border - radius: 5 px;
      font - weight: bold;
      font - size: 18 px;
      line - height: 21 px;
      padding: 24 px 52 px;
      color: #FFFFFF;
      text - decoration: none;
      min - width: 254 px;
      text - align: center;
    }