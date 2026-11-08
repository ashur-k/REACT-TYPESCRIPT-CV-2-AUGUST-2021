document.addEventListener("DOMContentLoaded", () => {
  const group = document.getElementById("blocks-group");

  if (!group) return;

  const getField = (block, fieldName) =>
    block.querySelector(`[name$="-${fieldName}"]`);

  const updateHeader = (block, index) => {
    const heading = block.querySelector(":scope > h3");

    if (!heading) return;

    let button = heading.querySelector(".blog-block-toggle");

    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "blog-block-toggle";

      heading.replaceChildren(button);

      button.addEventListener("click", () => {
        setCollapsed(block, !block.classList.contains("blog-block-collapsed"));
      });
    }

    const position = getField(block, "position")?.value || index + 1;

    const typeField = getField(block, "block_type");

    const blockType = typeField
      ? typeField.options[typeField.selectedIndex]?.text
      : "New block";

    const title = getField(block, "title")?.value.trim() || "Untitled block";

    button.textContent = `${position}. ${blockType} — ${title}`;
  };

  const setCollapsed = (block, collapsed) => {
    block.classList.toggle("blog-block-collapsed", collapsed);

    const button = block.querySelector(".blog-block-toggle");

    if (button) {
      button.setAttribute("aria-expanded", String(!collapsed));
    }
  };

  const initialiseBlocks = () => {
    const blocks = group.querySelectorAll(":scope > .inline-related");

    blocks.forEach((block, index) => {
      updateHeader(block, index);

      // Automatically expand blocks containing validation errors.
      const hasErrors = block.querySelector(".errorlist, .errors");

      if (!block.dataset.accordionInitialised) {
        setCollapsed(block, !hasErrors);
        block.dataset.accordionInitialised = "true";
      } else if (hasErrors) {
        setCollapsed(block, false);
      }
    });
  };

  group.addEventListener("input", (event) => {
    const block = event.target.closest(".inline-related");

    if (block) {
      updateHeader(
        block,
        Array.from(group.querySelectorAll(":scope > .inline-related")).indexOf(
          block,
        ),
      );
    }
  });

  group.addEventListener("change", (event) => {
    const block = event.target.closest(".inline-related");

    if (block) {
      updateHeader(
        block,
        Array.from(group.querySelectorAll(":scope > .inline-related")).indexOf(
          block,
        ),
      );
    }
  });

  initialiseBlocks();

  // Support Django's Add another Blog Content Block functionality.
  const observer = new MutationObserver(initialiseBlocks);

  observer.observe(group, {
    childList: true,
    subtree: true,
  });
});
