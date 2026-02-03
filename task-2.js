/* Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 */

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallestName = friends[0];
for(const i of friends){
    if(i.length < smallestName.length){
        smallestName = i;
    }
}
console.log(smallestName);