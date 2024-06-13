export function waitElement(cssSelector, timeout = 5000, interval = 100) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const checkInterval = setInterval(() => {
      const element = document.querySelector(cssSelector);
      if (element) {
        clearInterval(checkInterval);
        resolve(element);
      }

      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= timeout) {
        clearInterval(checkInterval);
        reject(new Error(`Timeout waiting for element with selector: ${cssSelector}`));
      }
    }, interval);
  });
}

export function waitElementWithMutationObserver(cssSelector, timeout = 5000, interval = 100) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const observer = new MutationObserver((mutationsRecord, observer) => {
      const element = document.querySelector(cssSelector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const checkInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= timeout) {
        clearInterval(checkInterval);
        observer.disconnect();
        reject(new Error(`Timeout waiting for element with selector: ${cssSelector}`));
      }
    }, interval);
  });
}

export function createDiv(id = "div", timeout = 1000) {
  setTimeout(() => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div id="${id}">
            <span>Test div with id="${id}"</span>
          </div>
        `;
    document.body.appendChild(div);
  }, timeout);
}
