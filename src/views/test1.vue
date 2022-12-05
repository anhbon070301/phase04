<template>
  <h1 :class="this.active == true ? 'active' : ''">Home</h1>
</template>
<script>
export default {
  data() {
    return {
      active: true
    };
  },
  methods: {}
};
</script>
<style scoped>
.active {
  color: red;
}
.isactive {
  color: aqua;
}
</style>