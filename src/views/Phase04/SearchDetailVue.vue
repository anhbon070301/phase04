<template>
  <div>
   <div class="search-title">
          <span>詳細検索項目</span> &emsp14;
          <el-button @click="showSearchDetail" size="medium">+</el-button>
          <el-button @click="hideSearchDetail" size="medium">-</el-button>
    </div>
    <br />
  <div style="margin-left: 3%;" v-show="this.showDetail" class="mt-4 ml-4">
    <el-form ref="filterForm" label-position="left" label-width="100px">
      <div class="T18M_26">表示データ</div>
      <el-row class="ml-4">
        <el-col :lg="8">
          <el-form-item label prop="search_target">
            <el-checkbox v-model="abc" false-label="no" true-label="yes">物件別最新開店年のみ対象</el-checkbox>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">物件</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="AM/PM物件" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-select v-model="abc" class="w-full" filterable>
                <el-option label="test" value="123"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="事業部" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-select v-model="abc" class="w-full" filterable>
                <el-option label="test" value="123"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="開店年" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">施設カルテ</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="請負業者" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
          <el-form-item label="エレベーター製造会社" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="テナント数" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
          <el-form-item label="エスカレーター製造会社" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="フードコード客席数" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">竣工調書(概要)</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="敷地面積" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="テナント数" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-select v-model="abc" class="w-full" filterable>
                <el-option label="test" value="123"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">竣工調書(建物面積・店舗面積)</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="延床面積" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
          <el-form-item label="立体駐車場" prop="search_target">
            <el-col :lg="22" :md="12" :xs="24">
              <el-checkbox-group v-model="model.check">
                <el-checkbox
                  v-for="(item, index) in selectArray"
                  :key="`car_park-${index}`"
                  :label="item.label"
                  name="car_park"
                  :value="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="GLA" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
          <el-form-item label="シネマ" prop="search_target">
            <el-col :lg="22" :md="12" :xs="24">
              <el-checkbox-group v-model="model.check">
                <el-checkbox
                  v-for="(item, index) in selectArray"
                  :key="`car_park-${index}`"
                  :label="item.label"
                  name="car_park"
                  :value="item.value"
                >{{item.label}}</el-checkbox>
              </el-checkbox-group>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item class="mt-16" label="階数" prop="search_target">
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
            <el-col class="text-center" :span="1" style="margin: 0 10px">～</el-col>
            <el-col :lg="9" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">竣工調書(伺い・請負契約の内容)</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="請負業務、発注内容" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="請負業者、発注先業者" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <div class="T18M_26">竣工調書(施工業者・緊急連絡先一覧)</div>
      <el-row class="ml-4 mt-2">
        <el-col :lg="8">
          <el-form-item label="工事名" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :lg="8">
          <el-form-item label="施工業者" prop="search_target">
            <el-col :lg="16" :md="12" :xs="24">
              <el-input v-model="abc" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>

      <!--      <div class="T18M_26">使用メーカー承認願い</div>-->
      <!--      <el-row class="ml-4 mt-2">-->
      <!--        <el-col :lg="8">-->
      <!--          <el-form-item label="材料・機器名" prop="search_target">-->
      <!--            <el-col :lg="16" :md="12" :xs="24">-->
      <!--              <el-input v-model="abc"/>-->
      <!--            </el-col>-->
      <!--          </el-form-item>-->
      <!--        </el-col>-->
      <!--        <el-col :lg="8">-->
      <!--          <el-form-item label="使用メーカー名" prop="search_target">-->
      <!--            <el-col :lg="16" :md="12" :xs="24">-->
      <!--              <el-input v-model="abc"/>-->
      <!--            </el-col>-->
      <!--          </el-form-item>-->
      <!--        </el-col>-->
      <!--      </el-row>-->
    </el-form>
  </div>
</div>
</template>
<script>
export default {
  name: "AdvancedSearchItem",

  props: {},

  data() {
    return {
      showDetail: false,
      model: {
        check: 1
      },
      selectArray: [
        {
          label: "全て",
          value: 1
        },
        {
          label: "有",
          value: 2
        },
        {
          label: "無",
          value: 3
        }
      ]
    };
  },

  methods: {
    showSearchDetail() {
      this.showDetail = true;
    },
    hideSearchDetail() {
      this.showDetail = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
