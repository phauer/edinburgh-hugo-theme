(function() {
  function createAnchorHTML(heading) {
    return `
      <a class="heading-anchor-link" href="${heading}"><svg class="anchor" height="22px" viewBox="0 0 24 24" width="22px" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg></a>
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
