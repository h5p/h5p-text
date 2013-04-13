var H5P = H5P || {};

/**
 * Constructor.
 * 
 * @param {object} params Options for this library.
 * @param {string} contentPath The path to our content folder.
 * @returns {undefined}
 */
H5P.Text = function (params, contentPath) {
  this.text = params.text;
};

/**
 * Wipe out the content of the wrapper and put our HTML in it.
 * 
 * @param {jQuery} $wrapper
 * @returns {undefined}
 */
H5P.Text.prototype.attach = function ($wrapper) {
  $wrapper.html(this.text);
  this.$element = $wrapper.children();
};