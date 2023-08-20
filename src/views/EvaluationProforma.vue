<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h2 class="card-header">EVALUATION PROFORMA</h2>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card mb-4">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-8 mb-sm-3 mx-auto evaluation-report mt-5">
                        <p><b><i>Internees & short term visiting scientists and researchers will submit the performance
                                    evaluation
                                    report at the end of their research work.</i></b></p>
                        <p><b><i>M.Phil / Ph.D Students/ Post Doctoral Research fellows/ long terms visiting scientists &
                                    researchers/
                                    Research Associates will submit performance evaluation report on six monthly
                                    basis.</i></b></p>
                    </div>
                </div>
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        To be completed by Applicant Hosted Researcher:
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
                                <label>2. Name of Supervisor/Group Head:</label>
                                <input type="text" class="form-control" v-model="formData.dateOfBirth">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="formData.nationality">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Date of Joining NCP:</label>
                                <input type="date" class="form-control" id="applicationDate" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. Present Duration at NCP: From:</label>
                                <input type="date" class="form-control" id="applicationDate" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>6. Present Duration at NCP: To:</label>
                                <input type="date" class="form-control" id="applicationDate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>7. Status of Research Progress (Tick the appropriate):</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="completedCheckbox">
                                            <label class="form-check-label" for="completedCheckbox">Completed</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="inProgressCheckbox">
                                            <label class="form-check-label" for="inProgressCheckbox">In Progress</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="research-summary">
                            <p><b><u>Summary of research work done till date at NCP:</u></b></p>
                            <p><b><i>Title of Research Work:</i></b></p>
                            <p><b><i>Summary of Research Work:</i></b></p>
                            <textarea class="form-control" rows="8"></textarea>
                        </div>
                        <div class="publications-summary mt-3">
                            <p><b>(a) Summary of Publications in which NCP name is included (attach list)*:</b></p>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                                Papers Published in
                                                Impact
                                                Factor Journals:</label></div>
                                        <div class="col-md-4 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                            No. of Papers Accepted in Impact
                                            Factor Journals:</label></div>
                                        <div class="col-md-3 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                            No. of Papers Submitted in Impact Factor Journals: </label></div>
                                        <div class="col-md-4 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                            No. of Paper(s) Presented in International Conference(s):</label></div>
                                        <div class="col-md-3 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                            No. of Patents submitted : National</label></div>
                                        <div class="col-md-4 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="d-flex">
                                        <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No. of
                                            No. of Patents submitted : International</label></div>
                                        <div class="col-md-3 col-sm-3 col-3">
                                            <input type="number" id="publishedPapers" class="form-control d-inline-block">
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="row">
    <div class="col-md-6 mb-3">
        <label>Applicant’s Signature:</label>
        <input type="text" class="form-control">
    </div>
    <div class="col-md-6 mb-3">
        <label>Date:</label>
        <input type="text" class="form-control">
    </div>
</div>

<div class="form-group">
    <label>Remarks by Director Concerned on Prog. of Work:</label>
    <textarea class="form-control"></textarea>
</div>

<div class="row">
    <div class="col-md-6 mb-3">
        <label>Signature of Director Concerned:</label>
        <input type="text" class="form-control">
    </div>
    <div class="col-md-6 mb-3">
        <label>Date:</label>
        <input type="text" class="form-control">
    </div>
</div>

<div class="row">
    <div class="col-md-6 mb-3">
        <label>GM CAAD:</label>
        <input type="text" class="form-control">
    </div>
    <div class="col-md-6 mb-3">
        <label>Manager CAAD (for record and needful):</label>
        <input type="text" class="form-control">
    </div>
</div>

<div class="row">
    <div class="col-md-6 mb-3">
        <label>JE CAAD (for record /processing for info if any to Hosted Researcher):</label>
        <input type="text" class="form-control">
    </div>
</div>

<div class="form-group">
    <label>* Attach list of publications carrying NCP name and titles/venues/durations of International Conferences attended:</label>
    <textarea class="form-control"></textarea>
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
    name: "EvaluationProforma",
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

.evaluation-report {
    text-align: center;
}

.evaluation-report p {
    font-size: 12px;
}

/* Style for the checkmark icon */
.evaluation-report::before {
    font-size: 18px;
    margin-right: 10px;
}
.research-summary p
{
    font-size: 14px;
}
</style>
  