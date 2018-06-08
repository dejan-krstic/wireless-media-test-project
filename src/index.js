import '../resources/style/main.scss';
import dataSet from "./constants/data_set";
import tagTypes from "./constants/tag_types";
import tableHeader from "./components/table_header";
import pageHeader from "./components/page_header";
import editIcon from "../resources/assets/icons/16px/006-pencil.png";
import deleteIcon from "../resources/assets/icons/16px/272-cross.png";
import checkmarkIcon from "../resources/assets/icons/16px/273-checkmark.png";
import firstIcon from "../resources/assets/icons/48px/292-previous2.png";
import lastIcon from "../resources/assets/icons/48px/293-next2.png";
import previousIcon from "../resources/assets/icons/48px/284-previous3.png";
import nextIcon from "../resources/assets/icons/48px/285-play3.png";
import clearModal from "./utils/clear_modal";
import progressBar from "./components/progress_bar";
import modalCreateNewTag from "./components/modal_create_new_tag";
import modalAddTagType from "./components/modal_tag_types"


$(document).ready(function () {
    const state = {
        tagTypes,
        lastID: dataSet[dataSet.length - 1].DT_RowId
    }
    modalCreateNewTag();
    modalAddTagType();
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
            options: [{ label: "<span class='modal-edit__label' >My Feed</span>", value: "yes", }],
            unselectedValue: "no"
        }, {
            label: "",
            name: "my_favourites",
            type: "checkbox",
            options: [{ label: "<span class='modal-edit__label'>My Favourites</span>", value: "yes" }],
            unselectedValue: "no"
        }, {
            label: "Type",
            type: "select",
            name: "tag_type",
            options: state.tagTypes
        },
        ]
    });


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
        fixedColumns: {
            heightMatch: 'none'
        },
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
            },
            {
                data: null,
                render: function (data, type, row) {
                    return `<span class="button-edit">${data.tag_name}</span>`;
                }
            },
            { data: "tag_type" },
            {
                data: null,
                render: function (data, type, row) {
                    if (data.my_feed === "yes") {
                        return `<i>yes</i><img src="${checkmarkIcon}" alt="checkmark"><i>yes</i>`;
                    } else return "<i>no</i>"
                }
            },
            {
                data: null,
                render: function (data, type, row) {
                    if (data.my_favourites === "yes") {
                        return `<i>yes</i><img src="${checkmarkIcon}" alt="checkmark"><i>yes</i>`;
                    } else return "<i>no</i>"
                }
            },
            { data: null }
        ],
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
                targets: 5,
                orderable: false,
                defaultContent:
                    `<div class="dt-buttons"> 
                                    <span class="button-edit">
                                        <img src="${editIcon}" alt="editIcon">
                                    </span>
                                    <span class="button-remove">
                                        <img src="${deleteIcon}" alt="deleteIcon">
                                    </span>
                            </div>`
            }]
    });

    const nameValidation = () => {
        const name = $("#modal__tag-name").val().split(' ').join('')
        if (name) {
            return true;
        }
        $(".modal__name-validation").removeClass("visibility-hidden")
        return false;
    }

    $("#modal__tag-name").on("keydown", function () {
        $(".modal__name-validation").addClass("visibility-hidden")
    })

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
        $("#modal__add-image-container").removeClass('display-none')

    })

    $('#modal-submit').on('click', function () {
        if (!nameValidation()) {
            return
        }
        const DT_RowId = ++state.lastID
        const tag_name = $("#modal__tag-name").val();
        const my_feed = $("#modal__my-feed").is(":checked") ? "yes" : "no";
        const my_favourites = $("#modal__my-favourites").is(":checked") ? "yes" : "no";
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

        clearModal();
        $('#modal__create-new').modal('hide');
    });

    $("#modal__add-tag-type--submit").on('click', function () {
        $(".modal__add-tag-type--success").empty();
        let addTagType = $("#modal__add-tag-type--name").val();
        if (!addTagType.split(" ").join("")) {
            $(".modal__add-tag-type--success").append("<p class='opacity-down'>Tag type is not valid<p>");
            return
        }
        if (state.tagTypes.includes(addTagType)) {
            $(".modal__add-tag-type--success").append("<p class='opacity-down'>Tag type with the same name already exists<p>");
            return
        }
        state.tagTypes.push(addTagType);
        editor.field('tag_type').update(state.tagTypes);
        $("select#modal__tag-type").append(`<option value="${addTagType}">${addTagType}</option>`);
        $(".modal__add-tag-type--success").append("<p class='opacity-down'>You successfully created new tag type<p>");
    })

    $('#modal__add-tag-type--submit').on('hidden.bs.modal', function () {
        $(".modal__add-tag-type--success").empty();
        $("#modal__add-tag-type--name").val("");
    })

    $('#modal__create-new').on('hidden.bs.modal', function () {
        clearModal();
    })

    $("#image-input").on("change", function () {
        $("#modal__add-image-container").addClass('display-none')
        progressBar();
        $('.progress-bar').animate({ "width": '99%' }, 1000);            //  most of the time doesn't work properly on dev server but exists  
        console.log("This is the moment animation should start");       // when uploading very large pictures you can clearly console.log periods
        $("div.fileinput-preview").on("DOMNodeInserted", function () {   
            $("div.fileinput-preview>img").on("load", function () {
                $("div#modal__progress-container").empty();
                console.log("And this is the moment of picture upload and progress bar destruction");
            });
        });
    })



    console.log($("a#example_first>img").length );
    $("a#example_first").empty().html(`<img id="first-icon" class="pagination__icons" src="${firstIcon}" alt="first">`);
    $("a#example_previous").empty().html(`<img class="pagination__icons" src="${previousIcon}" alt="previous">`);
    $("a#example_next").empty().html(`<img class="pagination__icons" src="${nextIcon}" alt="next">`);
    $("a#example_last").empty().html(`<img img id="last-icon" class="pagination__icons" src="${lastIcon}" alt="last">`);
    console.log($("a.paginate_button>img").length );
    
    var marker = false;
    $("#example_paginate").on("DOMNodeInserted", function () { 
        console.log($("a.paginate_button>img").length < 4 );
        if ($("a#example_first>img").length>1) return;
        $("a#example_first").empty().html(`<img id="first-icon" class="pagination__icons" src="${firstIcon}" alt="first">`);
        $("a#example_previous").empty().html(`<img class="pagination__icons" src="${previousIcon}" alt="previous">`);
        $("a#example_next").empty().html(`<img class="pagination__icons" src="${nextIcon}" alt="next">`);
        $("a#example_last").empty().html(`<img img id="last-icon" class="pagination__icons" src="${lastIcon}" alt="last">`);
    })

});