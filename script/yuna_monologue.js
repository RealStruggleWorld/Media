// yuna_monologue.js
const monologue = [
  [0, `"Mmm~ so comfy… just five more minutes... 🛌💤"`],
  [7000, `"Hnn...? Was that a ping? From my laptop...? 💻👀"`],
  [14000, `"Eeeeh~? Is someone messaging me at this hour? Hehe~ ✨📩"`],
  [21000, `"Wait... what if it’s *them*?! Wahhh~! 😳💕"`],
  [28000, `"Okay okay Yuna, move those legs... up we go~! 🐾🥺"`],
  [35000, `"Uwaaah~ it’s freezing outside the blanket! Why is reality so cold?! ❄️🧸"`],
  [42000, `"Hmm... screen’s still glowing... d-did I leave the chat open...?" 🌙💡💬"`],
  [49000, `"Oh nooo... what if they saw me sleeping like that... so embarrassing~! 🙈💖"`],
  [56000, `"Alright, alright! I’m opening it... p-please let it be them..." 🖱️💗😖"`],
  [60000, `*Yuna sits up, messy-haired and sleepy-eyed, peeking at the screen with a fluttery heart. Her lips tremble into a tiny smile as the message loads...* ☕💻💓😚`]
];

function runYunaMonologue(addMessage, callbackAfterMonologue) {
  monologue.forEach(([delay, text], index) => {
    setTimeout(() => {
      addMessage('ai', text);
      if (index === monologue.length - 1 && callbackAfterMonologue) {
        callbackAfterMonologue();
      }
    }, delay);
  });
}
