<template>
  <div class="display">
    <label>
      <input type="text" v-model="keyWords" placeholder="Search" />
    </label>
    <button @click="search">SEARCH</button>
    <ul>
      <li v-for="(item, $index) in results" :key="$index">{{ item.title }}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      results: "",
      keyWords: ""
      // blog: "https://www.auriopinto.com.cn/#/",
    };
  },
  methods: {
    search() {
      axios
        .get(
          `https://api.jikan.moe/v3/search/anime?q=${this.keyWords}&limit=20`
        )
        .then(data => {
          this.results = data.results;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.display {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  section {
    display: flex;
    width: 50%;
    height: 200px;
    margin: auto;
    border-radius: 10px;
    border: 3px dashed #1c87c9;
    p {
      margin: auto; /* Important */
      text-align: center;
    }
  }
}
</style>
