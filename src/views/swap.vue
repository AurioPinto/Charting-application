<template>
  <div class="format">
    <swap></swap>
  </div>
</template>

<script>
import swap from "../components/swap";
export default {
  name: "swap2",
  components: { swap },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 68vh;
 
  background-image: url("../assets/8.png");
  background-size: cover;
}
</style>
