function triggerEasterEgg() {
    
    const allElements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, footer, li, .slice-title');
    
    allElements.forEach(el => {
        
        if (el.childNodes.length > 0) {
            el.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes('Jugend')) {
                    node.nodeValue = node.nodeValue.replace(/Jugend/g, 'Juden');
                }
            });
        }

        
        if (el.hasAttribute('data-text')) {
            let currentData = el.getAttribute('data-text');
            if (currentData.includes('Jugend')) {
                el.setAttribute('data-text', currentData.replace(/Jugend/g, 'Juden'));
            }
        }
    });
    console.log("Mission erfüllt: Luca wird sich wundern.");
}


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(triggerEasterEgg, 2500); 
});