!function(e){var a={};function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=20)}([function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return $("body").append('<div class="modal fade" id="modal__add-tag-type" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">\n    <div class="modal-dialog modal-dialog-centered" role="document">\n      <div class="modal-content">\n        <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n        <span aria-hidden="true">&times;</span>\n        </button>\n        <h3 class="modal-title" id="exampleModalLongTitle">Add tag type</h3>\n        </div>\n        <div class="modal-body">\n          <label for="#modal__add-tag-type--name" class="modal__add-tag-type--name">Please enter new tag type:\n            <br/>\n            <input type="text" name="text" id="modal__add-tag-type--name">\n            <div class="modal__add-tag-type--success"></div>\n          </label>\n        </div>\n        <div class="modal-footer">\n          <button type="button" class="btn btn-default modal__cancel-button" data-dismiss="modal">Cancel</button>\n          <button type="button" class="btn btn-info modal__submit-button" id="modal__add-tag-type--submit">Add type</button>\n        </div>\n      </div>\n    </div>\n  </div>')}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return $("body").append('<div class="modal fade" id="modal__create-new" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\n    <div class="modal-dialog" role="document">\n      <div class="modal-content">\n        <div>\n          <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n              <span aria-hidden="true">&times;</span>\n            </button>\n            <h3 class="modal-title" id="myModalLabel">Tag</h3>\n          </div>\n          <div class="modal-body">\n            <label for="#modal__tag-name" class="modal__tag-name">Name *\n              <br/>\n              <input type="text" name="tekst" id="modal__tag-name">\n              <div class="modal__name-validation visibility-hidden">Please enter tag name.</div>\n            </label>\n            <br />\n            <label for="#modal__my-feed" class="modal__my-feed">\n              <input type="checkbox" name="My Feed" id="modal__my-feed" value="my-feed">\n              <span>My Feed</span>\n            </label>\n            <label for="#modal__my-favourites" class="modal__my-favourites">\n              <input type="checkbox" name="My Favourites" id="modal__my-favourites" value="my-favourites">\n              <span> My Favourites</span>\n            </label>\n            <label for="#modal__tag-type" class="modal__tag-type">\n              Type\n              <span class="small"> (Changing tag type will affect entire tag, loss of information may occur)</span>\n              <br/>\n              <select name="modal__tag-type" id="modal__tag-type">\n                <option value=""></option>\n                <option value="Košarkaški klub">Košarkaški klub</option>\n                <option value="Fudbalski klub">Fudbalski klub</option>\n                <option value="Košarkaš">Košarkaš</option>\n                <option value="Fudbaler">Fudbaler</option>\n                <option value="Teniser">Teniser</option>\n                <option value="Takmičenje">Takmičenje</option>\n              </select>\n            </label>\n            \x3c!-- image upload --\x3e\n            <div class="fileinput fileinput-new" data-provides="fileinput">\n              <div id="modal__progress-container">\n              </div>\n              <div id="modal__add-image-container">\n                <span class="btn btn-default btn-file" id="modal__photo-buttons">\n                  <span class="fileinput-new">\n                    <img src="https://www.clker.com/cliparts/o/9/x/P/X/L/plus-md.png" alt="slika" />\n                    <br/> Add photo</span>\n                  <input type="file" name="..." id="image-input">\n                </span>\n              </div>\n              <div class="photo">Photo</div>\n              <div class="fileinput-preview thumbnail" data-trigger="fileinput">\n              </div>\n            </div>\n          </div>\n          <div class="modal-footer">\n            <button type="button" class="btn btn-default modal__cancel-button" data-dismiss="modal" id="modal-reset">Cancel</button>\n            <button type="button" class="btn btn-info modal__submit-button" id="modal-submit">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>')}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return $("div#modal__progress-container").prepend('<div class="modal__loading"> Loading...\n                                                              <div class="progress">\n                                                                <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100">\n                                                                </div>\n                                                              </div>\n                                                            </div>')}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){$("#modal__tag-name").val(""),$("#modal__tag-type").val(""),$("#image-input").val(""),$("#modal__my-favourites").removeAttr("checked"),$("#modal__my-feed").removeAttr("checked"),$(".fileinput").fileinput("clear"),$(".modal__name-validation").addClass("visibility-hidden")}},function(e,a,t){e.exports=t.p+"aebecbca35579e9b2146814fe76fd00a.png"},function(e,a,t){e.exports=t.p+"0234ad3ff25f770629539451dd668d73.png"},function(e,a,t){e.exports=t.p+"3e5a785ba69f53091b077b7623774b29.png"},function(e,a,t){e.exports=t.p+"55869dd5cb9a952ad56d2cc8e5bb07e8.png"},function(e,a,t){e.exports=t.p+"526fa0a5de030e92e51a18720b8bd6d7.png"},function(e,a,t){e.exports=t.p+"ca9565916529f72a8c9f7492a3993bda.png"},function(e,a,t){e.exports=t.p+"a8c7a7d759c735c63e0b3b76793ffeef.png"},function(e,a,t){e.exports=t.p+"c9e4877fc2d30ebcd5df79a3128a0f4b.png"},function(e,a,t){e.exports=t.p+"5b744af2717f44561006dd38241ee85d.png"},function(e,a,t){e.exports=t.p+"b420b69a02eb9e87d4766a98c6941b7c.png"},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(t(13)),o=s(t(12)),d=s(t(11));function s(e){return e&&e.__esModule?e:{default:e}}a.default=function(){return $("#app-container").prepend('<header class="row page-header">\n                                                <div class="col-sm-4 page-header__tags"><div class="page-header__tags--image"><img src="'+n.default+'" alt="tags"></div><div> TAGS</div></div>\n                                                <div class="col-sm-3"></div>\n                                                <div class="col-sm-5 page-header__buttons">\n                                                <div class="page-header__justify" data-toggle="modal" data-target="#modal__add-tag-type">\n                                                  <div class="page-header__justify--image">\n                                                    <div></div>\n                                                    <img src="'+d.default+'" alt="justify">\n                                                  </div>\n                                                  <div>Tag types</div>\n                                                </div>\n                                                  <div class="page-header__create-new" data-toggle="modal" data-target="#modal__create-new">\n                                                    <div class="page-header__create-new--image">\n                                                      <img src="'+o.default+'" alt="new">\n                                                    </div>\n                                                    <div>New</div>\n                                                  </div>\n                                                </div>\n                                              </header>')}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return $("#app-container").append('<table id="example" class="display table table-striped table-bordered nowrap" style="width:100%">\n                                                      <thead>\n                                                      <tr class="table-head__search-row">\n                                                        <th>\n                                                          <input class="table__col-0--search" type="text">\n                                                        </th>\n                                                        <th>\n                                                          <input class="table__col-1--search" type="text"> </th>\n                                                        <th>\n                                                          <input class="table__col-2--search" type="text"> </th>\n                                                        <th>\n                                                          <select class="table__col-3--select">\n                                                            <option value="">All</option>\n                                                            <option value="yes">Yes</option>\n                                                            <option value="no">No</option>\n                                                          </select>\n                                                          </th>\n                                                        <th>\n                                                          <select class="table__col-4--select">\n                                                            <option value="">All</option>\n                                                            <option value="yes">Yes</option>\n                                                            <option value="no">No</option>\n                                                            </select>\n                                                        </th>\n                                                        <th></th>\n                                                      </tr>   \n                                                        <tr>\n                                                            <th class="table-header__tag-id">Tag ID</th>\n                                                            <th class="table-header__tag-name">Tag Name</th>\n                                                            <th class="table-header__tag-type">Tag Type</th>\n                                                            <th class="table-header__my-feed">My Feed</th>\n                                                            <th class="table-header__my-favourites">My Favourites</th>\n                                                            <th class="table-header__actions">Actions</th>\n                                                        </tr>\n                                                    </thead>\n                                                    </table>')}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=["","Košarkaški klub","Fudbalski klub","Košarkaš","Teniser","Fudbaler","Takmičenje"]},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=[{DT_RowId:"1",tag_name:"Chicago Bulls",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"2",tag_name:"Liverpool",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"3",tag_name:"LeBron James",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"4",tag_name:"Novak Djoković",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"5",tag_name:"Lionel Messi",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"6",tag_name:"Premier league",tag_type:"Takmičenje",my_feed:"yes",my_favourites:"no"},{DT_RowId:"7",tag_name:"Golden State Warriors",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"8",tag_name:"Tottenham",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"9",tag_name:"Kevin Durant",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"10",tag_name:"Rafael Nadal",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"11",tag_name:"Harry Kane",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"12",tag_name:"Napoli",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"no"},{DT_RowId:"13",tag_name:"Boston Celtics",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"14",tag_name:"Barcelona",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"15",tag_name:"Stephen Curry",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"16",tag_name:"Roger Federer",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"17",tag_name:"Olivier Giroud",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"18",tag_name:"Manchester United",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"no"},{DT_RowId:"19",tag_name:"San Antonio Spurs",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"20",tag_name:"Manchester City",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"21",tag_name:"Russell Westbrook",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"22",tag_name:"Alexander Zverev",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"23",tag_name:"Cristiano Ronaldo",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"24",tag_name:"Euroleague",tag_type:"Takmičenje",my_feed:"yes",my_favourites:"no"},{DT_RowId:"25",tag_name:"Washington Wizards",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"26",tag_name:"Bayern Munich",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"27",tag_name:"Kyrie Irving",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"28",tag_name:"Juan Martin del Potro",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"29",tag_name:"Romelu Lukaku",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"30",tag_name:"Champions League",tag_type:"Takmičenje",my_feed:"yes",my_favourites:"no"},{DT_RowId:"31",tag_name:"Toronto Raptors",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"32",tag_name:"Roma",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"33",tag_name:"Giannis Antetokounmpo",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"34",tag_name:"John Isner",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"35",tag_name:"Robert Lewandowski",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"36",tag_name:"World Cup",tag_type:"Takmičenje",my_feed:"yes",my_favourites:"no"},{DT_RowId:"37",tag_name:"Los Angeles Lakers",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"38",tag_name:"PSG",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"39",tag_name:"DeMarcus Cousins",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"40",tag_name:"Tomas Berdych",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"41",tag_name:"Edinson Cavani",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"42",tag_name:"Monaco",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"no"},{DT_RowId:"43",tag_name:"Phoenix Suns",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"44",tag_name:"Juventus",tag_type:"Fudbalski klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"45",tag_name:"Blake Griffin",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"},{DT_RowId:"46",tag_name:"Kei Nishikori",tag_type:"Teniser",my_feed:"no",my_favourites:"yes"},{DT_RowId:"47",tag_name:"Eden Hazard",tag_type:"Fudbaler",my_feed:"no",my_favourites:"yes"},{DT_RowId:"48",tag_name:"ATP",tag_type:"Takmičenje",my_feed:"yes",my_favourites:"no"},{DT_RowId:"49",tag_name:"Denver Nuggets",tag_type:"Košarkaški klub",my_feed:"yes",my_favourites:"yes"},{DT_RowId:"50",tag_name:"Nikola Jokić",tag_type:"Košarkaš",my_feed:"no",my_favourites:"no"}]},,function(e,a,t){},function(e,a,t){"use strict";t(19);var n=v(t(17)),o=v(t(16)),d=v(t(15)),s=v(t(14)),i=v(t(10)),l=v(t(9)),_=v(t(8)),r=v(t(7)),m=v(t(6)),u=v(t(5)),y=v(t(4)),p=v(t(3)),c=v(t(2)),f=v(t(1)),g=v(t(0));function v(e){return e&&e.__esModule?e:{default:e}}$(document).ready(function(){var e={tagTypes:o.default,lastID:n.default[n.default.length-1].DT_RowId};(0,f.default)(),(0,g.default)(),(0,s.default)(),(0,d.default)();var a=new $.fn.dataTable.Editor({table:"#example",fields:[{label:"Name",name:"tag_name"},{label:"",name:"my_feed",type:"checkbox",options:[{label:"<span class='modal-edit__label' >My Feed</span>",value:"yes"}],unselectedValue:"no"},{label:"",name:"my_favourites",type:"checkbox",options:[{label:"<span class='modal-edit__label'>My Favourites</span>",value:"yes"}],unselectedValue:"no"},{label:"Type",type:"select",name:"tag_type",options:e.tagTypes}]});a.on("preSubmit",function(e,a,t){if("remove"!==t){var n=this.field("tag_name");if(n.isMultiValue()||(n.val()||n.error("A tag name must be given"),n.val().length>=40&&n.error("The tag name length shouldn't be greater that 40 characters")),this.inError())return!1}});var t=$("#example").DataTable({data:n.default,fixedColumns:{heightMatch:"none"},pagingType:"full_numbers",dom:"<'row'<'col-sm-2'><'col-sm-8'><'col-sm-2 btn-extra' B>><'row'<'col-sm-3'f><'col-sm-8'><'col-sm-1'>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'l><'col-sm-7'p>>",lengthChange:!0,columns:[{data:"DT_RowId"},{data:null,render:function(e,a,t){return'<span class="button-edit">'+e.tag_name+"</span>"}},{data:"tag_type"},{data:null,render:function(e,a,t){return"yes"===e.my_feed||"yes"===e.my_feed[0]?'<i>yes</i><img src="'+_.default+'" alt="checkmark"><i>yes</i>':"<i>no</i>"}},{data:null,render:function(e,a,t){return"yes"===e.my_favourites||"yes"===e.my_favourites[0]?'<i>yes</i><img src="'+_.default+'" alt="checkmark"><i>yes</i>':"<i>no</i>"}},{data:null}],buttons:[],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){var a=e.data();return"Details for "+a[0]+" "+a[1]}}),renderer:$.fn.dataTable.Responsive.renderer.tableAll({tableClass:"table"})}},columnDefs:[{targets:5,orderable:!1,defaultContent:'<div class="dt-buttons"> \n                                    <span class="button-edit">\n                                        <img src="'+i.default+'" alt="editIcon">\n                                    </span>\n                                    <span class="button-remove">\n                                        <img src="'+l.default+'" alt="deleteIcon">\n                                    </span>\n                            </div>'}]});$("#modal__tag-name").on("keydown",function(){$(".modal__name-validation").addClass("visibility-hidden")});for(var v=function(e){$(".table__col-"+e+"--search").on("keyup",function(){t.columns(e).search(this.value).draw()})},b=0;b<3;b++)v(b);var h=function(e){$(".table__col-"+e+"--select").on("change",function(){t.columns(e).search(this.value).draw()})};for(b=3;b<5;b++)h(b);$("#example tbody").on("click",".button-edit",function(){t.row(this.closest("tr")).edit()}),$("#example tbody").on("click",".button-remove",function(){t.row(this.closest("tr")).delete()}),$("#modal__create-new").on("shown.bs.modal",function(){$("#modal__add-image-container").removeClass("display-none")}),$("#modal-submit").on("click",function(){if($("#modal__tag-name").val().split(" ").join("")||($(".modal__name-validation").removeClass("visibility-hidden"),0)){var a=++e.lastID,n=$("#modal__tag-name").val(),o=$("#modal__my-feed").is(":checked")?"yes":"no",d=$("#modal__my-favourites").is(":checked")?"yes":"no",s=$("#modal__tag-type").val();t.row.add({DT_RowId:a,tag_name:n,tag_type:s,my_feed:o,my_favourites:d}).draw(),t.page("last").draw("page"),(0,p.default)(),$("#modal__create-new").modal("hide")}}),$("#modal__add-tag-type--submit").on("click",function(){$(".modal__add-tag-type--success").empty();var t=$("#modal__add-tag-type--name").val();t.split(" ").join("")?e.tagTypes.includes(t)?$(".modal__add-tag-type--success").append("<p class='opacity-down'>Tag type with the same name already exists<p>"):(e.tagTypes.push(t),a.field("tag_type").update(e.tagTypes),$("select#modal__tag-type").append('<option value="'+t+'">'+t+"</option>"),$(".modal__add-tag-type--success").append("<p class='opacity-down'>You successfully created new tag type<p>")):$(".modal__add-tag-type--success").append("<p class='opacity-down'>Tag type is not valid<p>")}),$("#modal__add-tag-type").on("hidden.bs.modal",function(){$(".modal__add-tag-type--success").empty(),$("#modal__add-tag-type--name").val("")}),$("#modal__create-new").on("hidden.bs.modal",function(){(0,p.default)(),$("div#modal__progress-container").empty()}),$("#image-input").on("change",function(){$("#modal__add-image-container").addClass("display-none"),(0,c.default)(),$(".progress-bar").animate({width:"99%"},1e3),console.log("This is the moment animation should start"),$("div.fileinput-preview").on("DOMNodeInserted",function(){$("div.fileinput-preview>img").on("load",function(){$("div#modal__progress-container").empty(),console.log("And this is the moment of picture upload and progress bar destruction")})})}),$("a#example_first").html('<img id="first-icon" class="pagination__icons" src="'+r.default+'" alt="first">'),$("a#example_previous").html('<img class="pagination__icons" src="'+u.default+'" alt="previous">'),$("a#example_next").html('<img class="pagination__icons" src="'+y.default+'" alt="next">'),$("a#example_last").html('<img img id="last-icon" class="pagination__icons" src="'+m.default+'" alt="last">')})}]);
//# sourceMappingURL=index_bundle.js.map