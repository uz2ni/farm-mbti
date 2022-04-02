<template>
  <b-container>
    <b-row id="title-section" class="d-flex justify-content-center align-content-center">
      <h1 class="text-center d-flex align-items-center mt-4">나는 전생에<br>어떤 구황작물 이었을까?</h1>
    </b-row>
    <b-row id="img-section" class="d-flex justify-content-center align-content-center">
      <img src="@/assets/images/main_img_test.png" alt="">
    </b-row>
    <b-row id="btn-section" class="d-flex justify-content-center">
      <router-link to="/test" id="start-btn" type="button" class="btn btn-lg btn-outline-warning mt-5 rounded-0 px-4">테스트 시작하기</router-link>
    </b-row>
    <b-row id="footer-section" class="d-flex justify-content-center align-content-center">
      <div id="copyright-text" class="d-flex align-items-center">ⓒ 유자X망고 All Rights Reserved.</div>
    </b-row>
  </b-container>

</template>

<script>
export default {
  name: "Home-0"
}
</script>

<style scoped>
#title-section {
  height: 23vh;
}
#title-section > h1 {
  font-size: 2rem;
}
#img-section {
  height: 40vh;
}
#btn-section {
  height: 30vh;
}
#footer-section {
  height: 7vh;
}
#copyright-text {
  font-size: 0.8rem;
}
#start-btn {
  height: fit-content;
}
#start-btn:focus, #start-btn:hover {
  color: white;
}
</style>