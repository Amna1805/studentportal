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
    <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
    </div>
    <div class="card-body pt-0">
      <div class="text-center">
        <h5>
          Amna Muzaffar
        </h5>
      </div>
      <div class="d-flex flex-column align-items-center">
          <div class="custom-scrollbar mt-3">
          <div class="scroll-progress"></div>
          </div>
      </div>
      <ul class="list-group mt-2">
        <li class="list-group-item border-0 d-flex justify-content-between ps-0  border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Profile Picture</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-check text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0  border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Personal Details</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-check text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0  border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Contact details</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-check text-gray"></i>
          </div>
        </li>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0  border-radius-lg">
          <div class="d-flex align-items-center">
            <div class="d-flex flex-column ms-3">
              <h6 class="mb-1 text-dark font-weight-bold text-sm">Education Details</h6>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <i class="fas fa-check text-gray"></i>
          </div>
        </li>
      </ul>
      <div class="d-flex justify-content-end mt-4">
        <a href="/myprofile" class="text-success">
          Update Profile
          <i class="fas fa-play ml-5 fa-xs"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-card",
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