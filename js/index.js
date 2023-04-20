const btnMenu = document.querySelector('.navbar-toggler');
const iconBtn = document.querySelector('#icon-btn');

if (btnMenu) {
  btnMenu.addEventListener('click', () => {
    iconBtn.classList.toggle('fa-xmark');
  });
}
const featureCooks = document.querySelector('#features-cook');
const featuresData = [
  {
    name: 'Massimo Bottura',
    job: 'Chef Patron, Osteria Francescana (Modena, Italy)',
    description: `Massimo Bottura is an Italian chef who owns and runs the three-Michelin-starred Osteria Francescana, located in Modena, Italy. Bottura's dishes are inspired by traditional Italian cuisine, but he adds his own creative twists and modern techniques to make them truly unique. He is known for his commitment to sustainability and his efforts to reduce food waste, as well as his philanthropic work through his non-profit organization, Food for Soul.
    `,
    image: 'images/Massimo Bottura.webp',
  },
  {
    name: 'Dominique Crenn',
    job: 'Chef/Owner, Atelier Crenn (San Francisco, USA)',
    description: `
    Dominique Crenn is a French-American chef and restaurateur, and the first female chef in the US to earn three Michelin stars. She is the owner of Atelier Crenn, a highly acclaimed restaurant in San Francisco, where she creates innovative, multi-course tasting menus that reflect her personal experiences and emotions. Crenn is known for her commitment to sustainability and her efforts to promote diversity and inclusion in the culinary industry.`,
    image: 'images/Dominique Crenn.jpg',
  },
  {
    name: 'Yotam Ottolenghi',
    job: 'Chef/Owner, Ottolenghi (London, UK)',
    description: `Yotam Ottolenghi is an Israeli-British chef, cookbook author, and restaurateur, and the owner of several highly successful restaurants in London. He is known for his innovative, vegetarian-focused cuisine, which blends Middle Eastern and Mediterranean flavors with modern cooking techniques. Ottolenghi's recipes are featured in his best-selling cookbooks, and he has also written for The New York Times and The Guardian.
    `,
    image: 'images/Yotam Ottolenghi.jpg',
  },
  {
    name: 'Alex Atala',
    job: 'Chef/Owner, D.O.M. (Sao Paulo, Brazil)',
    description: `Alex Atala is a Brazilian chef and restaurateur, and the owner of D.O.M., a highly acclaimed restaurant in Sao Paulo that specializes in contemporary Brazilian cuisine. Atala is known for his dedication to using indigenous Brazilian ingredients and his efforts to promote sustainable farming practices in the Amazon rainforest. He is also involved in several philanthropic initiatives, including Gastromotiva, a non-profit organization that uses food to promote social change.
    `,
    image: 'images/Alex Atala.jpeg',
  },
];

const createImage = (className, src, alt) => {
  const img = document.createElement('img');
  img.className = className;
  img.src = src;
  img.alt = alt;
  return img;
};

const createDiv = (className) => {
  const div = document.createElement('div');
  div.className = className;
  return div;
};

const createtext = (textData, tagElement) => {
  const tag = document.createElement(tagElement);
  const text = document.createTextNode(textData);
  tag.appendChild(text);
  return tag;
};

const createFeatures = (feature) => {
  const columnDiv = createDiv('col-md-6 d-flex mt-5 cook-person');

  const continerImage = createDiv('container-image');

  const imageDiv = createDiv('image-feature');

  const imgTransparent = createImage('transparent', 'images/transparent.png');

  const personDiv = createDiv('person');

  const imgPerson = createImage('person-img', feature.image);

  // append
  personDiv.appendChild(imgPerson);
  imageDiv.appendChild(imgTransparent);
  imageDiv.appendChild(personDiv);
  continerImage.appendChild(imageDiv);
  columnDiv.appendChild(continerImage);

  const BodyDiv = createDiv('body ms-4 w-70');

  const infoPerson = createDiv('info-person');
  const namePerson = createDiv('name mt-3');
  const h3 = createtext(feature.name, 'h3');
  namePerson.appendChild(h3);

  const jobPerson = createDiv('job orange-color');
  const jobParagraph = createtext(feature.job, 'p');
  jobPerson.appendChild(jobParagraph);
  infoPerson.appendChild(namePerson);
  infoPerson.appendChild(jobPerson);

  const descriptionDiv = createDiv('description');
  const descriptionParagraph = createtext(feature.description, 'p');
  descriptionDiv.appendChild(descriptionParagraph);
  BodyDiv.appendChild(infoPerson);
  BodyDiv.appendChild(descriptionDiv);
  columnDiv.appendChild(BodyDiv);
  featureCooks.appendChild(columnDiv);
};

if (featureCooks) {
  featuresData.forEach((feature) => {
    createFeatures(feature);
  });
}
const read = document.querySelector('.read-btn');
const more = document.querySelector('.more');
const less = document.querySelector('.less');
const cooks = document.querySelectorAll('.cook-person');
// const visabilityToggle = () => {
//   console.log(cooks, read);
// };
if (read) {
  read.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 2; i < cooks.length; i += 1) {
      cooks[i].classList.toggle('d-none');
      cooks[i].classList.toggle('d-flex');
    }
    more.classList.toggle('d-none');
    less.classList.toggle('d-none');
  });
}

const visability = () => {
  if (window.innerWidth < 768) {
    for (let i = 2; i < cooks.length; i += 1) {
      cooks[i].classList.remove('d-flex');
      cooks[i].classList.add('d-none');
    }
    read.classList.remove('d-none');
  } else {
    for (let i = 2; i < cooks.length; i += 1) {
      cooks[i].classList.remove('d-none');
      cooks[i].classList.add('d-flex');
    }
    read.classList.add('d-none');
  }
};

visability();
window.addEventListener('resize', visability);
