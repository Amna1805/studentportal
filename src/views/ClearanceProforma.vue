<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h2 class="card-header">CLEARANCE PROFORMA</h2>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card mb-4">
                <fieldset>
                    <legend
                        class="card-header d-flex justify-content-between align-items-center font-weight-bold text-decoration-underline">
                        <p class="small-text"><b><u>
                                    1. Certification by Applicant Hosted Researcher (please tick the appropriate
                                    option):</u></b></p>
                        <div class="avatar avatar-xl position-relative">
                            <img src="../assets/img/amna.jpg" alt="profile_image"
                                class="shadow-sm w-100 border-radius-lg" />
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>1. Name:</label>
                                <input type="text" class="form-control" v-model="formData.ncpIdNumber">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>2. Department:</label>
                                <input type="text" class="form-control" v-model="formData.dateOfBirth">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="formData.nationality">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Reg No:</label>
                                <input type="text" class="form-control" v-model="formData.cnicNumber">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. NCP Entry Card No:</label>
                                <input type="text" class="form-control" v-model="formData.passportNumber">
                            </div>
                        </div>

                        <div class="option">
                            <input type="radio" name="leave-option" id="option-1" value="option1">
                            <label for="option-1">Option-1:</label>
                            <p>It is stated that I have to leave NCP on a temporary basis to join back my parent department
                                due to unavoidable circumstances on <input type="text" name="date1" class="input-line">. I,
                                therefore, discontinue my On-Campus Research Work at NCP Department <input type="text"
                                    name="department1" class="input-line"> under supervision of <input type="text"
                                    name="supervisor1" class="input-line"> w.e.f. <input type="text" name="start-date1"
                                    class="input-line">. I shall rejoin NCP w.e.f. <input type="text" name="rejoin-date1"
                                    class="input-line">. I have settled dues and/or pending matters with all concerned
                                departments at NCP Campus and there is no claim of any description against me.</p>
                        </div>
                        <div class="option">
                            <input type="radio" name="leave-option" id="option-2" value="option2">
                            <label for="option-2">Option-2:</label>
                            <p>It is stated that I, <input type="text" name="name2" class="input-line">, have finally
                                completed my research work/internship at NCP Campus/Department <input type="text"
                                    name="department2" class="input-line"> under supervision of <input type="text"
                                    name="supervisor2" class="input-line"> and will proceed to join my parent Institute
                                namely: <input type="text" name="parent-institute" class="input-line">, w.e.f. <input
                                    type="text" name="join-date2" class="input-line">. I have settled dues and/or pending
                                matters with all concerned departments at NCP Campus and there is no claim of any
                                description against me.</p>
                        </div>
                        <div class="section mt-5">
                            <p class="small-text"><b><u>Certification by Supervisor & Director/Head of Concerned
                                        Department:</u></b>Certified that there is nothing outstanding against the
                                above-mentioned Hosted Researcher in the department.It is, therefore, he/she may be issued
                                Clearance Certificate and Work Experience Certificate after due vetting by Finance Branch,
                                Admin Branches and CAAD.</p>
                            <div>
                                <label for="supervisor-cert">Recommended by Concerned Research Supervisor/Group
                                    Head:</label>
                                <input type="text" id="supervisor-cert" name="supervisor-cert" class="input-line">
                            </div>
                            <div>
                                <label for="director-cert">Endorsed by Concerned Director/HOD (NCP Complex):</label>
                                <input type="text" id="director-cert" name="director-cert" class="input-line">
                            </div>
                        </div>

                        <!-- Section 3: Certification by Concerned Departments at NCP -->
                        <div class="section mt-5">
                            <p class="small-text"><b><u>Certification by Concerned Departments at NCP:</u></b>It is
                                certified that there are no pending claims/dues of any
                                description against above mentioned applicant except those mentioned in the following Table:
                            </p>
                            <div class="table-responsive">   <table class="table-bordered">
                                <thead>
                                    <tr>
                                        <th style="width: 15%;">Department/Section</th>
                                        <th style="width: 15%;">Remarks</th>
                                        <th style="width: 35%;">Name & Designation of Authorized Officer</th>
                                        <th style="width: 35%;">Signature of Authorized Officer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>I.T Branch</td>
                                        <td>
                                            <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                            <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                                Cleared</label>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Mechanical Workshop</td>
                                        <td>
                                            <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                            <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                                Cleared</label>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Finance Branch</td>
                                        <td>
                                            <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                            <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                                Cleared</label>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>
                                    <tr>
                                        <td>Security Branch
                                            (Deposit of Vehicle Entry Pass)</td>
                                        <td>
                                            <label><input type="radio" name="remarks-it" value="cleared"> Cleared</label>
                                            <label><input type="radio" name="remarks-it" value="not-cleared"> Not
                                                Cleared</label>
                                        </td>
                                        <td><input type="text" class="form-control"></td>
                                        <td><input type="text" class="form-control"></td>
                                    </tr>

                                </tbody>
                            </table></div>
                         
                        </div>
                        <div class="section mt-5">
                            <p class="small-text"><b><u>Endorsements:</u></b></p>
                            <div class="row">
                                <!-- For large screens -->
                                <div class="col-lg-6">
                                    <label for="gm-finance">GM Finance:</label>
                                    <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                                </div>
                                <div class="col-lg-6">
                                    <label for="director-admin">Director Admin:</label>
                                    <input type="text" id="director-admin" name="director-admin" class="input-line">
                                </div>
                                <div class="col-lg-6">
                                    <label for="director-caad">Director CAAD:</label>
                                    <input type="text" id="director-caad" name="director-caad" class="input-line">
                                </div>
                                <div class="col-lg-6">
                                    <label for="manager-caad">AM / Manager/GM CAAD:</label>
                                    <input type="text" id="manager-caad" name="manager-caad" class="input-line">
                                </div>
                                <!-- For small screens -->
                                <div class="col-12">
                                    <label for="je-caad">JE CAAD (for record & necessary action w.r.t. issuance of Research
                                        Certificate for cleared cases):</label>
                                    <input type="text" id="je-caad" name="je-caad" class="input-line">
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
    name: "ClearanceProforma",
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
}
</style>
  