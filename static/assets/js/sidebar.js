const sidebar = document.getElementById('sidebar');
const resizeHandle = document.getElementById('resize-handle');
let isResizing = false;

resizeHandle.addEventListener('mousedown', startResize);

function startResize(e) {
  e.preventDefault();
  isResizing = true;
  document.addEventListener('mousemove', resizeSidebar);
  document.addEventListener('mouseup', stopResize);
}

function resizeSidebar(e) {
  if (!isResizing) return;
  const newWidth = e.pageX - sidebar.offsetLeft;
  sidebar.style.width = newWidth + 'px';
}

function stopResize() {
  isResizing = false;
  document.removeEventListener('mousemove', resizeSidebar);
  document.removeEventListener('mouseup', stopResize);
}