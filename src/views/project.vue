<template>
  <div class="format">
    <project></project>
  </div>
</template>

<script>
import project from "../components/project";
export default {
  name: "project2",
  components: { project },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.format {
  min-height: 100vh;
  background-image: url("../assets/5.png");
  background-size: cover;
}
</style>
