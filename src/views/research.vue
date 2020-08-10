<template>
  <div class="format">
    <research></research>
  </div>
</template>

<script>
import research from "../components/research";
export default {
  name: "research2",
  components: { research },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 100vh;
  background-image: url("../assets/7.png");
  background-size: cover;
  // background-color: #fff;
}
</style>
