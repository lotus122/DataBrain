/* ============================================================
 * DataBrain 运行时环境配置模板
 * ------------------------------------------------------------
 * 用法：复制本文件为 config.js，再按实际情况填写。
 *   cp js/config.example.js js/config.js
 * config.js 已在 .gitignore 中忽略，不会提交到公开仓库，
 * 请勿把真实 webhook / 服务器地址直接写进 index.html。
 * ============================================================ */
window.DATABRAIN_CONFIG = {
  // 飞书自定义机器人 webhook（日志推送）。不填则自动关闭飞书日志。
  feishuWebhook: '',

  // 行为埋点上报地址。不填或 trackEnabled=false 则不上报。
  trackUrl: '',
  trackEnabled: false
};
