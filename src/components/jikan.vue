<template>
  <div class="display">
    <ul>
      <li v-for="result in results" :key="result">
        <input type="text" placeholder="Search" />
        {results.text}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      user: {
        name: "VueJsDialog"
        // note: ""
      },
      results: []
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
