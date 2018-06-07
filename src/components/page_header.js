import tagsImage from "../../resources/assets/icons/32px/055-price-tags.png"
import newImage from "../../resources/assets/icons/32px/267-plus.png"
import tagTypesImage from "../../resources/assets/icons/32px/379-paragraph-justify.png"


export default () => $("#app-container").prepend(
                                              `<header class="row page-header">
                                                <div class="col-sm-2"><div class="page-header__tags--image"><img src="${tagsImage}" alt="tags"></div><div> TAGS</div></div>
                                                <div class="col-sm-7"></div>
                                                <div class="col-sm-3 row">
                                                  <div class="page-header__create-new col-sm-6" data-toggle="modal" data-target="#modal__create-new">
                                                    <div class="page-header__create-new--image">
                                                      <img src="${newImage}" alt="new">
                                                    </div>
                                                    <div>New</div>
                                                  </div>
                                                  <div class="page-header__justify col-sm-6" data-toggle="modal" data-target="#modal__create-new">
                                                    <div class="page-header__justify--image">
                                                      <img src="${tagTypesImage}" alt="justify">
                                                    </div>
                                                    <div>Tag types</div>
                                                  </div>
                                                </div>
                                              </header>`
);
