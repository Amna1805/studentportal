<template>
    <div class="container py-4">
        <div class="card bg-primary text-white mb-4">
            <h2 class="card-header">ACCOMMODATION REQUEST PROFORMA</h2>
        </div>
        <form>
            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header">PART-I (to be completed by Applicant Hosted Researcher):</legend>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="name">Name of Hosted Researcher:</label>
                            <input type="text" class="form-control" id="name" v-model="applicantInfo.name" />
                        </div>
                        <div class="form-group">
                            <label for="applicationDate">Date of Application:</label>
                            <input type="date" class="form-control" id="applicationDate"
                                v-model="applicantInfo.applicationDate" />
                        </div>
                        <div class="form-group">
                            <label for="registrationNo">Registration No.:</label>
                            <input type="text" class="form-control" id="registrationNo"
                                v-model="applicantInfo.registrationNo" />
                        </div>
                        <div class="form-group">
                            <label for="ncpId">NCP ID Card No.:</label>
                            <input type="text" class="form-control" id="ncpId" v-model="applicantInfo.ncpId" />
                        </div>
                        <div class="form-group">
                            <label for="department">Department at NCP:</label>
                            <input type="text" class="form-control" id="department" v-model="applicantInfo.department" />
                        </div>
                        <div class="form-group">
                            <label for="expiryDate">Date of Expiry of Stay at NCP as per ToRs:</label>
                            <input type="date" class="form-control" id="expiryDate" v-model="applicantInfo.expiryDate" />
                        </div>
                        <div class="form-group">
                            <label for="parentOrgType">Parent University/Institute/Organization (Tick):</label>
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
                            <label for="parentOrgName">Name/Address of Parent University/Institute/Organization of Hosted
                                Researcher:</label>
                            <textarea class="form-control" id="parentOrgName"
                                v-model="applicantInfo.parentOrgName"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="accommodationFromDate">Accommodation required with effect from (date):</label>
                            <div class="input-group">
                                <input type="date" class="form-control" id="accommodationFromDate"
                                    v-model="applicantInfo.accommodationFromDate" />
                                <div class="input-group-append">
                                    <label class="input-group-text">to</label>
                                </div>
                                <input type="date" class="form-control" id="accommodationToDate"
                                    v-model="applicantInfo.accommodationToDate" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contactCell">Contact Phone Nos. Cell:</label>
                            <input type="text" class="form-control" id="contactCell" v-model="applicantInfo.contactCell" />
                            <label for="contactRes">Res.</label>
                            <input type="text" class="form-control" id="contactRes" v-model="applicantInfo.contactRes" />
                            <label for="contactLabExt">Lab Ext.</label>
                            <input type="text" class="form-control" id="contactLabExt"
                                v-model="applicantInfo.contactLabExt" />
                        </div>
                        <div class="form-group">
                            <label for="securityProforma">Have you submitted security proforma with police
                                verification?</label>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" value="yes"
                                    v-model="applicantInfo.securityProforma" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" value="no"
                                    v-model="applicantInfo.securityProforma" />
                                <label class="form-check-label">NO</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="applicantSignature">Signature of Applicant Hosted Researcher:</label>
                            <input type="text" class="form-control" id="applicantSignature"
                                v-model="applicantInfo.applicantSignature" />
                        </div>
                        <div class="form-group">
                            <label for="recommendationDirector">Recommendation of Concerned Director for Validity of
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
                        <div class="form-group form-check">
                            <input disabled type="checkbox" class="form-check-input" id="caadEntriesCorrect"
                                v-model="officialInfo.caadEntriesCorrect" />
                            <label class="form-check-label" for="caadEntriesCorrect">Registration entries are correct w.r.t. CAAD Record:</label>
                        </div>
                        <div class="form-group form-check">
                            <input disabled type="checkbox" class="form-check-input" id="policeVerification"
                                v-model="officialInfo.policeVerification" />
                            <label class="form-check-label" for="policeVerification">Police verification proforma submitted:</label>
                        </div>
                        <div class="form-group">
                            <label for="accommodationType">Accommodation Type Applicable:</label>
                            <select disabled class="form-control" id="accommodationType" v-model="officialInfo.accommodationType">
                                <option value="">Select</option>
                                <option value="singleRoom">Single Room</option>
                                <option value="sharedRoomStudents">Shared Room for Students</option>
                                <option value="sharedRoomEmployees">Shared Room for Employees</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div class="card mb-4">
                <fieldset>
                    <legend class="card-header">Part-III (for Official Use): Action by NCP Administration (Estate Branch):
                    </legend>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="roomsAllotted">No. of BoQs/MoQs Rooms allotted as per SOP:</label>
                            <input disabled type="number" class="form-control" id="roomsAllotted"
                                v-model="officialInfo.roomsAllotted" />
                        </div>
                        <div class="form-group">
                            <label for="spaceAvailable">Space Available (Room) for (Students):</label>
                            <input disabled type="text" class="form-control" id="spaceAvailable"
                                v-model="officialInfo.spaceAvailable" />
                        </div>
                        <div class="form-group">
                            <label for="spaceAvailability">Space Available</label>
                            <div class="form-check">
                                <input disabled type="radio" class="form-check-input" value="YES"
                                    v-model="officialInfo.spaceAvailability" />
                                <label class="form-check-label">YES</label>
                            </div>
                            <div class="form-check">
                                <input disabled type="radio" class="form-check-input" value="No"
                                    v-model="officialInfo.spaceAvailability" />
                                <label class="form-check-label">NO</label>
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
                        <div class="form-group">
                            <label for="allotmentRoomNo">Possible Action: Room No.:</label>
                            <input disabled type="text" class="form-control" id="allotmentRoomNo"
                                v-model="officialInfo.allotmentRoomNo" />
                        </div>
                        <div class="form-group">
                            <label for="allotmentDuration">Duration of Allotment:</label>
                            <input disabled type="text" class="form-control" id="allotmentDuration"
                                v-model="officialInfo.allotmentDuration" />
                        </div>
                        <div class="form-group">
                            <label for="priorityNo">Request Prioritized and held for provision of Room on Priority
                                No.:</label>
                            <input  disabled type="text" class="form-control" id="priorityNo" v-model="officialInfo.priorityNo" />
                        </div>
                        <div class="form-group">
                            <label for="rentChallanNo">Advance Room rent paid vides Challan No.:</label>
                            <input disabled type="text" class="form-control" id="rentChallanNo"
                                v-model="officialInfo.rentChallanNo" />
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
                spaceAvailable: '',
                spaceAvailability: '',
                allotmentRoomNo: '',
                allotmentDuration: '',
                priorityNo: '',
                rentChallanNo: '',
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
