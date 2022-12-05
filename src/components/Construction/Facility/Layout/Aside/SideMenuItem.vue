<template>
  <el-tooltip :content="name" :disabled="!collapse" effect="light" :open-delay="300" placement="right">
    <el-menu-item
      :class="['side-menu-item', isActive ? 'is-app-active' : 'is-app-non-active']"
      :disabled="disabled"
      :index="`${index + 1}`"
      @click="$router.push(path)"
    >
      <div class="el-menu-item__inner rounded">
        <i :class="icon"></i>
        <span class="tracking-wide"> {{ name }} </span>
      </div>
    </el-menu-item>
  </el-tooltip>
</template>

<script>
export default {
  name: 'SideMenuItem',

  /* eslint-disable vue/require-default-prop */
  props: {
    index: Number,
    icon: String,
    name: String,
    path: String,
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    collapse: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    isActive() {
      let segmentPath = this.$route.path.split('/'); // Lấy segment path đầu tiên
      let currentPath = this.path.split('/');
      // console.log('segmentPath ', segmentPath);
      // console.log('path: ', currentPath);
      return `/${currentPath[1]}/${currentPath[2]}` === `/${segmentPath[1]}/${segmentPath[2]}`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
