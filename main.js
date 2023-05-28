/*- Знайти та вивести довжину таких стрінгових значень
'hello world', 'lorem ipsum', 'javascript is cool'*/
let phrase1 = 'Hello world';
let phrase2 = 'lorem ipsum';
let phrase3 = 'javascript is cool';
console.log('The length of the phrase 1 is: ', phrase1.length);
console.log('The length of the phrase 2 is: ', phrase2.length);
console.log('The length of the phrase 3 is: ', phrase3.length);

/*- Перевести до великого регістру такі стрінгові значення
'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log(phrase1.toUpperCase());
console.log(phrase2.toUpperCase());
console.log(phrase3.toUpperCase());

/*- Перевести до нижнього регістру такі стрінгові значення
'HELLO WORLD'The length, 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
let s1 = 'HELLO WORLD';
let s2 = 'LOREM IPSUM';
let s3 = 'JAVASCRIPT IS COOL';
console.log(s1.toLowerCase());
console.log(s2.toLowerCase());
console.log(s3.toLowerCase());

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let stringDirty  = ' dirty string   ';
let stringClean = stringDirty.trim();
console.log('The number of symbols before:', stringDirty.length, 'The number of symbols after:', stringClean.length);

/*- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

function stringToArray(str){
    let arr = str.split(' ');
    console.log(arr);
    return arr;
}
let str = 'Ревуть воли як ясла повні';
stringToArray(str);

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
arrNum = arrNum.map((num) => num.toString());
console.log(arrNum);

/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
let nums = [11,21,3];
const sortNums = (nums, direction) => {
    switch(direction) {
        case 'ascending':
            return nums.sort((a, b) => a - b);
        case 'descending':
            return nums.sort((a, b)  => b - a);
    }
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

/* є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let arrArr1 = coursesAndDurationArray.sort((item1,item2) => item1 - item2);
console.log(arrArr1);
let arrArr2 = coursesAndDurationArray.filter(item => item.monthDuration > 5);
console.log(arrArr2);
let arrArr3 = coursesAndDurationArray.map((item, index) => ({ id: index + 1, ...item}));
console.log(arrArr3);


/*   описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше
{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}
*/

const cards = [
    {cardSuit: 'spade', value: '6', colour: 'black'},
    {cardSuit: 'spade', value: '7', colour: 'black'},
    {cardSuit: 'spade', value: '8', colour: 'black'},
    {cardSuit: 'spade', value: '9', colour: 'black'},
    {cardSuit: 'spade', value: '10', colour: 'black'},
    {cardSuit: 'spade', value: 'ace', colour: 'black'},
    {cardSuit: 'spade', value: 'jack', colour: 'black'},
    {cardSuit: 'spade', value: 'queen', colour: 'black'},
    {cardSuit: 'spade', value: 'king', colour: 'black'},
    {cardSuit: 'clubs', value: '6', colour: 'black'},
    {cardSuit: 'clubs', value: '7', colour: 'black'},
    {cardSuit: 'clubs', value: '8', colour: 'black'},
    {cardSuit: 'clubs', value: '9', colour: 'black'},
    {cardSuit: 'clubs', value: '10', colour: 'black'},
    {cardSuit: 'clubs', value: 'ace', colour: 'black'},
    {cardSuit: 'clubs', value: 'jack', colour: 'black'},
    {cardSuit: 'clubs', value: 'queen', colour: 'black'},
    {cardSuit: 'clubs', value: 'king', colour: 'black'},
    {cardSuit: 'heart', value: '6', colour: 'red'},
    {cardSuit: 'heart', value: '7', colour: 'red'},
    {cardSuit: 'heart', value: '8', colour: 'red'},
    {cardSuit: 'heart', value: '9', colour: 'red'},
    {cardSuit: 'heart', value: '10', colour: 'red'},
    {cardSuit: 'heart', value: 'ace', colour: 'red'},
    {cardSuit: 'heart', value: 'jack', colour: 'red'},
    {cardSuit: 'heart', value: 'queen', colour: 'red'},
    {cardSuit: 'heart', value: 'king', colour: 'red'},
    {cardSuit: 'diamond', value: '6', colour: 'red'},
    {cardSuit: 'diamond', value: '7', colour: 'red'},
    {cardSuit: 'diamond', value: '8', colour: 'red'},
    {cardSuit: 'diamond', value: '9', colour: 'red'},
    {cardSuit: 'diamond', value: '10', colour: 'red'},
    {cardSuit: 'diamond', value: 'ace', colour: 'red'},
    {cardSuit: 'diamond', value: 'jack', colour: 'red'},
    {cardSuit: 'diamond', value: 'queen', colour: 'red'},
    {cardSuit: 'diamond', value: 'king', colour: 'red'},
]
let cardMystery = cards.find((card)  => card.cardSuit === 'spade' && card.value === 'ace');
 console.log(cardMystery);

let arrCard6 = cards.filter((card)  =>  card.value ==='6');
console.log(arrCard6);

let arrCardRed = cards.filter((card)  => card.colour === 'red');
console.log(arrCardRed);

let arrDiamond = cards.filter((card)  => card.cardSuit === 'diamond');
console.log(arrDiamond);

let arrClubs = cards.filter((card)  => ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value) && card.cardSuit === 'clubs');
console.log(arrClubs);

/*   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
} */
let cardsSorted = cards.reduce((acc, curVal) => {
    switch(curVal.cardSuit){
        case 'spade':
            acc.spades.push(curVal);
            break;
        case 'diamond':
            acc.diamonds.push(curVal);
            break;
        case 'hearts':
            acc.hearts.push(curVal);
            break;
        case 'clubs':
            acc.clubs.push(curVal);
            break;
    }
    return acc;
   },
    { spades:[], diamonds:[], hearts:[], clubs:[],
    })
console.log(cardsSorted);

/*    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker */
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let courseArrayNew1 = coursesArray.filter(item => item.modules.includes( 'sass'));
let courseArrayNew2 = coursesArray.filter(item => item.modules.includes('docker'));
console.log('The elements which contain sass:', courseArrayNew1);
console.log('The elements which contain docker:', courseArrayNew2);
