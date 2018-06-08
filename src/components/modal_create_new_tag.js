export default () => $("body").append(
    `<div class="modal fade" id="modal__create-new" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div>
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 class="modal-title" id="myModalLabel">Tag</h3>
          </div>
          <div class="modal-body">
            <label for="#modal__tag-name" class="modal__tag-name">Name *
              <br/>
              <input type="text" name="tekst" id="modal__tag-name">
              <div class="modal__name-validation visibility-hidden">Please enter tag name.</div>
            </label>
            <br />
            <label for="#modal__my-feed" class="modal__my-feed">
              <input type="checkbox" name="My Feed" id="modal__my-feed" value="my-feed">
              <span>My Feed</span>
            </label>
            <label for="#modal__my-favourites" class="modal__my-favourites">
              <input type="checkbox" name="My Favourites" id="modal__my-favourites" value="my-favourites">
              <span> My Favourites</span>
            </label>
            <label for="#modal__tag-type" class="modal__tag-type">
              Type
              <span class="small"> (Changing tag type will affect entire tag, loss of information may occur)</span>
              <br/>
              <select name="modal__tag-type" id="modal__tag-type">
                <option value=""></option>
                <option value="Košarkaški klub">Košarkaški klub</option>
                <option value="Fudbalski klub">Fudbalski klub</option>
                <option value="Košarkaš">Košarkaš</option>
                <option value="Fudbaler">Fudbaler</option>
                <option value="Teniser">Teniser</option>
                <option value="Takmičenje">Takmičenje</option>
              </select>
            </label>
            <!-- image upload -->
            <div class="fileinput fileinput-new" data-provides="fileinput">
              <div id="modal__progress-container">
              </div>
              <div id="modal__add-image-container">
                <span class="btn btn-default btn-file" id="modal__photo-buttons">
                  <span class="fileinput-new">
                    <img src="http://www.clker.com/cliparts/o/9/x/P/X/L/plus-md.png" alt="slika" />
                    <br/> Add photo</span>
                  <input type="file" name="..." id="image-input">
                </span>
              </div>
              <div class="photo">Photo</div>
              <div class="fileinput-preview thumbnail" data-trigger="fileinput">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success modal__cancel-button" data-dismiss="modal" id="modal-reset">Cancel</button>
            <button type="button" class="btn btn-success modal__submit-button" id="modal-submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>`
)