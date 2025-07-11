const frame = document.getElementById("preview-frame");

frame.onload = () => {
    
  const iframeDoc = frame.contentDocument || frame.contentWindow.document;

// Remove Home button from live preview
const home = iframeDoc.getElementById("homeButton");
if (home) home.remove();

  // ✏️ Name/Bio Edits
  const nameInput = document.getElementById("edit-name");
  const bioInput = document.getElementById("edit-bio");
  const resetBtn = document.getElementById("resetButton");

  const nameEl = iframeDoc.querySelector("h1");
  const bioEl = iframeDoc.querySelector("p");
  nameInput.value = nameEl.textContent;
  bioInput.value = bioEl.textContent;

  nameInput.addEventListener("input", () => nameEl.textContent = nameInput.value);
  bioInput.addEventListener("input", () => bioEl.textContent = bioInput.value);
  resetBtn.addEventListener("click", () => {
    nameEl.textContent = nameInput.value = "Jane Doe";
    bioEl.textContent = bioInput.value = "Designer & Developer";
  });

  // 🖼️ Projects
  const projects = iframeDoc.querySelectorAll(".project");
  const titleInputs = document.querySelectorAll(".proj-title");
  const descInputs = document.querySelectorAll(".proj-desc");
  const imgInputs = document.querySelectorAll(".proj-img");

  projects.forEach((project, i) => {
    const title = project.querySelector("h3");
    const desc = project.querySelector("p");
    const img = project.querySelector("img");

    // Set initial values
    titleInputs[i].value = title.textContent;
    descInputs[i].value = desc.textContent;
    imgInputs[i].value = img.src;

    // Add listeners
    titleInputs[i].addEventListener("input", () => title.textContent = titleInputs[i].value);
    descInputs[i].addEventListener("input", () => desc.textContent = descInputs[i].value);
    imgInputs[i].addEventListener("input", () => img.src = imgInputs[i].value);
  });

  // 💾 Download Edited Template
  const downloadBtn = document.getElementById("downloadBtn");
 downloadBtn.addEventListener("click", async () => {
  const css = await fetch("temppv/styles.css")
    .then(res => res.text())
    .catch(() => "/* CSS not loaded */");

  const clonedDoc = frame.contentDocument.cloneNode(true);

// REMOVE Home button before export
const homeExport = clonedDoc.getElementById("homeButton");
if (homeExport) homeExport.remove();

  const styleTag = clonedDoc.createElement("style");
  styleTag.innerHTML = css;

  // Inject <style> inside <head>
  clonedDoc.head.appendChild(styleTag);

  // Remove <link rel="stylesheet">
  const link = clonedDoc.querySelector('link[rel="stylesheet"]');
  if (link) link.remove();

  const htmlContent = "<!DOCTYPE html>\n" + clonedDoc.documentElement.outerHTML;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "edited-portfolio.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
}
function toggleSidebar(side) {
  const sidebar = document.getElementById(side + "Sidebar");
  sidebar.classList.toggle("collapsed");
}

