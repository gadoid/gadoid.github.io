// 在 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 设置聊天机器人配置
  window.difyChatbotConfig = {
    token: 'hmGdio4yZznRsvR7'
  };
  
  // 创建聊天机器人脚本元素
  var scriptElement = document.createElement('script');
  scriptElement.src = 'https://udify.app/embed.min.js';
  scriptElement.id = 'hmGdio4yZznRsvR7';
  scriptElement.defer = true;
  document.body.appendChild(scriptElement);
  
  // 创建样式元素
  var styleElement = document.createElement('style');
  styleElement.textContent = `
    #dify-chatbot-bubble-button {
      background-color: #1C64F2 !important;
    }
    #dify-chatbot-bubble-window {
      width: 24rem !important;
      height: 40rem !important;
    }
  `;
  document.head.appendChild(styleElement);
});
