<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Evaluation Proforma</h4>
        </div>

        <!-- Section 1: Personal Information -->
        <form>
            <div class="card p-3 mb-4">
                <div class="row justify-content-center">

                    <div class="col-12 col-sm-8 mb-sm-3 mx-auto evaluation-report mt-2">
                        <h5 class="mb-3">Instructions:</h5>
                        <p><b><i>Internees & short term visiting scientists and researchers will submit the performance
                                    evaluation
                                    report at the end of their research work.</i></b></p>
                        <p><b><i>M.Phil / Ph.D Students/ Post Doctoral Research fellows/ long terms visiting scientists &
                                    researchers/
                                    Research Associates will submit performance evaluation report on six monthly
                                    basis.</i></b></p>
                    </div>
                </div>
            </div>
            <div class="card p-3 mb-4">

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
                                <input type="text" autofocus class="form-control" v-model="formData.name">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>2. Name of Supervisor/Group Head:</label>
                                <input type="text" class="form-control" v-model="formData.supervisor">
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>3. Designation:</label>
                                <input type="text" class="form-control" v-model="formData.designation">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>4. Date of Joining NCP:</label>
                                <input type="date" class="form-control"  v-model="formData.joiningdate" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>5. Present Duration at NCP: From:</label>
                                <input type="date" class="form-control"  v-model="formData.starttime" />
                            </div>
                            <div class="col-md-4 mb-3">
                                <label>6. Present Duration at NCP: To:</label>
                                <input type="date" class="form-control"  v-model="formData.endtime" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label>7. Status of Research Progress (Tick the appropriate):</label>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" checked class="form-check-input" id="status"  value="Completed" v-model="formData.status">
                                            <label class="form-check-label" for="completedCheckbox">Completed</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="status" value="In Progress" v-model="formData.status">
                                            <label class="form-check-label" for="inProgressCheckbox" >In Progress</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="card p-3 mb-4">
                <div class="research-summary">
                    <p><b><u>Summary of research work done till date at NCP:</u></b></p>
                    <p><b><i>Title of Research Work:</i></b></p>
                    <p><b><i>Summary of Research Work:</i></b></p>
                    <textarea class="form-control" rows="8" v-model="formData.summary"></textarea>
                </div>
            </div>
            <div class="card p-3 mb-4">
                <div class="publications-summary mt-3">
                    <p><b>(a) Summary of Publications in which NCP name is included (attach list)*:</b></p>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        Papers Published in
                                        Impact
                                        Factor Journals:</label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block"  v-model="formData.publishedpapers">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        No. of Papers Accepted in Impact
                                        Factor Journals:</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block" v-model="formData.acceptedpapers" >
                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        No. of Papers Submitted in Impact Factor Journals: </label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block" v-model="formData.submittedpapers">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        No. of Paper(s) Presented in International Conference(s):</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block" v-model="formData.presentedpapers">
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-8 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        No. of Patents submitted : National</label></div>
                                <div class="col-md-4 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block" v-model="formData.nationalpatentssubmitted">
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex">
                                <div class="col-md-9 col-sm-9 col-9"><label for="publishedPapers" class="d-inline-block">No.
                                        of
                                        No. of Patents submitted : International</label></div>
                                <div class="col-md-3 col-sm-3 col-3">
                                    <input type="number" id="publishedPapers" class="form-control d-inline-block" v-model="formData.internationalpatentssubmitted">
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="form-group">
                    <label class="m-2">* Attach list of publications carrying NCP name and titles/venues/durations
                        of International Conferences attended:</label>
                    <button class="btn btn-outline-secondary mt-2 blink" type="button" id="attachButton">Attach</button>
                </div>
            </div>
            <!--CAAD SECTION-->
            <!-- <div class="card p-3 mb-4">
                <div class="form-group">
                    <label>Remarks by Director Concerned on Prog. of Work:</label>
                    <textarea class="form-control"></textarea>
                </div>

                <div class="section mt-3">
                    <div class="row">

                        <div class="col-lg-6">
                            <label for="gm-finance">Signature of Director Concerned:</label>
                            <input type="text" id="gm-finance" name="gm-finance" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="director-admin">Date:</label>
                            <input type="text" id="director-admin" name="director-admin" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="manager-caad">Manager CAAD (for record and needful):</label>
                            <input type="text" id="manager-caad" name="manager-caad" class="input-line">
                        </div>
                        <div class="col-lg-6">
                            <label for="director-caad">GM CAAD:</label>
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
    name: "EvaluationProforma",
    data() {
        return {
            formData: {
            name:'',
            supervisor:'',
            designation:'',
            joiningdate:'',
            starttime:'',
            endtime:'',
            status:'',
            summary:'',
            publishedpapers:'',
            submittedpapers:'',
            acceptedpapers:'',
            presentedpapers:'',
            nationalpatentssubmitted:'',
            internationalpatentssubmitted:'',
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

.input-line {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
}

.evaluation-report p {
    font-size: 12px;
}

/* Style for the checkmark icon */
.evaluation-report::before {
    font-size: 18px;
    margin-right: 10px;
}

.research-summary p {
    font-size: 14px;
}

.blink {
    animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
    50% {
        opacity: 0;
    }
}
</style>
  