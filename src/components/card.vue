<template>
  <v-hover v-slot="{ hover }">
    <div class="card">
      <div class="card__info">
        <div class="card__floor">{{ card | cardFloor }}</div>
        <div class="card__rooms">{{ card | cardRoom }}</div>
        <div class="card__square">{{ card | cardSquare }}<sup>2</sup></div>
      </div>

      <div class="number">&#8470;{{ card | number }}</div>
      <div class="card__main">
        <div class="picture">
          <img src="../image3.jpg" width="180" alt="схема квартиры" />
        </div>
        <div class="price">
          <div class="price__finaly">{{ card | priceFinaly }}</div>
          <div class="price__square">{{ card | priceSquare }}<sup>2</sup></div>
        </div>
      </div>
      <v-btn color="#4caf50" elevation="2" v-show="hover"
        ><span class="btn">подробнее</span>
      </v-btn>
    </div>
  </v-hover>
</template>

<script>
export default {
  name: 'card',
  props: {
    card: Object,
  },
  data() {
    return {
      el: 'проверка работоспособности',
      image: this.card.plan,
    }
  },
  filters: {
    cardFloor: function(card) {
      return `этаж ${card.floor}`
    },
    cardRoom: function(card) {
      let str = `${card.rooms} комнат`
      if (card.rooms == 1) str += 'а'
      if (card.rooms >= 2 && card.rooms <= 4) str += 'ы'
      return str
    },
    cardSquare: function(card) {
      return `${card.square} м`
    },
    number: function(card) {
      return `${card.number}`
    },
    plan: function(card) {
      return `${card.plan}`
    },
    priceFinaly(card) {
      return `${card.price}р.`
    },
    priceSquare(card) {
      let value = Math.floor(card.price / card.square)
      return `${value} за м`
    },
  },
}
</script>

<style scoped>
.btn {
  color: white;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 320px;
  font-size: 12px;
  padding: 0 10px;
  left: 0px;
  top: 0px;
  box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 15px;
}

.card__info {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px #b9b6b6 solid;
}

.card_main {
  font-family: 'Gotham';
  position: absolute;
  width: 250px;
  height: 250px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
}

.number {
  align-self: flex-end;
}
</style>
