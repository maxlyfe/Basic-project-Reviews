const reviews = [

    {
        id: 1,
        name: 'Santiago',
        job: 'Web developer',
        img: 'https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/912957/91295778c2a22a7fd7d91496b859f1e0_large.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec accumsan sem, eget ultrices neque. Cras laoreet eros nisl, ut porttitor eros vulputate non. Mauris finibus, dui eget gravida aliquet, arcu mi fermentum sem, sit amet volutpat ligula neque quis eros. Nullam molestie lectus ipsum.',
    },
    {
        id: 2,
        name: 'Nikolas',
        job: 'Garçom',
        img: 'https://kedimanassif.com.br/wp-content/uploads/2021/01/Como-saber-se-a-pessoa-vai-ficar-careca.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec accumsan sem, eget ultrices neque. Cras laoreet eros nisl, ut porttitor eros vulputate non. Mauris finibus, dui eget gravida aliquet, arcu mi fermentum sem, sit amet volutpat ligula neque quis eros. Nullam molestie lectus ipsum.',
    },
    {
        id: 3,
        name: 'Mike',
        job: 'Developer Jr.',
        img: 'https://media.infopedia.pt/p/102/sp/10200/thumbnail/entry_id/0_0uo87egy/version/100002/width/380/height/249',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec accumsan sem, eget ultrices neque. Cras laoreet eros nisl, ut porttitor eros vulputate non. Mauris finibus, dui eget gravida aliquet, arcu mi fermentum sem, sit amet volutpat ligula neque quis eros. Nullam molestie lectus ipsum.',
    },
    {
        id: 4,
        name: 'Kaio',
        job: 'YouTuber',
        img: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/01/272659509_640826040498160_305754906527072885_n-e1643549776803.jpg?w=876&h=484&crop=1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec accumsan sem, eget ultrices neque. Cras laoreet eros nisl, ut porttitor eros vulputate non. Mauris finibus, dui eget gravida aliquet, arcu mi fermentum sem, sit amet volutpat ligula neque quis eros. Nullam molestie lectus ipsum.',
    },
    {
        id: 5,
        name: 'Kauan',
        job: 'Developer Sernior',
        img: 'https://static.cobrefacil.com.br/assets/base/035/3ab/4cb/gerar-boleto-gratis-pessoa-fisica.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec accumsan sem, eget ultrices neque. Cras laoreet eros nisl, ut porttitor eros vulputate non. Mauris finibus, dui eget gravida aliquet, arcu mi fermentum sem, sit amet volutpat ligula neque quis eros. Nullam molestie lectus ipsum.',
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 5;

window.addEventListener('DOMContentLoaded', () => {
    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    ShowPerson();

});

function ShowPerson(person) {
    const item = reviews[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    };
    ShowPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    };
    ShowPerson(currentItem);
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    ShowPerson(currentItem);
});