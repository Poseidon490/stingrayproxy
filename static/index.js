function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  window.navigator.serviceWorker
    .register("./uv-sw.js", {
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = input.value.trim();
      if (!isUrl(url)) {
        url = "https://www.google.com/search?q=" + url;
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url)
      }
      else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
        url = "https://" + url;
        location.href = __uv$config.prefix + __uv$config.encodeUrl(url)
      }
    });
});


