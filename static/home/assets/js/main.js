let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

// Cloaking Code
if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Allow popups and redirects to hide this from showing up in your history.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "My Drive - Google Drive";
        const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png";

        doc.title = name;
        link.rel = "icon";
        link.href = icon;

        iframe.src = location.href
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        self.close();
    }
}
// Get the reference to the button element
const openButton = document.getElementById('openButton');

// Add an event listener to the button
openButton.addEventListener('click', function() {
  // Create a new WinBox instance when the button is clicked
  new WinBox("Window Title", {
    root: document.body
  });
});

function deleter(iframe) {
    for(var i=0; i<(iframe.document.getElementsByTagName('a')).length; i++) {
        (iframe.document.getElementsByTagName('a')[i]).style.pointerEvents = 'none';
    }
    
    function handler(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        target.style.display = 'none';
        
        iframe.document.removeEventListener('click', handler, false);
        cursor('default');
        
        for(var i=0; i<(iframe.document.getElementsByTagName('a')).length; i++) {
            (iframe.document.getElementsByTagName('a')[i]).style.pointerEvents = 'initial';
        }
    }
    
    iframe.document.addEventListener('click', handler, false);
    cursor('crosshair');
    function cursor(cur) { iframe.document.body.style.cursor = cur; }
}
      var iframe = document.getElementById('tabsframe').contentWindow;
      deleter(iframe);
    }
