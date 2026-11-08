document.addEventListener("DOMContentLoaded", () => {
  const group = document.getElementById("blocks-group");
  if (!group) return;

  const blocks = group.querySelectorAll(".inline-related:not(.empty-form)");

  blocks.forEach((block, index) => {
    const heading = block.querySelector(":scope > h3");
    if (!heading) return;

    const position =
      block.querySelector('[name$="-position"]')?.value || index + 1;

    const typeField = block.querySelector('[name$="-block_type"]');
    const blockType = typeField
      ? typeField.options[typeField.selectedIndex]?.text
      : "New block";

    const title =
      block.querySelector('[name$="-title"]')?.value.trim() || "Untitled block";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "blog-block-toggle";
    button.setAttribute("aria-expanded", "false");

    const label = document.createElement("span");
    label.textContent = `${position}. ${blockType} — ${title}`;
    button.appendChild(label);

    heading.insertBefore(button, heading.firstChild);

    heading
      .querySelectorAll(":scope > b, :scope > .inline_label")
      .forEach((element) => {
        element.hidden = true;
      });

    block.classList.add("blog-block-collapsed");

    button.addEventListener("click", () => {
      const collapsed = block.classList.toggle("blog-block-collapsed");

      button.setAttribute("aria-expanded", String(!collapsed));
    });
  });
});
