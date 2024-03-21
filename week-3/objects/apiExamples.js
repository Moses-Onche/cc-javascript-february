
(async () => {
  let books = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalm",
    "Proverbs",
    "Ecclesiastes",
    "Song of songs",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habbakuk",
    "Zephaniah",
    "Haggah",
    "Zachariah",
    "Malachi"
  ];

  let bookSelector = Math.floor(Math.random() * 10) + 1;
  
  let url = 'https://bible-api.com/john 3:16';
  let response = await fetch(url);
  let message = await response.json()
  document.getElementById('chapter').innerHTML = message.reference;
  document.getElementById('verse').innerHTML = "\"" + message.text + "\"";
  // console.log(message.text);
})();

document.getElementById('verse').innerHTML = message.text;