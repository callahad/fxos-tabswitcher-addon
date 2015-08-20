(function () {
  // This could be a pure CSS add-on, but those are broken at the moment.

  if (document.documentElement) injectStyles();
  else window.addEventListener('DOMContentLoaded', injectStyles);

  function injectStyles() {
    var rules = document.createTextNode(`
      /* Hide the redundant "Show Windows" item in the browser menu */
      .browser button[data-id=show-windows] {
        display: none;
      }

      /* Make space for the "Show Windows" button by adding 4.5rem to each width. */
      .appWindow:not(.search-app) /* <-- Avoid changing the new tab page. */
      .chrome .controls .urlbar {
        width: calc(100% - 9rem);
      }

      .chrome.maximized .controls .forward-button:not([disabled]) + .urlbar,
      .chrome.maximized .controls .back-button:not([disabled]) + .forward-button[disabled] + .urlbar {
        width: calc(100% - 12.5rem);
      }

      .chrome.maximized .controls .back-button:not([disabled]) + .forward-button:not([disabled]) + .urlbar {
        width: calc(100% - 16.5rem);
      }

      /* Display the hidden "Show Windows" button in the toolbar */
      .browser .chrome.maximized .controls .windows-button {
        display: initial;
        offset-inline-end: 4rem;
      }
    `);

    var styleTag = document.createElement('style');
    styleTag.appendChild(rules);

    document.body.appendChild(styleTag);
  }
})();
