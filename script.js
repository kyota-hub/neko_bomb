const asciiDefault = `
    ∧,,∧
  （・ω・=）
  （,, ｕｕﾉ
`;

const ascii2 = `
  ∧,,∧
（=・ω・）
（,, ｕｕﾉ
`;

const asciiEnd = `
      ＼     ☆
            |   ☆
    (⌒ ⌒ヽ   /
＼ （´⌒   ⌒   ⌒ヾ ／
     ('⌒ ; ⌒   ::⌒ ）
    （´         :::: ） ／
☆─ （´⌒; ::⌒） :; ）
     （⌒::    ::⌒ ）
  ／ （          ソ  ─
`;

let isAscii1 = true;
let isExploded = false;

const toggleAscii = () => {
    if (isAscii1) {
        document.getElementById('ascii-container').innerText = ascii2;
    } else {
        document.getElementById('ascii-container').innerText = asciiDefault;
    }
    isAscii1 = !isAscii1;
};

// 0.5秒ごとにアスキーアートをトグルする
let asciiInterval = setInterval(toggleAscii, 500);

document.getElementById('ascii-container').addEventListener('click', () => {
    if (isExploded) return;

    if (Math.random() < 0.1) {
        isExploded = true;

        const bombSound = new Audio('bomb.mp3');
        bombSound.play();

        clearInterval(asciiInterval);

        document.getElementById('ascii-container').innerText = asciiEnd;
        setTimeout(() => {
            document.body.style.opacity = '0.7';
            document.getElementById('fade-layer').style.display = 'block';
            document.getElementById('restart-button').style.display = 'block';
        }, 500);
    } else {
        const catSound = new Audio('neko.mp3');
        catSound.play();
    }
});

document.getElementById('restart-button').addEventListener('click', () => {
    document.body.style.opacity = '1';
    document.getElementById('ascii-container').innerText = asciiDefault;
    document.getElementById('fade-layer').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';

    isAscii1 = true;
    isExploded = false;
    asciiInterval = setInterval(toggleAscii, 500);
});