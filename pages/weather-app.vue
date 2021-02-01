<template>
  <v-container>
    <h1 class="display-1 text-center py-5 mt-3 indigo--text font-weight-bold">
      Weather App
    </h1>
    <v-flex xs12>
      <v-card color="blue darken-4" dark>
        <v-card-text>
          <v-layout v-if="weather.weather" justify-center white--text>
            <v-flex class="text-xs-center" xs4>
              <h4 class="yellow--text">Temperature</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <img :src="icon" alt="weather icon" />
              <p>
                <span class="display-1">{{ temp() }} &deg;c</span>
              </p>
              <span class="caption ml-4"
                ><b>{{ weather.weather[0].description }}</b></span
              >
            </v-flex>
            <v-flex class="text-xs-center" xs4>
              <h4 class="yellow--text">Wind and Pressure</h4>
              <h3 class="headline">Wind: {{ weather.wind.speed }} m/s</h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }}%
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hPa
              </h3>
            </v-flex>
            <v-flex class="text-xs-center" xs4>
              <h4 class="yellow--text">Others Information</h4>
              <h3 class="headline">
                Max Temperature:
                {{ Math.round(weather.main.temp_max - 273) }} &deg;c
              </h3>
              <h3 class="headline mt-4">
                Min Temperature:
                {{ Math.round(weather.main.temp_min - 273) }} &deg;c
              </h3>
              <h3 class="headline mt-4">
                Visibility: {{ weather.visibility }} candelas
              </h3>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 mt-5 pt-2>
      <v-form @submit.prevent="getWeather">
        <v-text-field
          v-model="city"
          label="Enter city name"
          hint="For example, Dhaka, Chittagong, Oman etc"
          prepend-icon="mdi-map-marker"
          outlined
          filled
          shaped
        >
        </v-text-field>
      </v-form>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  layout: 'weatherAppNav',
  data() {
    return {
      city: 'Chittagong',
      weather: {},
    }
  },
  computed: {
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`
        : ''
    },
  },
  created() {
    this.getWeather()
    this.temp()
  },
  methods: {
    getWeather() {
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=451797cf9ae01a42f304b80d208103a6`
        )
        .then((res) => (this.weather = res))
    },
    temp() {
      return this.weather.weather
        ? Math.round(this.weather.main.temp - 273)
        : ''
    },
  },
}
</script>
