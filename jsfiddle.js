let clearBtn = document.getElementById('clear');
clearBtn.onclick = (event) => {
  const htmlContent = document.getElementById('html-content');
  if (htmlContent) {
    htmlContent.value = '';
  }

  const jsContent = document.getElementById('js-content');
  if (jsContent) {
    jsContent.value = '';
  }

  const cssContent = document.getElementById('css-content');
  if (cssContent) {
    cssContent.value = '';
  }
}

let runBtn = document.getElementById('run');
runBtn.onclick = (event) => {
  const htmlContent = document.getElementById('html-content');
  const jsContent = document.getElementById('js-content');
  const cssContent = document.getElementById('css-content');

  const content = `
    <html>
      <head>
        <style>${cssContent.value}</style>
      </head>
      <body>
        ${htmlContent.value}
        <script>${jsContent.value}</script>
      </body>
    </html>`

  // write content result to iframe
  let ifrm = document.getElementById('display-content');
  ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
  ifrm.document.open();
  ifrm.document.write(content);
  ifrm.document.close();
}
