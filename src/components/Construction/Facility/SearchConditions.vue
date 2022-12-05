<template>
  <div class="download-page">
    <!-- sub title -->
    <div class="T20M_28 mb-4">ファイル選択</div>

    <!-- form -->
    <el-form ref="filterForm" label-position="left" label-width="200px" :model="params" :rules="rules">
      <el-form-item label="物件名" prop="property_code">
          <el-col :md="14" :xs="24">
            <el-select v-model="params.property_code" class="w-full" filterable>
                <el-option
                v-for="(item, index) in propertyNames"
                :key="`property-${index}`"
                :label="item.name"
                :value="item.value"
                />
            </el-select>
          </el-col>
      </el-form-item>

      <el-form-item label="施設カルテ(Excel)" prop="files">
        <el-col :md="14" :xs="24">
          <app-input-file
            v-model="params.file"
            accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
          </app-input-file>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-button class="my-4" :loading="loadingData" type="primary"  @click="handleSubmit" >アップロード</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import InitialMixin from '@/global/mixins/initial.mixin';

export default {
  name: 'SearchConditions',

  mixins: [InitialMixin],

  data() {
    // check validate input
    const rules = {
      property_code: [{ required: true, message: this.$t('message.required'), trigger: 'change' }],
      files: [{ required: true, message: this.$t('message.required'), trigger: 'change' }],
    };

    return {
      loadingData: false,
      // value of input
      params: {
        property_code: '',
        file: '',
      },
      // check required input
      rules,
    };
  },

  methods: {
    handleSubmit() {
      this.$refs.filterForm.validate(valid => {
        if (!valid) {
          return;
        }
      })
    }
  }
};
</script>

<style lang="scss">
.download-page {
  .d-row {
    margin-bottom: 22px;
  }
  .custom-label {
    label {
      width: 80px !important;
    }
    .el-form-item__content {
      margin-left: 80px !important;
    }
  }
}
</style>