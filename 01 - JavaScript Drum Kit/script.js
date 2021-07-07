const keys = document.querySelectorAll('.key');
const sounds = document.querySelectorAll('audio')

keys.forEach(key => {
  addEventListener('transitionend', (e) => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  })
})

document.addEventListener('keyup', (k) => {
  keys.forEach(key => {
    if (key.getAttribute('data-key') == k.keyCode){
      key.classList.add('playing');
    };
  });

  sounds.forEach(sound => {
    if (sound.getAttribute('data-key') == k.keyCode){
      sound.currentTime = 0;
      sound.play();
    }
  })
  // console.log(k)
})
// const keys = document.querySelectorAll('.key')

// keys.forEach(key => {
//   addEventListener('keydown', (k) => {
//     if (k.keyCode == key.getAttribute('data-key')) {
//       const sound = new Audio()
//       key.classList.toggle('playing');
//     };
//   });
// });