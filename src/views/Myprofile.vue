<template>
  <main>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-4 ">
          <CompleteProfile :activeSection="activeSection" :hoveredSection="hoveredSection"
            @sectionClicked="handleSectionClick" @hoveredSectionChange="handleHoveredSectionChange" />
        </div>
        <div class="col-md-8 mt-sm-3">
          <div class="card " v-if="activeSection === 'personal'">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">Edit Personal Information</p>
                <button @click="isEditing = !isEditing"
                  :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                  <i class="fas fa-edit mr-2" style="color:white"></i>
                  {{ isEditing ? 'Save' : 'Edit' }}
                </button>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">Personal Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Name</label>
                  <div ref="inputContainer">
                    <argon-input type="isEditing ? 'date' : 'text'" :value="isEditing ? '' : 'Amna Muzaffar'"
                      :readonly="!isEditing" ref="editInput" />
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Date of Birth</label>
                  <argon-input :type="isEditing ? 'date' : 'text'" :value="isEditing ? '' : '5-05-2002'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">CNIC</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : '3740530943812'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Current Status</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'Student'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Designation</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'non'" :readonly="!isEditing"
                    ref="editInput" />
                </div>
              </div>

            </div>
          </div>
          <div class="card p-4 mt-2" v-if="activeSection === 'contact'">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Contact Information</p>
              <button @click="isEditing = !isEditing"
                :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                <i class="fas fa-edit mr-2" style="color:white"></i>
                {{ isEditing ? 'Save' : 'Edit' }}
              </button>
            </div>
            <div class="card-body">
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Contact Information</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Permanent Address</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'Houseee'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label">Temporary Address</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'housee'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Landline No</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : '03105004090'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Cell No</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : '03105004090'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Email</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'amnamuzaffar2002@gmail.com'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
              </div>
            </div>
          </div>

          <div class="card p-4 mt-2" v-if="activeSection === 'education'">
            <div class="d-flex align-items-center">
              <p class="mb-0">Edit Education Information</p>
              <button @click="isEditing = !isEditing"
                :class="['btn', 'btn-sm', 'ms-auto', isEditing ? 'btn-success' : 'btn-primary']">
                <i class="fas fa-edit mr-2" style="color:white"></i>
                {{ isEditing ? 'Save' : 'Edit' }}
              </button>
            </div>
            <div class="card-body">
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Educational Information</p>
              <div class="row">
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Highest Qualificattion</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'FSC'" :readonly="!isEditing"
                    ref="editInput" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label">Accademic Record</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : '1st division'"
                    :readonly="!isEditing" ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">Present Organization/
                    University/Department:</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : 'QAU'" :readonly="!isEditing"
                    ref="editInput" />
                </div>
                <div class="col-md-8">
                  <label for="example-text-input" class="form-control-label">University/College Enrollment-Registration
                    Number</label>
                  <argon-input :type="isEditing ? 'text' : 'text'" :value="isEditing ? '' : '04072013003'"
                    :readonly="!isEditing" ref="editInput" />
                </div>

              </div>
            </div>
          </div>
          <div class="card p-4 mt-2" v-if="activeSection === 'document'">
            <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">Document Information</p>
            <div class="section mt-2">
              <div class="table-responsive  text-center">
                <table class="table-bordered">
                  <thead>
                    <tr>
                      <th style="width: 70%;">Document Name</th>
                      <th style="width: 30%;">Upload Document</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Attested Copy of Last Degree</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>


                    </tr>
                    <tr>
                      <td>Updated Brief CV (including list of publications during last three years)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Attested Copy of CNIC/Passport</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Referral Letter from parent Department/University/Organization</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>

                    </tr>
                    <tr>
                      <td>Passport Size Picture(Blue or White Background)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>

                    </tr>
                    <tr>
                      <td>Police Verification Proforma</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>

                    </tr>

                    <tr>
                      <td>Immunization Certificate (COVID-19)</td>
                      <td>
                        <button class="btn btn-xs btn-success m-2">Preview</button>
                        <button class="btn btn-xs btn-success m-2" >Change</button>
                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import CompleteProfile from "./components/CompleteProfile.vue";
import ArgonInput from "@/components/ArgonInput.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "MyprofileComp",
  data() {
    return {
      showMenu: false,
      activeSection: 'personal',
      hoveredSection: '',
      isEditing: false,
    };
  },

  components: { CompleteProfile, ArgonInput },
  watch: {
    isEditing(newIsEditing) {
      if (newIsEditing) {
        this.shouldBlink = true;
        this.$nextTick(() => {
          const inputElement = this.$refs.inputContainer.querySelector('input');
          if (inputElement) {
            inputElement.focus();
          }
        });
      } else {
        this.shouldBlink = false;
      }
    },
  },

  methods: {
    handleSectionClick(section) {
      this.activeSection = section;
    },
    handleHoveredSectionChange(section) {
      this.hoveredSection = section;
    }
  },

  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
    const storedSection = localStorage.getItem('activeSection');
    const storedHoveredSection = localStorage.getItem('hoveredSection');
    if (storedSection) {
      this.activeSection = storedSection;
    }
    if (storedHoveredSection) {
      this.hoveredSection = storedHoveredSection;
    }
    if (this.isEditing) {
      this.$refs.editInput.focus();
    }
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  }
};
</script>
