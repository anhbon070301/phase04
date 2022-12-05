<template>
  <el-menu class="sidebar" :collapse="collapse">
    <component
      :is="menu.type === 'sub-menu' ? 'SideSubMenu' : 'SideMenuItem'"
      v-for="(menu, index) in menus"
      :key="`side-item-${index}`"
      v-bind="{ ...menu, index, collapse }"
    />
  </el-menu>
</template>

<script>
import SideMenuItem from './SideMenuItem.vue';
import SideSubMenu from './SideSubMenu.vue';

export default {
  name: 'SideBar',

  components: { SideMenuItem, SideSubMenu },

  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
    menus: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
