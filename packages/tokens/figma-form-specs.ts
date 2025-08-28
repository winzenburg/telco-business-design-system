// Comcast Business Design System - Form Element Specifications
// Auto-generated from Figma on: 2025-08-13T18:11:14.442Z

export interface FormElementSpec {
  name: string;
  id: string;
  type: string;
  category: string;
  size: {
    width: number | null;
    height: number | null;
  };
  styles: {
    background: string | null;
    border: {
      width: number;
      color: string;
    } | null;
    borderRadius: number | null;
    padding: string | null;
    textColor: string | null;
    fontSize: number | null;
    fontWeight: number | null;
    fontFamily: string | null;
  };
  states: string[];
}

// All form element specifications
export const formElementSpecs: FormElementSpec[] = [
  {
    "name": "Checkbox with Label",
    "id": "7:3251",
    "type": "COMPONENT_SET",
    "category": "checkbox",
    "size": {
      "width": 941,
      "height": 372
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Default, Mode=Light",
    "id": "7:3252",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3253",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Loading, Mode=Light",
    "id": "7:7512",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7513",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Default, Mode=Dark",
    "id": "7:7078",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7079",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Loading, Mode=Dark",
    "id": "7:7524",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7525",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Hover, Mode=Light",
    "id": "7:3276",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3277",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(180, 181, 187, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Hover, Mode=Dark",
    "id": "7:7090",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7091",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Pressed, Mode=Light",
    "id": "7:3288",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3289",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(180, 181, 187, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Pressed, Mode=Dark",
    "id": "7:7102",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7103",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Focused, Mode=Light",
    "id": "7:3300",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3301",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Focused, Mode=Dark",
    "id": "7:7114",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7115",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Default, Mode=Light",
    "id": "7:3408",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3409",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Disabled, Mode=Light",
    "id": "1675:8058",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1675:8083",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Loading, Mode=Light",
    "id": "7:7536",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7537",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Default, Mode=Dark",
    "id": "7:7126",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7127",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Loading, Mode=Dark",
    "id": "7:7548",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7549",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 123,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Hover, Mode=Light",
    "id": "7:3420",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3421",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(180, 181, 187, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Hover, Mode=Dark",
    "id": "7:7138",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7139",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Pressed, Mode=Light",
    "id": "7:3432",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3433",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 32
    },
    "styles": {
      "background": "rgba(180, 181, 187, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Pressed, Mode=Dark",
    "id": "7:7150",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7151",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Focused, Mode=Light",
    "id": "7:3444",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3445",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Checked, State=Focused, Mode=Dark",
    "id": "7:7162",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7163",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Default, Mode=Light",
    "id": "7:3456",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3457",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Loading, Mode=Light",
    "id": "7:7560",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 95,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7561",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 95,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Default, Mode=Dark",
    "id": "7:7174",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7175",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Loading, Mode=Dark",
    "id": "7:7571",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 95,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7572",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 95,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Hover, Mode=Light",
    "id": "7:3479",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3480",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Disabled, Mode=Light",
    "id": "1275:21765",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1275:21766",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Hover, Mode=Dark",
    "id": "7:7185",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7186",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Pressed, Mode=Light",
    "id": "7:3490",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3491",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Pressed, Mode=Dark",
    "id": "7:7196",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7197",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Focused, Mode=Light",
    "id": "7:3501",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:3502",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Read Only, State=Focused, Mode=Dark",
    "id": "7:7207",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 136,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "7:7208",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 115,
      "height": 21
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Status=Unchecked, State=Disabled, Mode=Light",
    "id": "1275:21721",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1275:21722",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Radio with Label/Unchecked/Default/Light",
    "id": "3886:8369",
    "type": "COMPONENT",
    "category": "radio",
    "size": {
      "width": 164,
      "height": 30
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(66, 68, 84, 1)",
      "fontSize": 16,
      "fontWeight": 600,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "3886:8370",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 143,
      "height": 30
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(66, 68, 84, 1)",
      "fontSize": 16,
      "fontWeight": 600,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Radio",
    "id": "3886:8393",
    "type": "INSTANCE",
    "category": "radio",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(21, 23, 43, 1)"
      },
      "borderRadius": 10,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:99122",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 314,
      "height": 112
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "I2357:99122;7:4503",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "I2357:99122;1698:163414",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:140923",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 112
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2357:140925",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "2357:140928",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:136275",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 314,
      "height": 112
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "I2357:136275;7:4503",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "I2357:136275;1698:163414",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:140324",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 314,
      "height": 112
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "I2357:140324;7:4503",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "I2357:140324;1698:163414",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:136222",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 134
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Title & Field",
    "id": "2357:136223",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2357:136225",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "2357:136229",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:140375",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 134
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Title & Field",
    "id": "2357:140376",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2357:140378",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "2357:140382",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:136248",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 142
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2357:136251",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "2357:136255",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "2357:140325",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 142
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2357:140328",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(21, 23, 43, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "2357:140332",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "7:5424",
    "type": "COMPONENT_SET",
    "category": "select",
    "size": {
      "width": 1063,
      "height": 1316
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Mode=Light, Applied=False",
    "id": "7:5425",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "2371:100015",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5427",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:48485",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Active, Mode=Light, Applied=False",
    "id": "2603:53648",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "active"
    ]
  },
  {
    "name": "Field",
    "id": "2603:53650",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "2603:53651",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2603:53654",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Loading, Mode=Light, Applied=False",
    "id": "7:6121",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 62
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:6123",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Mode=Dark, Applied=False",
    "id": "7:5430",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5432",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Loading, Mode=Dark, Applied=False",
    "id": "7:6126",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 62
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:6128",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Active, Mode=Dark, Applied=False",
    "id": "7:5440",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "active"
    ]
  },
  {
    "name": "Input",
    "id": "7:5442",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Focused, Mode=Light, Applied=False",
    "id": "7:5445",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "Field",
    "id": "2371:118656",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5447",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(112, 113, 125, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:118494",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Focused, Mode=Dark, Applied=False",
    "id": "7:5450",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "Input",
    "id": "7:5452",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Hover, Mode=Light, Applied=False",
    "id": "7:5455",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "Field",
    "id": "2371:118819",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5457",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(249, 249, 250, 1)",
      "border": {
        "width": 1,
        "color": "rgba(112, 113, 125, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:118657",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Pressed, Mode=Light, Applied=False",
    "id": "1808:123858",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "2371:119470",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "1808:123860",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(112, 113, 125, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:119308",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Hover, Mode=Dark, Applied=False",
    "id": "7:5460",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "Input",
    "id": "7:5462",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Disabled, Mode=Light, Applied=False",
    "id": "7:5465",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "Field",
    "id": "2371:119145",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5467",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(221, 221, 226, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:118983",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Disabled, Mode=Dark, Applied=False",
    "id": "7:5470",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "Input",
    "id": "7:5472",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(21, 23, 43, 1)",
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error, Mode=Light, Applied=False",
    "id": "7:5475",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 132
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68192",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5477",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2371:119146",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I2371:119146;2376:47886",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 180,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error, Mode=Dark, Applied=False",
    "id": "7:5481",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 171,
      "height": 132
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(231, 52, 60, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68191",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 171,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:5483",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 171,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "5039:15287",
    "type": "FRAME",
    "category": "select",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "5039:15289",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "5039:15290",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "5039:15293",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I5039:15293;2376:47886",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 280,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "2374:121832",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "I2374:121832;2371:100015",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "I2374:121832;7:5427",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "I2374:121832;2371:48485",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 376
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I2374:121832;2371:48485;2376:47886",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 180,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Select",
    "id": "7:3629",
    "type": "COMPONENT_SET",
    "category": "select",
    "size": {
      "width": 116,
      "height": 276
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(10, 78, 204, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Background=Light",
    "id": "7:3630",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(10, 78, 204, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Hover, Background=Light",
    "id": "7:3634",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(8, 59, 153, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "State=Focus, Background=Light",
    "id": "7:3638",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": {
        "width": 2,
        "color": "rgba(13, 98, 255, 1)"
      },
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(8, 59, 153, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "State=Default, Background=Dark",
    "id": "7:3642",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Hover, Background=Dark",
    "id": "7:3646",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(194, 216, 255, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "State=Focus, Background=Dark",
    "id": "7:3650",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 70,
      "height": 26
    },
    "styles": {
      "background": null,
      "border": {
        "width": 2,
        "color": "rgba(13, 98, 255, 1)"
      },
      "borderRadius": 3,
      "padding": null,
      "textColor": "rgba(194, 216, 255, 1)",
      "fontSize": 16,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "Text Input / Search",
    "id": "782:50511",
    "type": "TEXT",
    "category": "input",
    "size": {
      "width": 464,
      "height": 77
    },
    "styles": {
      "background": "rgba(151, 71, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Select / Dropdown",
    "id": "782:50512",
    "type": "TEXT",
    "category": "select",
    "size": {
      "width": 461,
      "height": 77
    },
    "styles": {
      "background": "rgba(151, 71, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Select",
    "id": "782:50513",
    "type": "TEXT",
    "category": "select",
    "size": {
      "width": 269,
      "height": 77
    },
    "styles": {
      "background": "rgba(151, 71, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Checkbox",
    "id": "782:50514",
    "type": "TEXT",
    "category": "checkbox",
    "size": {
      "width": 247,
      "height": 77
    },
    "styles": {
      "background": "rgba(151, 71, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I782:50517;111:1000",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 258,
      "height": 45
    },
    "styles": {
      "background": "rgba(0, 0, 0, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I782:50518;111:1000",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 258,
      "height": 45
    },
    "styles": {
      "background": "rgba(0, 0, 0, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Form Element Documentation",
    "id": "1848:190475",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 711,
      "height": 781
    },
    "styles": {
      "background": "rgba(239, 245, 252, 1)",
      "border": {
        "width": 1,
        "color": "rgba(117, 117, 117, 1)"
      },
      "borderRadius": 8,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 16,
      "fontWeight": 700,
      "fontFamily": "Helvetica Neue"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1848:190349;3:431;3:420",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 448,
      "height": 18
    },
    "styles": {
      "background": "rgba(37, 37, 46, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1848:190349;3:781",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 51,
      "height": 13
    },
    "styles": {
      "background": "rgba(88, 89, 115, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1848:190350;3020:368130",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 51,
      "height": 13
    },
    "styles": {
      "background": "rgba(88, 89, 115, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Checkbox Documentation",
    "id": "1070:60792",
    "type": "COMPONENT",
    "category": "checkbox",
    "size": {
      "width": 711,
      "height": 601.7102661132812
    },
    "styles": {
      "background": "rgba(235, 241, 255, 1)",
      "border": {
        "width": 1.0492265224456787,
        "color": "rgba(0, 7, 75, 1)"
      },
      "borderRadius": 8.39381217956543,
      "padding": null,
      "textColor": "rgba(255, 255, 255, 1)",
      "fontSize": 16,
      "fontWeight": 700,
      "fontFamily": "Helvetica Neue"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1070:60752;992:13639",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 51,
      "height": 13
    },
    "styles": {
      "background": "rgba(112, 113, 125, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1070:60753;3:431;3:420",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 470.053466796875,
      "height": 19
    },
    "styles": {
      "background": "rgba(37, 37, 46, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text",
    "id": "I1070:60753;3:781",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 54,
      "height": 14
    },
    "styles": {
      "background": "rgba(88, 89, 115, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Checkbox",
    "id": "1864:85952",
    "type": "SECTION",
    "category": "checkbox",
    "size": {
      "width": 1575,
      "height": 538
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(0, 0, 0, 1)"
      },
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(84, 53, 237, 1)",
      "fontSize": 9,
      "fontWeight": 600,
      "fontFamily": "Work Sans"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Checkbox",
    "id": "1864:85953",
    "type": "COMPONENT_SET",
    "category": "checkbox",
    "size": {
      "width": 1510,
      "height": 436
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(123, 97, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=false, mode=dark, error=false",
    "id": "1864:86030",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(241, 242, 246, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=false, indeterminate=false, mode=dark, error=false",
    "id": "1864:86034",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=dark, error=false",
    "id": "1864:86038",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(221, 221, 226, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=dark, error=true",
    "id": "1864:86042",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=dark, error=false",
    "id": "1864:86046",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=dark, error=false",
    "id": "1864:86050",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=true, indeterminate=false, mode=dark, error=false",
    "id": "1864:86054",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=true, mode=dark, error=false",
    "id": "1864:86058",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(255, 255, 255, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=true, indeterminate=false, mode=dark, error=true",
    "id": "1864:86062",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=true, indeterminate=false, mode=dark, error=true",
    "id": "1864:86066",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=dark, error=true",
    "id": "1864:86070",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=true, mode=dark, error=true",
    "id": "1864:86074",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=true, mode=dark, error=true",
    "id": "1864:86078",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=dark, error=true",
    "id": "1864:86082",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=true, indeterminate=false, mode=dark, error=false",
    "id": "1864:86086",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=false, indeterminate=true, mode=dark, error=false",
    "id": "1864:86090",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=dark, error=false",
    "id": "1864:86094",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=false, mode=dark, error=true",
    "id": "1864:86098",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=dark, error=true",
    "id": "1864:86102",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=false, mode=light, error=false",
    "id": "1864:86258",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(21, 23, 43, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=false, indeterminate=false, mode=light, error=false",
    "id": "1864:86262",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(157, 158, 167, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=light, error=false",
    "id": "1864:86266",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(43, 45, 63, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=light, error=true",
    "id": "1864:86270",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=light, error=false",
    "id": "1864:86274",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=light, error=false",
    "id": "1864:86278",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=true, indeterminate=false, mode=light, error=false",
    "id": "1864:86282",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(245, 248, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(13, 98, 255, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=true, mode=light, error=false",
    "id": "1864:86286",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(43, 45, 63, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=true, indeterminate=false, mode=light, error=true",
    "id": "1864:86290",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 235, 239, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=true, indeterminate=false, mode=light, error=true",
    "id": "1864:86294",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=light, error=true",
    "id": "1864:86298",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=true, mode=light, error=true",
    "id": "1864:86302",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=hover, selected=false, indeterminate=true, mode=light, error=true",
    "id": "1864:86306",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=light, error=true",
    "id": "1864:86310",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=true, indeterminate=false, mode=light, error=false",
    "id": "1864:86314",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(157, 158, 167, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=disabled, selected=false, indeterminate=true, mode=light, error=false",
    "id": "1864:86318",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(157, 158, 167, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=light, error=false",
    "id": "1864:86322",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "size=medium, state=default, selected=false, indeterminate=false, mode=light, error=true",
    "id": "1864:86326",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=light, error=true",
    "id": "1864:86330",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 20,
      "height": 20
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(231, 52, 60, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "Checkbox with Label",
    "id": "1864:86447",
    "type": "SECTION",
    "category": "checkbox",
    "size": {
      "width": 1993,
      "height": 3926
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(0, 0, 0, 1)"
      },
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(84, 53, 237, 1)",
      "fontSize": 9,
      "fontWeight": 600,
      "fontFamily": "Work Sans"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Checkbox with Label",
    "id": "1864:86448",
    "type": "COMPONENT_SET",
    "category": "checkbox",
    "size": {
      "width": 1868,
      "height": 3796
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(123, 97, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86449",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86450",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86457",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86458",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86465",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86466",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86473",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86474",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86481",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86482",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86489",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86490",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86497",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86498",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86505",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86506",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86513",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86514",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86521",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86522",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86529",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86530",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86537",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86538",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86545",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86546",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86553",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86554",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86561",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86562",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86569",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86570",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86577",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86578",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86585",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86586",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86593",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86594",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86601",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86602",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86609",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86610",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86617",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86618",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86625",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86626",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86633",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86634",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86641",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86642",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86649",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86650",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86657",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86658",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86665",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86666",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86673",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86674",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86681",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86682",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86689",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86690",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86697",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86698",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86705",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86706",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
    "id": "1864:86713",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86714",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
    "id": "1864:86721",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86722",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
    "id": "1864:86729",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86730",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86737",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86738",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86745",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86746",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86753",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86754",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86761",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86762",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86769",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86770",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86777",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86778",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86785",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86786",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86793",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86794",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86801",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86802",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86809",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86810",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86817",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86818",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86825",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86826",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86833",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86834",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86841",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86842",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86849",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86850",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86857",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86858",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86865",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86866",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86873",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86874",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86881",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86882",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86889",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86890",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86897",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86898",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86905",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86906",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86913",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86914",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86921",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86922",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86929",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86930",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86937",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86938",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86945",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86946",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86953",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86954",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86961",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86962",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86969",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86970",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:86977",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86978",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:86985",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86986",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:86993",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:86994",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
    "id": "1864:87001",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87002",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
    "id": "1864:87009",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87010",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
    "id": "1864:87017",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87018",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87025",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87026",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87033",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87034",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87041",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87042",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87049",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87050",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87057",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87058",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87065",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87066",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87073",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87074",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87081",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87082",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87089",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87090",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87097",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87098",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87105",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87106",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87113",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87114",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87121",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87122",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87129",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87130",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87137",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87138",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87145",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87146",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87153",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87154",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87161",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 84
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87162",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87169",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87170",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87177",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87178",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87185",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87186",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87193",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87194",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87201",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87202",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87209",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87210",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87217",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87218",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87225",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87226",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87233",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87234",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87241",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87242",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87249",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87250",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87257",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 68
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87258",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87265",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87266",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87273",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87274",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87281",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87282",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
    "id": "1864:87289",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87290",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
    "id": "1864:87297",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87298",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
    "id": "1864:87305",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 76
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87306",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87313",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87314",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87321",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87322",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87329",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87330",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87337",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87338",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87345",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87346",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87353",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87354",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87361",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87362",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87369",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87370",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87377",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87378",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87385",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87386",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87393",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87394",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
    "id": "1864:87401",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87402",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87409",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87410",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87417",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87418",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87425",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87426",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87433",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87434",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87441",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87442",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87449",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87450",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87457",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87458",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87465",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87466",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87473",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87474",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87481",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87482",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87489",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87490",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
    "id": "1864:87497",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87498",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87505",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87506",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87513",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87514",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87521",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87522",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87529",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87530",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87537",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87538",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87545",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87546",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87553",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87554",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87561",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87562",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87569",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87570",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87577",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87578",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87585",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87586",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
    "id": "1864:87593",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87594",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87601",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87602",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87609",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87610",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87617",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87618",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87625",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87626",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87633",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87634",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87641",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87642",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87649",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87650",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87657",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87658",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87665",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87666",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87673",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87674",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87681",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87682",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
    "id": "1864:87689",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87690",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87697",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87698",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87705",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87706",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87713",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87714",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87721",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87722",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87729",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87730",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87737",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87738",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87745",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87746",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87753",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87754",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87761",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87762",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87769",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87770",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87777",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87778",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
    "id": "1864:87785",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87786",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87793",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87794",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87801",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87802",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87809",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87810",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87817",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87818",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87825",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87826",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87833",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87834",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87841",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87842",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87849",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87850",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87857",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87858",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87865",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87866",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87873",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87874",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
    "id": "1864:87881",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87882",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87889",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87890",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87897",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87898",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87905",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87906",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87913",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87914",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87921",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87922",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87929",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87930",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87937",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87938",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87945",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87946",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87953",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87954",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87961",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87962",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87969",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87970",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
    "id": "1864:87977",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87978",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:87985",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87986",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:87993",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:87994",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88001",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88002",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88009",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88010",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88017",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88018",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88025",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88026",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88033",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88034",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88041",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88042",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88049",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88050",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88057",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88058",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88065",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88066",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
    "id": "1864:88073",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88074",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88081",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88082",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88089",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88090",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88097",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88098",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88105",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88106",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88113",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88114",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88121",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88122",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88129",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88130",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88137",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88138",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88145",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88146",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88153",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88154",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88161",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88162",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
    "id": "1864:88169",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88170",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88177",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88178",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88185",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88186",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88193",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88194",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88201",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88202",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88209",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88210",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88217",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88218",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88225",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88226",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88233",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88234",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88241",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88242",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88249",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88250",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88257",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88258",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
    "id": "1864:88265",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88266",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88273",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88274",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88281",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88282",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88289",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88290",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88297",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88298",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88305",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88306",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88313",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88314",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88321",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88322",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88329",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88330",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88337",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88338",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88345",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88346",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88353",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88354",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
    "id": "1864:88361",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88362",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88369",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88370",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88377",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88378",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 174,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88385",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88386",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88393",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88394",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 166,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88401",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88402",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88409",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88410",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 186,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88417",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88418",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88425",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88426",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 165,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88433",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88434",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88441",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88442",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 157,
      "height": 24
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88449",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88450",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
    "id": "1864:88457",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled",
      "error"
    ]
  },
  {
    "name": "checkbox-frame",
    "id": "1864:88458",
    "type": "FRAME",
    "category": "checkbox",
    "size": {
      "width": 177,
      "height": 32
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown Selection",
    "id": "2374:157490",
    "type": "COMPONENT_SET",
    "category": "select",
    "size": {
      "width": 844,
      "height": 553
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Property 1=Open",
    "id": "2374:157489",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 494
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "2374:157292",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "I2374:157292;2371:118656",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2389:45697",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 380
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I2389:45697;2376:46050",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 180,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Property 1=Search No Results",
    "id": "2728:88262",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 294
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "2728:88263",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "I2728:88263;2603:53650",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2728:88264",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 180
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I2728:88264;2728:60989",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 180,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Property 1=Select no results",
    "id": "2750:61419",
    "type": "COMPONENT",
    "category": "select",
    "size": {
      "width": 180,
      "height": 294
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "2750:61420",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "I2750:61420;2371:118656",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "_Select List",
    "id": "2750:61421",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 180
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I2750:61421;2728:60989",
    "type": "INSTANCE",
    "category": "input",
    "size": {
      "width": 280,
      "height": 48
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Property 1=Closed",
    "id": "2374:157491",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Dropdown",
    "id": "2374:157492",
    "type": "INSTANCE",
    "category": "select",
    "size": {
      "width": 180,
      "height": 110
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Field",
    "id": "I2374:157492;2371:100015",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "I4558:62778;6971:299551",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 335,
      "height": 48
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(117, 117, 117, 1)"
      },
      "borderRadius": 2,
      "padding": null,
      "textColor": "rgba(0, 0, 0, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "I4558:62778;6971:299559",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 335,
      "height": 40
    },
    "styles": {
      "background": "rgba(117, 117, 117, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Form Elements — Text Input/Search",
    "id": "5692:103859",
    "type": "SECTION",
    "category": "input",
    "size": {
      "width": 3128,
      "height": 2415
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(0, 0, 0, 1)"
      },
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Input",
    "id": "7:3556",
    "type": "COMPONENT_SET",
    "category": "input",
    "size": {
      "width": 1426,
      "height": 1171
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Mode=Light, Icon Alignment=Left",
    "id": "7:4501",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Mode=Light, Icon Alignment=Right",
    "id": "1729:43650",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Loading, Mode=Light, Icon Alignment=Left",
    "id": "7:6043",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 62
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:6045",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Loading, Mode=Light, Icon Alignment=Right",
    "id": "1729:43656",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 180,
      "height": 62
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "1729:43658",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 180,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default, Mode=Dark, Icon Alignment=Left",
    "id": "7:5205",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Loading, Mode=Dark, Icon Alignment=Left",
    "id": "7:6048",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 62
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Input",
    "id": "7:6050",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Active, Mode=Light, Icon Alignment=Left",
    "id": "7:4465",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "active"
    ]
  },
  {
    "name": "State=Active, Mode=Light, Icon Alignment=Right",
    "id": "1729:43659",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "active"
    ]
  },
  {
    "name": "State=Active, Mode=Dark, Icon Alignment=Left",
    "id": "7:5210",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "active"
    ]
  },
  {
    "name": "State=Focused, Mode=Light, Icon Alignment=Left",
    "id": "7:4429",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "State=Focused, Mode=Light, Icon Alignment=Right",
    "id": "1729:43665",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "State=Focused, Mode=Dark, Icon Alignment=Left",
    "id": "7:5215",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "State=Hover, Mode=Light, Icon Alignment=Left",
    "id": "7:4392",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "State=Hover, Mode=Light, Icon Alignment=Right",
    "id": "1729:43671",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "State=Hover, Mode=Dark, Icon Alignment=Left",
    "id": "7:5220",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "hover"
    ]
  },
  {
    "name": "State=Disabled, Mode=Light, Icon Alignment=Left",
    "id": "7:4354",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "State=Disabled, Mode=Light, Icon Alignment=Right",
    "id": "1729:43677",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "State=Disabled, Mode=Dark, Icon Alignment=Left",
    "id": "7:5225",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "State=Error, Mode=Light, Icon Alignment=Left",
    "id": "7:3569",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:67997",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164374",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error, Mode=Light, Icon Alignment=Right",
    "id": "1729:43683",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:67998",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1729:43689",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error Focus, Mode=Light, Icon Alignment=Left",
    "id": "750:42302",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:67999",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164376",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error Focus, Mode=Light, Icon Alignment=Right",
    "id": "1729:43690",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68000",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1729:43696",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error filled, Mode=Light, Icon Alignment=Left",
    "id": "750:43771",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68001",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164378",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error filled, Mode=Light, Icon Alignment=Right",
    "id": "1729:43697",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 106
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68050",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 84
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1729:43703",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(66, 68, 84, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error, Mode=Dark, Icon Alignment=Left",
    "id": "7:5230",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(231, 52, 60, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68053",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164390",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(249, 249, 250, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error Focus, Mode=Dark, Icon Alignment=Left",
    "id": "750:42308",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(231, 52, 60, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68052",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164392",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(249, 249, 250, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Error filled, Mode=Dark, Icon Alignment=Left",
    "id": "750:43777",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 114
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(231, 52, 60, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Title & Field",
    "id": "1746:68051",
    "type": "FRAME",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 92
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Hint Text",
    "id": "1698:164394",
    "type": "TEXT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 16
    },
    "styles": {
      "background": "rgba(249, 249, 250, 1)",
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Text Area",
    "id": "1984:79626",
    "type": "COMPONENT_SET",
    "category": "unknown",
    "size": {
      "width": 807,
      "height": 1411
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=Default",
    "id": "1984:79625",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79607",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=focused",
    "id": "1984:79645",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79646",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(180, 181, 187, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=error",
    "id": "1984:79663",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 122
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(209, 19, 20, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "error"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79664",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=error focused",
    "id": "1984:79681",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "focus",
      "error"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79682",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": "rgba(255, 255, 255, 1)",
      "border": {
        "width": 1,
        "color": "rgba(209, 19, 20, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=disabled",
    "id": "1984:79699",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "disabled"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79700",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": "rgba(241, 242, 246, 1)",
      "border": {
        "width": 1,
        "color": "rgba(221, 221, 226, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "State=skeleton",
    "id": "1984:79717",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(112, 113, 125, 1)",
      "fontSize": 12,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Extended Text Input",
    "id": "1984:79718",
    "type": "FRAME",
    "category": "input",
    "size": {
      "width": 767,
      "height": 100
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(221, 221, 226, 1)"
      },
      "borderRadius": 4,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "Label",
    "id": "1698:152266",
    "type": "COMPONENT_SET",
    "category": "label",
    "size": {
      "width": 334,
      "height": 134
    },
    "styles": {
      "background": null,
      "border": {
        "width": 1,
        "color": "rgba(151, 71, 255, 1)"
      },
      "borderRadius": 5,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "mode=light",
    "id": "1698:150935",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": null,
      "fontSize": null,
      "fontWeight": null,
      "fontFamily": null
    },
    "states": [
      "default"
    ]
  },
  {
    "name": "mode=dark",
    "id": "1698:152267",
    "type": "COMPONENT",
    "category": "unknown",
    "size": {
      "width": 314,
      "height": 40
    },
    "styles": {
      "background": null,
      "border": null,
      "borderRadius": null,
      "padding": null,
      "textColor": "rgba(252, 252, 252, 1)",
      "fontSize": 14,
      "fontWeight": 400,
      "fontFamily": "Lato"
    },
    "states": [
      "default"
    ]
  }
];

// Categorized form specifications
export const categorizedForms = {
  "checkbox": [
    {
      "name": "Checkbox with Label",
      "id": "7:3251",
      "type": "COMPONENT_SET",
      "category": "checkbox",
      "size": {
        "width": 941,
        "height": 372
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3253",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7513",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7079",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7525",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3277",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(180, 181, 187, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7091",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3289",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(180, 181, 187, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7103",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3301",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7115",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3409",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1675:8083",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7537",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7127",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7549",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3421",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(180, 181, 187, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7139",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3433",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 32
      },
      "styles": {
        "background": "rgba(180, 181, 187, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7151",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3445",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7163",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3457",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7561",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 95,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7175",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7572",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 95,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3480",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1275:21766",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7186",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3491",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7197",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:3502",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "7:7208",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 115,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1275:21722",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "3886:8370",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 143,
        "height": 30
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(66, 68, 84, 1)",
        "fontSize": 16,
        "fontWeight": 600,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox",
      "id": "782:50514",
      "type": "TEXT",
      "category": "checkbox",
      "size": {
        "width": 247,
        "height": 77
      },
      "styles": {
        "background": "rgba(151, 71, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox Documentation",
      "id": "1070:60792",
      "type": "COMPONENT",
      "category": "checkbox",
      "size": {
        "width": 711,
        "height": 601.7102661132812
      },
      "styles": {
        "background": "rgba(235, 241, 255, 1)",
        "border": {
          "width": 1.0492265224456787,
          "color": "rgba(0, 7, 75, 1)"
        },
        "borderRadius": 8.39381217956543,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 16,
        "fontWeight": 700,
        "fontFamily": "Helvetica Neue"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox",
      "id": "1864:85952",
      "type": "SECTION",
      "category": "checkbox",
      "size": {
        "width": 1575,
        "height": 538
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(0, 0, 0, 1)"
        },
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(84, 53, 237, 1)",
        "fontSize": 9,
        "fontWeight": 600,
        "fontFamily": "Work Sans"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox",
      "id": "1864:85953",
      "type": "COMPONENT_SET",
      "category": "checkbox",
      "size": {
        "width": 1510,
        "height": 436
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(123, 97, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox with Label",
      "id": "1864:86447",
      "type": "SECTION",
      "category": "checkbox",
      "size": {
        "width": 1993,
        "height": 3926
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(0, 0, 0, 1)"
        },
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(84, 53, 237, 1)",
        "fontSize": 9,
        "fontWeight": 600,
        "fontFamily": "Work Sans"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Checkbox with Label",
      "id": "1864:86448",
      "type": "COMPONENT_SET",
      "category": "checkbox",
      "size": {
        "width": 1868,
        "height": 3796
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(123, 97, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86450",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86458",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86466",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86474",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86482",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86490",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86498",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86506",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86514",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86522",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86530",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86538",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86546",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86554",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86562",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86570",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86578",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86586",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86594",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86602",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86610",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86618",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86626",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86634",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86642",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86650",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86658",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86666",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86674",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86682",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86690",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86698",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86706",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86714",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86722",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86730",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86738",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86746",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86754",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86762",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86770",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86778",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86786",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86794",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86802",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86810",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86818",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86826",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86834",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86842",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86850",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86858",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86866",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86874",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86882",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86890",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86898",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86906",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86914",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86922",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86930",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86938",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86946",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86954",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86962",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86970",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86978",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86986",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:86994",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87002",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87010",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87018",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87026",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87034",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87042",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87050",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87058",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87066",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87074",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87082",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87090",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87098",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87106",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87114",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87122",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87130",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87138",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87146",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87154",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87162",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87170",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87178",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87186",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87194",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87202",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87210",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87218",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87226",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87234",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87242",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87250",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87258",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87266",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87274",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87282",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87290",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87298",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87306",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87314",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87322",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87330",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87338",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87346",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87354",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87362",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87370",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87378",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87386",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87394",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87402",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87410",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87418",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87426",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87434",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87442",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87450",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87458",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87466",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87474",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87482",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87490",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87498",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87506",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87514",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87522",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87530",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87538",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87546",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87554",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87562",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87570",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87578",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87586",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87594",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87602",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87610",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87618",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87626",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87634",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87642",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87650",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87658",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87666",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87674",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87682",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87690",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87698",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87706",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87714",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87722",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87730",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87738",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87746",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87754",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87762",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87770",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87778",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87786",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87794",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87802",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87810",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87818",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87826",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87834",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87842",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87850",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87858",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87866",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87874",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87882",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87890",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87898",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87906",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87914",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87922",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87930",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87938",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87946",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87954",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87962",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87970",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87978",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87986",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:87994",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88002",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88010",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88018",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88026",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88034",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88042",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88050",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88058",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88066",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88074",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88082",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88090",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88098",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88106",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88114",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88122",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88130",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88138",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88146",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88154",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88162",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88170",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88178",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88186",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88194",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88202",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88210",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88218",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88226",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88234",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88242",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88250",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88258",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88266",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88274",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88282",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88290",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88298",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88306",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88314",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88322",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88330",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88338",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88346",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88354",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88362",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88370",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88378",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88386",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88394",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88402",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88410",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88418",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88426",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88434",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88442",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88450",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "checkbox-frame",
      "id": "1864:88458",
      "type": "FRAME",
      "category": "checkbox",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    }
  ],
  "unknown": [
    {
      "name": "Status=Unchecked, State=Default, Mode=Light",
      "id": "7:3252",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Loading, Mode=Light",
      "id": "7:7512",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Default, Mode=Dark",
      "id": "7:7078",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Loading, Mode=Dark",
      "id": "7:7524",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Hover, Mode=Light",
      "id": "7:3276",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Unchecked, State=Hover, Mode=Dark",
      "id": "7:7090",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Unchecked, State=Pressed, Mode=Light",
      "id": "7:3288",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Pressed, Mode=Dark",
      "id": "7:7102",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Unchecked, State=Focused, Mode=Light",
      "id": "7:3300",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Unchecked, State=Focused, Mode=Dark",
      "id": "7:7114",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Checked, State=Default, Mode=Light",
      "id": "7:3408",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Disabled, Mode=Light",
      "id": "1675:8058",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "Status=Checked, State=Loading, Mode=Light",
      "id": "7:7536",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Default, Mode=Dark",
      "id": "7:7126",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Loading, Mode=Dark",
      "id": "7:7548",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 123,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Hover, Mode=Light",
      "id": "7:3420",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Checked, State=Hover, Mode=Dark",
      "id": "7:7138",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Checked, State=Pressed, Mode=Light",
      "id": "7:3432",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Pressed, Mode=Dark",
      "id": "7:7150",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Checked, State=Focused, Mode=Light",
      "id": "7:3444",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Checked, State=Focused, Mode=Dark",
      "id": "7:7162",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Read Only, State=Default, Mode=Light",
      "id": "7:3456",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Loading, Mode=Light",
      "id": "7:7560",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 95,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Default, Mode=Dark",
      "id": "7:7174",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Loading, Mode=Dark",
      "id": "7:7571",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 95,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Hover, Mode=Light",
      "id": "7:3479",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Read Only, State=Disabled, Mode=Light",
      "id": "1275:21765",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "Status=Read Only, State=Hover, Mode=Dark",
      "id": "7:7185",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Status=Read Only, State=Pressed, Mode=Light",
      "id": "7:3490",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Pressed, Mode=Dark",
      "id": "7:7196",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Status=Read Only, State=Focused, Mode=Light",
      "id": "7:3501",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Read Only, State=Focused, Mode=Dark",
      "id": "7:7207",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 136,
        "height": 21
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Status=Unchecked, State=Disabled, Mode=Light",
      "id": "1275:21721",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "Hint Text",
      "id": "I2357:99122;1698:163414",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "2357:140928",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "I2357:136275;1698:163414",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "I2357:140324;1698:163414",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Title & Field",
      "id": "2357:136223",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "2357:136229",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Title & Field",
      "id": "2357:140376",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "2357:140382",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "2357:136255",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "2357:140332",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Mode=Light, Applied=False",
      "id": "7:5425",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "2371:100015",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Active, Mode=Light, Applied=False",
      "id": "2603:53648",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "active"
      ]
    },
    {
      "name": "Field",
      "id": "2603:53650",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Loading, Mode=Light, Applied=False",
      "id": "7:6121",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 62
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Mode=Dark, Applied=False",
      "id": "7:5430",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Loading, Mode=Dark, Applied=False",
      "id": "7:6126",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 62
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Active, Mode=Dark, Applied=False",
      "id": "7:5440",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "active"
      ]
    },
    {
      "name": "State=Focused, Mode=Light, Applied=False",
      "id": "7:5445",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Field",
      "id": "2371:118656",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Focused, Mode=Dark, Applied=False",
      "id": "7:5450",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=Hover, Mode=Light, Applied=False",
      "id": "7:5455",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "Field",
      "id": "2371:118819",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Pressed, Mode=Light, Applied=False",
      "id": "1808:123858",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "2371:119470",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Hover, Mode=Dark, Applied=False",
      "id": "7:5460",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Disabled, Mode=Light, Applied=False",
      "id": "7:5465",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "Field",
      "id": "2371:119145",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Disabled, Mode=Dark, Applied=False",
      "id": "7:5470",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "State=Error, Mode=Light, Applied=False",
      "id": "7:5475",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 132
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68192",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error, Mode=Dark, Applied=False",
      "id": "7:5481",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 171,
        "height": 132
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(231, 52, 60, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68191",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 171,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "5039:15289",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "I2374:121832;2371:100015",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Background=Light",
      "id": "7:3630",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(10, 78, 204, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Hover, Background=Light",
      "id": "7:3634",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(8, 59, 153, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Focus, Background=Light",
      "id": "7:3638",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": {
          "width": 2,
          "color": "rgba(13, 98, 255, 1)"
        },
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(8, 59, 153, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=Default, Background=Dark",
      "id": "7:3642",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Hover, Background=Dark",
      "id": "7:3646",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(194, 216, 255, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Focus, Background=Dark",
      "id": "7:3650",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 70,
        "height": 26
      },
      "styles": {
        "background": null,
        "border": {
          "width": 2,
          "color": "rgba(13, 98, 255, 1)"
        },
        "borderRadius": 3,
        "padding": null,
        "textColor": "rgba(194, 216, 255, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "Text",
      "id": "I782:50517;111:1000",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 258,
        "height": 45
      },
      "styles": {
        "background": "rgba(0, 0, 0, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I782:50518;111:1000",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 258,
        "height": 45
      },
      "styles": {
        "background": "rgba(0, 0, 0, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Form Element Documentation",
      "id": "1848:190475",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 711,
        "height": 781
      },
      "styles": {
        "background": "rgba(239, 245, 252, 1)",
        "border": {
          "width": 1,
          "color": "rgba(117, 117, 117, 1)"
        },
        "borderRadius": 8,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 16,
        "fontWeight": 700,
        "fontFamily": "Helvetica Neue"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1848:190349;3:431;3:420",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 448,
        "height": 18
      },
      "styles": {
        "background": "rgba(37, 37, 46, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1848:190349;3:781",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 51,
        "height": 13
      },
      "styles": {
        "background": "rgba(88, 89, 115, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1848:190350;3020:368130",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 51,
        "height": 13
      },
      "styles": {
        "background": "rgba(88, 89, 115, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1070:60752;992:13639",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 51,
        "height": 13
      },
      "styles": {
        "background": "rgba(112, 113, 125, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1070:60753;3:431;3:420",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 470.053466796875,
        "height": 19
      },
      "styles": {
        "background": "rgba(37, 37, 46, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text",
      "id": "I1070:60753;3:781",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 54,
        "height": 14
      },
      "styles": {
        "background": "rgba(88, 89, 115, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Property 1=Open",
      "id": "2374:157489",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 494
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "I2374:157292;2371:118656",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Property 1=Search No Results",
      "id": "2728:88262",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 294
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "I2728:88263;2603:53650",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "I2750:61420;2371:118656",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Property 1=Closed",
      "id": "2374:157491",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Field",
      "id": "I2374:157492;2371:100015",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "I4558:62778;6971:299559",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 335,
        "height": 40
      },
      "styles": {
        "background": "rgba(117, 117, 117, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Mode=Light, Icon Alignment=Left",
      "id": "7:4501",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Mode=Light, Icon Alignment=Right",
      "id": "1729:43650",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Loading, Mode=Light, Icon Alignment=Left",
      "id": "7:6043",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 62
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Loading, Mode=Light, Icon Alignment=Right",
      "id": "1729:43656",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 180,
        "height": 62
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default, Mode=Dark, Icon Alignment=Left",
      "id": "7:5205",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Loading, Mode=Dark, Icon Alignment=Left",
      "id": "7:6048",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 62
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Active, Mode=Light, Icon Alignment=Left",
      "id": "7:4465",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "active"
      ]
    },
    {
      "name": "State=Active, Mode=Light, Icon Alignment=Right",
      "id": "1729:43659",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "active"
      ]
    },
    {
      "name": "State=Active, Mode=Dark, Icon Alignment=Left",
      "id": "7:5210",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "active"
      ]
    },
    {
      "name": "State=Focused, Mode=Light, Icon Alignment=Left",
      "id": "7:4429",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=Focused, Mode=Light, Icon Alignment=Right",
      "id": "1729:43665",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=Focused, Mode=Dark, Icon Alignment=Left",
      "id": "7:5215",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=Hover, Mode=Light, Icon Alignment=Left",
      "id": "7:4392",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Hover, Mode=Light, Icon Alignment=Right",
      "id": "1729:43671",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Hover, Mode=Dark, Icon Alignment=Left",
      "id": "7:5220",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover"
      ]
    },
    {
      "name": "State=Disabled, Mode=Light, Icon Alignment=Left",
      "id": "7:4354",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "State=Disabled, Mode=Light, Icon Alignment=Right",
      "id": "1729:43677",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "State=Disabled, Mode=Dark, Icon Alignment=Left",
      "id": "7:5225",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "State=Error, Mode=Light, Icon Alignment=Left",
      "id": "7:3569",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:67997",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164374",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error, Mode=Light, Icon Alignment=Right",
      "id": "1729:43683",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:67998",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1729:43689",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error Focus, Mode=Light, Icon Alignment=Left",
      "id": "750:42302",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:67999",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164376",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error Focus, Mode=Light, Icon Alignment=Right",
      "id": "1729:43690",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68000",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1729:43696",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error filled, Mode=Light, Icon Alignment=Left",
      "id": "750:43771",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68001",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164378",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error filled, Mode=Light, Icon Alignment=Right",
      "id": "1729:43697",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 106
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68050",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 84
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1729:43703",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(66, 68, 84, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error, Mode=Dark, Icon Alignment=Left",
      "id": "7:5230",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(231, 52, 60, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68053",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164390",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(249, 249, 250, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error Focus, Mode=Dark, Icon Alignment=Left",
      "id": "750:42308",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(231, 52, 60, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68052",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164392",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(249, 249, 250, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Error filled, Mode=Dark, Icon Alignment=Left",
      "id": "750:43777",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 114
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(231, 52, 60, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "Title & Field",
      "id": "1746:68051",
      "type": "FRAME",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 92
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Hint Text",
      "id": "1698:164394",
      "type": "TEXT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 16
      },
      "styles": {
        "background": "rgba(249, 249, 250, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Area",
      "id": "1984:79626",
      "type": "COMPONENT_SET",
      "category": "unknown",
      "size": {
        "width": 807,
        "height": 1411
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=Default",
      "id": "1984:79625",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "State=focused",
      "id": "1984:79645",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus"
      ]
    },
    {
      "name": "State=error",
      "id": "1984:79663",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 122
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "error"
      ]
    },
    {
      "name": "State=error focused",
      "id": "1984:79681",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "State=disabled",
      "id": "1984:79699",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "disabled"
      ]
    },
    {
      "name": "State=skeleton",
      "id": "1984:79717",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 12,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "mode=light",
      "id": "1698:150935",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "mode=dark",
      "id": "1698:152267",
      "type": "COMPONENT",
      "category": "unknown",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    }
  ],
  "radio": [
    {
      "name": "Radio with Label/Unchecked/Default/Light",
      "id": "3886:8369",
      "type": "COMPONENT",
      "category": "radio",
      "size": {
        "width": 164,
        "height": 30
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(66, 68, 84, 1)",
        "fontSize": 16,
        "fontWeight": 600,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Radio",
      "id": "3886:8393",
      "type": "INSTANCE",
      "category": "radio",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(21, 23, 43, 1)"
        },
        "borderRadius": 10,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    }
  ],
  "input": [
    {
      "name": "Text Input",
      "id": "2357:99122",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 314,
        "height": 112
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "I2357:99122;7:4503",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:140923",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 112
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2357:140925",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:136275",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 314,
        "height": 112
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "I2357:136275;7:4503",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:140324",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 314,
        "height": 112
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "I2357:140324;7:4503",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:136222",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 134
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2357:136225",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:140375",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 134
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2357:140378",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:136248",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 142
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2357:136251",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "2357:140325",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 142
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2357:140328",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(21, 23, 43, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5427",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "2603:53651",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:6123",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5432",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:6128",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5442",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5447",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(112, 113, 125, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5452",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5457",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(249, 249, 250, 1)",
        "border": {
          "width": 1,
          "color": "rgba(112, 113, 125, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "1808:123860",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(112, 113, 125, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5462",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5467",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(221, 221, 226, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5472",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(21, 23, 43, 1)",
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(255, 255, 255, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5477",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I2371:119146;2376:47886",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 180,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:5483",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 171,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "5039:15290",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I5039:15293;2376:47886",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 280,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "I2374:121832;7:5427",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I2374:121832;2371:48485;2376:47886",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 180,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input / Search",
      "id": "782:50511",
      "type": "TEXT",
      "category": "input",
      "size": {
        "width": 464,
        "height": 77
      },
      "styles": {
        "background": "rgba(151, 71, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I2389:45697;2376:46050",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 180,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I2728:88264;2728:60989",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 180,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I2750:61421;2728:60989",
      "type": "INSTANCE",
      "category": "input",
      "size": {
        "width": 280,
        "height": 48
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "I4558:62778;6971:299551",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 335,
        "height": 48
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(117, 117, 117, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": "rgba(0, 0, 0, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Form Elements — Text Input/Search",
      "id": "5692:103859",
      "type": "SECTION",
      "category": "input",
      "size": {
        "width": 3128,
        "height": 2415
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(0, 0, 0, 1)"
        },
        "borderRadius": null,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Input",
      "id": "7:3556",
      "type": "COMPONENT_SET",
      "category": "input",
      "size": {
        "width": 1426,
        "height": 1171
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(209, 19, 20, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:6045",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "1729:43658",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Input",
      "id": "7:6050",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 314,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79607",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79646",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(180, 181, 187, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79664",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79682",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(209, 19, 20, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79700",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(221, 221, 226, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Extended Text Input",
      "id": "1984:79718",
      "type": "FRAME",
      "category": "input",
      "size": {
        "width": 767,
        "height": 100
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(221, 221, 226, 1)"
        },
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    }
  ],
  "select": [
    {
      "name": "Dropdown",
      "id": "7:5424",
      "type": "COMPONENT_SET",
      "category": "select",
      "size": {
        "width": 1063,
        "height": 1316
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:48485",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2603:53654",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:118494",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:118657",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:119308",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:118983",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2371:119146",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "5039:15287",
      "type": "FRAME",
      "category": "select",
      "size": {
        "width": 180,
        "height": 40
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "5039:15293",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "2374:121832",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(112, 113, 125, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "I2374:121832;2371:48485",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 376
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Select",
      "id": "7:3629",
      "type": "COMPONENT_SET",
      "category": "select",
      "size": {
        "width": 116,
        "height": 276
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(10, 78, 204, 1)",
        "fontSize": 16,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Select / Dropdown",
      "id": "782:50512",
      "type": "TEXT",
      "category": "select",
      "size": {
        "width": 461,
        "height": 77
      },
      "styles": {
        "background": "rgba(151, 71, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Text Select",
      "id": "782:50513",
      "type": "TEXT",
      "category": "select",
      "size": {
        "width": 269,
        "height": 77
      },
      "styles": {
        "background": "rgba(151, 71, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=false, mode=dark, error=false",
      "id": "1864:86030",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(241, 242, 246, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=false, indeterminate=false, mode=dark, error=false",
      "id": "1864:86034",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=dark, error=false",
      "id": "1864:86038",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(221, 221, 226, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=dark, error=true",
      "id": "1864:86042",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=dark, error=false",
      "id": "1864:86046",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=dark, error=false",
      "id": "1864:86050",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=true, indeterminate=false, mode=dark, error=false",
      "id": "1864:86054",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=true, mode=dark, error=false",
      "id": "1864:86058",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(255, 255, 255, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=true, indeterminate=false, mode=dark, error=true",
      "id": "1864:86062",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=true, indeterminate=false, mode=dark, error=true",
      "id": "1864:86066",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=dark, error=true",
      "id": "1864:86070",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=true, mode=dark, error=true",
      "id": "1864:86074",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=true, mode=dark, error=true",
      "id": "1864:86078",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=dark, error=true",
      "id": "1864:86082",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=true, indeterminate=false, mode=dark, error=false",
      "id": "1864:86086",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=false, indeterminate=true, mode=dark, error=false",
      "id": "1864:86090",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=dark, error=false",
      "id": "1864:86094",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=false, mode=dark, error=true",
      "id": "1864:86098",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=dark, error=true",
      "id": "1864:86102",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=false, mode=light, error=false",
      "id": "1864:86258",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(21, 23, 43, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=false, indeterminate=false, mode=light, error=false",
      "id": "1864:86262",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(157, 158, 167, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=light, error=false",
      "id": "1864:86266",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(43, 45, 63, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=false, mode=light, error=true",
      "id": "1864:86270",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=light, error=false",
      "id": "1864:86274",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=light, error=false",
      "id": "1864:86278",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=true, indeterminate=false, mode=light, error=false",
      "id": "1864:86282",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(245, 248, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(13, 98, 255, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=true, mode=light, error=false",
      "id": "1864:86286",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(43, 45, 63, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=true, indeterminate=false, mode=light, error=true",
      "id": "1864:86290",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 235, 239, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=true, indeterminate=false, mode=light, error=true",
      "id": "1864:86294",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=true, indeterminate=false, mode=light, error=true",
      "id": "1864:86298",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=true, mode=light, error=true",
      "id": "1864:86302",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=hover, selected=false, indeterminate=true, mode=light, error=true",
      "id": "1864:86306",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=true, mode=light, error=true",
      "id": "1864:86310",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=true, indeterminate=false, mode=light, error=false",
      "id": "1864:86314",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(157, 158, 167, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=disabled, selected=false, indeterminate=true, mode=light, error=false",
      "id": "1864:86318",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(241, 242, 246, 1)",
        "border": {
          "width": 1,
          "color": "rgba(157, 158, 167, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=light, error=false",
      "id": "1864:86322",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, state=default, selected=false, indeterminate=false, mode=light, error=true",
      "id": "1864:86326",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, state=focus, selected=false, indeterminate=false, mode=light, error=true",
      "id": "1864:86330",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 20,
        "height": 20
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": {
          "width": 1,
          "color": "rgba(231, 52, 60, 1)"
        },
        "borderRadius": 2,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86449",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86457",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86465",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86473",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86481",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86489",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86497",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86505",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86513",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86521",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86529",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86537",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86545",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86553",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86561",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86569",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86577",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86585",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86593",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86601",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86609",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86617",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86625",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86633",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86641",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86649",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86657",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86665",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86673",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86681",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86689",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86697",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86705",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=true",
      "id": "1864:86713",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=true",
      "id": "1864:86721",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=true",
      "id": "1864:86729",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86737",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86745",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86753",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86761",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86769",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86777",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86785",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86793",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86801",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86809",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86817",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86825",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86833",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86841",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86849",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86857",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86865",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86873",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86881",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86889",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86897",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86905",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86913",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86921",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86929",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86937",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86945",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86953",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86961",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86969",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:86977",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:86985",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:86993",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=true",
      "id": "1864:87001",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=true",
      "id": "1864:87009",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=true",
      "id": "1864:87017",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87025",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87033",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87041",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87049",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87057",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87065",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87073",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87081",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87089",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87097",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87105",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87113",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 100
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87121",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87129",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87137",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87145",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87153",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87161",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 84
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87169",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87177",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87185",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87193",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87201",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87209",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87217",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87225",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87233",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87241",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87249",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87257",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 68
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87265",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87273",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87281",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=true",
      "id": "1864:87289",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=true",
      "id": "1864:87297",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=true",
      "id": "1864:87305",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 76
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87313",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87321",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87329",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87337",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87345",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87353",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87361",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87369",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87377",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87385",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87393",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=default, error=false",
      "id": "1864:87401",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87409",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87417",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87425",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87433",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87441",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87449",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87457",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87465",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87473",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87481",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87489",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=default, error=false",
      "id": "1864:87497",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87505",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87513",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87521",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87529",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87537",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87545",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87553",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87561",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87569",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87577",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87585",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=default, error=false",
      "id": "1864:87593",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87601",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87609",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87617",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87625",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87633",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87641",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87649",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87657",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87665",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87673",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87681",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=hover, error=false",
      "id": "1864:87689",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87697",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87705",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87713",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87721",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87729",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87737",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87745",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87753",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87761",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87769",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87777",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=hover, error=false",
      "id": "1864:87785",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87793",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87801",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87809",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87817",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87825",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87833",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87841",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87849",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87857",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87865",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87873",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=hover, error=false",
      "id": "1864:87881",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "hover",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87889",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87897",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87905",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87913",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87921",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87929",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87937",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87945",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87953",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87961",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87969",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=focus, error=false",
      "id": "1864:87977",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:87985",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:87993",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88001",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88009",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88017",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88025",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88033",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88041",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88049",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88057",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88065",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=focus, error=false",
      "id": "1864:88073",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88081",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88089",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88097",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88105",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88113",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88121",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88129",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88137",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88145",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88153",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88161",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=focus, error=false",
      "id": "1864:88169",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "focus",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88177",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88185",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88193",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88201",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88209",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88217",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88225",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88233",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88241",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88249",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88257",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=false, indeterminent=false, state=disabled, error=false",
      "id": "1864:88265",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88273",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88281",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88289",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88297",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88305",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88313",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88321",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88329",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88337",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88345",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88353",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=false, state=disabled, error=false",
      "id": "1864:88361",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88369",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88377",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 174,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88385",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88393",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 166,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88401",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=desktop & tablet, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88409",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 186,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88417",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=medium, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88425",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 165,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88433",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=small, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88441",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 157,
        "height": 24
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=light, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88449",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "size=large, breakpoint=mobile, mode=dark, selected=true, indeterminent=true, state=disabled, error=false",
      "id": "1864:88457",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 177,
        "height": 32
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "disabled",
        "error"
      ]
    },
    {
      "name": "Dropdown Selection",
      "id": "2374:157490",
      "type": "COMPONENT_SET",
      "category": "select",
      "size": {
        "width": 844,
        "height": 553
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "2374:157292",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2389:45697",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 380
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "2728:88263",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2728:88264",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 180
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Property 1=Select no results",
      "id": "2750:61419",
      "type": "COMPONENT",
      "category": "select",
      "size": {
        "width": 180,
        "height": 294
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": null,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "2750:61420",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "_Select List",
      "id": "2750:61421",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 180
      },
      "styles": {
        "background": "rgba(255, 255, 255, 1)",
        "border": null,
        "borderRadius": 4,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Dropdown",
      "id": "2374:157492",
      "type": "INSTANCE",
      "category": "select",
      "size": {
        "width": 180,
        "height": 110
      },
      "styles": {
        "background": null,
        "border": null,
        "borderRadius": 5,
        "padding": null,
        "textColor": null,
        "fontSize": null,
        "fontWeight": null,
        "fontFamily": null
      },
      "states": [
        "default"
      ]
    }
  ],
  "label": [
    {
      "name": "Label",
      "id": "1698:152266",
      "type": "COMPONENT_SET",
      "category": "label",
      "size": {
        "width": 334,
        "height": 134
      },
      "styles": {
        "background": null,
        "border": {
          "width": 1,
          "color": "rgba(151, 71, 255, 1)"
        },
        "borderRadius": 5,
        "padding": null,
        "textColor": "rgba(252, 252, 252, 1)",
        "fontSize": 14,
        "fontWeight": 400,
        "fontFamily": "Lato"
      },
      "states": [
        "default"
      ]
    }
  ]
};

// Helper functions
export const getFormElementSpec = (name: string): FormElementSpec | undefined => {
  return formElementSpecs.find(spec => spec.name === name);
};

export const getFormElementsByCategory = (category: string) => {
  return categorizedForms[category] || [];
};

// Form element usage guidelines
export const formElementUsage = {
  input: "Use for single-line text input fields",
  textarea: "Use for multi-line text input",
  select: "Use for dropdown selections with multiple options",
  checkbox: "Use for multiple selection options",
  radio: "Use for single selection from multiple options",
  label: "Use to describe form elements for accessibility",
  guidelines: [
    "Always provide accessible labels for form elements",
    "Use appropriate input types for better UX",
    "Provide clear error messages and validation feedback",
    "Maintain consistent spacing and sizing across forms"
  ]
} as const;

export default {
  formElementSpecs,
  categorizedForms,
  formElementUsage,
  getFormElementSpec,
  getFormElementsByCategory
} as const;
