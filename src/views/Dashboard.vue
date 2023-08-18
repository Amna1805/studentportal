<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="mt-5 mb-3">
          <div class="card shadow-lg mt-n6">
            <div class="card-body p-3">
              <div class="row gx-4 align-items-center">
                <div class="col-auto">
                  <div class="avatar avatar-xl position-relative">
                    <img src="../assets/img/amna.jpg" alt="profile_image" class="shadow-sm w-100 border-radius-lg" />
                  </div>
                </div>
                <div class="col my-auto">
                  <div class="h-100">
                    <h5 class="mb-1">Welcome back!</h5>
                    <p class="mb-0 font-weight-bold text-sm">AMNA MUZAFFAR</p>
                  </div>
                </div>
                <div class="col-auto text-end">
                  <button class="btn btn-outline-success blink">Register Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-lg-8">
          <authors-table />
          <carousel />    
        </div>
        <div class="col-lg-4 mt-3 mt-lg-0">
          <invoice-card />
          <profile-card />
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import AuthorsTable from "./components/AuthorsTable.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import ProfileCard from "./components/ProfileCard.vue";
import Carousel from "./components/Carousel.vue";
export default {
  name: "dashboard-default",
  components: {
    AuthorsTable,
    InvoiceCard,
    ProfileCard,
    Carousel
  },
};
</script>



<style scoped>
.blink {
  animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>