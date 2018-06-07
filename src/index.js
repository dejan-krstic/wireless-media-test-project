import '../resources/style/main.scss';
import dataSet from "./constants/data_set";
import tagTypes from "./constants/tag_types";
import tableHeader from "./components/table_header";
import pageHeader from "./components/page_header"

$(document).ready(function () {
    const state = {
        tagTypes,
        lastID: dataSet[dataSet.length - 1].DT_RowId
    }
    pageHeader();
    tableHeader();

    var editor = new $.fn.dataTable.Editor({
        table: "#example",
        fields: [{
            label: "Name",
            name: "tag_name",
        }, {
            label: "",
            name: "my_feed",
            type: "checkbox",
            options: [{label:"My Feed", value: "yes",}],
            unselectedValue: "no"
        }, {
            label: "",
            name: "my_favourites",
            type: "checkbox",
            options: [{label:"My Favourites", value: "yes"}],
            unselectedValue: "no"
        }, {
            label: "Type",
            type: "select",
            name: "tag_type",
            options: state.tagTypes
        },
        ]
    });

    // state.tagTypes = [5,2,6]
    // editor.field('tag_type').update( state.tagTypes );



    editor.on('preSubmit', function (e, o, action) {
        if (action !== 'remove') {
            var tagName = this.field('tag_name');
            if (!tagName.isMultiValue()) {
                if (!tagName.val()) {
                    tagName.error("A tag name must be given");
                }

                if (tagName.val().length >= 40) {
                    tagName.error("The tag name length shouldn't be greater that 40 characters");
                }
            }
            if (this.inError()) {
                return false;
            }
        }
    });

    var table = $('#example').DataTable({
        data: dataSet,
        pagingType: "full_numbers",
        dom:
            "<'row'<'col-sm-2'><'col-sm-8'><'col-sm-2 btn-extra' B>>" +
            "<'row'<'col-sm-3'f><'col-sm-8'><'col-sm-1'>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'l><'col-sm-7'p>>",
        lengthChange: true,
        columns: [
            {
                data: "DT_RowId",
                // render: function (data, type, row ){
                // return data.DT_RowId }
            },
            {
                data: null,
                render: function ( data, type, row ) {
                return `<span class=tag-name>${data.tag_name}</span>`;
             } 
            },
            { data: "tag_type" },
            { 
                data: null,
                render: function ( data, type, row ) {
                    if (data.my_feed == "yes") {
                        return 5;
                    } else return 6
                }
            },
            { data: "my_favourites" },
            { data: null }
        ],
        // select: true,
        buttons: [
        ],
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return 'Details for ' + data[0] + ' ' + data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        columnDefs: [
            {
                targets: 2,
                // defaultContent: `<span class=tag-name>${data.tag_name}</span>`
            },
            {
                targets: 5,
                orderable: false,
                defaultContent:
                            `<div class="dt-buttons"> 
                                <button class="dt-button buttons-selected button-edit" tabindex="0" aria-controls="example">
                                    <span>Edit</span>
                                </button> 
                                <button class="dt-button buttons-selected button-remove" tabindex="0" aria-controls="example">
                                    <span>Delete</span>
                                </button> 
                            </div>`
            }]
    });

    // table.buttons().container()
    //     .appendTo($('.col-md-6:eq(0)', table.table().container()));

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

    $('#example tbody').on('click', '.button-edit', function () {   //   event delegation because of DataTables pagination bug
        table.row(this.closest('tr')).edit();
    });
    $('#example tbody').on('click', '.button-remove', function () {   //   event delegation because of DataTables pagination bug
        table.row(this.closest('tr')).delete()
    });

    $('#modal__create-new').on('shown.bs.modal', function () {
        console.log("shown");
        $('.progress-bar').animate({ width: '90%' })
    })


    $('#modal-submit').on('click', function () {
        const DT_RowId = ++state.lastID
        const tag_name = $("#modal__tag-name").val();
        const my_feed = $("#modal__my-feed").is(":checked")?"yes":"no";
        const my_favourites = $("#modal__my-favourites").is(":checked")?"yes":"no";
        const tag_type = $("#modal__tag-type").val();
        table
            .row
            .add({
                DT_RowId,
                tag_name,
                tag_type,
                my_feed,
                my_favourites
            })
            .draw();
        table
            .page('last')
            .draw('page');


        $("#modal__tag-name").val("");
        $("#modal__tag-type").val("");
        $("#image-input").val("");
        $("#modal__my-favourites").removeAttr("checked");
        $("#modal__my-feed").removeAttr("checked");
        $('.fileinput').fileinput("clear")
    });

    // $('.modal-button').on('click', function () {










    // $('.button-edit').on( 'click', function (e) {
    //     console.log(e.target);
    //     console.log($(e.target).closest('tr'));
    //     var m = $(e.target).closest('tr');
    //     table.row( m[0] ).edit().draw();
    // } );
    // $('.buttons-remove').on( 'click', function (e) {
    //     console.log(e.target);
    //     console.log($(e.target).closest('tr'));
    //     var m = $(e.target).closest('tr');
    //     table.row.create();
    // } );









});







