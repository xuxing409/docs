module.exports = {
  title: "star’s blog",
  description: "了解真相,你才能获得更多的自由",
  themeConfig: {
    enableDarkMode: true,
    nav: [
      { text: "Home", link: "/" },

      {
        text: "javascript",
        link: "/docs/javascript/",
      },
      {
        text: "vue",
        link: "/docs/vue/",
      },
      {
        text: "关于",
        link: "/about",
      },
      { text: "External", link: "https://google.com" },
    ],
  },
  sidebar: "auto",
  // sidebar: {
  //   "/docs/JavaScript/": [
  //     "/docs/JavaScript/",
  //     "/docs/JavaScript/闭包",
  //     "/docs/JavaScript/原型与原型链",
  //   ],
  // },
};
