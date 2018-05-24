const checkBox = document.getElementById('textDecorationCheck');
checkBox.addEventListener('change', function(e) {
  if (checkBox.checked) {
    cssWriter('.cp-navbar-container > li a:hover', 'text-decoration', 'underline');
  } else {
    cssWriter('.cp-navbar-container > li a:hover', 'text-decoration', 'none');
  }
});
