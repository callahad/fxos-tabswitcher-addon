(function () {
  // This could be a pure CSS add-on, but those are broken at the moment.

  if (document.documentElement) injectStyles();
  else window.addEventListener('DOMContentLoaded', injectStyles);

  function injectStyles() {
    var rules = document.createTextNode(`
      .chrome .controls .urlbar {
        width: calc(100% - 9rem);
      }

      .browser .chrome .controls .windows-button {
        display: initial;
        offset-inline-end: 6.5em;
      }

      .browser button[data-id=show-windows] {
        display: none;
      }
    `);

    var styleTag = document.createElement('style');
    styleTag.appendChild(rules);

    document.body.appendChild(styleTag);
  }
})();
