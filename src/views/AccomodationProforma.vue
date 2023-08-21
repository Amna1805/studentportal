<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h4 class="card-header">Accommodation Proforma</h4>
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
                                <label for="name">1. Name of Hosted Researcher:</label>
                                <input type="text" class="form-control" id="name" v-model="applicantInfo.name" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="applicationDate">2. Date of Application:</label>
                                <input type="date" class="form-control" id="applicationDate"
                                    v-model="applicantInfo.applicationDate" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="registrationNo">3. Registration No.:</label>
                                <input type="text" class="form-control" id="registrationNo"
                                    v-model="applicantInfo.registrationNo" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="ncpId">4. NCP ID Card No.:</label>
                                <input type="text" class="form-control" id="ncpId" v-model="applicantInfo.ncpId" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="department">5. Department at NCP:</label>
                                <input type="text" class="form-control" id="department"
                                    v-model="applicantInfo.department" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="expiryDate">6. Date of Expiry of Stay at NCP as per ToRs:</label>
                                <input type="date" class="form-control" id="expiryDate"
                                    v-model="applicantInfo.expiryDate" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="parentOrgType">7. Parent University/Institute/Organization (Tick):</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="local" id="local"
                                    v-model="applicantInfo.parentOrgType" />
                                <label class="form-check-label" for="local">Local</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="outstation" id="outstation"
                                    v-model="applicantInfo.parentOrgType" />
                                <label class="form-check-label" for="outstation">Outstation</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="parentOrgName">8. Name/Address of Parent University/Institute/Organization of Hosted
                                Researcher:</label>
                            <input type="text" class="form-control" id="parentOrgName"
                                v-model="applicantInfo.parentOrgName" />
                        </div>

                        <div class="form-group">
                            <label>9. Accommodation required with effect (date):</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="stayFrom">From:</label>
                                    <input type="date" class="form-control" id="accommodationFromDate"
                                        v-model="applicantInfo.accommodationFromDate">
                                </div>
                                <div class="col-md-6">
                                    <label for="stayTo">To:</label>
                                    <input type="date" class="form-control" id="accommodationToDate"
                                        v-model="applicantInfo.accommodationToDate">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>10. Contact Phone Nos.</label>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <input type="text" class="form-control" placeholder="Cell" id="contactCell"
                                        v-model="applicantInfo.contactCell" />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input type="text" class="form-control" placeholder="Res" id="contactRes"
                                        v-model="applicantInfo.contactRes" />
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input type="text" class="form-control" placeholder="Contact Lab Ext" id="contactLabExt"
                                        v-model="applicantInfo.contactLabExt" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="securityProforma">11. Have you submitted security proforma with police
                                verification?
                            </label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="yes"
                                    v-model="applicantInfo.securityProforma" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" value="no"
                                    v-model="applicantInfo.securityProforma" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="applicantSignature">12. Signature of Applicant Hosted Researcher:</label>
                            <input type="text" class="form-control" id="applicantSignature"
                                v-model="applicantInfo.applicantSignature" />
                        </div>
                        <div class="form-group">
                            <label for="recommendationDirector">13. Recommendation of Concerned Director for Validity of
                                Request/Period:</label>
                            <input type="text" class="form-control" id="recommendationDirector"
                                v-model="applicantInfo.recommendationDirector" />
                        </div>

                    </div>
                </fieldset>
            </div>

            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header">Part-II (for Official Use): Action by CAAD Hosted Researchers Branch:
                    </legend>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="caadEntriesCorrect">1. Registration entries are correct w.r.t.
                                CAAD Record:</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="yes"
                                    v-model="officialInfo.caadEntriesCorrect" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="no"
                                    v-model="officialInfo.caadEntriesCorrect" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="policeVerification">2. Police verification proforma has been received & submitted to
                                PSO (GM Admin):</label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="yes"
                                    v-model="officialInfo.policeVerification" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="no"
                                    v-model="officialInfo.policeVerification" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="accommodationType">3. Accommodation Type Applicable:</label>
                            <select disabled class="form-control" id="accommodationType"
                                v-model="officialInfo.accommodationType">
                                <option value="">Select</option>
                                <option value="singleRoom">Single Room for Hosted TWAS fellows, (Post Doc Fellows/Adjunct
                                    Faculty/ Visiting Scientists/Researchers)</option>
                                <option value="sharedRoomStudents">Shared Room for Hosted Students (three per room for
                                    Student Internees, M.Phil or MS)</option>
                                <option value="sharedRoomEmployees">Shared Room for Hosted Employees (two per room for
                                    Senior Internees shared with local PhD Students who are employees)</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>4. Signature</label>
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="JE CAAD"
                                        v-model="officialInfo.jeCAAD">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="Manager/GM A&IA"
                                        v-model="officialInfo.GM">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="Director CAAD"
                                        v-model="officialInfo.dirCAAD">
                                </div>
                            </div>
                        </div>

                    </div>
                </fieldset>
            </div>

            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header">Part-III (for Official Use): Action by NCP Administration (Estate Branch):
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="roomsAllotted">1. No. of BoQs/MoQs Rooms allotted as per SOP:</label>
                                <input disabled type="number" class="form-control" id="roomsAllotted"
                                    v-model="officialInfo.roomsAllotted" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="roomsAllotted">2. Total Room Allotted:</label>
                                <input disabled type="number" class="form-control" id="roomsAllotted"
                                    v-model="officialInfo.totalAllotted" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="spaceAvailable">3. Space Available (Room) for (Students):</label>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input disabled type="number" placeholder="Total No. of available room"
                                        class="form-control" id="roomAvailable" v-model="officialInfo.roomAvailable" />
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input disabled type="number" class="form-control"
                                        placeholder="No. of Student can be Accommodated" id="roomAvailableStd"
                                        v-model="officialInfo.roomAvailableStd" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="spaceAvailability">4. Space Available: </label>
                            <span>&nbsp;&nbsp;</span>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="YES"
                                    v-model="officialInfo.spaceAvailability" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input disabled type="radio" class="form-check-input" value="No"
                                    v-model="officialInfo.spaceAvailability" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>5. Signature</label>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="J.E Estate"
                                        v-model="officialInfo.jeEstate">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="AM/Manager Estate"
                                        v-model="officialInfo.managerEstate">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="GM Estate"
                                        v-model="officialInfo.GMEstate">
                                </div>
                                <div class="col-md-3 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="Director Admin"
                                        v-model="officialInfo.dirAdmin">
                                </div>
                            </div>
                        </div>

                    </div>
                </fieldset>
            </div>

            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header">Part-IV (for Official Use): Action by NCP Administration (Estate Branch):
                    </legend>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="allotmentRoomNo">1. Possible Action: Room No.:</label>
                                <input disabled type="text" class="form-control" id="allotmentRoomNo"
                                    v-model="officialInfo.allotmentRoomNo" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="priorityNo">2. Request Prioritized and held for provision of Room on Priority
                                    No.:</label>
                                <input disabled type="text" class="form-control" id="priorityNo"
                                    v-model="officialInfo.priorityNo" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label>3. Duration of Allotment: (date)</label>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="stayFrom">From:</label>
                                    <input disabled type="date" class="form-control" id="allotmentDurationStart"
                                        v-model="applicantInfo.allotmentDurationStart">
                                </div>
                                <div class="col-md-6">
                                    <label for="stayTo">To:</label>
                                    <input disabled type="date" class="form-control" id="allotmentDurationEnd"
                                        v-model="applicantInfo.allotmentDurationEnd">
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="rentChallanNo">4. Signature: AM/Manager Estate</label>
                            <input disabled type="text" class="form-control" id="rentChallanNo"
                                v-model="officialInfo.managerEstate" />
                        </div>

                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="rentChallanNo">5. Advance Room rent paid vides Challan No.:</label>
                                    <input disabled type="text" class="form-control" id="rentChallanNo"
                                        v-model="officialInfo.rentChallanNo" />
                                </div>
                                <div class="col-md-6">
                                    <label for="rentChallanDate">Advance Room rent paid. Date:</label>
                                    <input disabled type="date" class="form-control" id="rentChallanDate"
                                        v-model="officialInfo.rentChallanDate" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>6. Signature</label>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="Caretaker's"
                                        v-model="officialInfo.caretaker">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <input disabled type="text" class="form-control" placeholder="Applicant's"
                                        v-model="officialInfo.applicant">
                                </div>
                            </div>
                        </div>
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
    name: 'AccomodationProforma',
    data() {
        return {
            applicantInfo: {
                name: '',
                applicationDate: '',
                registrationNo: '',
                ncpId: '',
                department: '',
                expiryDate: '',
                parentOrgType: '',         // Added field
                parentOrgName: '',         // Added field
                accommodationFromDate: '', // Added field
                accommodationToDate: '',   // Added field
                contactCell: '',
                contactRes: '',
                contactLabExt: '',
                securityProforma: '',      // Added field
                applicantSignature: '',
                recommendationDirector: '',
            },
            officialInfo: {
                caadEntriesCorrect: false,
                policeVerification: false,
                accommodationType: '',
                roomsAllotted: 0,
                totalAllotted: 0,
                roomAvailable: '',
                roomAvailableStd: '',
                spaceAvailability: '',
                allotmentRoomNo: '',
                allotmentDurationStart: '',
                allotmentDurationEnd: '',
                priorityNo: '',
                rentChallanNo: '',
                rentChallanDate: '',
                jeCAAD: '',
                GM: '',
                dirCAAD: '',
                jeEstate: '',
                managerEstate: '',
                GMEstate: '',
                dirAdmin: '',
                caretaker: '',
                applicant: '',

            },
        };
    },
};
</script>
  
  
<!-- <style scoped>
.accommodation-form {
    text-align: center;
    padding: 20px;
}

.header-card {
    background-color: #007bff;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.card {
    background-color: white;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card fieldset {
    border: none;
    padding: 0;
    margin: 0;
}

.card legend {
    font-weight: bold;
}

.form-group {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.form-group label {
    display: inline-block;
    width: 250px;
    text-align: left;
    margin-right: 10px;
}

.form-group input[type="text"],
.form-group input[type="date"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.form-group label[for="securityProforma"],
.form-group label[for="parentOrgType"] {
    margin-right: 5px;
}

.form-actions {
    margin-top: 20px;
}

.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="reset"] {
    background-color: #dc3545;
    margin-left: 10px;
}

button:hover {
    opacity: 0.8;
}</style> -->
