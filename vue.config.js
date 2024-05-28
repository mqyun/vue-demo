const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // https://app.testnewmedia.xinhuaapp.com/miniprogram/t-mini-app/list
  devServer: {
    proxy: {
      "/miniprogram": {
        target: "https://app.testnewmedia.xinhuaapp.com",
        changeOrigin: true,
      },
    },
  },
});
