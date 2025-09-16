/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = [
  "Aisha",
  "Liam",
  "Sofia",
  "Wei",
  "Priya",
  "Mateo",
  "Fatima",
  "Yuki",
  "Omar",
  "Anya",
  "Diego",
  "Leila",
  "Jin",
  "Amara",
  "Ivan",
  "Sara",
  "Hassan",
  "Mina",
  "Lucas",
  "Chloe",
];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function genFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, genFreelancer);

function getAverageRate(freelancers) {
  const totalrates = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return totalrates / freelancers.length;
}

const averageRate = getAverageRate(freelancers);

console.log(freelancers);

console.log(averageRate);

function createFreelancerDiv(genFreelancer) {
  const { name, occupation, rate } = genFreelancer;
  const $article = document.createElement("article");
  $article.classList.add("freelancerId");
  $article.innerHTML = `<div>
  <p>👤 ${name}</p><br>
  <p>🎓 ${occupation}</p><br>
  <p>💵 ${rate}</p><br>
  </div>`;
  return $article;
}

function CreateFreelancerContainer() {
  const $container = document.createElement("article");
  $container.classList.add("freelancerIds");
  const $freelancerIds = freelancers.map(createFreelancerDiv);
  $container.replaceChildren(...$freelancerIds);
  return $container;
}
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
   <h1>Freelancer Forum</h1>
   <p id="displayAverage"> The average rate is $${averageRate} </p>
   <div id="CreateFreelancerContainer"></div>
`;
  $app
    .querySelector("#CreateFreelancerContainer")
    .replaceChildren(CreateFreelancerContainer());
}
render();
