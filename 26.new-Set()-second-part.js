// new Set() - accepts iterable objects

const products = [
  {
    title: 'high-back bench',
    company: 'ikea',
  },

  {
    title: 'albany table',
    company: 'marcos',
  },
  {
    title: 'accent chair',
    company: 'caressa',
  },
  {
    title: 'wooden table',
    company: 'ikea',
  },
];

const companies = products.map((product) => product.company);
console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = [...uniqueCompanies];
console.log(finalCompanies);

// in one line
const companyList = Array.from(
  new Set(products.map((product) => product.company))
);
console.log(companyList);

// alternate one

const result = ['all', ...new Set(products.map((product) => product.company))];
console.log(result);
