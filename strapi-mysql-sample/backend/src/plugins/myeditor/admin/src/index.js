// path: ./src/plugins/wysiwyg/admin/src/index.js

import pluginPkg from "../../package.json";
import Wysiwyg from "./components/Wysiwyg";
import pluginId from "./pluginId";

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    // console.log(app)
    //rich text に対応
    // app.addFields({ type: 'wysiwyg', Component: Wysiwyg });
    //short text に対応
    // app.addFields({ type: 'text', Component: Wysiwyg });
    app.addFields([
      //使用できる変数一覧は以下のパス
      ///Users/nakamurakazuki/Desktop/strapi/strapi-mysql-sample/backend/node_modules/@strapi/admin/admin/src/content-manager/components/Inputs/utils/getInputType.js
      { type: 'textarea', Component: Wysiwyg },
    ]);
    app.registerPlugin({
      id: pluginId,
      isReady: true,
      name,
    });
  },
  bootstrap() {},
};
 