<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Clearance Proforma</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card mb-3 p-3">
                <fieldset>
                    <legend
                        class="card-header d-flex justify-content-between align-items-center font-weight-bold text-decoration-underline">
                        <p style="font-size: 14px;"><b><u>
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
                                <input type="text" class="form-control" v-model="formData.name">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>2. Department:</label>
                                <input type="text" class="form-control" v-model="formData.department">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="formData.designation">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Reg No:</label>
                                <input type="text" class="form-control" v-model="formData.regno">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. NCP Entry Card No:</label>
                                <input type="text" class="form-control" v-model="formData.entryno">
                            </div>
                        </div>


                    </div>

                </fieldset>

            </div>
            <div class="card mb-3 p-5">
                <div class="option">
                    <div class="form-check">
                        <input type="radio" checked class="form-check-input" id="P" value="temporraybasis"
                            v-model="formData.option">
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
                </div>
                <div class="option">
                    <div class="form-check">
                        <input type="radio" class="form-check-input" id="status" value="completed"
                            v-model="formData.option">
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
                </div>
            </div>

            <!---CAAD SECTION-->
            <!-- <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>2.Certification by Supervisor & Director/Head of Concerned
                                Department:</u></b>Certified that there is nothing outstanding against the
                        above-mentioned Hosted Researcher in the department.It is, therefore, he/she may be issued
                        Clearance Certificate and Work Experience Certificate after due vetting by Finance Branch,
                        Admin Branches and CAAD.</p>
                    <div class="form-group">
                        <label>5. Signature</label>
                        <div class="row align-items-center">
                            <div class="col-md-6 mt-3 mb-3 text-center">
                                <input disabled type="text" id="jecaad" name="jecaad" class="input-line">
                                <br>
                                <label class="input-label text-center">Recommended by Concerned Research Supervisor/ Group
                                    Head:</label>
                            </div>
                            <div class="col-md-6 mt-3 mb-3 text-center">
                                <div>
                                    <input disabled type="text" id="recommendationDirector1" name="recommendationDirector1"
                                        class="input-line">
                                    <br>
                                    <label class="input-label text-center">Endorsed by Concerned Director/HOD (NCP Complex):
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
            <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>3.Certification by Concerned Departments at NCP:</u></b>It is
                        certified that there are no pending claims/dues of any
                        description against above mentioned applicant except those mentioned in the following Table:
                    </p>
                    <div class="table-responsive">
                        <table class="table-bordered">
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
                        </table>
                    </div>

                </div>
            </div>
            <div class="card mb-3 p-3">
                <div class="section mt-5">
                    <p class="small-text"><b><u>4.Endorsements:</u></b></p>
                    <div class="row align-items-center mb-3">
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <input disabled type="text" id="jecaad" name="jecaad" class="input-line">
                            <br>
                            <label class="input-label text-center">GM Finance</label>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector1" name="recommendationDirector1"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">Director Admin</label>
                            </div>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector2" name="recommendationDirector2"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">Director CAAD</label>
                            </div>
                        </div>
                        <div class="col-md-3 mt-3 mb-3 col-6 text-center">
                            <div>
                                <input disabled type="text" id="recommendationDirector2" name="recommendationDirector2"
                                    class="input-line">
                                <br>
                                <label class="input-label text-center">AM / Manager/GM CAAD</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <label for="director-caad">JE CAAD (for record & necessary action w.r.t. issuance of Research
                                Certificate for cleared cases):</label>
                            <input type="text" id="director-caad" name="director-caad" class="input-line">
                        </div>
                    </div>
                </div>
            </div> -->
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
               name:'',
               department:'',
               designation:'',
               regno:'',
               entryno:'',
               option:'',
          }
        }
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
    outline: none;
}

.table-bordered th,
.table-bordered td {
    padding: 8px;
    /* Adjust as needed */
    word-wrap: break-word;
    font-size: 14px;
}

.radio-label {
    display: block;
    white-space: normal;
    margin-top: 5px;
}

.option p {
    font-size: 14px;
}

.section p {
    font-size: 14px;
}
</style>
  