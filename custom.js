var speakerIDar2ac = "F01";
var rateIDar2ac = "N";
var vowelIDar2ac = "IY1";

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

function showImageAR2AC() {
    var imgObjAR2AC = document.getElementById("vis-ar2ac");
    var speakerSelAR2AC = document.getElementById("sel-speaker-ar2ac");
    var rateSelAR2AC = document.getElementById("sel-rate-ar2ac");
    var vowelSelAR2AC = document.getElementById("sel-vowel-ar2ac");
    speakerIDar2ac = speakerSelAR2AC.value;
    rateIDar2ac = rateSelAR2AC.value;
    vowelIDar2ac = vowelSelAR2AC.value;
    var imgFile = "https://raw.githubusercontent.com/jaekookang/issp2020/master/img/AR2AC/" + speakerIDar2ac + "_" + rateList[rateIDar2ac] + "_ar2ac_" + vowelIDar2ac + ".png";
    imgObjAR2AC.src = imgFile;
}

function showImageAC2VW() {
    var imgObjAC2VW = document.getElementById("vis-ac2vw");
    var speakerSelAC2VW = document.getElementById("sel-speaker-ac2vw");
    var rateSelAC2VW = document.getElementById("sel-rate-ac2vw");
    var vowelSelAC2VW = document.getElementById("sel-vowel-ac2vw");
    speakerIDac2vw = speakerSelAC2VW.value;
    rateIDac2vw = rateSelAC2VW.value;
    vowelIDac2vw = vowelSelAC2VW.value;
    var imgFile = "https://raw.githubusercontent.com/jaekookang/issp2020/master/img/AC2VW/" + speakerIDac2vw + "_" + rateList[rateIDac2vw] + "_ac2vw_" + vowelIDac2vw + ".png";
    imgObjAC2VW.src = imgFile;
}

function prep_ar2ac() {
    var speakerSel = document.getElementById("sel-speaker-ar2ac");
    var rateSel = document.getElementById("sel-rate-ar2ac");
    var vowelSel = document.getElementById("sel-vowel-ar2ac");
    speakerIDar2ac = speakerSel.value;
    rateIDar2ac = rateSel.value;
    vowelIDar2ac = vowelSel.value
    speakerSel.value = speakerIDar2ac;
    rateSel.value = rateIDar2ac;
    vowelSel.value = vowelIDar2ac;

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

    speakerSel.onChange = showImageAR2AC();
    rateSel.onChange = showImageAR2AC();
    vowelSel.onChange = showImageAR2AC();
}

function prep_ac2vw() {
    var speakerSel = document.getElementById("sel-speaker-ac2vw");
    var rateSel = document.getElementById("sel-rate-ac2vw");
    var vowelSel = document.getElementById("sel-vowel-ac2vw");
    speakerIDac2vw = speakerSel.value;
    rateIDac2vw = rateSel.value;
    vowelIDac2vw = vowelSel.value
    speakerSel.value = speakerIDac2vw;
    rateSel.value = rateIDac2vw;
    vowelSel.value = vowelIDac2vw;

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

    speakerSel.onChange = showImageAC2VW();
    rateSel.onChange = showImageAC2VW();
    vowelSel.onChange = showImageAC2VW();
}


// ----- Initiate
window.onload = function() {
    prep_ar2ac();
    prep_ac2vw();
}

