document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    const data = {};

    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        data[input.id] = input.checked;
      } else {
        data[input.id] = input.value;
      }

      input.disabled = true;
    });

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    console.log("Form Data:", data);
  });
});
