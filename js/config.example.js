/* ============================================================
 * DataBrain 运行时环境配置模板
 * ------------------------------------------------------------
 * 用法：复制本文件为 js/config.js，再按实际情况填写。
 *   cp js/config.example.js js/config.js
 * 默认 index.html 不强制加载 config.js，避免文件缺失时报 404；
 * 需要启用时可在 vendor 依赖之后加入：
 *   <script src="js/config.js"></script>
 * config.js 已在 .gitignore 中忽略，不会提交到公开仓库。
 * ============================================================ */
window.DATABRAIN_CONFIG = {
  // 飞书自定义机器人 Webhook（日志推送）。留空则关闭飞书日志。
  feishuWebhook: '',

  // 行为埋点上报地址。只有 trackEnabled 为 true 且地址非空时才上报。
  trackUrl: '',
  trackEnabled: false,

  // 仅在自己的 Netlify 站点开启匿名表单遥测；GitHub Pages 保持 false。
  enableNetlifyTelemetry: false
};
