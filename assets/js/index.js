// 写真入れ替え関数
const changeImg = () => {
  const imgs = document.querySelectorAll(".mv img");
  let index = 0;

  // 5秒ごとに写真入れ替え
  setInterval(() => {
    index++;

    // 要素数オーバー制御
    if (imgs.length === index) {
      index = 0;
      imgs[imgs.length - 1].classList.remove("active");
      imgs[0].classList.add("active");
    } else {
      imgs[index - 1].classList.remove("active");
      imgs[index].classList.add("active");
    }
  }, 5000);
};

// 一番上まで自動スクロール
const scrollTop = () => {
  const arrow = document.querySelector(".footer-arrow");

  arrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};

// 関数呼び出し()をつけると関数を実行するという意味、これがないと定義されているだけで実行されない
changeImg();
scrollTop();
