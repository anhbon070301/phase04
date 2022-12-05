<template>
  <div class="page mt-4" style="width: 1000px;">
    <!-- CRContents -->
    <div class="T20M_28 mb-4">1.作成情報</div>
    <CRCheckBoxInfo :creation-info-list="creationInfoList" />

    <!--CROverviewComp-->
    <div class="mb-4 flex items-center">
      <div class="T20M_28 mr-4">2.概要</div>
      <el-checkbox class="T20M_28">全て</el-checkbox>
      <app-button-show @handleShow="handleOverviewShow" />
    </div>
    <CROverviewComp v-show="showOverview" />

    <!--CROverviewCompSite-->
    <div class="mb-4 flex items-center">
      <div class="T20M_28 mr-4">3.敷地概要</div>
      <el-checkbox class="T20M_28">全て</el-checkbox>
      <app-button-show @handleShow="handleOverviewShowSite" />
    </div>
    <CROverviewSiteComp v-show="showOverviewSite" />
  </div>
</template>

<script>
import CRCheckBoxInfo from "@/components/Construction/Facility/DisplayItemComp/CRCheckBoxInfo.vue";
import CROverviewComp from "@/components/Construction/Facility/DisplayItemComp/CROverviewComp.vue";
import CROverviewSiteComp from "@/components/Construction/Facility/DisplayItemComp/CROverviewSiteComp.vue";
export default {
  name: "CROverview",

  components: {
    CROverviewSiteComp,
    CROverviewComp,
    CRCheckBoxInfo
  },

  props: {
    data: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      creationInfoList: ["最新開店年のみ", "作成日", "作成者", "開店年"],
      showOverview: true,
      showOverviewSite: true
    };
  },

  methods: {
    handleOverviewShow(check) {
      this.showOverview = check;
    },

    handleOverviewShowSite(check) {
      this.showOverviewSite = check;
    }
  }
};
</script>

<style lang="scss" scoped></style>
