# webroukCustomSelect

Webrouk Custom Select is a lightweight native JavaScript web component for custom select element.

- No dependencies.
- Lightweight.
- Fast search/filtering.
- Icon prefixes on select options.
- Keyboard navigation (Tab/Shift-Tab).
- Right-to-left support.

### Demo
---
[CodePen Example](https://codepen.io/muhammad_mabrouk/full/qBVqEmN/)

### Installation
---
Use [NPM](https://www.npmjs.com/package/webrouk-custom-select/) to download and install it directly in to your project

```sh
$ npm install webrouk-custom-select --save
```

or include js file manually

```html
<!-- webrouk-custom-select component file -->
<script src="webrouk-custom-select.js"></script>
```

### Usage
---
Using webroukCustomSelect is simple.

```html
<webrouk-custom-select search-placeholder="Search..." no-results="No results found...">
    <select>
      <option value="" data-icon-url="https://picsum.photos/40/30">Select an option</option>
      <option value="item-01" data-icon-url="https://picsum.photos/40/30">Option item 01</option>
      <option value="item-02" data-icon-url="https://picsum.photos/40/30">Option item 02</option>
      <option value="item-03" data-icon-url="https://picsum.photos/40/30">Option item 03</option>
      <option value="item-04" data-icon-url="https://picsum.photos/40/30">Option item 04</option>
      <option value="item-05" data-icon-url="https://picsum.photos/40/30">Option item 05</option>
      <option value="item-06" data-icon-url="https://picsum.photos/40/30">Option item 06</option>
      <option value="item-07" data-icon-url="https://picsum.photos/40/30">Option item 07</option>
      <option value="item-08" data-icon-url="https://picsum.photos/40/30">Option item 08</option>
    </select>
</webrouk-custom-select>
```

### Options
| Option | Type | Description | Default |
| ----------- |    :----:   | ----------- |    :----:   |
| search-placeholder | `string` | The value of the search input's placeholder | `Search...` |
| no-results | `string` | The text that is shown when a user's search has returned no results | `No results found...` |
| data-icon-url | `string` | The url value of the select option icon (applied to the option elements) | `null` |

### Style Customization
---
Expected CSS Variables from inside the component (optional).

```css
webrouk-custom-select {
  --w-primary-color: hsl(218, 95%, 54%);
  --w-bg-one: hsl(225, 6%, 13%);
  --w-bg-two: hsl(225, 6%, 18%);
  --w-inputs-bg: hsl(225, 6%, 15%);
  --w-inputs-disabled-bg: hsl(225, 6%, 17%);
  --w-text-color: hsl(225, 6%, 63%);
  --w-border-color: hsl(225, 6%, 21%);
  --w-success-color: hsl(135, 60%, 40%);
  --w-danger-color: hsl(355, 70%, 55%);
  --w-height-size: 48px;
  --w-radius-size: 0.63rem;
}
```

### Styleable Component Parts
---
- root
- select-styled
- icon
- search
- options-list
- no-results
- option-item

#### Example:

```css
webrouk-custom-select::part(root) { /* some styles ... */ }

webrouk-custom-select::part(select-styled) { /* some styles ... */ }

webrouk-custom-select::part(icon) { /* some styles ... */ }

webrouk-custom-select::part(search) { /* some styles ... */ }

webrouk-custom-select::part(options-list) { /* some styles ... */ }

webrouk-custom-select::part(no-results) { /* some styles ... */ }

webrouk-custom-select::part(option-item) { /* some styles ... */ }
```

### License
-------
webroukCustomSelect is licensed [MIT](https://choosealicense.com/licenses/mit/).
It can be used for free and without any attribution, in any personal or commercial project.
