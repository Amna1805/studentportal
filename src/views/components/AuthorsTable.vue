<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>My Applications</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Application ID</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 text-center">Application type</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Date</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">View/Edit</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Download</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center align-middle">
                <p class="text-xs font-weight-bold mb-0">2222</p>
              </td>
              <td class="align-middle text-center">
                <p class="text-xs font-weight-bold mb-0">Identity Card</p>
              </td>
              <td class="align-middle text-center">
                <span class="badge badge-sm bg-gradient-success">Pending</span>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">23/04/18</span>
              </td>
              <td class="align-middle text-center">
                <a
                  href="javascript:;"
                  class="text-success font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >
                <i class="fa fa-edit fa-lg"></i> 
                <!-- <i class="fa fa-eye"></i> -->
              </a>
              </td>
              <td class="align-middle text-center">
                <a
                  href="javascript:;"
                  class="text-success font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                >
                  <i class="fa fa-download fa-lg"></i>
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="6" class="text-center text-secondary text-xs font-weight-bold">No more Applications</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "authors-table",
};
</script>
