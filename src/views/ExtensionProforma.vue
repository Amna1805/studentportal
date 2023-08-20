<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h2 class="card-header">EXTENSION REQUEST PROFORMA</h2>
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
                        <div class="form-group">
                            <label for="researcherName">Name of Hosted Researcher:</label>
                            <input type="text" class="form-control" id="researcherName" v-model="researcherInfo.name" />
                        </div>
                        <div class="form-group">
                            <label for="researcherPhone">Phone: Cell:</label>
                            <input type="text" class="form-control" id="researcherPhone" v-model="researcherInfo.phone" />
                        </div>
                        <div class="form-group">
                            <label for="researcherEmail">E-mail:</label>
                            <input type="email" class="form-control" id="researcherEmail" v-model="researcherInfo.email" />
                        </div>
                        <div class="form-group">
                            <label for="registrationNo">NCP Registration No.:</label>
                            <input type="text" class="form-control" id="registrationNo"
                                v-model="researcherInfo.registrationNo" />
                            <label for="entryCardNo">NCP Entry Card No.</label>
                            <input type="text" class="form-control" id="entryCardNo" v-model="researcherInfo.entryCardNo" />
                        </div>
                        <div class="form-group">
                            <label for="department">Relevant Department at NCP:</label>
                            <input type="text" class="form-control" id="department" v-model="researcherInfo.department" />
                            <label for="group">Group:</label>
                            <input type="text" class="form-control" id="group" v-model="researcherInfo.group" />
                            <label for="contactPerson">Supervisor/Contact Person:</label>
                            <input type="text" class="form-control" id="contactPerson"
                                v-model="researcherInfo.contactPerson" />
                        </div>
                        <div class="form-group">
                            <label for="presentOrg">Present Organization/University/Department:</label>
                            <input type="text" class="form-control" id="presentOrg" v-model="researcherInfo.presentOrg" />
                        </div>
                        <div class="form-group">
                            <label for="presentDuration">Present Duration at NCP as per ToR:</label>
                            <div class="input-group">
                                <input type="date" class="form-control" id="presentDurationFrom"
                                    v-model="researcherInfo.presentDurationFrom" />
                                <div class="input-group-append">
                                    <label class="input-group-text">to</label>
                                </div>
                                <input type="date" class="form-control" id="presentDurationTo"
                                    v-model="researcherInfo.presentDurationTo" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="extensionReason">Reason for Extension:</label>
                            <textarea class="form-control" id="extensionReason"
                                v-model="researcherInfo.extensionReason"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="extensionPeriodFrom">Requested Period of Extension (as per policy): from</label>
                            <input type="date" class="form-control" id="extensionPeriodFrom"
                                v-model="researcherInfo.extensionPeriodFrom" />
                            <label for="extensionPeriodTo">to</label>
                            <input type="date" class="form-control" id="extensionPeriodTo"
                                v-model="researcherInfo.extensionPeriodTo" />
                        </div>
                        <div class="form-group">
                            <label for="accommodationRequirement">Accommodation Requirement (if already availing):</label>
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
                            <label for="transportRequirement">Transport Requirement (if already availing):</label>
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
                        <div class="form-group">
                            <p>
                                I, hereby undertake that (a) My Parent institute is agreed for extension in my stay at NCP
                                for the assigned research work, (b) During the extended period, I shall abide by NCP
                                disciplinary/safety/security rules; (c) In case of loss/damage of NCP property, I shall be
                                responsible to pay for the damage(s)/loss and (d) Upon completion of research work/ studies
                                at NCP, I shall submit prescribed Clearance Proforma to Collaboration & Academic Activities
                                Department (CAAD)/NCP for issuance of Certificate of Work Experience at NCP.
                            </p>
                        </div>
                        <div class="form-group">
                            <label for="applicantSignature">Signature of Applicant / Date:</label>
                            <input type="text" class="form-control" id="applicantSignature"
                                v-model="researcherInfo.applicantSignature" />
                        </div>
                        <div class="form-group">
                            <label for="recommendationExtension">Recommendation for Extension in Tenure:</label>
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
                            <label for="ncpSupervisor">NCP Supervisor/Contact Person:</label>
                            <input type="text" class="form-control" id="ncpSupervisor"
                                v-model="officialInfo.ncpSupervisor" />
                        </div>
                        <div class="form-group">
                            <label for="concernedDirector">Concerned Director:</label>
                            <input type="text" class="form-control" id="concernedDirector"
                                v-model="officialInfo.concernedDirector" />
                        </div>
                    </div>
                </fieldset>
            </div>

            <div class="card mt-4">
                <fieldset>
                    <legend class="card-header">PART-II (for Official Use): Action by Hosted Researchers Branch - CAAD
                    </legend>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="jeAIA">JE (A&IA):</label>
                            <input disabled type="text" class="form-control" id="jeAIA" v-model="officialInfo.jeAIA" />
                        </div>
                        <div class="form-group">
                            <label for="managerAIA">Manager A&IA:</label>
                            <input disabled type="text" class="form-control" id="managerAIA"
                                v-model="officialInfo.managerAIA" />
                        </div>
                        <div class="form-group">
                            <label>(to vet above registration contents of Hosted Researcher)</label>
                        </div>
                        <div class="form-group">
                            <label for="gmCAAD">GM CAAD (to forward the application to DG Secretariat):</label>
                            <input disabled type="text" class="form-control" id="gmCAAD" v-model="officialInfo.gmCAAD" />
                        </div>
                        <div class="form-group">
                            <label for="approvalDG">Approval by Concerned DG NCP:</label>
                            <input disabled type="text" class="form-control" id="approvalDG"
                                v-model="officialInfo.approvalDG" />
                        </div>
                        <div class="form-group">
                            <label for="approvalDate">Date:</label>
                            <input disabled type="date" class="form-control" id="approvalDate"
                                v-model="officialInfo.approvalDate" />
                        </div>
                        <div class="form-group">
                            <label>(Signatures/Stamp)</label>
                        </div>
                        <div class="form-group">
                            <label for="gmAdministration">GM Administration:</label>
                            <input disabled type="text" class="form-control" id="gmAdministration"
                                v-model="officialInfo.gmAdministration" />
                        </div>
                        <div class="form-group">
                            <label for="gmCAAD2">GM CAAD:</label>
                            <input disabled type="text" class="form-control" id="gmCAAD2" v-model="officialInfo.gmCAAD2" />
                        </div>
                        <div class="form-group">
                            <label for="amManagerCAAD">AM/Manager CAAD:</label>
                            <input disabled type="text" class="form-control" id="amManagerCAAD"
                                v-model="officialInfo.amManagerCAAD" />
                        </div>
                        <div class="form-group">
                            <label for="jeCAAD">JE CAAD (Hosted Researchers Wing):</label>
                            <input disabled type="text" class="form-control" id="jeCAAD" v-model="officialInfo.jeCAAD" />
                        </div>
                        <div class="form-group">
                            <label>(for further processing & necessary action)</label>
                        </div>

                        <div class="rectangle-box mt-3 p-3 border border-dark rounded">
                            <div class="row mb-2">
                                <div class="col-1">a.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager Finance:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">for payment of honorarium/reimbursements if any etc.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">b.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager HR:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">to amend/issue NCP-Hosted Researchers Entry Card through CAAD.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">c.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager IT:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">to provide the internet and other related IT matter.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">d.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager Estate:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">to facilitate accommodation, if applicable.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">e.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager Transport:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">to facilitate enroute transport, if applicable.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">f.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">AM/Manager Stores:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">to issue quantity of items as per policy.</p>
                                </div>
                            </div>
                            <div class="row mb-2">
                                <div class="col-1">g.</div>
                                <div class="col-4">
                                    <p class="mb-0"><span class="font-weight-bold">Security Branch:</span></p>
                                </div>
                                <div class="col-7">
                                    <p class="mb-0">for information.</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </fieldset>
            </div>



            <div class="form-actions mt-4 d-flex justify-content-center">
                <button type="submit" class="btn btn-success">Submit</button>
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
                name: "",
                phone: "",
                email: "",
                registrationNo: "",
                entryCardNo: "",
                department: "",
                group: "",
                contactPerson: "",
                presentOrg: "",
                presentDurationFrom: null,
                presentDurationTo: null,
                extensionReason: "",
                extensionPeriodFrom: null,
                extensionPeriodTo: null,
                accommodationRequirement: null,
                transportRequirement: null,
                undertaking: "",
                applicantSignature: ""
            },
            officialInfo: {
                // ... Previous officialInfo properties ...
                recommendationExtension: '', // Yes or No
                ncpSupervisor: '',
                concernedDirector: '',
                jeAIA: '',
                managerAIA: '',
                gmCAAD: '',
                approvalDG: '',
                approvalDate: '',
                gmAdministration: '',
                gmCAAD2: '',
                amManagerCAAD: '',
                jeCAAD: '',
            },
        };
    }
};
</script>
  
<style>/* Add any custom styling here */</style>
  