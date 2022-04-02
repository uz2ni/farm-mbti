<template>
  <b-container>
    <ProgressBar/>
    <Question/>
    <Answer/>
  </b-container>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import Question from "@/components/Question";
import Answer from "@/components/Answer";

export default {
  name: "Test-0",
  components: {
    ProgressBar,
    Question,
    Answer
  },
  data() {
    return {
      value: 45,
      max: 100
    }
  }

}
</script>

<style scoped>
</style>