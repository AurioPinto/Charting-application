<template>
  <div class="unix">
    <jikan></jikan>
  </div>
</template>

<script>
import jikan from "../components/jikan";
export default {
  name: "index",
  components: { jikan },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.unix {
  background-color: #ffffff;
  min-height: 100vh;
}
</style>
