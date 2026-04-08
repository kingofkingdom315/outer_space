import outer_spaceDataModel from "./base-model.mjs";

export default class outer_spaceItemBase extends outer_spaceDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}