let modInfo = {
	name: "The Mario Maker 2 Tree",
	id: "SMM2",
	author: "AngryStar6K",
	pointsName: "Cleared Courses",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 4,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.5 (2023/12/17)",
	name: "Your best friends!",
}

let changelog = `<h1>Changelog:</h1><br>
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
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("1e13470000"))
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