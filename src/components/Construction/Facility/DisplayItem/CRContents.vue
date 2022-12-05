<template>
  <div class="page mt-4" style="width: 1000px;">
    <!-- CRContents -->
    <div class="T20M_28 mb-4">作成情報</div>
    <CRCheckBoxInfo :creation-info-list="creationInfoList" />
    <div class="T20M_28 my-4">{{titleTable}}</div>
    <CRContentContract :data-table="dataTable" :tableCol="tableCol" :title-table="titleTable" />
  </div>
</template>

<script>
import CRCheckBoxInfo from "@/components/Construction/Facility/DisplayItemComp/CRCheckBoxInfo.vue";
import CRContentContract from "@/components/Construction/Facility/DisplayItemComp/CRContentContract.vue";

export default {
  name: "CRContents",

  components: {
    CRCheckBoxInfo,
    CRContentContract
  },

  data() {
    return {
      titleTable: "伺い・請負契約内容",
      creationInfoList: ["作成日", "作成部署", "作成者", "開店年"],

      // fix data col
      dataTable: [
        {
          order: true,
          approval_procedure: true,
          inquiry_number: true,
          authorizer: false,
          contractors: true,
          trader_name: true,
          address: true,
          telephone: true,
          department: true,
          manager: true,
          contract_date: false,
          contract_work: true,
          remarks: true,
          contract_amount: true
        }
      ],

      // fix data label table
      tableCol: [
        {
          id: 1,
          label: "発注者",
          prop: "order",
          children: []
        },
        {
          id: 2,
          label: "社内決裁手続き",
          prop: "approval_procedure",
          children: [
            {
              id: 1,
              label: "伺書番号",
              prop: "inquiry_number",
              children: []
            },
            {
              id: 2,
              label: "決裁者",
              prop: "authorizer",
              children: []
            }
          ]
        },
        {
          id: 3,
          label: "請負業者、発注先",
          checkbox: false,
          prop: "contractors",
          children: [
            {
              id: 1,
              label: "業者名",
              prop: "trader_name",
              children: []
            },
            {
              id: 2,
              label: "住所",
              prop: "address",
              children: []
            },
            {
              id: 3,
              label: "電話",
              prop: "telephone",
              children: []
            },
            {
              id: 4,
              label: "担当部署",
              prop: "department",
              children: []
            },
            {
              id: 5,
              label: "担当者",
              prop: "manager",
              children: []
            }
          ]
        },
        {
          id: 4,
          label: "契約日",
          prop: "contract_date",
          children: []
        },
        {
          id: 5,
          label: "請負金額（税抜）",
          prop: "contract_amount",
          children: []
        },
        {
          id: 6,
          label: "請負業務、発注内容",
          prop: "contract_work",
          children: []
        },
        {
          id: 7,
          label: "備考",
          prop: "remarks",
          children: []
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
