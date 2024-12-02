(function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }
    k = e.createElement(t), a = e.getElementsByTagName(t)[0];
    k.async = 1; k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
  ym(99100819, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true
  });
  
  // Для пользователей с отключённым JavaScript создаём элемент noscript
  document.addEventListener("DOMContentLoaded", function() {
    var noscript = document.createElement("noscript");
    noscript.innerHTML = '<div><img src="https://mc.yandex.ru/watch/99100819" style="position:absolute; left:-9999px;" alt="" /></div>';
    document.body.appendChild(noscript);
  });
  