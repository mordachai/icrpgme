// Convenience constructor methods

// Field
export const f = foundry.data.fields;

// BooleanField
export const boolean = (obj = {}) => new f.BooleanField({ ...{ required: true, initial: false }, ...obj });

// StringField
export const string = (obj = {}) => new f.StringField({ ...{ initial: '' }, ...obj });

// NumberField
export const number = (obj = {}) =>
  new f.NumberField({ ...{ required: true, nullable: false, initial: 0, integer: true }, ...obj });

// BoundedNumberField
export const bnf = (m) => number({ min: -m, max: m });

// AttributeField
export const attributef = (m = 6) =>
  new f.SchemaField({
    total: bnf(m),
    base: bnf(m),
    lifeform: bnf(m),
    loot: bnf(m),
  });

export const schema = (obj) => new f.SchemaField(obj);
