module.exports = function toReadable (number) {
  let words = [
      ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
      ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  ]

  if (number <= 10) {
      return words[0][number];
  } else if (number < 20) {
      return words[1][number - 11];
  } 

  if (number < 100) {
    if (number % 10 == 0) {
        return words[2][Math.floor(number / 10) - 1]
      }
      return words[2][Math.floor(number / 10) - 1] + ' ' + words[0][number % 10];
  }
  
  if (number < 1000) {
      if (number % 100 == 0) {
        return words[0][Math.floor(number / 100)] + ' hundred'
      }
      if (number % 10 == 0) {
        return words[0][Math.floor(number / 100)] + ' hundred ' + words[2][Math.floor(number / 10) % 10 - 1]
      }
      if (number % 100 < 11) {
          return words[0][Math.floor(number / 100)] + ' hundred ' + words[0][number % 100]
      }
      if (number % 100 < 20) {
        return words[0][Math.floor(number / 100)] + ' hundred ' + words[1][number % 100 - 11];
      }
      return words[0][Math.floor(number / 100)] + ' hundred ' + words[2][Math.floor(number / 10) % 10 - 1] + ' ' + words[0][number % 10];
  }
}