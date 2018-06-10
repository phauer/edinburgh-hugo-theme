(function() {
  function createAnchorHTML(heading) {
    return `
      <a class="heading-anchor-link" href="${heading}">
        <svg width="18px" height="18px"><use href="#anchor"/></svg>
      </a>
    `;
  }

  function appendAnchorLink(heading) {
    const anchor = heading.id;
    const tempNode = document.createElement('span');
    tempNode.innerHTML = createAnchorHTML(`#${anchor}`);
    while (tempNode.firstChild) {
      heading.appendChild(tempNode.firstChild);
    }
  }

  function displayAnchorLinkNextToHeadings() {
    const headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
    headings.forEach(heading => appendAnchorLink(heading))
  }

  window.onload = displayAnchorLinkNextToHeadings;

  window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#e8eaeb",
          "text": "#4a4a4a"
        },
        "button": {
          "background": "#008DC5",
          "text": "#ffffff"
        }
      },
      "theme": "classic",
      "position": "bottom",
      "content": {
        "message": "I save information about your visit on my blog and use cookies. This data is used for statistics and advertising. This way, I see what my visitors are expecting and how I can improve my blog.",
        "dismiss": "OK",
        "link": "Privacy Policy",
        "href": "/page/legal/"
      }
    })});
})();
