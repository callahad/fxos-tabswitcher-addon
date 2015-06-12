(function () {
  // This could be a pure CSS add-on, but those are broken at the moment.

  if (document.documentElement) injectStyles();
  else window.addEventListener('DOMContentLoaded', injectStyles);

  function injectStyles() {
    var rules = document.createTextNode(`
      .chrome .controls .urlbar {
        width: calc(100% - 9rem);
      }

      .controls .forward-button:not([disabled]) + .urlbar,
      .controls .back-button:not([disabled]) + .forward-button[disabled] + .urlbar {
        width: calc(100% - 12.5rem);
      }

      .controls .back-button:not([disabled]) + .forward-button:not([disabled]) + .urlbar {
        width: calc(100% - 16.5rem);
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