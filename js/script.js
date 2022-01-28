


const langwrap = document.querySelector('.langwrap');
const a = document.querySelectorAll('a');


const homeV = document.querySelector('.home');
const aboutV = document.querySelector('.about');
const myskillsV = document.querySelector('.myskills');
const contactV = document.querySelector('.contact');



a.forEach(el => {
   el.addEventListener('click', () => {
      const attr = el.getAttribute('language');

      homeV.textContent = data[attr].home;
      aboutV.textContent = data[attr].about;
      myskillsV.textContent = data[attr].myskills;
      contactV.textContent = data[attr].contact;
   })
})

var data = {
	"armenian":{
		"home":"Գլխավոր",
		"about":"Իմ մասին",
		"myskills":"իմ հմտությունները",
		"contact":"կապ",
	},
	"russian":{
		"home":"главный",
		"about":"обо мне",
		"myskills":"моя скиллс",
		"contact":"контакты",
	},
	"english":{
		"home":"Home",
		"about":"About",
		"myskills":"My Skills",
		"contact":"Contact",
	}
}