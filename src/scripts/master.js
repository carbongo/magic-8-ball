// Import your script files
// import interaction from './interaction.js';

// Import your styles
import "../styles/master.less";

const $ = (string) => {
  return document.querySelector(string);
};

const ball = $(".ball");
const inner = $(".ball__inner");
const answer = $(".ball__inner__answer");
const answerList = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const animate = (el, anim) => {
  el.style.animationName = "none";
  el.offsetHeight;
  el.style.animationName = anim;
};

const init = () => {
  animate(ball, "ball");
  animate(inner, "inner");
  animate(answer, "answer");
};
init();

const shake = () => {
  animate(ball, "ballShake");
  animate(inner, "innerShake");
  animate(answer, "answerShake");
  setTimeout(() => {
    answer.innerHTML =
      answerList[Math.floor(Math.random() * answerList.length)];
  }, 500);
};

$("#ball").onclick = shake;
