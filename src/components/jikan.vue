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
    <button @click="AddItem" type="button" name="button">Add</button>
    <div v-for="(item, Itemindex) in items" :key="'item' + Itemindex">
      <input type="text" v-model="items[Itemindex]" />(Works)
      {{ items }}
    </div>
    <a v-bind:href="blog">Aurio Pinto</a>
    <section>
      <p>I'm centered with Flexbox!</p>
    </section>
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
      items: [],
      blog: "https://www.auriopinto.com.cn/#/",
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
  shared: {
    AddItem: function() {
      this.items.push("New Value" + this.items.lenght);
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
}
</style>
