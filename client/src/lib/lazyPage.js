import { lazy } from 'react';

/**
 * React.lazy for a page-sized component, with one automatic recovery.
 *
 * Lazy pages are separate hashed files. If someone has the site open while a
 * new build is deployed, the old file names are gone and the import fails.
 * The fix is a fresh copy of the site, so the first failure reloads the page
 * once; a flag in sessionStorage stops a reload loop if the file is truly
 * unavailable, and the error then reaches the error boundary instead.
 */
const FLAG = 'shri:lazy-reload';

function readFlag() {
  try {
    return window.sessionStorage.getItem(FLAG) === '1';
  } catch {
    return true; // No storage: never risk a reload loop.
  }
}

function writeFlag(on) {
  try {
    if (on) window.sessionStorage.setItem(FLAG, '1');
    else window.sessionStorage.removeItem(FLAG);
  } catch {
    // Storage blocked: nothing to remember.
  }
}

export function lazyPage(load) {
  return lazy(() =>
    load().then(
      (module) => {
        writeFlag(false);
        return module;
      },
      (error) => {
        if (!readFlag()) {
          writeFlag(true);
          window.location.reload();
          return new Promise(() => {}); // Hold rendering until the reload.
        }
        throw error;
      },
    ),
  );
}
