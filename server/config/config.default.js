/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1658840760264_1620';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://localhost:3000'],
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  exports.mongoose = {
    client: {
      url: 'mongodb://localhost:27017/post',
      options: {},
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};
