import { ISchema } from '@formily/react';
import { constraintsProps, relationshipType, reverseFieldProperties } from './properties';
import { IField } from './types';

export const o2o: IField = {
  name: 'o2o',
  type: 'object',
  group: 'relation',
  order: 3,
  title: '{{t("One to one")}}',
  description: '{{t("One to one description")}}',
  isAssociation: true,
  default: {
    type: 'hasOne',
    // name,
    uiSchema: {
      // title,
      'x-component': 'AssociationField',
      'x-component-props': {
        // mode: 'tags',
        multiple: false,
        fieldNames: {
          label: 'id',
          value: 'id',
        },
      },
    },
    reverseField: {
      interface: 'obo',
      type: 'belongsTo',
      // title: '{{t("One to one (belongs to)")}}',
      // name,
      uiSchema: {
        // title,
        'x-component': 'AssociationField',
        'x-component-props': {
          // mode: 'tags',
          multiple: false,
          fieldNames: {
            label: 'id',
            value: 'id',
          },
        },
      },
    },
  },
  availableTypes: ['hasOne'],
  schemaInitialize(schema: ISchema, { field, block, readPretty, action }) {
    if (['Table', 'Kanban'].includes(block)) {
      schema['x-component-props'] = schema['x-component-props'] || {};
      schema['x-component-props']['ellipsis'] = true;

      // 预览文件时需要的参数
      schema['x-component-props']['size'] = 'small';
    }
  },
  properties: {
    'uiSchema.title': {
      type: 'string',
      title: '{{t("Field display name")}}',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'string',
      title: '{{t("Field name")}}',
      required: true,
      'x-disabled': '{{ !createOnly }}',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      description:
        "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
    },
    type: relationshipType,
    grid: {
      type: 'void',
      'x-component': 'Grid',
      properties: {
        row1: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col11: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                source: {
                  type: 'void',
                  title: '{{t("Source collection")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'SourceCollection',
                  'x-disabled': true,
                },
              },
            },
            col12: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                target: {
                  type: 'string',
                  title: '{{t("Target collection")}}',
                  required: true,
                  'x-reactions': ['{{useAsyncDataSource(loadCollections, ["file"])}}'],
                  'x-decorator': 'FormItem',
                  'x-component': 'Select',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
        row2: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col21: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                sourceKey: {
                  type: 'void',
                  title: '{{t("Source key")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'SourceKey',
                },
              },
            },
            col22: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                foreignKey: {
                  type: 'string',
                  title: '{{t("Foreign key")}}',
                  required: true,
                  default: '{{ useNewId("f_") }}',
                  description:
                    "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-validator': 'uid',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
      },
    },
    'reverseField.name': {
      type: 'string',
      title: '{{t("Inverse field name")}}',
      // required: true,
      'x-hidden': '{{ !createOnly }}',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      description:
        "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
    },
  },
  filterable: {
    nested: true,
    children: [
      // {
      //   name: 'id',
      //   title: '{{t("Exists")}}',
      //   operators: [
      //     { label: '{{t("exists")}}', value: '$exists', noValue: true },
      //     { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
      //   ],
      //   schema: {
      //     title: '{{t("Exists")}}',
      //     type: 'string',
      //     'x-component': 'Input',
      //   },
      // },
    ],
  },
};

export const oho: IField = {
  name: 'oho',
  type: 'object',
  group: 'relation',
  order: 3,
  title: '{{t("One to one (has one)")}}',
  description: '{{t("One to one description")}}',
  isAssociation: true,
  default: {
    type: 'hasOne',
    // name,
    uiSchema: {
      // title,
      'x-component': 'AssociationField',
      'x-component-props': {
        // mode: 'tags',
        multiple: false,
        fieldNames: {
          label: 'id',
          value: 'id',
        },
      },
    },
    reverseField: {
      interface: 'obo',
      type: 'belongsTo',
      // title: '{{t("One to one (belongs to)")}}',
      // name,
      uiSchema: {
        // title,
        'x-component': 'AssociationField',
        'x-component-props': {
          // mode: 'tags',
          multiple: false,
          fieldNames: {
            label: 'id',
            value: 'id',
          },
        },
      },
    },
  },
  schemaInitialize(schema: ISchema, { field, block, readPretty, action }) {
    // schema['type'] = 'object';
    if (['Table', 'Kanban'].includes(block)) {
      schema['x-component-props'] = schema['x-component-props'] || {};
      schema['x-component-props']['ellipsis'] = true;

      // 预览文件时需要的参数
      schema['x-component-props']['size'] = 'small';
    }
  },
  properties: {
    'uiSchema.title': {
      type: 'string',
      title: '{{t("Field display name")}}',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'string',
      title: '{{t("Field name")}}',
      required: true,
      'x-disabled': '{{ !createOnly }}',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      description:
        "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
    },
    type: relationshipType,
    grid: {
      type: 'void',
      'x-component': 'Grid',
      properties: {
        row1: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col11: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                source: {
                  type: 'void',
                  title: '{{t("Source collection")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'SourceCollection',
                  'x-disabled': true,
                },
              },
            },
            col12: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                target: {
                  type: 'string',
                  title: '{{t("Target collection")}}',
                  required: true,
                  'x-reactions': ['{{useAsyncDataSource(loadCollections, ["file"])}}'],
                  'x-decorator': 'FormItem',
                  'x-component': 'Select',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
        row2: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col21: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                sourceKey: {
                  type: 'void',
                  title: '{{t("Source key")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'SourceKey',
                },
              },
            },
            col22: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                foreignKey: {
                  type: 'string',
                  title: '{{t("Foreign key")}}',
                  required: true,
                  default: '{{ useNewId("f_") }}',
                  description:
                    "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-validator': 'uid',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
      },
    },
    ...constraintsProps,
    ...reverseFieldProperties,
  },
  filterable: {
    nested: true,
    children: [
      // {
      //   name: 'id',
      //   title: '{{t("Exists")}}',
      //   operators: [
      //     { label: '{{t("exists")}}', value: '$exists', noValue: true },
      //     { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
      //   ],
      //   schema: {
      //     title: '{{t("Exists")}}',
      //     type: 'string',
      //     'x-component': 'Input',
      //   },
      // },
    ],
  },
};

