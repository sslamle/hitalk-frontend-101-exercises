var txtFind = document.getElementById('find');
var button = document.getElementById('buttonFind');
var dataHTML = document.getElementById('data');

button.addEventListener('click', () => {
    dataHTML.innerHTML = "";
    setStyle(300);
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCsxDHNnJ0-PKbeYk3T_LqCDnLtnPxLeLY&q=${txtFind.value}`)
        .then((reponse) => {
            return reponse.json();
        })
        .then((data) => {
            console.log(data);
            for (var i = 0; i < data.items.length; i++) {
                var object = data.items[i];
                var img = object.snippet.thumbnails.high.url;
                var title = object.snippet.title;
                var link = `https://www.youtube.com/watch?v=${object.id.videoId}`;
                var channelTitle = object.snippet.channelTitle;
                var description = object.snippet.description;
                var channelID = object.snippet.channelId;
                createHTML(img,link,title,channelTitle,channelID,description);
            }

        })
})


function setStyle(top) {
    txtFind.style.top = `${-top-1}px`;
    txtFind.style.width = '500px';
    button.style.top = `${-top}px`;
    data.style.top = `${-top + 20}px`;
}


function createHTML(imgPath,linkYoutube,title,chanelTitle,channelID,description) {
    var content = document.createElement('div');
    content.setAttribute('class', 'content');
    var right = document.createElement('div');
    right.setAttribute('class','rightBox');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', linkYoutube);
    aTag.setAttribute('class', 'imgLink');
    aTag.setAttribute('target', '_blank');
    var imgTag = document.createElement('img');
    // console.log(right);
    imgTag.setAttribute('src', imgPath);
    aTag.appendChild(imgTag);
    var titleHTML = document.createElement('a');
    titleHTML.setAttribute('class', 'title');
    titleHTML.setAttribute('href', linkYoutube);
    titleHTML.setAttribute('target', '_blank');
    titleHTML.appendChild(document.createTextNode(title));
    var channelHTML = document.createElement('a');
    channelHTML.setAttribute('href',`https://www.youtube.com/channel/${channelID}`);
    channelHTML.setAttribute('target','_blank');
    channelHTML.setAttribute('class', 'chanelTitle');
    channelHTML.appendChild(document.createTextNode(chanelTitle));
    var createDecrip = document.createElement('p');
    createDecrip.setAttribute('class','decript');
    createDecrip.appendChild(document.createTextNode(description));
    right.appendChild(titleHTML);
    right.appendChild(document.createElement('br'));
    right.appendChild(channelHTML);
    right.appendChild(createDecrip);
    content.appendChild(aTag);
    content.appendChild(right);
    // console.log(img);
    dataHTML.appendChild(content);
    console.log(dataHTML);
}