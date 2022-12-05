<template>
  <el-container class="layout layout-construction">
    <!-- Private Page -->
    <template v-if="hasAside">
      <el-header
        v-if="$slots.header || (title && displaySideBar)"
        class="flex flex-wrap justify-between items-center shadow"
        :style="headerStyle"
      >
        <div class="flex-1 flex items-center">
          <div class="header__btn-menu mr-5 hover:shadow-lg cursor-pointer rounded" @click="handleUpdateCollapseAside">
            <fa-icon icon="bars" size="lg"></fa-icon>
          </div>
          <div class="header__logo cursor-pointer T24B_32 uppercase" @click="$router.push('/')">
            Construction Support System
          </div>
        </div>
        <div class="header__navigation flex-1 flex justify-end items-center">
          <p class="mr-5">問合せ先：kensetsu-systeminfo@aeonmall.com</p>
          <el-button
            v-if="isButtonPriceSituationShow"
            class="mr-3"
            size="small"
            type="primary"
            @click="handlePriceSituationClick"
            >建設物価情報</el-button
          >
          <el-button v-if="isButtonLinkShow" class="mr-5" size="small" type="primary" @click="handleShowLinkDailog"
            >リンク集</el-button
          >
          <div class="mr-5">{{ getUserName }}</div>
          <div>
            <el-button type="text" @click="handleLogout">ログアウト</el-button>
          </div>
        </div>
      </el-header>

      <el-container class="layout__content" :class="displaySideBar ? '' : 'layout__content_h_full'">
        <el-aside v-if="displaySideBar" width="auto">
          <SideBar :collapse="getCollapseAside" :menus="menus" />
        </el-aside>
        <el-main style="overflow-x: auto" :style="contentStyle">
          <div v-if="title" class="title-page mb-4 T20B_28" :style="pageTitleStyle">{{ title }}</div>
          <div class="page-content" :style="pageContentStyle">
            <slot></slot>
          </div>
        </el-main>
      </el-container>
    </template>

    <!-- Public Page -->
    <template v-else>
      <el-header
        v-if="$slots.header || title"
        class="flex justify-center items-center relative shadow"
        :style="headerStyle"
      >
        <div v-if="$route.fullPath == '/' || $route.name == 'Home'" class="flex-1 flex items-center"></div>
        <div
          class="header__logo cursor-pointer absolute T24B_32 uppercase"
          style="left: 20px"
          @click="$router.push('/')"
        >
          Construction Support System
        </div>
        <div
          v-if="$route.fullPath == '/' || $route.name == 'Home'"
          class="header__navigation flex-1 flex justify-end items-center"
        >
          <p class="mr-5">問合せ先：kensetsu-systeminfo@aeonmall.com</p>
          <el-button
            v-if="isButtonPriceSituationShow"
            class="mr-3"
            size="small"
            type="primary"
            @click="handlePriceSituationClick"
            >建設物価情報</el-button
          >
          <el-button v-if="isButtonLinkShow" class="mr-5" size="small" type="primary" @click="handleShowLinkDailog"
            >リンク集</el-button
          >
          <div class="mr-5">{{ getUserName }}</div>
          <div>
            <el-button type="text" @click="handleLogout">ログアウト</el-button>
          </div>
        </div>

        <div v-else class="header__navigation flex-1 flex justify-end items-center">
          <p class="mr-5">問合せ先：kensetsu-systeminfo@aeonmall.com</p>
        </div>
      </el-header>

      <el-main :style="contentStyle">
        <div :style="pageContentStyle">
          <slot></slot>
        </div>
      </el-main>
    </template>
    <LinkDialog :visible="visible" @on-close="handleDailogClose" />
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
import SideBar from './Aside/SideBar.vue';
import LinkDialog from '@/components/Layout/Dialog/LinkDialog.vue';
import { UPDATE_COLLAPSE_ASIDE, LOGOUT } from '@/constants/actions';

