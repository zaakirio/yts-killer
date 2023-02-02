
if(window.location.href != "https://www.youtube.com/"){
	console.log("https://www.youtube.com/");
}else{

const menuShorts = document.querySelector('[aria-label="Shorts"]');
const shelfShorts = document.querySelector('[id="dismissible"]');

console.log('YTS KILLER DEBUG MENUSHORTS: ', menuShorts );
console.log('YTS KILLER DEBUG SHELFSHORTS: ', shelfShorts );

if(menuShorts && shelfShorts){
        menuShorts.remove();
        shelfShorts.remove();
}
}
