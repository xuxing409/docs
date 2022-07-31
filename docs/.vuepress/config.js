module.exports = {
  title: 'star’s blog',
  description: '了解真相,你才能获得更多的自由',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
     
      {
        text: 'Vue',
        items: [
          {
            text: 'Vue技术文档', items: [
              { text: 'props传值更新', link: '/vue-01' },
            ]
          }
        ]
      },
      {
        text: '关于',
        items: [
          {
            text: '关于我', items: [
              { text: '自学前端心路历程', link: '/about' },
            ]
          }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: [
    //   '',
    //   '/vue-01',
    // ]
  }
}