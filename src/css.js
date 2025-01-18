/** デフォルトスタイルを上書きする */
export const overrideCss = () => {
	const style = document.createElement("style");

	style.innerHTML = `
.markdown-section pre.shiki > code {
  background: none;
}
  `.trim();

	document.head.appendChild(style);
};
