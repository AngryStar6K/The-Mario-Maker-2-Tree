// ************ Options ************

let options = {}

function getStartOptions() {
	return {
		autosave: true,
		msDisplay: "always",
		theme: "default",
		hqTree: false,
		offlineProd: true,
		hideChallenges: false,
		showStory: true,
		forceOneTab: false,
		oldStyle: false,
		tooltipForcing: true,
		endgameShown: false,
		maximumOoMsInCommas: 9,
		titlefont: false,
	}
}

let notations = ['Scientific','Engineering','Standard','Mixed Scientific','Mixed Engineering','Hyper-E','Letters','BEAF']

function changeNotation() {
	player.notation = notations[(notations.indexOf(player.notation) + 1) % notations.length]
}

function changeMaximumOoMsInCommas() {
	if (options.maximumOoMsInCommas != 15) options.maximumOoMsInCommas = options.maximumOoMsInCommas + 3
	else if (options.maximumOoMsInCommas == 15) options.maximumOoMsInCommas = 3
	player.maximumOoMsInCommas = options.maximumOoMsInCommas
}
function titleFontSetting(){
	let on = options.titlefont
	document.body.style.setProperty('--font', on ? 'cursive, "MARIO MAKER", "Lucida Console", "Courier New", monospace' : '"MARIO MAKER", "Lucida Console", "Courier New", monospace');
}
function toggleOpt(name) {
	if (name == "oldStyle" && styleCooldown > 0)
		return;

	options[name] = !options[name];
	if (name == "hqTree")
		changeTreeQuality();
	if (name == "oldStyle")
		updateStyle();
}
var styleCooldown = 0;
function updateStyle() {
	styleCooldown = 1;
	let css = document.getElementById("styleStuff");
	css.href = options.oldStyle ? "oldStyle.css" : "style.css";
	needCanvasUpdate = true;
}
function changeTreeQuality() {
	var on = options.hqTree;
	document.body.style.setProperty('--hqProperty1', on ? "2px solid" : "4px solid");
	document.body.style.setProperty('--hqProperty2a', on ? "-4px -4px 4px rgba(0, 0, 0, 0.25) inset" : "-4px -4px 4px rgba(0, 0, 0, 0) inset");
	document.body.style.setProperty('--hqProperty2b', on ? "0px 0px 20px var(--background)" : "");
	document.body.style.setProperty('--hqProperty3', on ? "2px 2px 4px rgba(0, 0, 0, 0.25)" : "none");
}
function toggleAuto(toggle) {
	Vue.set(player[toggle[0]], [toggle[1]], !player[toggle[0]][toggle[1]]);
	needCanvasUpdate=true
}

const MS_DISPLAYS = ["ALL", "LAST, AUTO, INCOMPLETE", "AUTOMATION, INCOMPLETE", "INCOMPLETE", "NONE"];

const MS_SETTINGS = ["always", "last", "automation", "incomplete", "never"];

function adjustMSDisp() {
	options.msDisplay = MS_SETTINGS[(MS_SETTINGS.indexOf(options.msDisplay) + 1) % 5];
}
function milestoneShown(layer, id) {
	complete = player[layer].milestones.includes(id);
	auto = layers[layer].milestones[id].toggles;

	switch (options.msDisplay) {
		case "always":
			return true;
			break;
		case "last":
			return (auto) || !complete || player[layer].lastMilestone === id;
			break;
		case "automation":
			return (auto) || !complete;
			break;
		case "incomplete":
			return !complete;
			break;
		case "never":
			return false;
			break;
	}
	return false;
}
function changeEndgameShown() {
	if (options.endgameShown) return options.endgameShown = false
	if (!options.endgameShown) return options.endgameShown = true
}

function switchTitleFont() {
	options.titlefont = !options.titlefont
}
