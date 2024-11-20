function showProject(name, author, date, instructions, img1, img2, img3, videoUrl, question1, question2, question3, answer1, answer2, answer3) {
  document.getElementById('projectCon').style.opacity = '1';
  document.getElementById('projectCon').style.width = '100vw';
  document.getElementById('projectCon').style.height = '100vh';
  document.getElementById('projectCon').style.overflow = 'visible';
  document.getElementById('projectName1').innerHTML = name;
  document.getElementById('projectName2').innerHTML = name;
  document.getElementById('authorName1').innerHTML ='By ' + author;
  document.getElementById('authorName2').innerHTML ='By ' + author;
  document.getElementById('pubDate1').innerHTML = 'Published: ' + date;
  document.getElementById('pubDate2').innerHTML = 'Published: ' + date;
  document.getElementById('instructions1').innerHTML = instructions;
  document.getElementById('instructions2').innerHTML = instructions;
  document.getElementById('img11').src = img1;
  document.getElementById('img12').src = img1;
  document.getElementById('img21').src = img2;
  document.getElementById('img22').src = img2;
  document.getElementById('img31').src = img3;
  document.getElementById('img32').src = img3;
  document.getElementById('video1').src = 'https://' + videoUrl;
  document.getElementById('video2').src = 'https://' + videoUrl;
  document.getElementById('question11').innerHTML = question1;
  document.getElementById('question12').innerHTML = question1;  
  document.getElementById('question21').innerHTML = question2;
  document.getElementById('question22').innerHTML = question2;  
  document.getElementById('question31').innerHTML = question3;
  document.getElementById('question32').innerHTML = question3;  
  document.getElementById('answer11').innerHTML = answer1;
  document.getElementById('answer12').innerHTML = answer1;  
  document.getElementById('answer21').innerHTML = answer2;
  document.getElementById('answer22').innerHTML = answer2;  
  document.getElementById('answer31').innerHTML = answer3;
  document.getElementById('answer32').innerHTML = answer3;  
}

function hideProjectCon() {
  document.getElementById('projectCon').style.overflow = 'hidden';
  document.getElementById('projectCon').style.width = '0';
  document.getElementById('projectCon').style.height = '0';
  document.getElementById('projectCon').style.opacity = '0';

  document.getElementById('projectName1').innerHTML = '';
  document.getElementById('projectName2').innerHTML = '';
  document.getElementById('authorName1').innerHTML = '';
  document.getElementById('authorName2').innerHTML = '';
  document.getElementById('pubDate1').innerHTML = '';
  document.getElementById('pubDate2').innerHTML = '';
  document.getElementById('instructions1').innerHTML = '';
  document.getElementById('instructions2').innerHTML = '';
  document.getElementById('img11').src = '';
  document.getElementById('img12').src = '';
  document.getElementById('img21').src = '';
  document.getElementById('img22').src = '';
  document.getElementById('img31').src = '';
  document.getElementById('img32').src = '';
  document.getElementById('video1').src = '';
  document.getElementById('video2').src = '';
  document.getElementById('question11').innerHTML = '';
  document.getElementById('question12').innerHTML = '';  
  document.getElementById('question21').innerHTML = '';
  document.getElementById('question22').innerHTML = '';  
  document.getElementById('question31').innerHTML = '';
  document.getElementById('question32').innerHTML = '';  
  document.getElementById('answer11').innerHTML = '';
  document.getElementById('answer12').innerHTML = '';  
  document.getElementById('answer21').innerHTML = '';
  document.getElementById('answer22').innerHTML = '';  
  document.getElementById('answer31').innerHTML = '';
  document.getElementById('answer32').innerHTML = '';  
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function addEmoji(name) {
  let emojiName = name;
  let text = document.getElementById('comment').value;
  let text1 = document.getElementById('comment1').value;
  let emoji = '';

  if (emojiName == 'like') {
    emoji = '👍';
  }
  else if (emojiName == 'heart') {
    emoji = '❤️';
  }
  else if (emojiName == 'laugh') {
    emoji = '🤣';
  }
  else if (emojiName == 'wow') {
    emoji = '😱';
  }
  else if (emojiName == 'cool') {
    emoji = '😎';
  }
  else {
    emoji = 'Unknown';
  }

  document.getElementById('comment').value = text + emoji;
  document.getElementById('comment1').value = text1 + emoji;
}

function toggleLikes1() {
  // Toggles both 'molike1' and 'like1' checkboxes
  const molike1 = document.getElementById('molike1');
  const like1 = document.getElementById('like1');
  molike1.checked = !molike1.checked;
  like1.checked = !like1.checked;
}

function toggleLikes2() {
  // Toggles both 'molike2' and 'like2' checkboxes
  const molike2 = document.getElementById('molike2');
  const like2 = document.getElementById('like2');
  molike2.checked = !molike2.checked;
  like2.checked = !like2.checked;
}