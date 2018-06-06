import '../resources/style/main.scss';
import dataSet from "./constants/dataSet"


function deleteRow(){
    table.row(this).edit().draw()
}

$(document).ready(function () {

    var editor = new $.fn.dataTable.Editor( {
        table: "#example",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Last name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            }, {
                label: "Office:",
                name: "office"
            }, {
                label: "Extension:",
                name: "extn",
                multiEditable: false
            }, {
                label: "Start date:",
                name: "start_date",
                type: "datetime"
            }, {
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
    var table = $('#example').DataTable( {
        data: dataSet,
        pagingType: "full_numbers",
        // dom: "Bfrtipl",
        dom: 'B<"top">rt<"bottom"lp><"clear">',
        lengthChange: true,
        columns: [
            {data: null, render: function (data, type, row ){
                return data.DT_RowId.slice(4)
            }},
            { data: null, render: function ( data, type, row ) {
                return data.first_name+' '+data.last_name;
            } },
            // { data: "position" },
            { data: "office" },
            { data: "extn" },
            { data: "start_date" },
            { data: null }
        ],
        // select: true,
        buttons: [
            { extend: "create", editor: editor },
            // { extend: "edit",   editor: editor },
            // { extend: "remove", editor: editor }
        ],
        columnDefs: [ {
            targets: 0,
            data: null,
        },
        {
            targets:  5,
            orderable: false,
            defaultContent: 
            `<div class="dt-buttons"> 
                            <button class="dt-button buttons-selected buttons-edit" tabindex="0" aria-controls="example">
                            <span>Edit</span>
                            </button> 
                            <button class="dt-button buttons-selected buttons-remove" tabindex="0" aria-controls="example">
                            <span>Delete</span>
                            </button> 
                            </div>`
                        } ]
                    } );



    $("#example thead").prepend(
        `<tr>
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
                                          <option value="1">Yes</option>
                                          <option value="0">No</option>
                                        </select>
                                      </th>
                                      <th>
                                        <select class="table__col-4--select">
                                          <option value="">All</option>
                                          <option value="1">Yes</option>
                                          <option value="0">No</option>
                                        </select>
                                      </th>
                                      <th></th>
                                    </tr>`
    );


    for (let i = 0; i < 3; i++) {
        $(`.table__col-${i}--search`).on('keyup', function () {
            table
                .columns(i)
                .search(this.value)
                .draw();
        });
    }

    for (let i = 3; i < 5; i++) {
        $(`.table__col-${i}--select`).on('change', function () {
            table
                .columns(i)
                .search(this.value)
                .draw();
                
        });
    }
    var myTable = $('#example').DataTable();
 
$('.buttons-edit').on( 'click', function (e) {
    console.log(e.target);
    console.log($(e.target).closest('tr'));
    var m = $(e.target).closest('tr');
    table.row( m[0] ).edit().modal().draw();
} );
$('.buttons-remove').on( 'click', function (e) {
    console.log(e.target);
    console.log($(e.target).closest('tr'));
    var m = $(e.target).closest('tr');
    table.row( m[0] ).remove().draw().update();
} );

// $('#example tbody').on( 'click', '.buttons-delete', function () {
//     table
//         .row( $(this).parents('tr') )
//         .remove()
//         .draw();
// } );





});







    // table.page( 'last' ).draw( 'page' );