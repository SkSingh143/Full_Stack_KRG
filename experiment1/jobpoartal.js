document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputs = form.querySelectorAll("input");
      const data = {};

      inputs.forEach((input) => {
        data[input.id] =
          input.type === "checkbox" ? input.checked : input.value;
        input.disabled = true;
      });

      form.querySelector("button").disabled = true;
      console.log("Form Data:", data);
    });
  }
});


const jobs = [
  {
    title: "SDE 1",
    eligibility: "0-2 years, DSA, JS",
    salary: "6 - 10 LPA",
  },
  {
    title: "SDE 1",
    eligibility: "Freshers, Java, OOPs",
    salary: "5 - 8 LPA",
  },
  {
    title: "SDE 2",
    eligibility: "2-4 years, System Design",
    salary: "12 - 18 LPA",
  },
  {
    title: "SDE 2",
    eligibility: "Backend, Node.js, DB",
    salary: "14 - 20 LPA",
  },
  {
    title: "SDE 3",
    eligibility: "5+ years, Architecture",
    salary: "25+ LPA",
  },
];


function renderJobs(list) {
  const container = document.getElementById("jobContainer");
  if (!container) return;

  container.innerHTML = "";

  list.forEach((job) => {
    const div = document.createElement("div");
    div.style.background = "white";
    div.style.padding = "15px";
    div.style.marginBottom = "15px";
    div.style.borderRadius = "6px";

    div.innerHTML = `
      <h3>${job.title}</h3>
      <p><b>Eligibility:</b> ${job.eligibility}</p>
      <p><b>Salary:</b> ${job.salary}</p>
    `;

    container.appendChild(div);
  });
}


function searchJobs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(input)
  );
  renderJobs(filtered);
}

function showProfile() {
  document.getElementById("profileSection").style.display = "block";
  document.getElementById("jobsSection").style.display = "none";
}

function showJobs() {
  document.getElementById("profileSection").style.display = "none";
  document.getElementById("jobsSection").style.display = "block";
  renderJobs(jobs);
}