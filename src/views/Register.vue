<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Register Now</h4>
        </div>
        <form>
            <div class="card p-3 mb-4">
            <div class="row justify-content-center">
                    <div class="col-12 col-sm-8 mb-sm-3 mx-auto evaluation-report mt-2">
                        <h5 class="mb-3 text-center">Instructions:</h5>
                        <p><b><i>Applicants are required to read the NCP Hosted Researchers Policy available at
                                    www.ncp.edu.pk/ir.php
                                    carefully before filling the form.</i></b></p>
                        <p><b><i>Applicant must have first division or equivalent grade in final/last degree and no more
                                    than one second
                                    division in entire academic career.</i></b></p>
                        <p><b><i>Apply at least 30 days before initiation of proposed research work at NCP Campus.</i></b>
                        </p>
                        <p><b><i>Outstation Hosted Researcher means whose University/College/R&D Institute is outside
                                    municipal jurisdiction of Rawalpindi/ Islamabad
                                    and accommodation to Outstation Hosted Researcher will only be provided “SUBJECT TO
                                    AVAILABILITY”</i></b>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card p-3">
              
                <fieldset>
                    <legend class="card-header d-flex justify-content-between align-items-center">
                        Completed by Applicant Hosted Researcher:
                        <div
                            class="passport-picture-area bg-light rounded-circle d-flex align-items-center justify-content-center">
                            <i class="fas fa-user fa-3x text-primary"></i>
                        </div>
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="researcherName">Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="researcherName" v-model="formData.name" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="researcherPhone">CNIC/PassportNo:</label>
                                <input type="text" class="form-control" id="researcherPhone"
                                    v-model="formData.cnic" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="researcherPhone">Date of Birth:</label>
                                <input type="date" class="form-control" id="researcherPhone"
                                    v-model="formData.dob" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Highest Qualification</label>
                                <div class="row">
                                    <div class="col-md-1 ">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" value="Ph.D"  id="qualification"  v-model="formData.qualification">
                                            <label class="form-check-label" for="completedCheckbox">Ph.D</label>
                                        </div>
                                    </div>

                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="M.Sc"  id="qualification"  v-model="formData.qualification">
                                            <label class="form-check-label" for="inProgressCheckbox">M.Sc</label>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="DAE"  id="qualification"  v-model="formData.qualification">
                                            <label class="form-check-label" for="inProgressCheckbox">DAE</label>
                                        </div>
                                    </div>
                                    <div class="col-md-1 me-4">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="Mphil/MS"  id="qualification"  v-model="formData.qualification">
                                            <label class="form-check-label" for="inProgressCheckbox">Mphil/MS</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" value="other"  id="other"  v-model="formData.qualification">
                                            <label class="form-check-label" for="inProgressCheckbox">Others</label>
                                            <input ref="qualificationInput" type="text" id="je-caad" name="je-caad" class="input-line"  :disabled="formData.qualification !== 'other'">
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label>Accadamic Record:</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" value="Through 1st
                                                Division"  id="record"  v-model="formData.record">
                                            <label class="form-check-label" for="completedCheckbox">Through 1st
                                                Division</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio"  class="form-check-input" value="One 2nd Div. in
                                                Career"  id="record"  v-model="formData.record">
                                            <label class="form-check-label" for="inProgressCheckbox">One 2nd Div. in
                                                Career</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Current Status:</label>
                                <div class="row">
                                    <div class="col-md-3 ">
                                        <div class="form-check">
                                            <input type="radio"  checked class="form-check-input" value="Employee"  id="status"  v-model="formData.status">
                                            <label class="form-check-label" for="status">1.Employee</label>
                                          
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-check">
                                            <input type="radio"  class="form-check-input" value="Presently Registered
                                                Student"  id="status"  v-model="formData.status">
                                            <label class="form-check-label" for="inProgressCheckbox">2.Presently Registered
                                                Student</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-check">
                                            <input type="radio"  class="form-check-input" value="other"  id="status"  v-model="formData.status">
                                            <label class="form-check-label" for="inProgressCheckbox">3.Others</label>
                                            <input ref="statusInput" type="text" id="je-caad" name="je-caad" class="input-line" :disabled="formData.status !== 'other'">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-3 mb-3">
                                <label for="researcherEmail">Designation (if employed):</label>
                                <input type="text" class="form-control" id="researcherEmail"
                                    v-model="designation" />
                            </div>
                            <div class="col-md-5 mb-3">
                                <label for="registrationNo">University/College Enrollment-Registration Number:</label>
                                <input type="text" class="form-control" id="registrationNo"
                                    v-model="regno" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="entryCardNo">Present Organization/ University/Department:</label>
                                <input type="text" class="form-control" id="entryCardNo"
                                    v-model="university" />
                            </div>
                        </div>

                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="department">Permanent Address:</label>
                                <textarea type="textarea" class="form-control" id="department"
                                    v-model="peraddress" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="group">Temporary Address:</label>
                                <textarea type="textarea" class="form-control" id="group" v-model="tempaddress" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3 col-4">
                                <label for="department">Landline No.:</label>
                                <input type="textarea" class="form-control" id="department"
                                    v-model="landline" />
                            </div>
                            <div class="col-md-4 mb-3 col-4">
                                <label for="group">Cell:</label>
                                <input type="textarea" class="form-control" id="group" v-model="cell" />
                            </div>
                            <div class="col-md-4 mb-3 col-4">
                                <label for="group">E-mail:</label>
                                <input type="textarea" class="form-control" id="group" v-model="email" />
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
    name: "RegisterProforma",
    data() {
        return {
            formData: {
                name:'',
                cnic:'',
                dob:'',
                qualification:'',
                record:'',
                status:'',
                designation:'',
                regno:'',
                university:'',
                peraddress:'',
                tempaddress:'',
                landline:'',
                cell:'',
                email:'',
            },

         }
    },
    watch: {
        "formData.qualification": function (newValue) {
            if (newValue === "other") {
                this.$nextTick(() => {
                    this.$refs.qualificationInput.focus(); // Focus the input field
                });
            }
        },
            "formData.status": function (newValue) {
            if (newValue === "other") {
                this.$nextTick(() => {
                    this.$refs.statusInput.focus(); // Focus the input field
                });
            }
        }
        },
};
</script>
  
<style scoped>
.rectangle-box {
    border: 1px solid #000;
}

.evaluation-report p {
    font-size: 12px;
}

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}</style>
  