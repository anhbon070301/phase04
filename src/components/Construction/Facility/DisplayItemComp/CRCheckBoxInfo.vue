<template>
  <div class="creation-information ml-4">
    <!-- 作成情報 -->

    <!-- all checkbox -->
    <el-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >全て</el-checkbox>

    <!-- data checkbox -->
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checked" @change="handleCheckedChange">
      <el-checkbox
        v-for="(label, index) in creationInfoList"
        :label="label"
        :key="index"
      >{{ label }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CRCheckBoxInfo",

  props: {
    title: {
      type: String,
      default: ""
    },
    creationInfoList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      checkAll: false,
      checked: [],
      isIndeterminate: false
    };
  },

  methods: {
    handleCheckAllChange(val) {
      this.checked = val ? this.creationInfoList : [];
      this.isIndeterminate = false;
    },
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.creationInfoList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.creationInfoList.length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
