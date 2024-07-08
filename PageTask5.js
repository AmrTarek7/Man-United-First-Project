function openPopup() {
  var url = "https://www.instagram.com/amr_tarek8?igsh=dWxoc2liaHU1eHNl"; // استبدل برابط الصفحة التي تريد فتحها

  // تعريف حجم النافذة وموقعها
  var width = 700;
  var height = 600;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  var features = 'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top + ',resizable=yes,scrollbars=yes';

  // فتح النافذة الجديدة
  window.open(url, '_blank', features);
}
