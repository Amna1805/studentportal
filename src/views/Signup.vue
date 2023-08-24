<template>
  <!-- <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" v-bind:darkMode="true"
          isBtn="bg-gradient-success" />
      </div>
    </div>
  </div> -->
  <main class="main-content mt-0">
    <div class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg mt-n3" :style="{
      'background-image': `url(${require('@/assets/img/ncpsignupbg.jpg')})`,
      'background-position': 'top'
    }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white">Create an account to become a part of the NCP Student Community</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Register with</h5>
            </div>
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <argon-input type="text" placeholder="Name" aria-label="Name" />
                <argon-input type="email" placeholder="Email" aria-label="Email" />
                <argon-input type="text" placeholder="CNIC" aria-label="CNIC" />
                <argon-checkbox checked>
                  <label class="form-check-label" for="flexCheckDefault">
                    I agree to the
                    <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                  </label>
                </argon-checkbox>
                <div class="text-center">
                  <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2">Sign up</argon-button>
                </div>
                <p class="text-sm mt-3 mb-0">
                  Already have an account?
                  <a href="/signin" class="text-dark font-weight-bolder">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
//import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";

//import Form  from "vee-validate";

// Rest of your code remains unchanged


//import backgroundImage from '@/assets/img/signupbg.jpg';
const body = document.getElementsByTagName("body")[0];

export default {
  name: "SigninComp",
  components: {
    //  Form,
    //  Navbar,
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
    // backgroundImage,
  },
  methods: {
    

    async onSubmit() {
      await this.$nextTick(); // Ensure the form is updated before validation

      // Validate the form
      this.$refs.form.validate();

      if (this.errors.any()) {
        // Handle validation errors
        return;
      }

      // Form submission logic
    },
  },
  // setup() {
  //   const state = useVuelidate({
  //     cnic: {
  //       required,
  //       numeric,
  //       custom(value) {
  //         return /^[0-9]{13}$/.test(value); // Custom validation for 13 digits
  //       }
  //     }
  //   });

  //   // Existing setup code here
  //   // ...

  //   return {
  //     ...state
  //   };
  // },
  created() {
    this.$store.state.hideConfigButton = true;
    // this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    // this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>