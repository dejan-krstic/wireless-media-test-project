export default () => $("#app-container").append(
                                                  `<table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                                                      <thead>
                                                      <tr>
                                                        <th>
                                                          <input class="table__col-0--search" type="text">
                                                        </th>
                                                        <th>
                                                          <input class="table__col-1--search" type="text"> </th>
                                                        <th>
                                                          <input class="table__col-2--search" type="text"> </th>
                                                        <th>
                                                          <select class="table__col-3--select">
                                                            <option value="">All</option>
                                                            <option value="yes">Yes</option>
                                                            <option value="no">No</option>
                                                          </select>
                                                          </th>
                                                        <th>
                                                          <select class="table__col-4--select">
                                                            <option value="">All</option>
                                                            <option value="yes">Yes</option>
                                                            <option value="no">No</option>
                                                            </select>
                                                        </th>
                                                        <th></th>
                                                      </tr>   
                                                        <tr>
                                                            <th>Tag ID</th>
                                                            <th>Tag Name</th>
                                                            <th>Tag Type</th>
                                                            <th>My Feed</th>
                                                            <th>My Favourites</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    </table>`
                                                );
