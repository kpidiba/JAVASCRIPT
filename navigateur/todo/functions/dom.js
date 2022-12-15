/**
 *
 * @param {string} tagName
 * @param {object} attributes
 * @returns {HTMLElement}
 */
export function createElement(tagName, attributes) {
  const element = document.createElement(tagName);
  //parcours d'object de clee et valeur
  for (const [attribute, value] of Object.entries(attributes)) {
    if ( value !== null) {
      element.setAttribute(attribute, value);
    }
  }
  return element;
}

/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */
export function cloneTemplate(id){
  return  document.getElementById(id).content.cloneNode(true);
}
