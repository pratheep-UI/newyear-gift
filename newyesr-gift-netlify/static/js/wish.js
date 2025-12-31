const p = new URLSearchParams(location.search);
const name = p.get("name");
const relation = p.get("relation");

document.getElementById("name").innerText = name;

const wishes = {
  Friend: {
    en: `You are not just my friend 🤍,
	you are a part of my happiest memories✨
	May this year reward your heart with endless joy🌟😊.`,
    ta: `நீ என் நண்பன் மட்டும் அல்ல 🤍,
	என் மகிழ்ச்சியின் ஒரு பகுதி ✨
	இந்த புத்தாண்டு உன் மனதை மகிழ்ச்சியால் நிரப்பட்டும் 🌟😊.`
  },
  Parent: {
    en: `Your love built my world 🤍,
	your sacrifices shaped my life 🙏✨
	May this year return you peace and pride 🌸🕊️`,
    ta: `உங்கள் அன்பே என் உலகத்தை கட்டியது 🤍🏡,
	உங்கள் தியாகமே என் வாழ்க்கையை வடிவமைத்தது 🙏✨
	இந்த புத்தாண்டு உங்களுக்கு அமைதியும் பெருமையும் தரட்டும் 🌸🕊️.`
  },
  Relative: {
    en: `Relatives means warmth 🤍,
	memories 🌸, and belonging 🏡
	May this year strengthen our bond forever ✨🤝.`,
    ta: `உறவினர்கள் என்றால் அன்பு 🤍,
	நினைவுகள் 🌸 மற்றும் சொந்தம் 🏡
	இந்த புத்தாண்டு உறவை மேலும் வலுப்படுத்தட்டும் ✨🤝.`
  },
  "Life Partner": {
    en: `With you, life feels complete 💞,
	every moment feels meaningful ✨
	May this year deepen our forever 🥰♾️`,
    ta: `உன்னுடன் வாழ்க்கை முழுமை 💞,
	ஒவ்வொரு நொடியும் அர்த்தம் ✨
	இந்த புத்தாண்டு எங்கள் என்றும் அன்பை வலுப்படுத்தட்டும் 🥰♾️`
  },
  Teacher: {
    en: `Your guidance shaped my destiny 🌱,
	your words built my confidence 📘✨
	May this year honor your greatness 🙏🌟`,
    ta: `உங்கள் வழிகாட்டுதல் என் விதியை உருவாக்கியது 🌱,
	உங்கள் வார்த்தைகள் என் நம்பிக்கையை கட்டின 📘✨
	இந்த புத்தாண்டு உங்களை மதிக்கட்டும் 🙏🌟`
  }
};

document.getElementById("eng").innerText = wishes[relation].en;
document.getElementById("tam").innerText = wishes[relation].ta;

const audio = document.getElementById("audio");
audio.src = `/audio/${relation.toLowerCase().replace(" ","")}.mp3`;
audio.play().catch(()=>{});
