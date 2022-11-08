/* Using .map()
 *
 * Using the musicData array and .map():
 *   - return a string for each item in the array in the following format
 *     <album-name> by <artist> sold <sales> copies
 *   - store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - do not delete the musicData variable
 *   - do not alter any of the musicData content
 *   - do not format the sales number, leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

/* <album-name> by <artist> sold <sales> copies */

//const albumSalesStrings = musicData.map((item) => item.name + ' by ' + item.artist + ' sold ' + item.sales + ' copies');
const albumSalesStrings = musicData.map(album => `${album.name} by ${album.artist} sold ${album.sales} copies`);
console.log('ALBUM SALES: ' + albumSalesStrings);
/* 
Use the provided music data array and the .filter() method 
to create a new array that only contains albums with names 
between 10 and 25 characters long. Store the new array in a 
variable called results. */

const results = musicData.filter( album => album.name.length >= 10 && album.name.length <= 25);
console.log(results);
/*
Using the same music data, use filter() and map()
to filter and map over the list and store the result
in a variable named popular. Use filter() to filter the 
list down to just the albums that have sold over 1,000,000 copies. 
Then chain map() onto the returned array to create a new array that 
contains items in the format:
<artist> is a great performer
*/

const popular = musicData.filter(album => album.sales >=1000000).map(album => album.artist + ' is a great performer');
/* or
const popular = musicData.filter(album => album.sales >=1000000).map(album => `${album.artist} is a great performer`);
*/
console.log('POPULAR: ' + popular);

/*
Date
*/
document.getElementById('date').innerText = new Date().toLocaleTimeString();