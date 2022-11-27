<template>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      
      <PreloaderMain></PreloaderMain>
      <NavbarMain></NavbarMain>
      <SidebarMain></SidebarMain>
      <div class="content-wrapper">
        
        <ContentHeader></ContentHeader>

        <section class="content">
          <div class="container-fluid">
            <router-view>
            </router-view>
          </div>
        </section>
        
      </div>
      
      <FooterPag></FooterPag>
      <ControlSidebar></ControlSidebar>
      
    </div>
  </body>
</template>

<script>
import $ from 'jquery'
import "../node_modules/admin-lte/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css"
import "../node_modules/admin-lte/plugins/select2/css/select2.min.css"

import PreloaderMain from "./dashboard/PreloaderMain.vue"
import ContentHeader from "./dashboard/ContentHeader.vue"
//import ExampleForm from "./components/ExampleForm.vue"
import NavbarMain from "./dashboard/NavbarMain.vue";
import SidebarMain from "./dashboard/SidebarMain.vue";
import FooterPag from "./dashboard/FooterPag.vue";
import ControlSidebar from "./dashboard/ControlSidebar.vue"


export default {
  name: "App",
  components: {
    PreloaderMain,
    ContentHeader,
  //  ExampleForm,
    NavbarMain,
    SidebarMain,
    FooterPag,
    ControlSidebar
  },
  methods: {
    initializeSelect2() {
      //Initialize Select2 Elements
      $(".select2").select2();

      //Initialize Select2 Elements
      $(".select2bs4").select2({
        theme: "bootstrap4",
      });
    },
  },
  mounted() {
    this.initializeSelect2()
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback");
</style>
