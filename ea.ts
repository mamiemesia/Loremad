// TypeScript Interface Definition for GuideLabelStyle
interface GuideLabelStyle {
    fontSize?: string;
    fontFamily?: string;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    borderRadius?: string;
    // Add more properties as needed
}

// Example usage of GuideLabelStyle
const labelStyle: GuideLabelStyle = {
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f4f4f4',
    padding: '8px',
    borderRadius: '4px'
};

/**
 * Applies the given style to a guide label.
 * 
 * @param {HTMLElement} element - The HTML element representing the guide label.
 * @param {GuideLabelStyle} style - The style configuration to apply.
 */
function applyGuideLabelStyle(element: HTMLElement, style: GuideLabelStyle) {
    if (style.fontSize) element.style.fontSize = style.fontSize;
    if (style.fontFamily) element.style.fontFamily = style.fontFamily;
    if (style.color) element.style.color = style.color;
    if (style.backgroundColor) element.style.backgroundColor = style.backgroundColor;
    if (style.padding) element.style.padding = style.padding;
    if (style.borderRadius) element.style.borderRadius = style.borderRadius;
    // Apply other styles as needed
}

// Example of applying the style to a specific guide label element
const guideLabelElement = document.getElementById('guide-label');
if (guideLabelElement) {
    applyGuideLabelStyle(guideLabelElement, labelStyle);
}
