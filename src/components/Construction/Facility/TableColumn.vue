<template>
  <el-table-column
      :align="item.align"
      :fixed="item.prop === 'propertyName'"
      :label="item.label"
      :prop="item.prop"
      :sortable="item.sortable"
      :width="item.width"
      label-class-name="custom-label-header"
  >
    <template slot="header">
      <div v-if="isLevelHighest" class="flex justify-between items-center w-full custom-title-table mb-8">
        <app-button-move-left/>
        <div v-show="item.isPlus">{{ item.label }}</div>
        <app-button-move-right/>
      </div>
      <div class="flex flex-col justify-between items-center w-full custom-title-table mb-8" v-else-if="item.isPlus">
        <div>{{ item.label }}</div>
      </div>
      <div class="absolute box-border bottom-0 right-0 left-0 py-2 flex flex-col justify-center w-full items-center">
        <app-button-table :is-level-smallest="item.isLevelSmallest" :is-plus="item.isPlus"
                          @handleDelete="handleCloseRow(item.id)"
                          @handleShow="(val) => handleShowColumn(val, item.id)"/>
      </div>
    </template>
    <template slot-scope="scope">
      <template v-if="item.prop === 'propertyName'" class="flex">
        <span v-show="item.isPlus">{{ scope.row[item.prop] }}</span>
        <span class="ml-2"><app-button-delete @handleClose="handleCloseRow(scope.row)"/></span>
      </template>
      <span v-else v-show="item.isPlus">{{ scope.row[item.prop] }}</span>
    </template>
    <slot></slot>
  </el-table-column>
</template>

<script>

export default {
  name: 'TableColumn',

  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
    isLevelHighest: {
      type: Boolean,
      default: false
    }
  },

  data() {
  },

  methods: {
    handleCloseRow(row) {

    },
    handleShowColumn(val, id) {

    }
  }
};
</script>

<style lang="scss">
</style>