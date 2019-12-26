module.exports = {
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  title: 'xzadmin-docs',
	description: '让一切复杂的应用程序都从简单的开发开始!',
	head: [
		['link', { rel: 'icon', href: '/logo/xz.png' }]
	],
	themeConfig: {
		sidebarDepth: 3,
		smoothScroll: true,
		nav: [
		  { text: '指南', link: '/guide/develope/quick_start' },
		  { text: 'API', link: '/api/front_end' },
			{ text: '部署', link: '/online/front_end' },
			{ text: '日志', link: '/update/' },
		  { 
				text: '项目地址', 
				items: [
					{ text: "前端项目地址", link: "https://github.com/MikuBlog/xz-admin" },
					{ text: "后台项目地址", link: "" },
				],
			},
		],
		sidebar: {
			'/guide/': [{
				title: "指南",
				collapsable: false,
				children: [
					'develope/quick_start',
					'develope/front_end',
					'develope/back_end',
				]
			}, {
				title: "其他",
				collapsable: false,
				children: [
					'other/question',
					'other/tips'
				]
			}],
			'/api/': [{
				title: "API",
				collapsable: false,
				children: [
					'front_end',
					'back_end'
				]
			}],
			'/online/': [{
				title: "部署",
				collapsable: false,
				children: [
					'front_end',
					'back_end'
				]
			}]
		}
	}
}