'use strict';

/********** current state **********/
const eventState = {
  IDLE: 'idle' /** Idle */,
  PLAYING: 'playing' /** Game playing */,
  SUCCEED: 'succeed' /** Success */,
  FAILED: 'failed' /** Failed (click bugs or timeover) */,
  STOPPED: 'stopped' /** Stopped (click stop button) */,
};

let currentState = eventState.IDLE;

function setEventState(state) {
  currentState = state;
}

/********** Sounds **********/
const bgSound = new Audio('sound/bg.mp3');
const bugPullSound = new Audio('sound/bug_pull.mp3');
const carrotPullSound = new Audio('sound/carrot_pull.mp3');
const gameWinSound = new Audio('sound/game_win.mp3');

/********** play, stop btn **********/
const playStopBtn = document.querySelector('.play__stop__btn');
playStopBtn.addEventListener('click', (event) => {
  if (event.target.classList[1] === 'fa-play') {
    startGame();
  } else if (event.target.classList[1] === 'fa-stop') {
    stopGame(eventState.STOPPED);
  }
});

function changeIcon() {
  const icon = document.querySelector('.fa-solid');
  if (icon === null) {
    console.log('null');
    return;
  }
  icon.setAttribute('class', 'fa-solid fa-stop');
}

/********** timer, timeBar **********/
const timeBar = document.querySelector('.time__bar');
const TIMER_INTERVAL = 1000;
let timerIntervalID;
let remainSecond = 10;

/** Timer start */
function startTimer() {
  timeBar.textContent = '0:10';
  remainSecond = 10;
  timerIntervalID = setInterval(timerCallback, TIMER_INTERVAL);
}

/** Timer stop */
function stopTimer() {
  timeBar.textContent = '0:00';
  try {
    clearInterval(timerIntervalID);
  } catch (e) {
    console.log(e);
  }
}

/** timer callback */
function timerCallback() {
  remainSecond--;
  timeBar.textContent = `0:0${remainSecond}`;
  if (remainSecond === 0) {
    stopGame(eventState.FAILED);
  }
}

/********** Targets (carrots, bugs) ***********/
const TARGET_COUNT = 10;
const farmContainer = document.querySelector('.farm__container');
const farmTarget = document.querySelector('.target__field');
const carrotCount = document.querySelector('.carrot__count');
let currentCarrotCount = TARGET_COUNT;

/** Handle targets click event **/
farmTarget.addEventListener('click', (event) => {
  if (currentState !== eventState.PLAYING) {
    return;
  }
  let targetElement = event.target;
  if (targetElement.tagName === 'IMG') {
    targetElement = event.target.parentElement;
  }

  if (targetElement.classList[1] === 'carrot') {
    if (currentCarrotCount === 1) {
      currentCarrotCount--;
      carrotCount.textContent = '0';
      stopGame(eventState.SUCCEED);
      gameWinSound.play();
    } else {
      currentCarrotCount--;
      carrotCount.textContent = `${currentCarrotCount}`;
      targetElement.remove();
      carrotPullSound.play();
    }
  } else if (targetElement.classList[1] === 'bug') {
    stopGame(eventState.FAILED);
    bugPullSound.play();
  } else {
    console.log('not find');
  }
});

/** Set Targets position randomly */
function setPositionRandomize(element, widthContainer, heightContainer) {
  element.style.left = `${Math.floor(Math.random() * (widthContainer - 20))}px`;
  element.style.bottom = `${Math.floor(
    Math.random() * (heightContainer - 50)
  )}px`;
}

/** Create Targets carrot or bug for TARGET_COUNT, return array */
function createTargetEach(type) {
  if (type !== 'carrot' && type !== 'bug') {
    console.log('type error');
    return null;
  }
  const newTargetlist = new Array();
  const farmRect = farmContainer.getBoundingClientRect();
  for (let i = 0; i < TARGET_COUNT; i++) {
    const newTarget = document.createElement('span');
    newTarget.setAttribute('class', 'target');
    setPositionRandomize(newTarget, farmRect.width, farmRect.height);
    newTargetlist.push(newTarget);
  }
  if (type === 'carrot') {
    newTargetlist.forEach((newTarget) => {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', 'img/carrot.png');
      newTarget.appendChild(newImage);
      newTarget.classList.add('carrot');
    });
  } else {
    newTargetlist.forEach((newTarget) => {
      const newImage = document.createElement('img');
      newImage.setAttribute('src', 'img/bug.png');
      newTarget.appendChild(newImage);
      newTarget.classList.add('bug');
    });
  }
  return newTargetlist;
}

/** Create carrots and bugs, append them to field */
function createTargets() {
  const carrotList = createTargetEach('carrot');
  const bugList = createTargetEach('bug');
  carrotList.forEach((carrot) => {
    farmTarget.appendChild(carrot);
  });
  bugList.forEach((bug) => {
    farmTarget.appendChild(bug);
  });
  currentCarrotCount = 10;
  carrotCount.textContent = `${currentCarrotCount}`;
}

/** Remove Targets */
function removeTargets() {
  if (farmTarget.childElementCount === 0) {
    return;
  }

  while (farmTarget.childElementCount > 0) {
    farmTarget.childNodes.forEach((elements) => {
      elements.remove();
    });
  }
}

/********** Result popup **********/
const resultPopup = document.querySelector('.result__popup');
const redoBtn = document.querySelector('.redo__btn');
const resultState = document.querySelector('.result__state');

/** Add Redo button click event */
redoBtn.addEventListener('click', (event) => {
  if (event.target.classList[1] === 'fa-rotate-right') {
    startGame();
  }
});

/** Deactive popup (when game starting) */
function deactivePopup() {
  resultPopup.style.visibility = 'hidden';
  redoBtn.style.visibility = 'hidden';
}

/** Active popup (when game stopped (succeed, failed, stopped)) */
function activePopup() {
  resultPopup.style.visibility = 'visible';
  redoBtn.style.visibility = 'visible';
  resultState.innerText = `${currentState}`;
}

/********** Main function **********/

/** Start game */
function startGame() {
  setEventState(eventState.PLAYING);
  deactivePopup();
  changeIcon();
  removeTargets();
  startTimer();
  createTargets();
  bgSound.load();
  bgSound.play();
}

/** Stop game */
function stopGame(state) {
  bgSound.pause();
  setEventState(state);
  stopTimer();
  activePopup();
}
