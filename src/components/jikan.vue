<template>
  <div class="display">
    <ul>
      <li v-for="result in results" :key="result">
        <input type="text" placeholder="Search" />
        {results.text}
      </li>
    </ul>
    <div>{{ info }}</div>
    <div class="columns medium-3" v-for="resultado in resulta" :key="resultado">
      <div class="card">
        <div class="card-divider">
          {{ resultado.title }}
        </div>
        <div class="card-section">
          <p>{{ resultado.abstract }}.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      results: "",
      info: null,
      resulta: [
        {
          title: "the very first post",
          abstract: "lorem ipsum some test dimpsum"
        },
        {
          title: "and then there was the second",
          abstract: "lorem ipsum some test dimsum"
        },
        {
          title: "third time's a charm",
          abstract: "lorem ipsum some test dimsum"
        },
        {
          title: "four the last time",
          abstract: "lorem ipsum some test dimsum"
        }
      ]
    };
  },
  methods: {
    display() {
      axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${this.note}&limit=20`)
        .then(data => {
          this.results = data.results;
        });
    }
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>

<style lang="scss" scoped>
.display {
  overflow: hidden;
  // background-color: #e9e9e9;

  .display {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
}
</style>
