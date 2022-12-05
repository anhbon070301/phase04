<template>
  <div class="creation-information ml-4">
    <!-- CRContentContract -->
    <!-- table -->
    <el-table :data="dataTable" style="width: 100%">
      <el-table-column
        v-for="item in tableCol"
        :key="item.id"
        :label="item.label"
        label-class-name="table-select-header"
        :prop="item.prop"
      >
        <el-table-column
          v-for="children in item.children"
          :key="children.id"
          :label="children.label"
          label-class-name="table-select-header"
          :prop="children.prop"
        >
          <template #default="scoped">
            <el-checkbox v-model="scoped.row[children.prop]"></el-checkbox>
          </template>
        </el-table-column>

        <template v-if="item.children[0] == null" #default="scoped">
          <el-checkbox v-model="scoped.row[item.prop]"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "CRContentContract",

  props: {
    dataTable: {
      type: Array,
      default: () => []
    },

    tableCol: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      // titleTable : titleTable,
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
