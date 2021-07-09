console.log("Script Loaded", new Date() - window.startTime);
window.myFn = function myFn() {
  window.variable += 1;
  const fixedNumber = window.variable;
  console.log("myFn started", fixedNumber, new Date() - window.startTime);
  setTimeout(() => {
    const el = this.document.querySelector("h1");
    el.innerText = "Hello" + fixedNumber;
    console.log("myFn end", fixedNumber, new Date() - window.startTime);
  }, 1000 * fixedNumber);
};
window.myFn();
