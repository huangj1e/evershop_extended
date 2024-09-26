# Tidio Widget for EverShop
This package can help you add Tidio instant messaging widgets to evershop

> **Note**: This widget requires version 1.2.0 or higher

## Installation

### Step 1: Install the extension package

```javascript
npm install evershop_tidio_widget
```

### Step 2: Register the extension by adding it to the config file

```javascript
// config/default.json
{
  ...,
  "system": [
    ...,
    "extensions": [
        ...,
      {
        "name": "EverShopTidioWidget",
        "resolve": "node_modules/evershop_tidio_widget",
        "enabled": true,
        "priority": 20
      }
    ]
  ]
}
```