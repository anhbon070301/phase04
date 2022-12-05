<template>
  <div class="common-layout">
    <el-container>
      <div class="parent">
        <div class="title">施設データ照会 検索エリア用</div>
        <br />
        <div class="search-title">
          <span>表示項目</span> &emsp;
          <span>物件</span> &emsp14;
          <el-button @click="showContent" size="medium">+</el-button>
          <el-button @click="hiddenContent" size="medium">-</el-button>
        </div>
        <div v-show="this.show" style="margin-top:10px;">
          <span style="margin-left:10.5%; font-family: BIZ-UDGothic;">page property</span>
        </div>
        <br />
        <div class="search-content">
          <el-select v-model="value" placeholder="選択してください" size="large">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.name"
              :value="item.value"
              @click="man(item.value)"
            />
          </el-select>
        </div>
        <br />
        <div style="margin-top:5px; margin-left:10.5%">
          <component :is="manhinh"></component>
        </div>
        <br />
        <div class="search-title">
          <span>詳細検索項目</span> &emsp14;
          <el-button @click="showSearchDetail" size="medium">+</el-button>
          <el-button @click="hideSearchDetail" size="medium">-</el-button>
        </div>

        <br />
        <div v-show="this.showDetail" style="margin-left: 3%">
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
import test5 from "../../components/Construction/Facility/DisplayItem/CRContractors.vue";
import test3 from "../../components/Construction/Facility/DisplayItem/CRBuilding.vue";
import test4 from "../../components/Construction/Facility/DisplayItem/CRContents.vue";
import test2 from "../../components/Construction/Facility/DisplayItem/CROverview.vue";
import test1 from "../../components/Construction/Facility/DisplayItem/CRFacilityChart.vue";
import SearchDetailVue from "./SearchDetailVue.vue";

export default {
  components: {
    man5: test5,
    man4: test4,
    man3: test3,
    man2: test2,
    man1: test1,
    SearchDetailVue
  },
  data() {
    return {
      options: [
        { id: "1", value: "man1", name: "施設カルテ" },
        { id: "2", value: "man2", name: "竣工調書(概要)" },
        { id: "3", value: "man3", name: "竣工調書(建物面積・店舗面積)" },
        { id: "4", value: "man4", name: "竣工調書(伺い・請負契約の内容)" },
        { id: "5", value: "man5", name: "竣工調書(施工業者・緊急連絡先一覧)" }
      ],
      manhinh: null,
      show: false,
      showDetail: false
    };
  },
  methods: {
    man(man) {
      this.manhinh = man;
    },
    showContent() {
      this.show = true;
    },
    hiddenContent() {
      this.show = false;
    },
    showSearchDetail() {
      this.showDetail = true;
    },
    hideSearchDetail() {
      this.showDetail = false;
    }
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