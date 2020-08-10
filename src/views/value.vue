<template>
  <div class="format">
    <value></value>
  </div>
</template>

<script>
import value from "../components/value";
export default {
  name: "value2",
  components: { value },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 100vh;
  // background-image: url("../assets/4.png");
  // background-size: cover;
  background-color: #00a8a8;
;
}
</style>
