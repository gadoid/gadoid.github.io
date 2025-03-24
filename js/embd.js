// 创建并设置聊天机器人配置
window.difyChatbotConfig = {
  token: 'hmGdio4yZznRsvR7'
};

// 创建脚本元素并设置属性
const script = document.createElement('script');
script.src = 'https://udify.app/embed.min.js';
script.id = 'hmGdio4yZznRsvR7';
script.defer = true;
document.body.appendChild(script);

// 创建样式元素并设置聊天机器人样式
const style = document.createElement('style');
style.textContent = `
  #dify-chatbot-bubble-button {
    background-color: #1C64F2 !important;
  }
  #dify-chatbot-bubble-window {
    width: 24rem !important;
    height: 40rem !important;
  }
`;
document.head.appendChild(style);