export default {
  name: 'Layout',

  components: { SideBar, LinkDialog },

  props: {
    /* eslint-disable vue/require-default-prop */
    title: String,
    hasAside: {
      type: Boolean,
      default: true,
    },
    contentStyle: [String, Object],
    headerStyle: [String, Object],
    pageContentStyle: [String, Object],
    pageTitleStyle: [String, Object],
    listFile: [Object, Object],

    displaySideBar: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      collapseSideBar: true,
      isShowDailog: false,
      visible: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['getUserName', 'getUserRole', 'getDepartment']),
    ...mapGetters('setting', ['getCollapseAside']),
    ...mapGetters('link', ['getListLink']),
    menus() {
      let menus = [
        {
          type: 'menu-item',
          icon: 'el-icon-files',
          name: '施設カルテアップロード・削除(page01)',
          path: '/construction/facility-chart',
          location: 1,
        },
        {
          type: 'menu-item',
          icon: 'el-icon-collection',
          name: '物件別使用メーカーファイル保守(Page 07)',
          path: '/construction/property/maintenance',
          location: 2,
        },
        {
          type: 'menu-item',
          icon: 'el-icon-collection',
          name: '施設データ照会(Page 08)',
          path: '/construction/facility-inquiry',
          location: 3,
        },
        {
          type: 'menu-item',
          icon: 'el-icon-files',
          name: '竣工調書資料アップロード・削除①',
          path: '/construction/completion',
          location: 4,
        },
        {
          type: 'menu-item',
          icon: 'el-icon-collection',
          name: '施設データ照会 検索エリア用(Page 09)',
          path: '/construction/facility-search',
          location: 5,
        },
      ];
      const adminMenus = [
        {
          type: 'menu-item',
          icon: 'el-icon-document-delete',
          name: '建設物価関連データ削除',
          path: '/cms/delete-price',
          location: 9,
        },
        {
          type: 'menu-item',
          icon: 'el-icon-school',
          name: 'リンク集マスタ保守',
          path: '/cms/link-management',
          location: 10,
        },
      ];

      if (this.isAdminAuthorized) {
        menus = menus.concat(adminMenus).sort((a, b) => {
          return a.location - b.location;
        });
      }

      return menus;
    },
    isAdminAuthorized() {
      return this.getUserRole === 'admin' ? true : false;
    },

    checkDepartment() {
      return this.getDepartment;
    },

    isButtonLinkShow() {
      return (
        this.isAdminAuthorized ||
        this.checkDepartment === '5202' ||
        this.checkDepartment === '5201' ||
        this.checkDepartment === '5203'
      );
    },
    isButtonPriceSituationShow() {
      // do not have manager role orther to check -> check after
      return (
        this.isAdminAuthorized ||
        this.checkDepartment === '5202' ||
        this.checkDepartment === '5201' ||
        this.checkDepartment === '5203' || 
        this.checkDepartment === '1000'
      );
    },
  },

  beforeDestroy() {
    this.col;
  },

  methods: {
    handleUpdateCollapseAside() {
      this.$store.dispatch(`setting/${UPDATE_COLLAPSE_ASIDE}`);
    },
    handleLogout() {
      this.$store
        .dispatch(`auth/${LOGOUT}`)
        .then(message => {
          this.$message({
            message,
            showClose: true,
            duration: 10000,
          });

          setTimeout(() => {
            this.$router.push('/login'); // redirect
          });
        })
        .catch(error => {
          this.$message({
            message: error?.response?.data?.message || 'ログアウトに失敗しました',
            type: 'error',
            showClose: true,
            duration: 10000,
          });
        });
    },

    handlePriceSituationClick() {
      let route = this.$router.resolve({ name: 'PricePreview' });
      window.open(route.href);
    },

    handleShowLinkDailog() {
      this.visible = true;
    },

    handleDailogClose() {
      this.visible = false;
    },
  },
};
</script>
