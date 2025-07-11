let modInfo = {
	name: "The Mario Maker 2 Tree",
	id: "SMM2",
	author: "AngryStar6K",
	pointsName: "Cleared Courses",
	modFiles: ["layers.js", "tree.js"],

	discordName: "AngryStar6K",
	discordLink: "https://smm2.wizul.us/smm2/maker/1J8-NNB-GHG",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.12 (2025/07/12)",
	name: "What should we do as a maker?",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.12 (2025/07/12)</h3><br>
		- Endgame: ee1.000e2,152 cleared courses, unlock total 119 achievements.<br>
		- Added 2 layers and resources for them.<br>
		- You can reach 57th layer of Toad tier.<br>
		- Added 9 achievements.<br>
		- Fixed the unexpected growth of currencies between game progess at SL to MS layers and rebalanced them.<br>
		- Support diff to make low TPS games, offline progress to run better.<br>
	<h3>v0.11 (2024/10/31)</h3><br>
		- Endgame: ee1.300e156 cleared courses, unlock total 110 achievements.<br>
		- Added 2 layers and resources for them.<br>
		- You can reach 19th layer of Toad tier.<br>
		- Added 12 achievements.<br>
		- Make it looks better.<br>
		- You can change how many OoMs shown in commas. (Only for scientific(mixed), engineering(mixed) and standard)<br>
	<h3>v0.10 (2024/07/03)</h3><br>
		- Endgame: ee1.300e26 cleared courses and with 28th layer unlocked.<br>
		- Added 3 layers and resources for them.<br>
		- More upgrades, buyables, minigames... etc.<br>
		- You can now overpower 8 milestones!<br>
		- Added 13 achievements.<br>
		- Added 1 secret achievement.<br>
		- Statistics layer now displays every important resources.<br>
		- You can show or hide endgame goal text. (Default is OFF)<br>
		- If you modify devSpeed to greater than 1 your save will be marked for cheating. (Doesn't affact anything, you can play the game as normal with the mark)<br>
		- Support BEAF notation.<br>
	<h3>v0.9 (2024/05/12)</h3><br>
		- Endgame: e1.000e500,000 cleared courses.<br>
		- Added 3 layers and resources for them.<br>
		- More upgrades, buyables, minigames... etc.<br>
		- Added 1 theme.<br>
		- Added 15 achievements.<br>
		- Added secret achievements, here is 7 secret achievements now.<br>
		- Support hyper-E and letter notations.<br>
		- Extend Standard notation to 999th tier-8 illion.<br>
	<h3>v0.8 (2024/04/06)</h3><br>
		- Endgame: e1.798e308 cleared courses.<br>
		- Added 3 layers and resources for them.<br>
		- More upgrades, buyables, overpowers... etc.<br>
		- Added 1 theme.<br>
		- Added 10 achievemnets.<br>
	<h3>v0.7b (2024/03/21)</h3><br>
		- Fixed 4th FF upgrade.<br>
		- Added 3 themes.<br>
	<h3>v0.7a (2024/03/20)</h3><br>
	    - Balanced 1st SM upgrade's effect. The effect with 0 super mushrooms is x2.378 cleared courses gain instead of x1.<br>
		- Make some SH upgrades' costs lower, 2nd SH challenge's goal is also lower.<br>
	<h3>v0.7 (2024/03/17)</h3><br>
		- Endgame: e1.79e56 cleared courses with boomerang flower layer unlocked.<br>
		- Added 6 different layers.<br>
		- Added 124 upgrades.<br>
		- More buyables, challenges, milestones and clickables.<br>
		- You can now overpower 2 milestones!<br>
		- You can change notations now.<br>
		- Added statistics.<br>
		- Fixed IS and 1UP challenges.<br>
		- Added 16 achievements.<br>
    <h3>v0.6 (2024/01/01)</h3><br>
	    - Endgame: e2.338e12 cleared courses.<br>
		- Added Yoshi Egg in Yoshi Egg layer.<br>
		- Added propeller mushroom, super bell and super hammer layer.<br>
		- Added milestones, upgrades, buyables and challenges for yoshi egg, propeller mushroom and super bell layer.<br>
		- Added keeping milestones on reset. (Too many "milestone gotten" displays are annoying.)<br>
		- Balanced cape feather layer.<br>
		- Added 9 achievements.<br>
    <h3>v0.5 (2023/12/17)</h3><br>
	    - Endgame: 1.00e13,470,000 cleared courses.<br>
		- Added SL Skill Tree in Super Leaf layer.<br>
		- Added cape feather and yoshi egg layers.<br>
		- Added milestones, upgrades, buyables and skill tree upgrades.<br>
		- Added 14 achievements.<br>
    <h3>v0.4 (2023/12/10)</h3><br>
	    - Endgame: 1.00e36000 cleared courses.<br>
		- Added 1 invincible star milestone.<br>
		- Added 5 1UP mushroom upgrades.<br>
		- Added 15 bouncy ball flower upgrades, 3 milestones, 3 buyables and a new resource.<br>
		- Added big mushroom layer.<br>
		- Added 15 big mushroom upgrades, 4 milestones, 3 kinds of new resources.<br>
		- Added super leaf layer.<br>
		- Added 8 achievements.<br>
    <h3>v0.3 (2023/12/08)</h3><br>
	    - Endgame: 1.00e6250 cleared courses.<br>
		- Buyables autobuyers work better.<br>
		- Added 1 fire flower milestone.<br>
		- Added 15 invincible star upgrades, 3 milestones, 2 challenges.<br>
		- Added 1UP mushroom layer.<br>
		- Added 10 1UP mushroom upgrades and 1 milestone.<br>
		- Added bouncy ball flower layer and a clickable.<br>
        - Added 8 achievements.<br>
    <h3>v0.2 (2023/12/06)</h3><br>
	    - Endgame: 1.00e1000 cleared courses.<br>
	    - Better UI.<br>
		- Added 5 coin upgrades, 3 coin buyables, 1 coin milestone.<br>
		- Added 1 super mushroom buyable.<br>
		- Added 10 fire flower upgrades, 1 fire flower milestone.<br>
		- Added invincible star layer.<br>
		- Added 1 invincible star milestone.<br>
		- Added 5 achievements, and they can provide APs!<br>
	<h3>v0.1 (2023/12/05)</h3><br>
		- Endgame: 1.00e76 cleared courses.<br>
	    - Added coin layer.<br>
		- Added super mushroom layer.<br>
		- Added fire flower layer.<br>
		- Added 10 coin upgrades, 3 coin milestones<br>
		- Added 5 super mushroom upgrades, 1 super mushroom milestone, 1 super mushroom challenge.<br>
		- Added 5 Achievements.`

let winText = `Congratulations! You have reached the end and beaten this game, but there will be more updates in the future!<br>`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function inExpertBossChallenge() {
	if (inChallenge('expert', 11) || inChallenge('expert', 12) || inChallenge('expert', 21) || inChallenge('expert', 22) || inChallenge('expert', 31) || inChallenge('expert', 32) || inChallenge('expert', 41)) return true
}

function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1).times(tmp["invincible_star"].effect)
	if (hasUpgrade('coin', 11)) gain = gain.times(3)
	if (hasUpgrade('coin', 12)) gain = gain.times(upgradeEffect('coin', 12))
	if (hasUpgrade('coin', 13)) gain = gain.times(upgradeEffect('coin', 13))
	if (hasUpgrade('coin', 14)) gain = gain.times(2)
	if (hasUpgrade('coin', 15)) gain = gain.times(upgradeEffect('coin', 15))
	if (hasUpgrade('super_mushroom', 11)) gain = gain.times(upgradeEffect('super_mushroom', 11))
	if (hasUpgrade('super_mushroom', 13)) gain = gain.times(upgradeEffect('super_mushroom', 13))
	gain = gain.times(buyableEffect('super_mushroom', 11))
	if (hasUpgrade('invincible_star', 11)) gain = gain.times(1666390)
	if (hasUpgrade('invincible_star', 12)) gain = gain.times(12413170)
	if (player.super_leaf.points.gte(1)) gain = gain.times(tmp.super_leaf.effect)
	if (inChallenge('super_mushroom', 11)) gain = gain.pow(0.5)
	if (hasUpgrade('fire_flower', 23)) gain = gain.pow(1.05)
	if (hasUpgrade('super_hammer', 13)) gain = gain.pow(upgradeEffect('super_hammer', 13))
	if (hasUpgrade('master_sword', 13)) gain = gain.times(upgradeEffect('master_sword', 13))
	if (inChallenge('super_hammer', 11)) gain = gain.log(10).max(1)
	if (hasUpgrade('super_acorn', 12)) gain = gain.times("e3e36")
	if (hasMilestone('easy', 11)) gain = gain.pow(1000)
	if (hasMilestone('easy', 13)) gain = gain.pow(1000000)
	if (hasAchievement('achievements', 174)) gain = gain.pow(layerEffect('normal'))
	if (hasUpgrade('super_hammer', 41) && inChallenge('super_hammer', 11)) gain = gain.times(100)
	if (inChallenge('master_sword', 11) && hasUpgrade('master_sword', 65)) gain = gain.max(1).pow(1e-7).max(1)
	else if (inChallenge('master_sword', 11) && hasUpgrade('master_sword', 45)) gain = gain.max(1).pow(1e-9).max(1)
	else if (inChallenge('master_sword', 11)) gain = gain.max(1).pow(1e-10).max(1)
	if (gain.gte(player.hardcap)) gain = new Decimal(player.hardcap)

	//困难团boss挑战中的过关数获取
	let gainInExpertBossChallenge = new Decimal(0)
	gainInExpertBossChallenge = player.expert.points
	if (hasUpgrade('expert', 14)) gainInExpertBossChallenge = gainInExpertBossChallenge.times(upgradeEffect('expert', 14))
	if (hasUpgrade('expert', 31)) gainInExpertBossChallenge = gainInExpertBossChallenge.times(upgradeEffect('expert', 31))
	if (hasUpgrade('expert', 42)) gainInExpertBossChallenge = gainInExpertBossChallenge.times(expertBossMagicEffect('morton'))
	if (hasSEendlessMilestone(1)) gainInExpertBossChallenge = gainInExpertBossChallenge.pow(milestoneEffect('s_expert', 1))
	if (hasUpgrade('super_acorn', 112)) gainInExpertBossChallenge = gainInExpertBossChallenge.times(upgradeEffect('super_acorn', 112))
		//最终获取
	if (!inExpertBossChallenge()) return gain
	if (inExpertBossChallenge()) return gainInExpertBossChallenge
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	notation: "Scientific",
	lgpoints: new Decimal (0),
	hardcap: new Decimal("e1.798e308"),
	smm1: "RIP SMM1 2024 Apr 9th",
	yu_ayasaki: "jangpu!",
	last_first_clear_smm1: "Trimming the Herbs",
	cheat: false,
	devSpeed: 1,
	maximumOoMsInCommas: 9,
	devTest: d(0),
}}

// Display extra things at the top of the page

var cheat = false
var cheat1 = false
var cheat2 = false
var cheat3 = false
var cheat4 = false
var cheat5 = false
var cheat6 = false
var cheat7 = false
var cheat8 = false
var cheat9 = false

var displayThings = [
	function() {
		let endgameText = `<br>Endgame: Get 119th Achievement, ~${format("ee1e2152")} Cleared Courses<br>`
		let e = ""
		if (options.endgameShown) e = endgameText
		if (!options.endgameShown) e = ""
		let cheatText = "<h4 style='color: #ff0000; text-shadow: 0 0 10px #ff0000'>This Save is Cheated!</h4>"
		if (!cheat) return e
		if (cheat) return e + cheatText
	}	
]


// Determines when the game "ends"
function isEndgame() {
	return hasNormalAchievement(244)
}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}


var controlDown = false
var shiftDown = false

window.addEventListener('keydown', function(event) {
	if (player.toggleKeys) {
		if (event.keyCode == 16) shiftDown = !shiftDown;
		if (event.keyCode == 17) controlDown = !controlDown;
	} else {
		if (event.keyCode == 16) shiftDown = true;
		if (event.keyCode == 17) controlDown = true;
	}
}, false)

window.addEventListener('keyup', function(event) {
	if (player.toggleKeys) return 
	if (event.keyCode == 16) shiftDown = false;
	if (event.keyCode == 17) controlDown = false;
}, false)