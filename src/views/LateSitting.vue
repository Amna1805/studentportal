<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Late Sitting Proforma</h4>
        </div>
        <form @submit.prevent="submitForm">
            <div class="card mb-4 form-control-md fs-6">
                <fieldset>
                    <legend class="card-header">PART-I: Information Required From Hosted Researcher</legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <label for="name">Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="name" v-model="applicantInfo.name" />
                            </div>
                            <div class="col-md-4">
                                <label for="regisno">Registration Number:</label>
                                <input type="text" class="form-control" id="regisno" v-model="applicantInfo.regisno" />
                            </div>
                            <div class="col-md-4">
                                <label for="cnic">CNIC (without dashes):</label>
                                <input type="number" class="form-control" id="cnic" v-model="applicantInfo.cnic" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="workarea">Work Area During Late Sitting(Block/ Lab Number):</label>
                                <input type="text" class="form-control" id="workarea" v-model="applicantInfo.workarea" />
                            </div>
                            <div class="col-md-8 mb-2">
                                <label>Duration of Late Sitting</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitstart" class="me-2d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="latesitstart"
                                            v-model="applicantInfo.latesitstart" style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitend" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="latesitend"
                                            v-model="applicantInfo.latesitend" style="width: 35%;" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="contactlab">Lab Phone #:</label>
                                <input type="number" class="form-control" id="contactlab"
                                    v-model="applicantInfo.contactlab" />
                            </div>
                            <div class="col-md-4">
                                <label for="contactcell">Cell Phone #:</label>
                                <input type="number" class="form-control" id="contactcell"
                                    v-model="applicantInfo.contactcell" />
                            </div>
                            <div class="col-md-4">
                                <label for="latesitreason">Reason for Late Sitting:</label>
                                <textarea class="form-control" id="latesitreason" v-model="applicantInfo.latesitreason"
                                    rows="3" cols="50" maxlength="250"></textarea>
                                <!-- <p>Remaining characters: {{ remainingCharacters }}</p> -->
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mt-lg-n4 mt-md-n4">
                                <label for="caretaker">Name of Caretaker During Late Sitting:</label>
                                <input type="text" class="form-control" id="caretaker" v-model="applicantInfo.caretaker" />

                            </div>
                            <div class="col-md-6 mt-3">
                                <argon-checkbox checked id="recommendation" v-model="applicantInfo.recommendation">
                                    <label class="form-check-label text-dark font-weight-bolder" for="recommendation">
                                        Recommendation By Hosted Researcher's Supervisor
                                    </label>
                                </argon-checkbox>

                            </div>

                        </div>
                        <label class="h6">Residence Contact Incase of Emergency:</label>
                        <div class="row mb-4">

                            <div class="col-md-4">
                                <label for="emergencyname">Name:</label>
                                <input type="text" class="form-control" id="emergencyname"
                                    v-model="applicantInfo.emergencyname" />
                            </div>
                            <div class="col-md-4">
                                <label for="emergencycontactcell">Cell #:</label>
                                <input type="number" class="form-control" id="emergencycontactcell"
                                    v-model="applicantInfo.emergencycontactcell" />
                            </div>
                            <div class="col-md-4">
                                <label for="emergencycontactptcl">Landline #:</label>
                                <input type="number" class="form-control" id="emergencycontactptcl"
                                    v-model="applicantInfo.emergencycontactptcl" />
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-4">
                                <label for="todayDate">Date of Application:</label>
                                <input type="date" class="form-control" id="todayDate" v-model="applicantInfo.todayDate"
                                    readonly />
                            </div>
                           
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Applicant:</label>
                                <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Supervisor:</label>
                                <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                            <div class="col-md-4 mb-2 mt-2">
                                <label for="gm-finance">Signature of Director Concerned:</label>
                                <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                        </div>
                    </div>
                    <!-- when the form is submitted, get the date of the form at that time and then send it -->
                    <!-- just display appliction status instead of CAAD Fields -->

                </fieldset>

            </div>
            <div class="printOff card p-3 mb-3">
                <div class="d-flex justify-content-start align-items-center mt-4">
                    <label class="mb-2 mb-md-0">14. Please print the form and upload it:</label>
                    <button class="btn btn-success mb-2 mb-md-0 ms-3" @click="$printForm()">
                        <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                    </button>
                </div>
                <div class="mt-3 d-md-flex ">
                    <input type="file" @change="handleFileUpload" class="form-control-file">
                </div>
            </div>
            <div class="printOff">
                <div class="row">
                    <div class="form-actions d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-success me-2" @click="saveForm">Save</button>
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style>
.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}
</style>
<script>
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
export default {
    name: 'LateSitting',
    components: {
        ArgonCheckbox,
    },
    data() {
        return {

            applicantInfo: {
                name: '',
                regisno: '',
                latesitreason: '',
                //     maxlength:300,
                cnic: '',
                workarea: '',
                contactlab: '',
                contactcell: '',
                latesitstart: '',
                latesitend: '',
                emergencyname: '',
                emergencycontactcell: '',
                emergencycontactptcl: '',
                caretaker: '',
                recommmendation: '',
                todayDate: '',
            },
        };
    },
    methods: {
        submitForm() {
            const currentDate = new Date();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            this.applicantInfo.todayDate = `${year}-${month}-${day}`;
            // console.log(this.formData.todayDate);
        },
    },
    mounted() {
        // Initialize dateValue when the component is mounted
        this.submitForm();
    },


    //     computed: {
    //     remainingCharacters() {
    //       return this.maxlength - this.applicantInfo.latesitreason.length;
    //     },
    //   },
    // methods: {
    //     submitForm() {
    //         // Get the current date and time
    //         this.currentDate = new Date();

    //         // Prepare your form data
    //         const formData = {
    //             // Other form fields
    //             picture: this.picturePath, // Assuming you have a picturePath data property
    //             currentDate: this.currentDate, // Add the current date to the form data
    //         };

    //         // Send formData to the server using an HTTP request library like Axios or fetch
    //         // Example with Axios
    //         axios.post('/submit-form', formData)
    //             .then(response => {
    //                 // Handle response if needed
    //             })
    //             .catch(error => {
    //                 // Handle error if needed
    //             });
    //     },

    // }
};
</script>

 