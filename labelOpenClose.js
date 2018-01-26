/*!
 * LabelOpenClose
 *
 *
 * @author: TakashiKakizoe
 * @author url: https://github.com/TakashiKakizoe1109
 * @version: 1.0.0
 *
 * Open source under the MIT License.
 * License url: https://raw.githubusercontent.com/TakashiKakizoe1109/labelOpenClose/master/LICENSE
 *
 */

var labelOpenClose = function (op) {

  /** set options or default params */
  this.op = {} ;

  this.op.scroll     = op.scroll !== undefined ? op.scroll : true ;

  this.op.moveSpeed  = op.moveSpeed || 500 ;
  this.op.offset     = op.offset    || 0 ;
  this.op.easing     = op.easing    || 'swing' ;
  this.op.rel        = op.rel       || 'rel' ;

  this.op.labelSelector    = op.labelSelector    || '.label_open_close' ;
  this.op.closeBtnSelector = op.closeBtnSelector || '.label_open_close_btn' ;

  this.op.labelOpenClassName  = op.labelOpenClassName  || 'label_open' ;
  this.op.labelCloseClassName = op.labelCloseClassName || 'label_close' ;
  this.op.boxClassName        = op.boxClassName        || 'label_open_close_box' ;
  this.op.boxOpenClassName    = op.boxOpenClassName    || 'box_open' ;
  this.op.boxCloseClassName   = op.boxCloseClassName   || 'box_close' ;

  /** target element */
  this.labels            = '' ;

};

labelOpenClose.prototype.addLabelAndBox = function() {
  this.labels = $(this.op.labelSelector).not('a[href^="#"]') ;
  if (this.labels.length > 0) {
   this.labels.each(this._addLabelAndBox());
   setTimeout(this.checkAll, this.op.checkdelay, this);
  }
}

labelOpenClose.prototype._addLabelAndBox = function () {
  var obj = this ;
  return function(i,ele){

    /** Single information */
    var info = {} ;

    /** Label */
    info._label = $(this) ;

    /** Box */
    info._rel = info._label.attr(obj.op.rel) ;
    info._box = !info._rel || !$(info._rel).length ? info._label.next() : $(info._rel) ;
    info._box.addClass(obj.op.boxClassName) ;

    /** Close Btn */
    info._btn = info._box.find(obj.op.closeBtnSelector) ;

    /** State */
    info._state  = info._label.hasClass(obj.op.labelCloseClassName) ? obj.op.labelCloseClassName : obj.op.labelOpenClassName ;
    info._label.addClass(info._state);

    /** box open close init */
    if (info._state === obj.op.labelCloseClassName) {
      info._box.hide().addClass(obj.op.boxCloseClassName).removeClass(obj.op.boxOpenClassName).css('display','none');
    } else {
      info._box.show().addClass(obj.op.boxOpenClassName).removeClass(obj.op.boxCloseClassName).css('display','block');
    }

    /** label event add */
    info._label.off('click').on('click.labelOpenClose', {obj:obj,info:info}, function(e) {
      var _state = e.data.info._label.hasClass(e.data.obj.op.labelCloseClassName) ? e.data.obj.op.labelCloseClassName : e.data.obj.op.labelOpenClassName ;
      if (_state === e.data.obj.op.labelCloseClassName) {
        e.data.info._label.addClass(e.data.obj.op.labelOpenClassName).removeClass(e.data.obj.op.labelCloseClassName);
        e.data.info._box.stop().slideDown(e.data.obj.op.moveSpeed).addClass(e.data.obj.op.boxOpenClassName).removeClass(e.data.obj.op.boxCloseClassName);
      } else {
        e.data.info._label.addClass(e.data.obj.op.labelCloseClassName).removeClass(e.data.obj.op.labelOpenClassName);
        e.data.info._box.stop().slideUp(e.data.obj.op.moveSpeed).addClass(e.data.obj.op.boxCloseClassName).removeClass(e.data.obj.op.boxOpenClassName);
      }
      var top = e.data.info._label.offset().top-e.data.obj.op.offset ;
      if (e.data.obj.op.scroll) {
        $('body,html').stop().animate(
          {scrollTop: top},
          e.data.obj.op.moveSpeed ,
          e.data.obj.op.easing
        );
      }
      return false;
    });

    /** close btn event add */
    info._btn.off('click').on('click.labelOpenClose', {obj:obj,info:info}, function(e) {
      e.data.info._label.addClass(e.data.obj.op.labelCloseClassName).removeClass(e.data.obj.op.labelOpenClassName);
      e.data.info._box.stop().slideUp(e.data.obj.op.moveSpeed).addClass(e.data.obj.op.boxCloseClassName).removeClass(e.data.obj.op.boxOpenClassName);
      var top = e.data.info._label.offset().top-e.data.obj.op.offset ;
      if (e.data.obj.op.scroll) {
        $('body,html').stop().animate(
          {scrollTop: top},
          e.data.obj.op.moveSpeed ,
          e.data.obj.op.easing
        );
      }
      return false;
    });

  };
};
