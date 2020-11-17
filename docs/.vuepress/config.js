module.exports = {
  title: 'k-vue-ui',
  description: '基于element-ui开发的常用的组件',
  head: [
    ['link', { rel: 'icon', href: '/images/cat.jpeg' }],
  ],
  base: '/kui/', // 这是部署到github相关的配置
  dest: 'kui',
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  configureWebpack: {
    resolve: {
      // alias: {
      //   '@alias': '/'
      // }
    }
  },
  themeConfig: {
    sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    // 顶部导航栏
    nav: [
      { text: '组件', link: '/components/input' },
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub首页', link: 'https://github.com/Happylife56' }
        ]
      },
    ],
    sidebar: {
      '/components/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            ['/components/development/install', '安装'],
          ]
        },
        {
          title: '组件',
          collapsable: false,
          path: '/components/input',
          children: [
            // ['/components/alert/', 'Alert'],
            ['/components/input', 'input组件'],
          ]
        },

      ]
    }
  }
}