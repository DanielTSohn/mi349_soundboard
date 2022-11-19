var midFlamButton = document.getElementById('sound_1');
var midFlamSound = document.getElementById("boomSound");
var PlayBoom = function()
{
    midFlamSound.currentTime = 0;
    midFlamSound.play();
}
midFlamButton.addEventListener('click', PlayBoom);

var highFlamButton = document.getElementById('sound_2');
var highFlamSound = document.getElementById("bigBoomSound");
var PlayBigBoom = function()
{
    highFlamSound.currentTime = 0;
    highFlamSound.play();
}
highFlamButton.addEventListener('click', PlayBigBoom);

var hiHatButton = document.getElementById('sound_3');
var hiHatSound = document.getElementById("hat_1");
let hiHatSounds = 
[
    document.getElementById("hat_1"),
    document.getElementById("hat_2"),
    document.getElementById("hat_3"),
    document.getElementById("hat_4"),
    document.getElementById("hat_5"),
    document.getElementById("hat_6"),
    document.getElementById("hat_7"),
    document.getElementById("hat_8"),
    document.getElementById("hat_9"),
    document.getElementById("hat_10"),
    document.getElementById("hat_11"),
    document.getElementById("hat_12"),
    document.getElementById("hat_13"),
    document.getElementById("hat_14"),
    document.getElementById("hat_15")
];
var PlayRandomHat = function()
{
    hiHatButton.currentTime = 0;
    hiHatSound = hiHatSounds[Math.floor(Math.random() * (hiHatSounds.length - 1))]
    hiHatSound.play();
}
hiHatButton.addEventListener('click', PlayRandomHat);

