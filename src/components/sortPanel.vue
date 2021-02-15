<template>
  <v-container class="d-flex justify-space-around align-content-center">
    <div class="d-flex flex-column flex-md-row ">
      <v-col class="rooms d-flex flex-column ">
        <div class="rooms__tittle">комнаты</div>
        <div class="rooms__controller d-flex justify-center align-center">
          <v-btn-toggle color="#70d24e" v-model="roomCount">
            <v-btn elevation="2">S </v-btn>
            <v-btn-toggle
              color="#70d24e"
              opacity="1"
              class="active"
              multiple
              tile
              v-model="roomCount"
            >
              <v-btn elevation="2" value="1">1k</v-btn>
              <v-btn elevation="2" value="2">2k</v-btn>
              <v-btn elevation="2" value="3">3k</v-btn>
            </v-btn-toggle>
          </v-btn-toggle>
        </div>
      </v-col>
      <v-col cols-lg="2" cols-md="1" class="justify-center">
        <div class="floors__tittle">этаж</div>
        <div class="floors__input d-flex justify-space-around">
          <input type="min" class="input-sort " v-model="floors[0]" />
          <input type="max" class="input-sort " v-model="floors[1]" />
        </div>
        <div class="floors__range">
          <v-range-slider
            dense
            hint="Im a hint"
            max="15"
            min="0"
            v-model="floors"
            color="#70D24E"
          ></v-range-slider>
        </div>
      </v-col>
      <v-col cols-lg="2" cols-md="1" class="square">
        <div class="square__tittle">площадь</div>
        <div class="square__input d-flex justify-space-around">
          <input type="min" class="input-sort" v-model="square[0]" />
          <input type="max" class="input-sort" v-model="square[1]" />
        </div>
        <div class="square__range">
          <v-range-slider
            dense
            hint="Im a hint"
            max="100"
            min="0"
            v-model="square"
            color="#70D24E"
          ></v-range-slider>
        </div>
      </v-col>
      <v-col cols-lg="2" cols-md="1" class="price">
        <div class="price__tittle">стоимость</div>
        <div class="price__input d-flex justify-space-around">
          <input type="min" class="input-sort" v-model="price[0]" />
          <input type="max" class="input-sort" v-model="price[1]" />
        </div>
        <div class="price__range">
          <v-range-slider
            dense
            hint="Im a hint"
            max="10000000"
            min="0"
            color="#70D24E"
            v-model="price"
          ></v-range-slider>
        </div>
      </v-col>
      <v-col
        cols-lg="2"
        cols-md="1"
        class=" d-flex row primenit align-center justify-center align-self-center"
      >
        <v-btn
          color="#70d24e"
          backgroun-color="#70d24e"
          @click="filterApartment"
          ><span class="btn">применить</span>
        </v-btn>
        <span class="btn__clear" @click="clearFilter">сбросить фильтр</span>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'sortPanel',
  data() {
    return {
      roomCount: [],
      floors: [0, 15],
      square: [0, 100],
      price: [0, 10000000],
    }
  },
  methods: {
    ...mapMutations([
      'CLEARFILTER',
      'FILTERROOMS',
      'FILTERFLOORS',
      'FILTERSQUARE',
      'FILTERPRICE',
    ]),

    filterApartment() {
      this.CLEARFILTER()
      console.log('roomsCount', this.roomCount)
      this.FILTERROOMS(this.roomCount)
      this.FILTERFLOORS(this.floors)
      this.FILTERSQUARE(this.square)
      this.FILTERPRICE(this.price)
    },

    clearFilter() {
      this.CLEARFILTER()
    },
  },
}
</script>

<style scoped>
.btn {
  color: white;
}
.input-sort {
  width: 90px;
  height: 40px;
  left: 637px;
  top: 286px;

  background: #ffffff;
  border: 1px solid #d8d8d8;
  box-sizing: border-box;
  border-radius: 5px;
}

.input-range {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.input-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}
.proverka {
  color: red;
  cursor: pointer;
}
.btn__clear {
  font-size: 12px;
  cursor: pointer;
  border-bottom: 1px solid #4caf50;
}
</style>
