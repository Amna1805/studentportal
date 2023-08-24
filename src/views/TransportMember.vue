<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Transport Membership Proforma</h4>
        </div>
        <form @submit.prevent="submitForm">
            <div class="card mb-4 form-control-md fs-6">
                <fieldset>
                    <legend class="card-header">Information Required From Hosted Researcher</legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="name">Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="name" v-model="applicantInfo.name" />
                            </div>
                            <div class="col-md-6">
                                <label for="regisno">Registration Number:</label>
                                <input type="text" class="form-control" id="regisno" v-model="applicantInfo.regisno" />
                            </div>
                            <div class="col-md-6">
                                <label for="idcard">ID Card No:</label>
                                <input type="number" class="form-control" id="idcard" v-model="applicantInfo.idcard" />
                            </div>
                            <div class="col-md-6">
                                <label for="hostdept">Host Department:</label>
                                <input type="text" class="form-control" id="hostdept" v-model="applicantInfo.hostdept" />
                            </div>
                            <div class="col-md-6">
                                <label for="expirydate">ToRs Date of Expiry Stay at NCP:</label>
                                <input type="date" class="form-control" id="expirydate"
                                    v-model="applicantInfo.expirydate" />
                            </div>
                            <div class="col-md-6">
                                <label for="pickup">Pick/Drop Point:</label>
                                <input type="text" class="form-control" id="pickup" v-model="applicantInfo.pickup" />
                            </div>
                            <div class="col-md-6">
                                <label>Duration of Transport Requirement</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="transportstart" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="transportstart"
                                            v-model="applicantInfo.transportstart" style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="transportend" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="transportend"
                                            v-model="applicantInfo.transportend" style="width: 35%;" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="contactcell">Phone #:</label>
                                <input type="number" class="form-control" id="contactcell"
                                    v-model="applicantInfo.contactcell" />

                            </div>
                            <div class="col-md-6">
                                <label for="contactlab">Lab Phone #:</label>
                                <input type="number" class="form-control" id="contactlab"
                                    v-model="applicantInfo.contactlab" />
                            </div>
                            <div class="col-md-4">
                                <label for="todayDate">Date of Application:</label>
                                <input type="date" class="form-control" id="todayDate" v-model="applicantInfo.todayDate"
                                    readonly />
                            </div>
                            <div class="col-md-4 mb-2 mt-4">
                                <label for="gm-finance">Signature of Applicant:</label>
                                <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                            <div class="col-md-4 mb-2 mt-4">
                                <label for="gm-finance">Signature of Director Concerned:</label>
                                <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                            </div>
                        </div>
                        <!-- just display appliction status instead of CAAD Fields -->
                    </div>
                </fieldset>

            </div>
            <div class="form-actions d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'TransportMember',

    data() {
        return {

            applicantInfo: {
                name: '',
                regisno: '',
                idcard: '',
                hostdept: '',
                expirydate: '',
                pickup: '',
                transportstart: '',
                transportend: '',
                contactcell: '',
                contactlab: '',
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
};
</script>

 