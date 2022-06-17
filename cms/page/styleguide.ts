import meta from "../symbols/meta";
import header from "../symbols/header";
import { CmsCollectionFile } from "netlify-cms-core";

const styleguide: CmsCollectionFile = {
  file: "content/page/styleguide.json",
  label: "Styleguide",
  name: "styleguide",
  fields: [meta, header],
};

export default styleguide;
