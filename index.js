/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function genFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    PRICE_RANGE[
      Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
        PRICE_RANGE.min
    ];
  return { name, occupation, rate };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, genFreelancer);

console.log(freelancers);

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
   <h1>Freelancer Forum</h1>
   <p> The average rate is TBD</p>
   <tbody id="FreelancerRows"></tbody>
`;
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}
render();
