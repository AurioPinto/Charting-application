<template>
  <div class="value">
    <value></value>
  </div>
</template>

<script>
import value from "../components/value";
export default {
  name: "value11",
  components: { value },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.value {
  height: 100%;
  // background-color: #00263c;
  min-height: 100vh;
}
</style>
