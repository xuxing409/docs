module.exports = {
  title: "star’s blog",
  description: "了解真相,你才能获得更多的自由",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },

      {
        text: "js",
        link: "/js",
      },
      {
        text: "vue",
        link: "/vue",
        // items: [
        //   {
        //     text: "Vue技术文档",
        //     items: [{ text: "props传值更新", link: "/vue-01" }],
        //   },
        // ],
      },
      {
        text: "react",
        link: "/react",
      },
      {
        text: "关于",
        link: "/about",
        // items: [
        //   {
        //     text: "关于我",
        //     items: [{ text: "自学前端心路历程", link: "/about" }],
        //   },
        // ],
      },
      { text: "External", link: "https://google.com" },
    ],
  },
};
