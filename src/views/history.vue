<template>
  <div class="format">
    <history></history>
  </div>
</template>

<script>
import history from "../components/history";
export default {
  name: "history2",
  components: { history },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 100vh;
  background-image: url("../assets/adding.png");
  background-size: cover;
}
</style>
