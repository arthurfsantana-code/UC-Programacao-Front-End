function setBodyBackgroundColor(color) {
  if (!color) {
    return;
  }
  document.body.style.backgroundColor = color;
}

function setTitleFont(fontFamily) {
  if (!fontFamily) {
    return;
  }
  const titles = document.querySelectorAll('article h2, header h1');
  titles.forEach((title) => {
    title.style.fontFamily = fontFamily;
  });
}

function removeArticleMeta() {
  const metaElements = document.querySelectorAll('article .meta');
  metaElements.forEach((meta) => meta.remove());
}

function insertEmojiBeforeFirstParagraph(emoji) {
  if (!emoji) {
    return;
  }

  document.querySelectorAll('article').forEach((article) => {
    const firstParagraph = article.querySelector('p');
    if (!firstParagraph) {
      return;
    }

    if (firstParagraph.dataset.emojiInserted === 'true') {
      return;
    }

    firstParagraph.textContent = `${emoji} ${firstParagraph.textContent}`;
    firstParagraph.dataset.emojiInserted = 'true';
  });
}

function insertAlertMessage() {
  const main = document.querySelector('main');
  if (!main || main.querySelector(':scope > .alert')) {
    return;
  }

  const alert = document.createElement('div');
  alert.className = 'alert';
  alert.innerHTML =
   
  main.insertBefore(alert, main.firstElementChild);
}

