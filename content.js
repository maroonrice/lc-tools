document.querySelectorAll('.type-photo>img').forEach(i => i.outerHTML = `<a download href="${i.src}">${i.outerHTML}</a>`)
