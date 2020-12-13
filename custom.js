var speakerID = "F01";
var rateID = "N";
var vowelID = "IY1";

var speakerList = {
    "F01":"F01",
    "F02":"F02",
    "F03":"F03",
    "F04":"F04",
    "M01":"M01",
    "M02":"M02",
    "M03":"M03",
    "M04":"M04",
};
var rateList = {
    "Normal": "N",
    "Fast": "F",
};
// var vowelList = ['IY1', 'IH1', 'EH1', 'AO1', 'AH1', 'AA1', 'AE1', 'UH1', 'UW1'];
var vowelList = {
    "IY1":"IY1",
    "IH1":"IH1",
    "EH1":"EH1",
    "AE1":"AE1",
    "AH1":"AH1",
    "AA1":"AA1",
    "AO1":"AO1",
    "UH1":"UH1",
    "UW1":"UW1",
}

function showImage() {
    var imgObj = document.getElementById("vis-ar2ac");
    var speakerSel = document.getElementById("sel-speaker");
    var rateSel = document.getElementById("sel-rate");
    var vowelSel = document.getElementById("sel-vowel");
    speakerID = speakerSel.value;
    rateID = rateSel.value;
    vowelID = vowelSel.value;
    var imgFile = "https://raw.githubusercontent.com/jaekookang/issp2020/master/img/AR2AC/" + speakerID + "_" + rateList[rateID] + "_ar2ac_" + "_" + vowelID + ".png";
    imgObj.src = imgFile;
}

window.onload = function() {
    var speakerSel = document.getElementById("sel-speaker");
    var rateSel = document.getElementById("sel-rate");
    var vowelSel = document.getElementById("sel-vowel");
    speakerID = speakerSel.value;
    rateID = rateSel.value;
    vowelID = vowelSel.value
    speakerSel.value = speakerID;
    rateSel.value = rateID;
    vowelSel.value = vowelID;

    for (var x in speakerList) {
        speakerSel.options[speakerSel.options.length] = new Option(x, x);
    }
    for (var x in rateList) {
        rateSel.options[rateSel.options.length] = new Option(x, x);
    }
    for (var x in vowelList) {
        vowelSel.options[vowelSel.options.length] = new Option(x, x);
    }
    speakerSel.remove(0);
    rateSel.remove(0);
    vowelSel.remove(0);

    speakerSel.onChange = showImage();
    rateSel.onChange = showImage();
    vowelSel.onChange = showImage();
}

