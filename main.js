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



 /*   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
        diamonds:[],
    hearts:[],
    clubs:[]
} */

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
