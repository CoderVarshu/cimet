const rightDiv = document.querySelector('#right');

const Data = [

{ 
    name: 'crash',
    img : 'assets/crash.png',
    audio : 'assets/crash.mp3',
    key : ['a', '']
},
{ 
    name : 'kick',
    img : 'assets/kick.png',
    kickAudio : 'assets/kick.mp3'
},
{ 
     name : 'snare',
    img : 'assets/snare.png',
    audio : 'assets/snare.mp3'
},
{
    name : 'tom',
    img : 'assets/tom.png',
    audio: 'assets/tom.mp3',
}

]


function PlayAudio (image, src, audio, key) {

const image = document.createElement('img')
image.src = src;



rightDiv.append(image)

}




rightDiv.append(drum)