<template>
  <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item url="/dashboard-default" :class="getRoute() === 'dashboard-default' ? 'active' : ''"
          :navText="'Dashboard'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/dashboard2" :class="getRoute() === 'dashboard2' ? 'active' : ''"
          :navText="'Dashboard2'">
          <template v-slot:icon>
            <i class="ni ni-tv-2 text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item url="/tables" :class="getRoute() === 'tables' ? 'active' : ''" :navText="'Tables'">
          <template v-slot:icon>
            <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/billing" :class="getRoute() === 'billing' ? 'active' : ''" :navText="'Billing'">
          <template v-slot:icon>
            <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <!-- <li class="nav-item">
        <div @click="toggleDropdown" class="d-flex align-items-center">
          <sidenav-item url="/dash" :class="getRoute() === 'dash' ? 'active' : ''" :navText="'Equivalence Services'">
            <template v-slot:icon>
              <i class="fas fa-bars text-success text-sm opacity-10"></i>
            </template>
          </sidenav-item>
          <i class="fas fa-chevron-down text-success ml-2" :class="{ 'rotate-180': showDropdown }"></i>
        </div>
        <transition name="slide-down">
          <ul v-if="showDropdown" class="mt-2">
          <li class="list-group-item" style="border: none;">Identity Card</li>
          <li class="list-group-item" style="border: none;">Late Sitting</li>
          <li class="list-group-item" style="border: none;">Evaluation</li>
          <li class="list-group-item" style="border: none;">Clearance</li>
          <li class="list-group-item" style="border: none;">Extension</li>
        </ul>
        </transition>
       
      </li> -->
      <li class="nav-item">
        <sidenav-item url="/internship" :class="getRoute() === 'internship' ? 'active' : ''" :navText="'Internship'">
          <template v-slot:icon>
            <i class="fas fa-graduation-cap text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/identitycard" :class="getRoute() === 'identitycard' ? 'active' : ''" :navText="'Identity Card'">
          <template v-slot:icon>
            <i class="fas fa-id-card text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/accLogin" :class="getRoute() === 'accLogin' ? 'active' : ''" :navText="'Account Login'">
          <template v-slot:icon>
            <i class="fas fa-user-circle text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/transportmembership" :class="getRoute() === 'transportmembership' ? 'active' : ''" :navText="'Transport'">
          <template v-slot:icon>
            <i class="fas fa-bus text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/acc" :class="getRoute() === 'acc' ? 'active' : ''" :navText="'Accomodation'">
          <template v-slot:icon>
            <i class="fas fa-home text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/latesitting" :class="getRoute() === 'latesitting' ? 'active' : ''" :navText="'Late Sitting'">
          <template v-slot:icon>
            <i class="fas fa-clock text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/clear" :class="getRoute() === 'clear' ? 'active' : ''" :navText="'Clearance'">
          <template v-slot:icon>
            <i class="fas fa-clipboard text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/evaluation" :class="getRoute() === 'eval' ? 'active' : ''" :navText="'Evaluation'">
          <template v-slot:icon>
            <i class="fas fa-book text-success text-sm opacity-10"></i>
          </template>o]
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/ext" :class="getRoute() === 'ext' ? 'active' : ''" :navText="'Extension'">
          <template v-slot:icon>
            <i class="fas fa-calendar-plus text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="mt-3 nav-item">
        <h6 class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="this.$store.state.isRTL ? 'me-4' : 'ms-2'">
          ACCOUNT PAGES
        </h6>
      </li>
      <!-- <li class="nav-item">
        <sidenav-item url="/profile" :class="getRoute() === 'profile' ? 'active' : ''" :navText="'Profile'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li> -->
      <li class="nav-item">
        <sidenav-item url="/myprofile" :class="getRoute() === 'profile' ? 'active' : ''" :navText="'Profile'">
          <template v-slot:icon>
            <i class="ni ni-single-02 text-success text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/signin" :class="getRoute() === 'signin' ? 'active' : ''" :navText="'Sign In'">
          <template v-slot:icon>
            <i class="ni ni-single-copy-04 text-danger text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item url="/signup" :class="getRoute() === 'signup' ? 'active' : ''" :navText="'Sign Up'">
          <template v-slot:icon>
            <i class="ni ni-collection text-info text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      showDropdown: false,
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  }
};
</script>
<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: max-height 0.5s ease-in-out;
}
.slide-down-enter, .slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

</style>
