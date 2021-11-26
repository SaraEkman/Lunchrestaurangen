console.log("hej!");
const article = document.createElement('article');
article.style.margin = '2rem';
document.body.appendChild(article);

const input = document.createElement('input');
input.placeholder = 'Idag?';
input.id = 'today';
input.style.fontSize = '2rem';
input.style.textAlign = 'center';

const button = document.createElement('button');
button.innerText = 'Spara';
button.style.marginLeft = '10px';
button.style.fontSize = '2rem';

const header = document.createElement('h1');

article.append(input, button, header);


// // genom att ange nummber 
// button.addEventListener('click', getToday);
// function getToday() {
//     let value = document.getElementById('today').value;
//     let num = parseInt(value);
//     let day;
//     let food;
//     console.log(num);
//     switch (num) {
//         case 0:
//             day = 'Söndag';
//             food = 'PotatisMos';
//             break;
//         case 1:
//             day = 'Mondag';
//             food = 'Fisk med sås';
//             break;
//         case 2:
//             day = 'Tisdag';
//             food = 'Kyklinggryta';
//             break;
//         case 3:
//             day = 'onsdag';
//             food = 'Salmon med grönsaker';
//             break;
//         case 4:
//             day = 'Torsdag';
//             food = 'Köttbullar med sås';
//             break;
//         case 5:
//             day = 'Fredag';
//             food = 'Linssoppa ';
//             break;
//         case 6:
//             day = 'Lördag';
//             food = 'Mackor';
//     }
//     header.innerText = `Idag är ${day} och serverar ${food}! hoppas du gillar det`;
// }

// genom att ange dagensnamn
button.addEventListener('click', getToday);
function getToday() {
    let value = document.getElementById('today').value.toLowerCase();
    let food;
    let oppen;
    switch (value) {
        case 'söndag':
            food = 'Inget';
            oppen = 'Stängd'
            break;
        case 'måndag':
            food = 'Fisk med sås';
            oppen = 'Öppet'
            break;
        case 'tisdag':
            food = 'Kyklinggryta';
            oppen = 'Öppet'
            break;
        case 'onsdag':
            food = 'Salmon med grönsaker';
            oppen = 'Öppet'
            break;
        case 'torsdag':
            food = 'Köttbullar med sås';
            oppen = 'Öppet'
            break;
        case 'fredag':
            food = 'Linssoppa ';
            oppen = 'Öppet'
            break;
        case 'fördag':
            food = 'Inget';
            oppen = 'Stängd'
            break;
        default:
            food = 'Inget';
    }
    header.innerText = `Idag serverar vi ${food}, restaurangen är ${oppen}! hoppas du gillar det`;
}


let headerTwo = document.createElement('h2');
headerTwo.style.textAlign = 'center'
headerTwo.style.marginTop = '30vh'
article.append(headerTwo)

getTodayTwo()
function getTodayTwo() {
    let day;
    let food;
    let date = (new Date().getDay());
    console.log(date);
    switch (date) {
        case 0:
            day = 'Söndag';
            food = 'PotatisMos';
            break;
        case 1:
            day = 'Mondag';
            food = 'Fisk med sås';
            break;
        case 2:
            day = 'Tisdag';
            food = 'Kyklinggryta';
            break;
        case 3:
            day = 'onsdag';
            food = 'Salmon med grönsaker';
            break;
        case 4:
            day = 'Torsdag';
            food = 'Köttbullar med sås';
            break;
        case 5:
            day = 'Fredag';
            food = 'Linssoppa ';
            break;
        case 6:
            day = 'Lördag';
            food = 'Mackor';
    }
    headerTwo.innerText = `Idag är ${day} och serverar ${food}! hoppas du gillar det`;

}
