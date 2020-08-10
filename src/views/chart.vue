<template>
  <div class="format">
    <chart></chart>
  </div>
</template>

<script>
import chart from "../components/chart";
export default {
  name: "chart2",
  components: { chart },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 100vh;
  background-image: url("../assets/three.png");
  background-size: cover;
}
</style>
