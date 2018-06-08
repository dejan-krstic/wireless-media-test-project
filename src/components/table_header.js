export default () => $("#app-container").append(
                                                  `<table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">
                                                      <thead>
                                                      <tr class="table-head__search-row">
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
                                                            <th class="table-header__tag-id">Tag ID</th>
                                                            <th class="table-header__tag-name">Tag Name</th>
                                                            <th class="table-header__tag-type">Tag Type</th>
                                                            <th class="table-header__my-feed">My Feed</th>
                                                            <th class="table-header__my-favourites">My Favourites</th>
                                                            <th class="table-header__actions">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    </table>`
                                                );
