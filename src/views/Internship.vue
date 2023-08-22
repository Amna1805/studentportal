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
                            <div class="col-md-6 mb-3">
                                <label>1. Proposed Research Area at NCP:</label>
                                <input type="text" class="form-control" v-model="formData.ncpIdNumber">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label>2. Proposed Department Area at NCP:</label>
                                <input type="text" class="form-control" v-model="formData.dateOfBirth">
                            </div>
                            <div class="col-md-12 mb-2">
                                <label>Duration of Internship</label>
                                <div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitstart" class="me-2d-inline"
                                            style="margin-right: 0.5rem;">From:</label>
                                        <input type="date" class="form-control d-inline" id="latesitstart"
                                            style="width: 35%;" />
                                    </div>
                                    <div class="d-inline align-items-center">
                                        <label for="latesitend" class="me-2 d-inline"
                                            style="margin-right: 0.5rem;">To:</label>
                                        <input type="date" class="form-control d-inline" id="latesitend"
                                            style="width: 35%;" />
                                    </div>
                                </div>
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



                    </div>

                </fieldset>
            </div>
            <div class="card mb-4 p-3">
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
            <div class="card mb-4 p-3">
                <div class="undertaking p-3">
                    <p>I, Mr./Ms./Dr. <input type="text" name="name" placeholder="Amna Muzaffar"
                            class="input-line text-center"> hereby undertake
                        that:</p>

                    <p>(a) Upon acceptance, I shall pay:</p>
                    <ol>
                        <li>i. Registration Fee (Rs. 750/- for Internees students, Rs. 1000/- M.Phil/Ph.D students,
                            Rs. 1500/- Research Associates & Post-Doctoral Fellows
                            and Rs. 2000/- for employees of University/R&D Organization and Others from HEC
                            recognized institutions/Government Departments).</li>
                        <li>ii. Security Fee (Rs. 5000/- for internees students, Rs. 10,000/- for M.Phil/MS & Ph.D
                            Student), security fee is refundable upon completion of
                            research work and subject to submission of Final Clearance Certificate & NCP Identity
                            Card/Entry Card).</li>
                        <li>iii. Bench Fee: If the student/parent university institute choose research supervisor
                            from NCP as a co-supervisor, then the bench fee will be
                            charged (Rs. 4000/- per semester for M.Phil students and Rs. 6000/- per semester for
                            Ph.D student).</li>
                        <li>iv. Fine: I understand that a fine of Rs. 1000/- per week will be charged to me out of
                            my deposited security if I fail to submit Clearance Certificate
                            to CAAD within one week after the due date of completion of my research work.</li>
                    </ol>

                    <p>(b) I have thoroughly read contents of the NCP Hosted Researchers Policy-Revised 2016. I
                        shall abide by rules/regulations mentioned in the NCP
                        Hosted Researchers Policy & procedures during stay at NCP. Upon completion of work, I shall
                        immediately submit Clearance Proforma and entry
                        Card to CAAD/NCP. In case of damage of NCP property, NCP can retain my security fee (under
                        intimation to my parent
                        department/university/organization) until I pay for the damage(s)/loss within a period of
                        one month.</p>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="extAgreePolicy">
                        <label class="form-check-label text-sm-2">I have read all the terms
                            above.</label>
                    </div>
                </div>
            </div>
            <div class="card mb-4 p-3">
                <p class="small-text"><b><u>
                            Checklist of Documents</u></b></p>
                <p><b>Note:</b> The Police Verification Proforma can be downloaded from the link  <a href="https://www.ncp.edu.pk/docs/caad/police-verification-form-2016.pdf" class="text-success"><u>Police Verification Proforma</u></a>.</p>

                <div class="table-responsive mt-3">
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th style="width: 40%;">Document Name</th>
                                <th style="width: 20%;">Upload Document</th>
                                <th style="width: 20%;">Checklist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Attested Copy of Last Degree</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>Updated Brief CV (including list of publications during last three years)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Attested Copy of CNIC/Passport</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Referral Letter from parent Department/University/Organization</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Passport Size Picture(Blue or White Background)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Police Verification Proforma</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Immunization Certificate (COVID-19)</td>
                                <td> <label class="attach-label" for="attach-input">Attach</label>
                                    <input type="file" class="attach-input" id="attach-input">
                                </td>
                                <td>
                                    <div class="form-check d-flex justify-content-center align-items-center">
                                        <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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


.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}

.table-bordered th,
.table-bordered td {
    padding: 15px 20px;
    /* Adjust as needed */

}

.radio-label {
    display: block;
    white-space: normal;
    margin-top: 5px;
}

.option p {
    font-size: 14px;
}

.undertaking p {
    font-size: 14px
}

.undertaking li {
    font-size: 14px
}

.undertaking {
    border: 1px solid #000;
}

.attach-input {
    display: none;
}

.attach-label {
    background-color: #2dce89;
    color: white;
    border-radius: 10%;
    padding: 10px 20px;
    cursor: pointer;
}

.attach-label:hover {
    background-color: #4faf54;
}

.table-bordered th,
.table-bordered td {
    padding: 8px;
    /* Adjust as needed */
    word-wrap: break-word;
    font-size: 14px;
    text-align: center;
}


</style>
  