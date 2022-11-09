function showSolution(el) {
  const element = document.querySelector(`div#${el} #solution`);
  element.classList.remove('hiddenDiv');
  element.classList.add('showDiv');
  switch (el) {
    case 'capitalize-a-string':
      element.innerText =
        'const cap = str => str.charAt(0).toUpperCase() + str.slice(1);';
      break;
    case 'copy-to-clipboard':
      element.innerText =
        'const copyToClipboard = (text) => navigator.clipboard.writeText(text);';
      break;
    case 'remove-duplicates':
      element.innerText = 'const uniqueValues = new Set([...arr]);';
      break;
    case 'check-even-odd':
      element.innerText = 'const isEven = (num) => num % 2 === 0';
      break;
    case 'average-of-numbers':
      element.innerText =
        'const average = ( ...nums) => nums.reduce((a, b) => a + b) / nums.length;';
      break;
    case 'reverse-string':
      element.innerText =
        'const reverse = (str) => str.split("").reverse().join("")';
      break;
    case 'rgb-to-hex':
      element.innerText =
        'const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)';
      break;
    case 'random-hex-color':
      element.innerText =
        'const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, "0")}`';
      break;
      case 'check-array-empty':
        element.innerText =
          'const arrayIsNotEmpty = arr => Array.isArray(arr) && arr.length > 0';
        break;
        case 'shuffle-array':
          element.innerText =
            'const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random())';
          break;
    default:
      break;
  }
}
function hideSolution(el) {
  document.querySelector(`div#${el} #solution`).classList.remove('showDiv');
  document.querySelector(`div#${el} #solution`).classList.add('hiddenDiv');
}
