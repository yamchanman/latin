'use strict';

var cells = document.querySelectorAll('td');

for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function() {
        var span = this.querySelector('span'); // クリックされたセル内の<span>要素を取得

        if (span) {
          if (span.classList.contains('hidden')) {
            span.classList.remove('hidden'); // "hidden"クラスがある場合、削除
          } else {
            span.classList.add('hidden'); // "hidden"クラスがない場合、追加
          }
        }
      };
    }
