<template>
  <el-submenu
    active-text-color="#818CF8"
    class="side-sub-menu"
    :disabled="disabled"
    :hide-timeout="0"
    :index="`${index + 1}`"
    popper-class="side-sub-menu__popup"
  >
    <template slot="title">
      <i :class="icon"></i>
      <span>
        {{ name }}
      </span>
    </template>

    <!-- list item of submenu-->
    <el-menu-item
      v-for="(submenu, subIndex) in submenus"
      :key="`submenu-${index}-${subIndex + 1}`"
      :index="`${index}-${subIndex + 1}`"
      @click="$router.push(submenu.path)"
    >
      <span slot="title" class="tracking-wide">
        {{ submenu.name }}
      </span>
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: 'SideSubMenu',

  /* eslint-disable vue/require-default-prop */
  props: {
    index: Number,
    icon: String,
    name: String,
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    submenus: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
