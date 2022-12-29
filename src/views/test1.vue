<template>
  <h1 :class="this.active == true ? 'active' : ''">Home</h1>
  <span>{{setId}}</span>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      id: 0
    };
  },
  computed: {
    setId: function() {
      return (this.id = this.$route.params.id);
    }
  },
  watch: {
    id: function() {
      console.log("đang chạy");
    }
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