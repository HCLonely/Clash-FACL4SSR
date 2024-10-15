const axios = require('axios');
const fs = require('fs');

axios.get('https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini').then((response) => {
  const arr = response.data.split('\n');
  const newText = arr.map((value) => {
    if (value.includes('广告拦截')) {
      if (value.includes('ruleset=')) {
        return 'ruleset=🎯 全球直连,https://raw.githubusercontent.com/HCLonely/Clash-FACL4SSR/refs/heads/main/Direct.list';
      }
      return null;
    }
    if (value.includes('应用净化')) {
      if (value.includes('ruleset=')) {
        return 'ruleset=🚀 节点选择,https://raw.githubusercontent.com/HCLonely/Clash-FACL4SSR/refs/heads/main/Proxy.list';
      }
      return null;
    }
    return value;
  }).join('\n');
  fs.writeFileSync('ACL4SSR_Online_Full_noADJ.ini', newText);
});
