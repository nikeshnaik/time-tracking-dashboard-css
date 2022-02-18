const sections = `

<div class="${section_name}_section">
<div class="eclipse_background"></div>
<div class="header">
  <span id="title">${section_name.lower()}</span >
    <span id="btn">Button</span>
</div >
    <div class="header-text">
        <p id="unit-value">${current_filter.value}</p>
        <p id="previous-unit-value">${prefix_text} - ${previous_value}</p>
    </div>
</div >
`
