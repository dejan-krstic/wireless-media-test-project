export default () => $("div#modal__progress-container").prepend(
                                                            `<div class="modal__loading"> Loading...
                                                              <div class="progress">
                                                                <div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="10" aria-valuemax="100">
                                                                </div>
                                                              </div>
                                                            </div>`
                                                    )