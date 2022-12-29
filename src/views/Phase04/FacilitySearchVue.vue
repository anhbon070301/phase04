<template>
  <div class="common-layout">
    <el-container>
      <div class="parent">

        <div>
          <SearchTitleVueVue></SearchTitleVueVue>
        </div>
        <br />
        <div>
          <SearchDetailVue></SearchDetailVue>
        </div>

        <div style="margin-left: 1%">
          <el-button type="primary">検索</el-button>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import SearchDetailVue from "./SearchDetailVue.vue";
import SearchTitleVueVue from "./SearchTitleVue.vue";

export default {
  components: {
    SearchDetailVue,
    SearchTitleVueVue
  },
  data() {
    return {
      showDetail: false
    };
  },
  methods: {
  
  }
};
</script>

<style>
.parent {
  width: 100%;
}
.title {
  border-bottom: 1px solid rgb(144, 140, 140);
  text-align: left;
  width: 100%;
}
.search-content {
  margin-left: 10.5%;
}
</style>