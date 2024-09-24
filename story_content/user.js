function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mdPRSqQXRV":
        Script1();
        break;
      case "6hTiGGWTcyi":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.4;
}

function Script2()
{
  ar audio = document.getElementById('bgSong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.3;
}

