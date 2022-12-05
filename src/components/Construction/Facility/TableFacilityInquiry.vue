<template>
  <div class="table-show">
    <el-table
        border
        :data="dataTable"
        :default-sort="{prop: 'value1', order: 'descending'}"
        style="width: 100%"
    >
      <table-column
          v-for="levelOne in facilityInquiry"
          :key="levelOne.id"
          :is-level-highest="true"
          :item="levelOne"
      >
        <table-column
            v-for="levelTwo in levelOne.children"
            :key="levelTwo.id"
            :item="levelTwo"
        >
          <table-column
              v-for="levelThree in levelTwo.children"
              :key="levelThree.id"
              :item="levelThree"
          >
            <table-column
                v-for="levelFour in levelThree.children"
                :key="levelFour.id"
                :item="levelFour"
            >
              <table-column
                  v-for="levelFive in levelFour.children"
                  :key="levelFive.id"
                  :item="levelFive"
              >
              </table-column>
            </table-column>
          </table-column>
        </table-column>
      </table-column>
      <el-table-column
          align="center"
          fixed="right"
          label="原紙ダウンロード"
          width="140">
        <template slot-scope="scope">
          <el-button size="small" type="primary" @click="handleFacilityChart(scope.row)">
            施設カルテ
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import TableColumn from "@/components/Construction/Facility/TableColumn";

export default {
  name: 'TableFacilityInquiry',

  emits: ['handleShowColumn', 'handleCloseColumn', 'handleCloseRow', 'handleFacilityChart'],

  props: {
    facilityInquiry: {
      type: Array,
      default: () => []
    },
    dataTable: {
      type: Array,
      default: () => []
    }
  },

  components: {TableColumn},

  data() {
    return {}
  },
  methods: {
    handleFacilityChart(row) {
      this.$emit('handleFacilityChart', row)
    },

    handleShowColumn(id) {
      this.$emit('handleShowColumn', id)
    },

    handleCloseColumn(id) {
      this.$emit('handleCloseColumn', id)
    },

    handleCloseRow(row) {
      this.$emit('handleCloseRow', row)
    }
  }

};
</script>

<style lang="scss" scoped>

.table-show .custom-label-header.el-table__cell > .cell {
  position: absolute;
  height: 100%;
  top: 0;
}
</style>
