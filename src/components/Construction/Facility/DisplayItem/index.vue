<template>
  <div class="page mb-4">
    <div class="flex">
      <div class="T20M_28">{{propertyItem.nameItem}}</div>
      <app-button-show @handleShow="handleShow"/>
    </div>
    <component v-show="isOpen" :is="propertyItem.component" :data="propertyItem.props"></component>

    <div class="mt-4 w-80">
      <el-select v-model="displayItemSelect" class="w-full">
        <el-option
            v-for="item in displayItems"
            :key="item.id"
            :label="item.nameItem"
            :value="item.value">
        </el-option>
      </el-select>
      <component class="mt-2 ml-4" :is="displayItemsMap[displayItemSelect].component" v-if="displayItemSelect" :data="displayItemsMap[displayItemSelect].props"></component>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DisplayItem',

  components: {
  },

  props: {
    displayItems: {
      type: Array,
      default: () => []
    },
    propertyItem: {
      type: Object,
      default: () => {}
    },
    displayItemsMap: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      isOpen: false,
      displayItemSelect: ''
    };
  },

  // watch: {
  //   displayItemSelect() {
  //     console.log('displayItemSelect: ', this.displayItemSelect)
  //     console.log('component: ', this.displayItemsMap[this.displayItemSelect].component)
  //   }
  // },

  methods: {
    handleShow(check) {
      this.isOpen = check
    }
  }
};
</script>

<style lang="scss" scoped></style>
