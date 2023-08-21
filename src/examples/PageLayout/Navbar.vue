<template>
  <nav class="navbar navbar-expand-md fixed-top z-index-3 w-80 "
    :class="isBlur ? isBlur : 'shadow-none navbar-transparent w-80 fixed-top'">
    <div class="container ps-2 pe-0">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="navbar-brand" href="https://www.ncp.edu.pk/">
            <img src="/ncplogo.png" width="50" height="50" class="logo img-fluid ">
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>





<script>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";

export default {
  name: "NavbarHead",
  data() {
    return {
      downArrWhite,
      downArrBlack
    };
  },
  props: {
    btnBackground: String,
    isBlur: String,
    isBtn: { type: String, default: "bg-gradient-light" },
    darkMode: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    darkModes() {
      return {
        "text-dark": this.darkMode
      };
    }
  }
};
</script>
<style>
body{
  overflow-x: hidden;
}
.logo {
  background-color: transparent;
  padding: 0.25rem;
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  max-width: 100%;
  height: auto;
  transition: background-color 0.3s ease, opacity 0.3s ease;
}

.logo:hover {
  background-color: rgba(200, 200, 200, 0.5);
}
</style>