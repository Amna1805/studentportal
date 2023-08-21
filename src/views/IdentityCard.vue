<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Identity Card Proforma</h4>
        </div>
        <div class="card card-profile justify-content-center mb-4 mx-lg-12 pb-lg-4">
                <h4 class="m-2 p-3 justify-content-center text-center">Identity Card Picture</h4>
                <div class="justify-content-center text-center">
                    <div class="order-lg-2">
                        <div class="mt-1 mt-lg-1 mb-4 mb-lg-0">
                            <img :src="picturePath" alt="User Picture" class="img-thumbnail passport-size">

                        </div>
                    </div>
                </div>
            </div>
        <form @submit.prevent="submitForm">
            <div class="card ">
                <fieldset>
                    <legend class="card-header">PART-I: Information Required From Hosted Researcher</legend>
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-6">
                                <label for="name" class="form-control-label">Name of Hosted Researcher:</label>
                                <ArgonInput type="text" class="col-md-7 col-sm-12" id="name" v-model="applicantInfo.name" />
                            </div>
                            <div class="col-md-6">
                                <label for="regisno" class="form-control-label">Registration Number:</label>
                                <ArgonInput type="text" class="col-md-7 col-sm-12" id="regisno"
                                    v-model="applicantInfo.regisno" />
                            </div>
                            <div class="col-md-6">
                                <label for="cnic" class="form-control-label">CNIC (without dashes):</label>
                                <ArgonInput type="number" class="col-md-7 col-sm-12" id="cnic"
                                    v-model="applicantInfo.cnic" />
                            </div>

                            <div class="col-md-6">
                                <label for="designation" class="form-control-label">Designaton (Student/Employee):</label>
                                <ArgonInput type="text" id="designation" v-model="applicantInfo.designation"
                                    class="col-md-7 col-sm-12" />
                            </div>
                            <div class="col-md-6">
                                <label for="identitymark" class="form-control-label">Identification Mark:</label>
                                <ArgonInput type="text" id="identitymark" v-model="applicantInfo.identitymark"
                                    class="col-md-7 col-sm-12" />
                            </div>
                            <div class="col-md-6">
                                <label for="bloodgroup" class="form-control-label">Blood Group:</label>
                                <ArgonInput type="text" id="bloodgroup" v-model="applicantInfo.bloodgroup"
                                    class="col-md-7 col-sm-12" />
                            </div>
                            <div class="col-md-6">
                                <label for="receiptno" class="form-control-label">Registration Fee Receipt # (Bank
                                    Receipt):</label>
                                <ArgonInput type="number" id="receiptno" v-model="applicantInfo.receiptno"
                                    class="col-md-7 col-sm-12" />
                            </div>
                            <div class="col-md-6">
                                <label for="receiptdate" class="form-control-label">Registration Fee Dated:</label>
                                <ArgonInput type="date" id="receiptdate" v-model="applicantInfo.receiptdate"
                                    class="col-md-7 col-sm-12" />
                            </div>
                            <!-- when the form is submitted, get the date of the form at that time and then send it -->
                            <!-- just display appliction status instead of CAAD Fields -->
                        </div>
                    </div>
                </fieldset>
            </div>
           
            <div class="form-actions d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
       
    </div>
</template>
<style scoped>
.passport-size {
    max-width: 300px;
    max-height: 300px;
}
</style>
<script>
import ArgonInput from "@/components/ArgonInput.vue";
export default {
    name: 'IdentityCard',
    components: {
        ArgonInput,
    },

    data() {
        return {
            picturePath: require('@/assets/img/amna.jpg'),
            applicantInfo: {
                name: '',
                designation: '',
                cnic: '',
                identitymark: '',
                bloodgroup: '',
                receiptno: '',
                receiptdate: '',
                regisno: '',
                currentDate: null,
            },

        };

    },
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

 