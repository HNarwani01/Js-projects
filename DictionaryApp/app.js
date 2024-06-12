document.addEventListener("DOMContentLoaded", () => {
  let AudioLinks = [];
  let definitions = [];
  const DOMPrint = document.querySelector(".definition");
  const AudioDOM = document.querySelector(".audiobtn");
  AudioDOM.addEventListener("click", () => {
    if (AudioLinks.length === 0) {
      alert(
        "Either you have not search a word or there are no prononciation for this word"
      );
    } else {
      console.log(AudioLinks);
      let WordVocal = new Audio(`${AudioLinks[0]}`);
      WordVocal.play();
    }
  });
  const fetchData = async (word) => {
    let link = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          alert(`${word} is not a real word`);
        } else {
          seetingData(data);
        }
      });
  };
  const PrintDOM = (arr) => {
    let templateHTML = "";
    templateHTML += `
  <ul>
    ${arr.map((e) => {
      return `<li> ${e.definition} </li>`;
    })}
  </ul>
  `;
    DOMPrint.innerHTML = templateHTML;
  };

  const seetingData = (obj) => {
    let temp = obj[0].meanings;
    definitions = [...temp[0].definitions];
    PrintDOM(definitions);
    let part1 = [...obj[0].phonetics];
    let tempAudioLinks = [...part1.map((e) => e.audio)];
    AudioLinks = tempAudioLinks.filter((e) => e !== "");
  };

  let translatebtn = document.getElementById("Translate");
  let word = document.querySelector("#inputWord");
  translatebtn.addEventListener("click", () => {
    fetchData(word.value);
  });
  let audiobtn = document.querySelector("audiobtn");
  audiobtn.addEventListener("click", () => {
    let audio = new Audio(AudioLinks[0]);
    audio.play;
  });
});
