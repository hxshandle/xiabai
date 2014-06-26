$(function() {
  $('#c6-1').parallax(0, 0.3, 1800);

  $('#store .store-entry').slidesjs({
    pagination: {
      active: false
    },
    navigation: {
      active: false
    },
    height: 584,
    width: 315
  });
  $('#store .store-entry').hide();
  $('#store .store-entry:first').show().addClass('active');

  $('#store-pre').click(function() {
    moveJSlider('.store-entry.active', - 1);
  });
  $('#store-next').click(function() {
    moveJSlider('.store-entry.active', 1);
  });

  
  function _switch(id){
    var actId = id;
    var oldEntry = $('.store-entry.active');
    oldEntry.fadeOut(400,function(){
      oldEntry.removeClass('active');
      $('#'+actId).addClass('active').fadeIn();
    });
  }


  function _buildSelBox(data, prov) {
    var h = '<select class="address-sel" id="' + prov + '-address-sel">';
    for (var i = 0; i < data.length; i++) {
      var p = data[i];
      h += '<option value="' + i + '">' + p + '</option>';
    }
    h += '</select>';
    $('#address-sel-box').html(h);
    $('#' + prov + '-address-sel').selectbox({
      onChange: function(val, inst) {
        _switch(currentProv + "-" + val);
      }
    });
  }

  function _buildAddressSel(prov) {
    var data = [];
    $('.d-' + prov).each(function() {
      var $this = $(this);
      data.push($this.val());
    });
    _buildSelBox(data, prov);

  }

  var currentProv = $('#provision option:first').val();
  $('#provision').selectbox({
    onChange: function(val, inst) {
      currentProv = val;
      _buildAddressSel(val);
      // switch to default 0
      _switch(val+'-0');
    }
  });
  _buildAddressSel(currentProv);

});

