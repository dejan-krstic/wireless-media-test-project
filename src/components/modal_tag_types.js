export default () => $("body").append(
    `<div class="modal fade" id="modal__add-tag-type" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        <h3 class="modal-title" id="exampleModalLongTitle">Add tag type</h3>
        </div>
        <div class="modal-body">
          <label for="#modal__add-tag-type--name" class="modal__add-tag-type--name">Please enter new tag type:
            <br/>
            <input type="text" name="text" id="modal__add-tag-type--name">
            <div class="modal__add-tag-type--success"></div>
          </label>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default modal__cancel-button" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-info modal__submit-button" id="modal__add-tag-type--submit">Add type</button>
        </div>
      </div>
    </div>
  </div>`
)