export const obo: IField = {
  name: 'obo',
  type: 'object',
  group: 'relation',
  order: 3,
  title: '{{t("One to one (belongs to)")}}',
  description: '{{t("One to one description")}}',
  isAssociation: true,
  default: {
    type: 'belongsTo',
    // name,
    uiSchema: {
      // title,
      'x-component': 'AssociationField',
      'x-component-props': {
        // mode: 'tags',
        multiple: false,
        fieldNames: {
          label: 'id',
          value: 'id',
        },
      },
    },
    reverseField: {
      interface: 'oho',
      type: 'hasOne',
      // name,
      uiSchema: {
        // title,
        'x-component': 'AssociationField',
        'x-component-props': {
          // mode: 'tags',
          multiple: false,
          fieldNames: {
            label: 'id',
            value: 'id',
          },
        },
      },
    },
  },
  schemaInitialize(schema: ISchema, { field, block, readPretty, action, targetCollection }) {
    // schema['type'] = 'object';
    if (['Table', 'Kanban'].includes(block)) {
      schema['x-component-props'] = schema['x-component-props'] || {};
      schema['x-component-props']['ellipsis'] = true;
      // 预览文件时需要的参数
      schema['x-component-props']['size'] = 'small';
    }

    if (targetCollection?.titleField && schema['x-component-props']) {
      schema['x-component-props'].fieldNames = schema['x-component-props'].fieldNames || { value: 'id' };
      schema['x-component-props'].fieldNames.label = targetCollection.titleField;
    }
  },
  properties: {
    'uiSchema.title': {
      type: 'string',
      title: '{{t("Field display name")}}',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    name: {
      type: 'string',
      title: '{{t("Field name")}}',
      required: true,
      'x-disabled': '{{ !createOnly }}',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      description:
        "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
    },
    type: relationshipType,
    grid: {
      type: 'void',
      'x-component': 'Grid',
      properties: {
        row1: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col11: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                source: {
                  type: 'void',
                  title: '{{t("Source collection")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'SourceCollection',
                  'x-disabled': true,
                },
              },
            },
            col12: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                target: {
                  type: 'string',
                  title: '{{t("Target collection")}}',
                  required: true,
                  'x-reactions': ['{{useAsyncDataSource(loadCollections)}}'],
                  'x-decorator': 'FormItem',
                  'x-component': 'Select',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
        row2: {
          type: 'void',
          'x-component': 'Grid.Row',
          properties: {
            col21: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                foreignKey: {
                  type: 'string',
                  title: '{{t("Foreign key")}}',
                  required: true,
                  default: '{{ useNewId("f_") }}',
                  description:
                    "{{t('Randomly generated and can be modified. Support letters, numbers and underscores, must start with an letter.')}}",
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-validator': 'uid',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
            col22: {
              type: 'void',
              'x-component': 'Grid.Col',
              properties: {
                targetKey: {
                  type: 'void',
                  title: '{{t("Target key")}}',
                  'x-decorator': 'FormItem',
                  'x-component': 'TargetKey',
                  'x-disabled': '{{ !createOnly }}',
                },
              },
            },
          },
        },
      },
    },
    ...constraintsProps,
    ...reverseFieldProperties,
  },
  filterable: {
    nested: true,
    children: [
      // {
      //   name: 'id',
      //   title: '{{t("Exists")}}',
      //   operators: [
      //     { label: '{{t("exists")}}', value: '$exists', noValue: true },
      //     { label: '{{t("not exists")}}', value: '$notExists', noValue: true },
      //   ],
      //   schema: {
      //     title: '{{t("Exists")}}',
      //     type: 'string',
      //     'x-component': 'Input',
      //   },
      // },
    ],
  },
};
