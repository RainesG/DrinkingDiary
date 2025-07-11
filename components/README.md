# Components Directory

This directory contains reusable components for the Drinking Diary Mini Program.

## Usage

Components in this directory can be imported and used across different pages by adding them to the `usingComponents` section of page JSON files.

## Example

```json
{
  "usingComponents": {
    "custom-button": "/components/custom-button/custom-button"
  }
}
```

## Component Structure

Each component should follow this structure:

```json
component-name/
├── component-name.js
├── component-name.wxml
├── component-name.wxss
└── component-name.json
```
