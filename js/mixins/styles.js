var styles = {

  getWidth: function(width) {
    var style = {};
    var reg = /^(((100|\d{1,2})(%))|((\d{1,4})(px)?))$/;
    var verify = ['width', 'height'];
    width = String(width);

    verify.forEach(function(ele) {
      if (width && width.match(reg)) {
        style.width = width;
      }
    });

    return style;
  }
};

export default styles;
