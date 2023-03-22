var strict;

function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("BOOK");

function sayHiToHeadphonedRoommate(string) {
  if (string == string.toLowerCase()) {
    return "I can\'t hear you!";
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!";
  } else {
    return "I would love to!";
  } 
}
sayHiToHeadphonedRoommate("HI");
sayHiToHeadphonedRoommate("hi");
sayHiToHeadphonedRoommate("Let's have dinner together");