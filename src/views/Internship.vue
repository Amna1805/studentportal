<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Internship Proforma</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card mb-4">
                <fieldset>
                    <legend
                        class="card-header d-flex justify-content-between align-items-center font-weight-bold text-decoration-underline">
                        <p class="small-text"><b><u>
                                    Hosted Researchers Category applied for (please check NCP website for details & tick the
                                    appropriate):</u></b></p>
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/amna.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>
                    <div class="form-group row m-3">
                        <label class="col-md-3 col-form-label">Select your category:</label>
                        <div class="col-md-9">
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="adjunctFaculty">
                                <label class="form-check-label" for="adjunctFaculty">Adjunct Faculty</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="visitingScientist">
                                <label class="form-check-label" for="visitingScientist">Visiting Scientist/Research
                                    Scholar</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="ncpAssociates">
                                <label class="form-check-label" for="ncpAssociates">NCP Associates</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="postDocFellows">
                                <label class="form-check-label" for="postDocFellows">Post-Doc Fellows</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="phdStudent">
                                <label class="form-check-label" for="phdStudent">Ph.D Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="msStudent">
                                <label class="form-check-label" for="msStudent">M.Phil / MS Student</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input" id="internee">
                                <label class="form-check-label" for="internee">Internee</label>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>1. Proposed Research Area at NCP:</label>
                                <input type="text" class="form-control" v-model="formData.ncpIdNumber">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>2. Proposed Department Area at NCP:</label>
                                <input type="text" class="form-control" v-model="formData.dateOfBirth">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Proposed duration of research work at NCP::</label>
                                <input type="date" class="form-control" v-model="formData.nationality">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Accommodation Required</label>
                                <div class="row">
                                    <div class="col-md-1 ">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="completedCheckbox">
                                            <label class="form-check-label" for="completedCheckbox">Yes</label>
                                        </div>
                                    </div>

                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                            <label class="form-check-label" for="inProgressCheckbox">No</label>
                                        </div>
                                    </div>

                                    <div class="col-md-9">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                            <label class="form-check-label" for="inProgressCheckbox">If YES please mention
                                                duration</label>
                                            <input type="text" id="je-caad" name="je-caad" class="input-line">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p class="small-text"><b><u>
                                    Whom you consulted at NCP before submission of registration form::</u></b></p>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>Name:</label>
                                <input type="text" class="form-control" v-model="formData.ncpIdNumber">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>Department:</label>
                                <input type="text" class="form-control" v-model="formData.dateOfBirth">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>Date:</label>
                                <input type="date" class="form-control" v-model="formData.nationality">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>Supervisor from NCP: </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="completedCheckbox">
                                                    <label class="form-check-label" for="completedCheckbox">Yes</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                                    <label class="form-check-label" for="inProgressCheckbox">No</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>Co-Supervisor from NCP: </label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="completedCheckbox">
                                                    <label class="form-check-label" for="completedCheckbox">Yes</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                                    <label class="form-check-label" for="inProgressCheckbox">No</label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            <!-- Submit Button -->
            <div class="form-actions d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    name: "InternshipProforrma",
    data() {
        return {
            formData: {
                ncpIdNumber: '',
                dateOfBirth: '',
                nationality: '',
                cnicNumber: '',
                passportNumber: '',
                nameTitle: 'Mr.', // Default value
                firstName: '',
                lastName: '',
                designation: '',
                building: '',
                floor: '',
                roomNumber: '',
                telephoneOffice: '',
                mobileNumber: '',
                // Add more form data fields here
                applicantSignature: '',
                departmentHead: '',
                // Add more form data fields here
                // Section 13: CoE Name
                coeName: '',

                // Section 14: Department/Branch
                departmentBranch: '',

                // Section 15: Email Address
                emailAddress: '',

                // Section 16: Services required
                services: {
                    windowsAccount: false,
                    emailAccount: false,
                    printQuota: false,
                    ldapAccount: false,
                },

                // Section 17: Specify time duration of stay
                stayFrom: '',
                stayTo: '',

                // Section 18: Laptop/Desktop MAC Address
                macAddress: '',

                // Section 19: Purpose of the IT account
                itAccountPurpose: '',

                agreePolicy: false,

                deptHeadName: '',
                deptHeadDate: '',
                deptHeadSignature: '',

                // for IT dept
                itUserId: '',
                itDomain: '',
                itCheckList: {
                    emailAccount: false,
                    ldapAccount: false,
                    vpnAccount: false,
                    windowsAccount: false,
                    printQuota: false,
                    recordUpdate: false,
                    allUsersMailingList: false,
                    departmentalMailingList: false,
                },
                gmIt: '',
                itPersonnelName: '',
                itSignature: '',

            },
            itCheckListLabels: {
                emailAccount: 'Email Account',
                ldapAccount: 'Linux (LDAP) Account',
                vpnAccount: 'VPN Account',
                windowsAccount: 'Windows Login Account',
                printQuota: 'Print Quota',
                recordUpdate: 'Record Update',
                allUsersMailingList: 'All Users Mailing List',
                departmentalMailingList: 'Departmental Mailing List',
            },
        };
    }
};
</script>
  
<style scoped>
.rectangle-box {
    border: 1px solid #000;
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
}

.table-bordered th,
.table-bordered td {
    padding: 8px;
    /* Adjust as needed */
    word-wrap: break-word;
}

.radio-label {
    display: block;
    white-space: normal;
    margin-top: 5px;
}

.option p {
    font-size: 14px;
}</style>
  