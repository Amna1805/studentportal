<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Extension Request Profoma</h4>
        </div>
        <form>
            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        PART-I (to be completed by Applicant Hosted Researcher):
                        <div
                            class="passport-picture-area bg-light rounded-circle d-flex align-items-center justify-content-center">
                            <i class="fas fa-user fa-3x text-primary"></i>
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="researcherName">1. Name of Hosted Researcher:</label>
                                <input disabled type="text" class="form-control" id="researcherName" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="researcherPhone">2. Phone/Cell:</label>
                                <input type="text" class="form-control" id="researcherPhone"
                                disabled />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="researcherEmail">3. E-mail:</label>
                                <input type="email" class="form-control" id="researcherEmail"
                                   disabled />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="registrationNo">4. NCP Registration No.:</label>
                                <input type="text" class="form-control" id="registrationNo"
                                disabled />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="entryCardNo">5. NCP Entry Card No.</label>
                                <input type="text" class="form-control" id="entryCardNo"
                                disabled />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="department">6. Relevant Department at NCP:</label>
                                <input type="text" class="form-control" id="department"
                                disabled />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="group">7. Group:</label>
                                <input type="text" class="form-control" id="group" v-model="researcherInfo.group" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="contactPerson">8. Supervisor/Contact Person:</label>
                                <input type="text" class="form-control" id="contactPerson"
                                disabled />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="presentOrg">9. Present Organization/University/Department:</label>
                            <input type="text" class="form-control" id="presentOrg" disabled />
                        </div>

                        <div class="form-group">
                            <label>10. Present Duration at NCP as per ToR:</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="stayFrom">From:</label>
                                    <input disabled type="date" class="form-control" id="presentDurationFrom"
                                       >
                                </div>
                                <div class="col-md-6">
                                    <label for="stayTo">To:</label>
                                    <input type="date" class="form-control" id="presentDurationTo"
                                    disabled>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="extensionReason">11. Reason for Extension:</label>
                            <textarea class="form-control" id="extensionReason"
                                v-model="researcherInfo.extensionReason"></textarea>
                        </div>

                        <div class="form-group">
                            <label>12. Requested Period of Extension (as per policy): </label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="extStayFrom">From:</label>
                                    <input type="date" class="form-control" id="extensionPeriodFrom"
                                        v-model="researcherInfo.extensionPeriodFrom">
                                </div>
                                <div class="col-md-6">
                                    <label for="extStayTo">To:</label>
                                    <input type="date" class="form-control" id="extensionPeriodTo"
                                        v-model="researcherInfo.extensionPeriodTo">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="accommodationRequirement">13. Accommodation Requirement (if already
                                availing):</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="Yes"
                                    v-model="researcherInfo.accommodationRequirement" />
                                <label class="form-check-label">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="No"
                                    v-model="researcherInfo.accommodationRequirement" />
                                <label class="form-check-label">No</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="transportRequirement">14. Transport Requirement (if already availing):</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="Yes"
                                    v-model="researcherInfo.transportRequirement" />
                                <label class="form-check-label">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="No"
                                    v-model="researcherInfo.transportRequirement" />
                                <label class="form-check-label">No</label>
                            </div>
                        </div>

                        <div class="rectangle-box p-3 mt-4">
                            <p class="text-sm mb-2">
                                <strong>I, hereby undertake that</strong>
                            </p>
                            <ol class="text-sm mb-4" type="a">
                                <li> My Parent institute is agreed for extension in my stay at NCP
                                    for the assigned research work,</li>
                                <li>During the extended period, I shall abide by NCP
                                    disciplinary/safety/security rules;</li>
                                <li> In case of loss/damage of NCP property, I shall be
                                    responsible to pay for the damage(s)/loss and</li>
                                <li>Upon completion of research work/ studies
                                    at NCP, I shall submit prescribed Clearance Proforma to Collaboration & Academic
                                    Activities
                                    Department (CAAD)/NCP for issuance of Certificate of Work Experience at NCP.</li>
                            </ol>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="extAgreePolicy"
                                    v-model="researcherInfo.extAgreePolicy">
                                <label class="form-check-label text-sm-2" for="agreePolicy">I have read all the terms
                                    above.</label>
                            </div>
                        </div>

                        <br>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="applicantSignature">15. Signature of Applicant / Date:</label>
                                <input type="text" id="applicantSignature" name="applicantSignature" class="input-line">
                            </div>
                            <div class="col-md-6">
                                <input type="date" placeholder="Date" class="form-control" id="applyDate"
                                   readonly v-model="researcherInfo.applyDate">
                            </div>
                        </div>

                        <br>
                        <div class="form-group">
                            <label for="recommendationExtension">16. Recommendation for Extension in Tenure:</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="yes"
                                    v-model="officialInfo.recommendationExtension" />
                                <label class="form-check-label">Yes</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="no"
                                    v-model="officialInfo.recommendationExtension" />
                                <label class="form-check-label">No</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>17. Signature/Date/Stamp</label>
                            <div class="row align-items-center">
                                <div class="col-md-6 mb-3 text-center">
                                    <input disabled type="text" id="ncpSup" name="ncpSup" class="input-line">
                                    <br>
                                    <label class="input-label text-center">NCP Supervisor/Contact Person</label>
                                </div>
                                <div class="col-md-6 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="dir" name="dir" class="input-line">
                                        <br>
                                        <label class="input-label text-center">Concerned Director</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="printOff rectangle-box p-3 mt-4">
                            <div class="d-flex justify-content-between align-items-center mt-4">
                                <label>18. Please print the form and upload it:</label>
                                <button class="btn btn-success" @click="$printForm()">
                                    <i class="fas fa-print"></i> <!-- Font Awesome icon for printing -->
                                </button>
                                <input type="file" @change="handleFileUpload" class="form-control-file">
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div class="card mt-4 d-none">
                <fieldset>
                    <legend class="card-header">PART-II (for Official Use): Action by Hosted Researchers Branch - CAAD
                    </legend>
                    <div class="card-body">

                        <div class="form-group">
                            <label>1. Signature</label>
                            <div class="row align-items-center">
                                <div class="col-md-4 mb-3 text-center">
                                    <input disabled type="text" id="ncpSup" name="ncpSup" class="input-line">
                                    <br>
                                    <label for="jeAIA">i. JE (A&IA)</label>
                                    <br>
                                    <p class="small">(to vet above registration contents of HR)</p>
                                </div>
                                <div class="col-md-4 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="dir" name="dir" class="input-line">
                                        <br>
                                        <label for="managerAIA">ii. Manager A&IA</label>
                                        <br>
                                        <p class="small">(to vet above registration contents of HR)</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="dir" name="dir" class="input-line">
                                        <br>
                                        <label for="managerAIA">iii. GM CAAD</label>
                                        <br>
                                        <p class="small">(to forward the application to DG Secretariat)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <label for="applicantSignature">2. Approval by Concerned DG NCP / Date:</label>
                                <input type="text" id="dgSignature" name="dgSignature" class="input-line">
                            </div>
                            <div class="col-md-6">
                                <input type="date" placeholder="Date" class="form-control" id="approvalDate"
                                    v-model="officialInfo.approvalDate">
                            </div>
                        </div>

                        <div class="form-group">
                            <label>3. Signature of Concerned Authorities</label>
                            <div class="row align-items-center">
                                <div class="col-md-3 mb-3 text-center">
                                    <input disabled type="text" id="jecaad" name="jecaad" class="input-line">
                                    <br>
                                    <label class="input-label text-center">GM Administration</label>
                                </div>
                                <div class="col-md-3 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="recommendationDirector1"
                                            name="recommendationDirector1" class="input-line">
                                        <br>
                                        <label class="input-label text-center">GM CAAD</label>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="recommendationDirector2"
                                            name="recommendationDirector2" class="input-line">
                                        <br>
                                        <label class="input-label text-center">AM/Manager CAAD</label>
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3 text-center">
                                    <div>
                                        <input disabled type="text" id="recommendationDirector2"
                                            name="recommendationDirector2" class="input-line">
                                        <br>
                                        <label class="input-label text-center">JE CAAD (Hosted Researchers Wing)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>(for further processing & necessary action)</label>
                        </div>

                        <div class="rectangle-box mt-3 p-3 border border-dark rounded">

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>a.</span>
                                        <span class="font-weight-bold">AM/Manager Finance:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">for payment of honorarium/reimbursements if any etc.</p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>b.</span>
                                        <span class="font-weight-bold">AM/Manager HR:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">to amend/issue NCP-Hosted Researchers Entry Card through CAAD.</p>
                                </div>
                            </div>


                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>c.</span>
                                        <span class="font-weight-bold">AM/Manager IT:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">to provide the internet and other related IT matter.</p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>f.</span>
                                        <span class="font-weight-bold">AM/Manager Estate:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">to facilitate accommodation, if applicable.</p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>e.</span>
                                        <span class="font-weight-bold">AM/Manager Transport:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">to facilitate enroute transport, if applicable.</p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>f.</span>
                                        <span class="font-weight-bold">AM/Manager Stores:</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">to issue quantity of items as per policy.</p>
                                </div>
                            </div>

                            <div class="row mb-2">
                                <div class="col-4">
                                    <p class="mb-0">
                                        <span>g.</span>
                                        <span class="font-weight-bold">Security Branch</span>
                                    </p>
                                </div>
                                <div class="col-1">-</div>
                                <div class="col-7">
                                    <p class="mb-0">for information.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
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
  
