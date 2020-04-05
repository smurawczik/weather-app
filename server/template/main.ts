const utilities = require("./common");

type TemplateParams = {
  container: string;
  title: string;
  bundle: string[];
  styles?: string[];
  scripts?: string[];
  data?: any;
};

export default ({ container, title, bundle, styles, scripts, data }: TemplateParams) => {
  return `
    <!DOCTYPE html>
      <html>
      <head>
        ${utilities.metaTags()}
        <title>${title || "Default title"}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        ${utilities.linkTags(bundle)}
        ${utilities.linkTags(styles)}
        ${utilities.initialData(data)}
      </head>
      <body>
        <div id="root">${container}</div>
        ${utilities.scriptTags(bundle)}
        ${utilities.scriptTags(scripts)}
      </body>
    </html>
  `;
};
