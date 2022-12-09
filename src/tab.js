const tabGroup = document.querySelector("tab-group");

// Setup the default tab which is created when the "New Tab" button is clicked
tabGroup.setDefaultTab({
  title: "New Page",
  src: "https://www.google.com",
  active: true,
});

const tab = tabGroup.addTab({
  title: "Mysite",
  src: "./index.html",
  visible: true,
  active: true,
  webviewAttributes: {
    preload: "index2.js",
  },
});
const pos = tab.getPosition();
console.log("Tab position is " + pos);
