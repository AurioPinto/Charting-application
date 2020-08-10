<template>
  <div class="clips">
    <clips />
  </div>
</template>

<script>
import clips from "../components/clips";
export default {
  name: "clips2",
  components: { clips },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.clips {
  // background-color: #ffffff;
  min-height: 100vh;
  background-image: url("../assets/backg.jpg");
  background-size: cover;
}
</style>
