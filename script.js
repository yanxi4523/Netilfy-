// 模拟文章数据
const articlesData = {
    all: [
        { title: "深入理解 JavaScript 闭包原理", desc: "闭包是 JavaScript 中最核心...", tag: "原创", date: "2023-10-24" },
        { title: "2024年 Web 前端开发路线图", desc: "前端技术日新月异...", tag: "转载", date: "2023-10-20" },
        { title: "CSS Grid 布局完全指南", desc: "Grid 布局是二维布局系统...", tag: "原创", date: "2023-10-15" }
    ],
    hot: [
        { title: "Python 爬虫从入门到入狱", desc: "请在法律允许范围内进行技术研究...", tag: "热榜", date: "2023-09-01" }
    ],
    resource: [
        { title: "[PDF] 高性能 MySQL 第四版", desc: "下载链接...", tag: "资源", date: "2023-08-12" }
    ]
};

// 切换 Tab 函数
function switchTab(element, type) {
    // 1. 移除所有 active 类
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // 2. 给当前点击的 Tab 添加 active 类
    element.classList.add('active');

    // 3. 重新渲染文章列表 (模拟)
    const listContainer = document.getElementById('articleList');
    listContainer.innerHTML = ''; // 清空当前列表

    const data = articlesData[type] || [];
    
    // 如果没有数据
    if (data.length === 0) {
        listContainer.innerHTML = '<div style="text-align:center; padding:50px; color:#999;">暂无数据</div>';
        return;
    }

    // 遍历数据生成 HTML
    data.forEach(article => {
        const articleHTML = `
            <article class="card article-item">
                <div class="article-header">
                    <span class="${article.tag === '原创' ? 'tag-original' : 'tag-repost'}">${article.tag}</span>
                    <a href="#" class="article-title">${article.title}</a>
                </div>
                <p class="article-desc">${article.desc}</p>
                <div class="article-meta">
                    <span><i class="far fa-eye"></i> ${Math.floor(Math.random() * 5000)}</span>
                    <span><i class="far fa-thumbs-up"></i> ${Math.floor(Math.random() * 100)}</span>
                    <span class="date">${article.date}</span>
                </div>
            </article>
        `;
        listContainer.innerHTML += articleHTML;
    });
}