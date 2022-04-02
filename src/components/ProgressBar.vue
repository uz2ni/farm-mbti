<template>
  <b-row id="bar-section" class="mx-3 my-3 d-block">
    <div class="progress" style="height: 20px;">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </b-row>
</template>

<script>
export default {
  name: "ProgressBar"
}
</script>

<style scoped>
#bar-section {
  height: 10vh;
}
</style>