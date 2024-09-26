import React, { useEffect } from 'react';
import PropTypes from 'prop-types';



export default function TawkWidget({ tawkWidget: { text } }) {

  let src = extractSrcValue(text);

  useEffect(() => {
    if (src) {
      var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();

      let src = extractSrcValue(text);

      (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = src;
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();
      return () => {
        // 卸载组件时移除脚本
        document.body.removeChild(s1);
      };
    }
  }, []);

  return (
    <></>
  );
}

TawkWidget.propTypes = {
  text: PropTypes.string,
};

TawkWidget.defaultProps = {
  text: '',
};

export const query = `
  query Query($settings: JSON) {
    tawkWidget(settings: $settings) {
      text
    }
  }
`;

export const variables = `{
  settings: getWidgetSetting()
}`;


/**
 * 从 <script> 标签中提取 链接 的值
 * @param {string} scriptTag - 包含 <script> 标签的字符串
 * @returns {string|null} - 返回 src 的值，如果未匹配则返回 null
 */
function extractSrcValue(scriptTag) {
  // 使用正则表达式匹配并提取 src 的值（带引号和不带引号两种情况）
  const match = scriptTag.match(/https[^']+/)

  // 如果匹配成功，返回 src 的值；否则返回 null
  return match ? match[0] : null;
}
