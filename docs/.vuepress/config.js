module.exports = {
  title: "star’s blog",
  description: "了解真相,你才能获得更多的自由",
  theme: "vt",
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
        text: "electron",
        link: "/docs/electron/",
      },
      {
        text: "关于",
        link: "/about",
      },
      { text: "External", link: "https://google.com" },
    ],
    sidebar: {
      "/docs/JavaScript/": ["", "闭包", "原型与原型链"],
      "/docs/vue/": [""],
      "/docs/Electron/": [
        "",
        "介绍",
        "快速搭建",
        "主进程与渲染进程通信",
        "自定义标题栏",
        "区分代码运行环境",
      ],
    },
  },
};
