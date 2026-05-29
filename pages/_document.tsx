import { Head, Html, Main, NextScript } from "next/document";

const faviconScript = `
(function () {
  var OPEN = "/pop-cat-open.ico";
  var CLOSED = "/pop-cat-closed.ico";
  var INTERVAL = 500;
  var link = document.querySelector("link[data-animated-favicon]");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    link.setAttribute("data-animated-favicon", "");
    document.head.appendChild(link);
  }
  var canvas = document.createElement("canvas");
  canvas.width = 32;
  canvas.height = 32;
  var ctx = canvas.getContext("2d");
  var imgOpen = new Image();
  var imgClosed = new Image();
  var isOpen = false;
  var ready = 0;
  function applyFrame() {
    ctx.clearRect(0, 0, 32, 32);
    ctx.drawImage(isOpen ? imgOpen : imgClosed, 0, 0, 32, 32);
    link.href = canvas.toDataURL("image/png");
  }
  function tick() {
    isOpen = !isOpen;
    applyFrame();
  }
  function onReady() {
    ready++;
    if (ready < 2) return;
    isOpen = false;
    applyFrame();
    setInterval(tick, INTERVAL);
  }
  function fallbackSwap() {
    link.href = CLOSED;
    setInterval(function () {
      isOpen = !isOpen;
      link.href = (isOpen ? OPEN : CLOSED) + "?t=" + Date.now();
    }, INTERVAL);
  }
  imgOpen.onload = onReady;
  imgClosed.onload = onReady;
  imgOpen.onerror = fallbackSwap;
  imgClosed.onerror = fallbackSwap;
  imgOpen.src = OPEN;
  imgClosed.src = CLOSED;
})();
`.trim();

export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head>
        <link
          rel="icon"
          href="/pop-cat-closed.ico"
          data-animated-favicon=""
        />
        <script dangerouslySetInnerHTML={{ __html: faviconScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