<script>
export default {
    name: "ExtensionProforma",
    data() {
        return {
            researcherInfo: {
                group: "",
                extensionReason: "",
                extensionPeriodFrom: null,
                extensionPeriodTo: null,
                accommodationRequirement: null,
                transportRequirement: null,
                undertaking: "",
                extAgreePolicy: "",
                applyDate: ""
            },
            officialInfo: {
                // ... Previous officialInfo properties ...
                recommendationExtension: '', // Yes or No
                approvalDate: ''
            },
        };
    },

    computed: {
        cookieName() {
            return 'form-data-' + this.$route.path; // Unique name based on the route
        },
    },

    created() {
        this.loadSavedFormData(); // Load saved data when the component is created
    },

    methods: {
        loadSavedFormData() {
            const formDataCookie = this.getCookie(this.cookieName);
            if (formDataCookie) {
                const formData = JSON.parse(formDataCookie);
                Object.assign(this.researcherInfo, formData);
            }
        },
        saveForm() {
            const formData = {
                group: this.researcherInfo.group,
                extensionReason: this.researcherInfo.extensionReason,
                extensionPeriodFrom: this.researcherInfo.extensionPeriodFrom,
                extensionPeriodTo: this.researcherInfo.extensionPeriodTo,
                accommodationRequirement: this.researcherInfo.accommodationRequirement,
                transportRequirement: this.researcherInfo.transportRequirement,
                undertaking: this.researcherInfo.undertaking,
                extAgreePolicy: this.researcherInfo.extAgreePolicy,
                applyDate: this.researcherInfo.applyDate
            };
            this.setCookie(this.cookieName, JSON.stringify(formData), 365);
            alert('Form data saved.');
        },
        setCookie(name, value, days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        },
        getCookie(name) {
            const value = "; " + document.cookie;
            const parts = value.split("; " + name + "=");
            if (parts.length === 2) {
                return parts.pop().split(";").shift();
            }
            return null;
        },
        submitForm() {
            const currentDate = new Date();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            this.researcherInfo.applyDate = `${year}-${month}-${day}`;
            // console.log(this.formData.todayDate);
        },
    },
    mounted() {
        // Initialize dateValue when the component is mounted
        this.submitForm();
    },
};
</script>
  
<style scoped>
.rectangle-box {
    border: 1px solid #000;
}
</style>
  