const pages = ["home","about","literature","coding","sports", "misc", "music"]
const pageElements = {};
for (page of pages) {
  pageElements[page] = document.querySelector(`.page-${page}`);
}


const navbarLinks = document.querySelector('.navbar-links');


const createLink = (pageName) => {
  // iterate through pages, hiding all pages except the page they clicked
  
  const onClickPageLink = () => {
    for (page of pages) {
      if (page !== pageName) {
        pageElements[page].style = "display:none";
      }
      
    }
    pageElements[pageName].style = "";
  }

  const newLinkDiv = document.createElement('div');
  const newLink = document.createElement('a');
  var linkText = document.createTextNode(pageName);
  newLink.appendChild(linkText);
  newLink.title = "my title text";
  newLinkDiv.appendChild(newLink);
  newLinkDiv.onclick = onClickPageLink;
  return newLinkDiv
} 

for (page of pages) {
  navbarLinks.append(createLink(page))
}
