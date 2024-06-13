import { createDiv, waitElement, waitElementWithMutationObserver } from "./utils.js";

waitElement("#test_1")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

waitElementWithMutationObserver("#test_2")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

waitElement("#whiteTea_1")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

waitElement("#whiteTea")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

waitElementWithMutationObserver("#matcha")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

waitElementWithMutationObserver("#matcha_1")
  .then((element) => {
    console.log(element);
  })
  .catch((error) => {
    console.log(error);
  });

createDiv("test_1", 4000);
createDiv("test_2", 2000);
