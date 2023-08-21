<template>
  <div class="card card-profile">

    <div class="row justify-content-center mt-5">
      <div class="col-4 col-lg-4 order-lg-2">
        <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
          <a href="javascript:;">
            <img src="../../assets/img/amna.jpg" class="rounded-circle img-fluid border border-2 border-white mt-5" />
          </a>
        </div>
      </div>
    </div>
    <div class="card-body pt-0">
      <div class="text-center">
        <h5>
          Amna Muzaffar
        </h5>
      </div>
      <div class="mt-5">
        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            CNIC:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">71104-176901801</div>
        </div>

        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted mt-2">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            EMAIL:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">nasirhussaintormik@gmail.com</div>
        </div>
        <div class="d-flex flex-column">
          <div class="h6 font-weight-300 text-muted mt-2">
            <i class="ni education_hat mr-2" style="color: #c3c3c3"></i>
            PHONE NO:
          </div>
          <div class="ms-1" style="color: black; font-size: 14px;">03165392101</div>
        </div>
      </div>
      <div class="mt-3">
      <ul class="list-group mt-2">
        <li class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg">
          <div class="d-flex align-items-center ms-3">
            <div class="d-flex align-items-center">
            <i class="fas fa-user text-gray"></i>
          </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Personal Details</h6>
            </div>
          </div>
        </li>
        <li class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center ms-3">
            <i class="fas fa-address-book text-gray"></i>
          </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Contact details</h6>
            </div>
          </div>
        </li>
        <li class="list-group-item border d-flex justify-content-between ps-0 m-1 border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex align-items-center ms-3">
            <i class="fas fa-user-graduate text-gray"></i>
          </div>
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Education Details</h6>
            </div>
          </div>
        </li>
      </ul>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CompleteProfile",
};
</script>
<style>
.custom-scrollbar {
  width: 100%;
  height: 15px;
  background-color: #e5e5e5;
  overflow-x: auto;
  border-radius: 8px;
}

.scroll-text {
  position: absolute;
  padding-right: 5px;
  font-size: 12px;
  color: #000;
}

.scroll-progress {
  width: 40%;
  /* Adjust the width as needed */
  height: 100%;
  background-color: #00cc66;
  /* Green color */
  border-radius: 8px;
}
</style>