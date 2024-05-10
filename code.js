// Function to create an Edit button and append it to an alert
function createEditButton(key, retrievedTitlec, retrievedDesc) {
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "btn btn-warning";
  editButton.innerText = "Edit";
  editButton.addEventListener("click", () => {
    const newValue1 = prompt("Edit TODO:", retrievedTitlec);
    const newValue2 = prompt("Edit Date:", retrievedDesc);

    if (newValue1 !== null && newValue2 !== null) {
      localStorage.setItem(key, JSON.stringify([newValue1, newValue2]));
      loadItemsFromLocalStorage();
    }
  });

  return editButton;
}

// Function to load and display all items from localStorage
function loadItemsFromLocalStorage() {
  let k = document.getElementById("imp1");
  k.innerHTML = '';

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));

    let [retrievedTitlec, retrievedDesc] = value;

    let ihtml = `
      <div class="alert alert-dismissible bg-dark bg-gradient text-white fade show alt21" role="alert">
        <strong>${"Response-Time : " + key}</strong>
        <div class="my-3 p-3 bg-body rounded shadow-sm">
          <div class="d-flex text-body-secondary pt-3">
            ${createEditButton(key, retrievedTitlec, retrievedDesc).outerHTML}
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff"></rect>
              <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-black">
                ${"TODO: " + retrievedTitlec}
              </strong>
              <strong class="d-block text-black">
                ${"Date: " + retrievedDesc}
              </strong>
            </p>
          </div>
          <button
            type="button"
            class="btn-close bg-danger"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    `;

    k.innerHTML += ihtml;
  }
}

// Load items from localStorage when the page loads
window.addEventListener("load", loadItemsFromLocalStorage);

let a = document.getElementById("submit");
a.addEventListener("click", (e) => {
  e.preventDefault();
  let d = new Date();

  let t = document.getElementById("title");
  let t1 = t.value;
  let t2 = document.getElementById("title2").value;

  localStorage.setItem(d.toString(), JSON.stringify([t1, t2]));

  const storedData = localStorage.getItem(d.toString());
  const [retrievedTitlec, retrievedDesc] = JSON.parse(storedData);

  let ihtml = `
    <div class="alert alert-dismissible bg-dark bg-gradient text-white fade show alt21" role="alert">
      <strong>${"Response-Time : " + d.toString()}</strong>
      <div class="my-3 p-3 bg-body rounded shadow-sm">
        <div class="d-flex text-body-secondary pt-3">
          ${createEditButton(d.toString(), retrievedTitlec, retrievedDesc).outerHTML}
          <svg
            class="bd-placeholder-img flex-shrink-0 me-2 rounded"
            width="32"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 32x32"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text>
          </svg>
          <p class="pb-3 mb-0 small lh-sm border-bottom">
            <strong class="d-block text-black">
              ${"TODO: " + retrievedTitlec}
            </strong>
            <strong class="d-block text-black">
              ${"Date: " + retrievedDesc}
            </strong>
          </p>
        </div>
        <button
          type="button"
          class="btn-close bg-danger"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  `;

  let k = document.getElementById("imp1");
  k.innerHTML += ihtml;
});

let n = document.getElementById("submit1");
n.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  let elements = document.getElementsByClassName("alt21");
  while (elements.length > 0) {
    elements[0].remove();
  }
});

let a1 = document.getElementById("submit2");
a1.addEventListener("click", (e) => {
  e.preventDefault();
  loadItemsFromLocalStorage();
});

let n1 = document.getElementById("submit1");
n1.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  let elements = document.getElementsByClassName("alt21");
  while (elements.length > 0) {
    elements[0].remove();
  }
});
