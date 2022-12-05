<template>
  <div class="page" style="width: 1000px;">
    <!-- CRContractors -->
    <div class="T20M_28 mb-4">作成情報</div>
    <CRCheckBoxInfo :creation-info-list="creationInfoList" />
    <div class="T20M_28 my-4">{{titleTable}}</div>
    <CRContentContract :dataTable="dataTable" :tableCol="tableCol" />
  </div>
</template>

<script>
import CRCheckBoxInfo from "../../Facility/DisplayItemComp/CRCheckBoxInfo.vue";
import CRContentContract from "../../Facility/DisplayItemComp/CRContentContract.vue";

export default {
  name: "CRContractors",

  components: {
    CRCheckBoxInfo,
    CRContentContract
  },

  data() {
    return {
      titleTable: "施工業者・緊急連絡先",
      creationInfoList: ["作成日", "作成部署", "作成者", "開店年"],

      // fix data col
      dataTable: [
        {
          construction_name: true,
          builder: true,
          trader_name: false,
          address: true,
          telephone: true,
          department: true,
          manager: false,
          email_address: true,
          emergency_contact: true,
          manager_contact: true,
          address_contact: false,
          remarks: true
        }
      ],

      // fix data label table
      tableCol: [
        {
          id: 1,
          label: "工事名",
          prop: "construction_name",
          children: []
        },
        {
          id: 2,
          label: "施工業者",
          prop: "builder",
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
            },
            {
              id: 6,
              label: "メールアドレス",
              prop: "email_address",
              children: []
            }
          ]
        },
        {
          id: 3,
          label: "緊急連絡先",
          prop: "emergency_contact",
          children: [
            {
              id: 1,
              label: "担当者",
              prop: "manager_contact",
              children: []
            },
            {
              id: 2,
              label: "連絡先",
              prop: "address_contact",
              children: []
            }
          ]
        },
        {
          id: 4,
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
