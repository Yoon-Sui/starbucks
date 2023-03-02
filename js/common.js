const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 서치버튼눌러서 실행
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

// 서치버튼누를때변화
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();