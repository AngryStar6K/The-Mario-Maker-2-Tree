// 特殊层：成就
addLayer("achievements", {
    name: "achievements",
    symbol: "🏆",
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#FFE125",                       // The color for this layer, which affects many elements.
    resource: "achievement points",            // The name of this layer's main prestige resource.
    row: "side",                                 // The row this layer is on (0 is the first row).

    layerShown() { return true },          // Returns a bool for if this layer's node should be visible in the tree.

    achievements: {
        11: {
            name: "Mario disliked eating mushroom before",
            tooltip: "Unlock Super Mushroom layer. <br> Reward: 1 AP",
            done() {return hasUpgrade('coin', 14)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1")
            },
        },
        12: {
            name: "Rank 1 on total clears",
            tooltip: "Get 821,000 cleared courses. <br> Reward: 3 AP",
            done() {return player.points.gte("821000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("3")
            },
        },
        13: {
            name: "The enemies",
            tooltip: "Unlock first super mushroom challenge. <br> Reward: 10 AP",
            done() {return hasMilestone('coin', 2)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("10")
            },
        },
        14: {
            name: "The absolute limit of course IDs",
            tooltip: "Get 3.518e13 cleared courses. <br> Reward: 50 AP",
            done() {return player.points.gte("3.518e13")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("50")
            },
        },
        15: {
            name: "Fire attack!",
            tooltip: "Unlock Fire Flower layer. <br> Reward: 333 AP",
            done() {return hasUpgrade('super_mushroom', 15)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("333")
            },
        },
        21: {
            name: "Googol courses cleared!",
            tooltip: "Get 1e100 cleared courses. <br> Reward: 2024 AP",
            done() {return player.points.gte("1e100")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2024")
            },
        },
        22: {
            name: "Open the key door!",
            tooltip: "Get 10 Pink Key Coins. <br> Reward: 15267 AP",
            done() {return player.coin.pink_key_coin.gte("10")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("15267")
            },
        },
        23: {
            name: "Centillion courses cleared!",
            tooltip: "Get 1e303 cleared courses. <br> Reward: 74751 AP",
            done() {return player.points.gte("1e303")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("74751")
            },
        },
        24: {
            name: "Infinite coins",
            tooltip: "Get 1.79769e308 coins. <br> Reward: 501761 AP",
            done() {return player.coin.points.gte("1.79769313e308")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("501761")
            },
        },
        25: {
            name: "Players' instincts",
            tooltip: "Unlock Invincible Star layer. <br> Reward: 6952965 AP",
            done() {return hasUpgrade('fire_flower', 25)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("6952965")
            },
        },
        31: {
            name: "Destroy the goomba tower!",
            tooltip: "Get 3rd Invincible Star upgrade. <br> Reward: 12413170 AP <br> Autobuy coin upgrades, forever.",
            done() {return hasUpgrade('invincible_star', 13)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("12413170")
            },
        },
        32: {
            name: "Shiny!",
            tooltip: "Get 4th Invincible Star upgrade. <br> Reward: 20190628 AP <br> Super Mushroom resets nothing, forever.",
            done() {return hasUpgrade('invincible_star', 14)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("20190628")
            },
        },
        33: {
            name: "Watch out! A Gap!",
            tooltip: "Get 5th Invincible Star upgrade. <br> Reward: 178,228,909 AP <br> Autobuy coin buyables 1~3, forever.",
            done() {return hasUpgrade('invincible_star', 15)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("178228909")
            },
        },
        34: {
            name: "Invincible Stars also have drawbacks",
            tooltip: "Get 7th Invincible Star upgrade. <br> Reward: 1.68e9 AP <br> Generate 100% Coins and Super Mushrooms passively, forever.",
            done() {return hasUpgrade('invincible_star', 22)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.68e9")
            },
        },
        35: {
            name: "1UP!",
            tooltip: "Unlock 1UP Mushroom layer. <br> Reward: 7.77e10 AP",
            done() {return hasUpgrade('invincible_star', 25)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("7.77e10")
            },
        },
        41: {
            name: "Max lives in SM3DW",
            tooltip: "Get 1110 1UP Mushroom. <br> Reward: 1.14e13 AP",
            done() {return player.oneup_mushroom.points.gte(1110)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.14e13")
            },
        },
        42: {
            name: "The Mushroom Kingdom",
            tooltip: "Get 1e1000 Super Mushroom. <br> Reward: 2.67e15 AP",
            done() {return player.super_mushroom.points.gte("1e1000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2.67e15")
            },
        },
        43: {
            name: "Geometry",
            tooltip: "Unlock Bouncy Ball Flower layer. <br> Reward: 1.00e20 AP",
            done() {return hasUpgrade('invincible_star', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.00e20")
            },
        },
        44: {
            name: "Crazy amount",
            tooltip: "Get 1e10000 Cleared Courses. <br> Reward: 1.66e31 AP <br> Autobuy Invincible Star and it resets nothing, forever.",
            done() {return player.points.gte("1e10000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.66e31")
            },
        },
        45: {
            name: "Bounce speed like light",
            tooltip: "Get 299,792,458 Bouncy Ball Flowers. <br> Reward: 3.21e42 AP <br> Autobuy Invincible Star and it resets nothing, forever.",
            done() {return player.bouncy_ball_flower.points.gte("299792458")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("3.21e42")
            },
        },
        51: {
            name: "Best star shine!",
            tooltip: "Get 20 Invincible Stars. <br> Reward: 1.00e50 AP <br>",
            done() {return player.invincible_star.points.gte(20)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e50")
            },
        },
        52: {
            name: "The giant",
            tooltip: "Unlock Big Mushroom layer. <br> Reward: 1.00e74 AP <br>",
            done() {return player.invincible_star.points.gte(20)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e74")
            },
        },
        53: {
            name: "I don't want to click the challenge anymore",
            tooltip: "Get 11th 1UP Mushroom upgrade. <br> Reward: 1.00e99 AP <br> Auto complete challenge Goomba, forever.",
            done() {return hasUpgrade('oneup_mushroom', 31)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e99")
            },
            effect() {
                if (hasUpgrade('oneup_mushroom', 31) || hasAchievement('achievements', 53))
                return player.super_mushroom.challenges[11] = new Decimal(3)
            },
        },
        54: {
            name: "Broke all the ice",
            tooltip: "Get 10000 Broken Ice Blocks. <br> Reward: 1.00e126 AP <br>",
            done() {return player.big_mushroom.broken_ice_block.gte(10000)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e126")
            },
        },
        55: {
            name: "Fly!",
            tooltip: "Unlock Super Leaf layer. <br> Reward: 1.00e200 AP <br>",
            done() {return hasUpgrade('oneup_mushroom', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e200")
            },
        },
        61: {
            name: "Necessary automation",
            tooltip: "Get your first Super Leaf. <br> Reward: 1.79e308 AP <br> Keep the reward on 1st Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 0)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.79e308")
            },
        },
        62: {
            name: "Clicking too much is tiring",
            tooltip: "Get your second Super Leaf. <br> Reward: 2.71e412 AP <br> Keep the reward on 2nd Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("2.71e412")
            },
        },
        63: {
            name: "Flying training",
            tooltip: "Get your fourth Super Leaf. <br> Reward: 5.10e541 AP <br> Keep the reward about automation on 3rd and 4th Super Leaf milestones forever.",
            done() {return hasMilestone('super_leaf', 3)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("5.10e541")
            },
            effect() {
                return player.invincible_star.challenges[11] = new Decimal(1),
                       player.invincible_star.challenges[12] = new Decimal(1),
                       player.oneup_mushroom.challenges[11] = new Decimal(1),
                       player.oneup_mushroom.challenges[12] = new Decimal(1)
            },
        },
        64: {
            name: "Fly faster",
            tooltip: "Get your sixth Super Leaf. <br> Reward: 7.77e777 AP <br> Keep the reward on 2nd Super Leaf milestone forever.",
            done() {return hasMilestone('super_leaf', 5)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("7.77e777")
            },
        },
        65: {
            name: "Flying skills",
            tooltip: "Get 1 SL Skill Point. <br> Reward: 1.66e1209 AP <br>",
            done() {return player.super_leaf.slsp.gte(1)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1.66e1209")
            },
        },
        71: {
            name: "10^elephant",
            tooltip: "Get 1e74751 Cleared Courses. <br> Reward: 1.00e1500 AP <br>",
            done() {return player.points.gte("1e74751")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e1500")
            },
        },
        72: {
            name: "Dropped from a bird?",
            tooltip: "Unlock Cape Feather layer. <br> Reward: 1.00e2024 AP <br>",
            done() {return hasUpgrade('super_leaf', 321)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e2024")
            },
        },
        73: {
            name: "10^crow",
            tooltip: "Get 1e501761 Cleared Courses. <br> Reward: 1.00e3250 AP <br>",
            done() {return player.points.gte("1e501761")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e3250")
            },
        },
        74: {
            name: "10^Vrabbit",
            tooltip: "Get 1e1666390 Cleared Courses. <br> Reward: 1.00e5000 AP <br>",
            done() {return player.points.gte("1e1666390")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e5000")
            },
        },
        75: {
            name: "Destroy the icy world",
            tooltip: "Get 1e1000 Broken Ice Blocks. <br> Reward: 1.00e7500 AP <br>",
            done() {return player.big_mushroom.broken_ice_block.gte("1e1000")},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e7500")
            },
        },
        81: {
            name: "It's your friend, not your tool!",
            tooltip: "Unlock Yoshi Egg layer. <br> Reward: 1.00e11451 AP <br>",
            done() {return hasUpgrade('cape_feather', 35)},
            onComplete() {
                return player.achievements.points = player.achievements.points.add("1e11451")
            },
        },
    },
    upgrades: {
        11: {
            title: "希望不会有BUG",
             description: "但愿吧。",
            cost: new Decimal("10^^1666390"),
        },
    },
})
// 第一层：金币
addLayer("coin", {
    name: "coin", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        pink_key_coin: new Decimal(0),
    }},
    color: "#FEB252",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Coins", // Name of prestige currency
    baseResource: "cleared courses", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1).times(tmp["fire_flower"].effect)
        if (hasMilestone('coin', 0)) mult = mult.times(2.5)
        if (hasMilestone('coin', 1)) mult = mult.times(3)
        if (hasUpgrade('coin', 21)) mult = mult.times(upgradeEffect('coin', 21))
        if (hasUpgrade('coin', 22)) mult = mult.times(20)
        if (hasUpgrade('coin', 23)) mult = mult.times(100)
        if (hasUpgrade('coin', 24)) mult = mult.times(2024)
        if (hasUpgrade('coin', 25)) mult = mult.times(9402011)
        if (player.coin.pink_key_coin.gte(1)) mult = mult.times(tmp.coin.effect)
        if (hasUpgrade('coin', 33)) mult = mult.times(100)
        if (hasUpgrade('invincible_star', 34)) mult = mult.times(1e100)
        if (hasMilestone('coin', 3)) mult = mult.times(1e50)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (inChallenge('invincible_star', 11)) exp = exp.times(0.1)
        if (hasChallenge('invincible_star', 12)) exp = exp.times(1.1)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Coins", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() {return hasMilestone('super_mushroom', 0) || hasAchievement('achievements', 34)},
    update(multPKC) {
        multPKC = new Decimal(0.05)
        let PKC = player.coin.pink_key_coin
        if (hasUpgrade('coin', 33)) multPKC = multPKC.times(100)
        if (hasUpgrade('invincible_star', 24)) multPKC = multPKC.times(1e100)
        if (hasUpgrade('fire_flower', 22)) multPKC = multPKC.times(buyableEffect('coin', 13))
        if (hasUpgrade('oneup_mushroom', 25)) multPKC = multPKC.times(1e30)
        if (hasChallenge('oneup_mushroom', 11)) multPKC = multPKC.times(challengeEffect('oneup_mushroom', 11))
		if (hasUpgrade("coin", 31)) player.coin.pink_key_coin = player.coin.pink_key_coin.add((buyableEffect('coin', 11)).times(buyableEffect('coin', 12)).times(multPKC))     
        if (inChallenge('invincible_star', 12)) player.coin.pink_key_coin = player.coin.pink_key_coin.times(0)
    },
    autoUpgrade() {return hasUpgrade('fire_flower', 12) || hasAchievement('achievements', 31)},
    effect(){return Decimal.pow(player[this.layer].pink_key_coin, 1.5).add(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    },
    upgrades: {
        11: {
            title: "It begins!",
             description: "Triple your cleared courses gain.",
            cost: new Decimal(1),
        },
        12: {
            title: "Here are more coins!",
            description: "Multiply cleared courses gain based on your current coins.",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('coin', 11)},
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
            title: "Coin reward room",
            description: "Multiply cleared courses gain based on theirselves.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('coin', 12)},
            effect() {
                return player.points.add(1).pow(0.2).times(1.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "You need a power-up!",
            description: "Double your cleared courses gain and unlock a new layer",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade('coin', 13)},
        }, 
        15:{
            title: "Faster and faster",
            description: "Multiply cleared courses gain based on theirselves.",
            cost: new Decimal(2024),
            unlocked() {return hasUpgrade('super_mushroom', 12)},
            effect() {
                return player.points.add(10).log(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21:{
            title: "From coins to 1-ups",
            description: "Multiply coin gain based on super mushrooms.",
            cost: new Decimal(501761),
            unlocked() {return hasUpgrade('coin', 15)},
            effect() {
                return player.super_mushroom.points.add(3).log(3)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22:{
            title: "Coin pool",
            description: "20x coin gain",
            cost: new Decimal(1e19),
            unlocked() {return hasUpgrade('coin', 21)},
        },
        23:{
            title: "Lakitu throws coins",
            description: "100x coin gain",
            cost: new Decimal(1.5267e26),
            unlocked() {return hasUpgrade('coin', 22)},
        },
        24:{
            title: "Bullet launches coins",
            description: "2024x coin gain",
            cost: new Decimal(5e30),
            unlocked() {return hasUpgrade('coin', 23)},
        },
        25:{
            title: "Red pipe generates coins",
            description: "9,402,011x coin gain and unlock super mushroom upgrade 15",
            cost: new Decimal(7.777e37),
            unlocked() {return hasUpgrade('coin', 24)},
        },
        31:{
            title: "Key door",
            description: "Start to generate 1 pink key coin every second.",
            cost: new Decimal(1.234e80),
            unlocked() {return hasUpgrade('fire_flower', 13)},
        },
        32:{
            title: "Key door trolls are bad",
            description: "Unlock the 2nd coin buyable.",
            cost: new Decimal(1.111e100),
            unlocked() {return hasUpgrade('coin', 31)},
        },
        33:{
            title: "P switches affect coins",
            description: "100x Coin and Pink Key Coin gain",
            cost: new Decimal(1.111e150),
            unlocked() {return hasUpgrade('coin', 32)},
        },
        34:{
            title: "More coins and more fire?",
            description: "Gain more Fire Flower based on coins with a weak effect.",
            cost: new Decimal("3.33e333"),
            unlocked() {return hasUpgrade('coin', 33)},
            effect() {
                return player.coin.points.log(10).div(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        35:{
            title: "Automate mushrooms",
            description: "Passive gain 100% Super Mushroom every second and unlock more Fire Flower upgrades.",
            cost: new Decimal("1.2e345"),
            unlocked() {return hasUpgrade('coin', 34)},
        },
    },
    buyables: {
        11: {
            title: "Fragments of the key",
            cost(x) { return new Decimal(2).pow(Decimal.pow(x, 1.5).add(1)) },
            display() { return ` Multiply 5 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(5).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 13)}
        },
        12: {
            title: "No key touching challenge in SM3DW",
            cost(x) { return new Decimal(5).pow(Decimal.pow(x, 1.75).add(1)) },
            display() { return ` Multiply 10 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            
            },
            effect(x) {return new Decimal(10).pow(x)},
            unlocked() {return hasUpgrade('coin', 32)}
        },
        13: {
            title: "Keys are in bubbles",
            cost(x) { return new Decimal(8).pow(Decimal.pow(x, 2).add(1)) },
            display() { return ` Multiply 2019 Pink Key Coin every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Pink Key Coins`}, 
            canAfford() { return player[this.layer].pink_key_coin.gte(this.cost()) },
            buy() {
                player[this.layer].pink_key_coin = player[this.layer].pink_key_coin.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            
            },
            effect(x) {return new Decimal(2019).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 22)}
        },
    },
    automate(){
        if (player.coin.pink_key_coin.lte(0)) return
        if (hasMilestone('fire_flower', 0)) {
            if (player.coin.pink_key_coin) {
                hasMilestone("fire_flower", 0) ? setBuyableAmount("coin",11,tmp.coin.buyables[11].canAfford?player.coin.pink_key_coin.log(2).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("coin",11)) : buyBuyable("coin",11)
            }
            if (player.coin.pink_key_coin) {
                hasMilestone("fire_flower", 0) ? setBuyableAmount("coin",12,tmp.coin.buyables[12].canAfford?player.coin.pink_key_coin.log(5).subtract(1).pow(1/1.75).floor().add(1):getBuyableAmount("coin",12)) : buyBuyable("coin",12)
            }
            if (player.coin.pink_key_coin) {
                hasMilestone("invincible_star", 0) ? setBuyableAmount("coin",13,tmp.coin.buyables[13].canAfford?player.coin.pink_key_coin.log(8).subtract(1).pow(1/2).floor().add(1):getBuyableAmount("coin",13)) : buyBuyable("coin",13)
            }
        }
        if (hasAchievement('achievements', 33)) {
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",11,tmp.coin.buyables[11].canAfford?player.coin.pink_key_coin.log(2).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("coin",11)) : buyBuyable("coin",11)
            }
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",12,tmp.coin.buyables[12].canAfford?player.coin.pink_key_coin.log(5).subtract(1).pow(1/1.75).floor().add(1):getBuyableAmount("coin",12)) : buyBuyable("coin",12)
            }
            if (player.coin.pink_key_coin) {
                hasAchievement('achievements', 33) ? setBuyableAmount("coin",13,tmp.coin.buyables[13].canAfford?player.coin.pink_key_coin.log(8).subtract(1).pow(1/2).floor().add(1):getBuyableAmount("coin",13)) : buyBuyable("coin",13)
            }
        }
    },
    milestones: {
        0: {
            requirementDescription: "Reach 6871 cleared courses",
            effectDescription: "x2.5 your coins gain.",
            done() { return player.points.gte(6871) }
        },
        1: {
            requirementDescription: "Reach 74751 coins",
            effectDescription: "Triple coin gain.",
            done() { return player.coin.points.gte(74751) },
        },
        2: {
            requirementDescription: "Reach 50,000,000 coins",
            effectDescription: "Unlock a super mushroom challenge.",
            done() { return player.coin.points.gte(50000000) },
        },
        3: {
            requirementDescription: "Reach 1.000e175 coins",
            effectDescription: "Cleared courses gain x1e50.",
            done() { return player.coin.points.gte(1e175) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Coin is the basic resource in 2D Mario game. <br> It never has been changed!`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Pink Key Coins": {
                unlocked() {return (hasUpgrade("fire_flower", 13))},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #ff746f; text-shadow: 0 0 10px #ff746f'>" + format(player.coin.pink_key_coin) + "</h2> Pink Key Coins, multiplying Coin gain by <h2 style='color: #ff746f; text-shadow: 0 0 10px #ff746f'> <br>" + format(player.coin.pink_key_coin.max(1).pow(1.5)) + "x</h2>.<br>"],
                    "buyables"
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
        },
    },
})
// 第二层：超级蘑菇
addLayer("super_mushroom", {
    name: "super_mushroom", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#C42533",
    requires: new Decimal(500), // Can be a function that takes requirement increases into account
    resource: "Super Mushrooms", // Name of prestige currency
    baseResource: "coins", // Name of resource prestige is based on
    baseAmount() {return player.coin.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1/3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('super_mushroom', 12)) mult = mult.times(1.5)
        mult = mult.times(challengeEffect('super_mushroom', '11'))
        if (hasMilestone('invincible_star', 1)) mult = mult.times(6879)
        if (hasAchievement('achievements', 43)) mult = mult.times(player.bouncy_ball_flower.bouncy_ball.max(1).pow(2.35))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        if (hasUpgrade('fire_flower', 24)) exp = exp.times(1.1)
        if (inChallenge('oneup_mushroom', 11)) exp = exp.times(0.01)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for Super Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ["coin"],
    resetsNothing() {return hasMilestone ('super_mushroom', 1) || hasAchievement('achievements', 32)},
    layerShown() {return hasUpgrade('coin', 14) || hasAchievement('achievements', 11)},
    passiveGeneration() {return hasUpgrade('coin', 35) || hasAchievement('achievements', 34)},
    autoUpgrade() {return hasMilestone('invincible_star', 3) || hasAchievement('achievements', 61)},
    upgrades: {
        11: {
            title: "I'm stronger!",
            description: "Multiply cleared courses gain based on super mushrooms.",
            cost: new Decimal(1),
            effect() {
                return player.super_mushroom.points.add(1).pow(1.25)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Be able to break normal bricks",
            description: "x1.5 super mushroom gain and unlock more coin upgrades.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('super_mushroom', 11)},
        },
        13: {
            title: "Jump on the enemies!",
            description: "Multiply cleared courses gain based on time spent on this super mushroom reset.",
            cost: new Decimal(1528),
            effect() {
                let SMU13factor = player.super_mushroom.resetTime + 1
                return Decimal.pow(SMU13factor, 1.5)
            },
            unlocked() {return hasUpgrade('super_mushroom', 12)},
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        14: {
            title: "Life farming",
            description: "Challenge Goomba's base is 15 now.",
            cost: new Decimal(3e10),
            unlocked() {return hasUpgrade('super_mushroom', 13)},
        },
        15: {
            title: "You need a stronger power-up, right?",
            description: "Unlock a new layer",
            cost: new Decimal(5e20),
            unlocked() {return hasUpgrade('coin', 25)},
        }
    },
    milestones: {
        0: {
            requirementDescription: "Reach 125138 super mushrooms",
            effectDescription: "Gain coins 100% of your reset every second passively.",
            done() { return player.super_mushroom.points.gte(125138) },
        },
        1: {
            requirementDescription: "Reach 1.5267e105 super mushrooms",
            effectDescription: "Super mushroom resets nothing.",
            done() { return player.super_mushroom.points.gte(1.5267e105) },
        },
    },
    buyables: {
        11: {
            title: "999-coin clear condition",
            cost(x) { return new Decimal(3e24).pow(Decimal.pow(x, 1.5).add(1)) },
            display() { return ` Multiply 1e10 cleared courses every level. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} super mushrooms`}, 
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(1e10).pow(x)},
            unlocked() {return hasUpgrade('fire_flower', 11)}
        },
    },
    challenges: {
        11: {
            name: "Goombas",
            challengeDescription: "Square root cleared courses gain",
            goalDescription: "5000/25000000/1.25e11 cleared courses for 1st/2nd/3rd completion",
            completionLimit: new Decimal (3),
            canComplete: function() {
                let basicSMC1 = new Decimal (5000)
                let SMC1factor = ((challengeCompletions("super_mushroom", 11))) + 1
                return player.points.gte(basicSMC1.pow(SMC1factor))},
            rewardDescription: "Decuple(10x) super mushroom gain per every completion.",
            rewardEffect() {
                let SMC1C=(challengeCompletions("super_mushroom", 11)) 
                if (hasUpgrade('super_mushroom', 14))
                {return Decimal.pow(15, SMC1C)}
                else {
                return Decimal.pow(10, SMC1C)}
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x <br> Completions: "+format(challengeCompletions(this.layer, this.id))+"/3" },
            unlocked() {return hasMilestone('coin', 2) || hasAchievement('achievements', 13)},
        },
    },
    automate(){
        if (player.super_mushroom.points.lte(0)) return
        if (hasMilestone('oneup_mushroom', 0)) {
            if (player.super_mushroom.points) {
                hasMilestone('oneup_mushroom', 0) ? setBuyableAmount("super_mushroom",11,tmp.super_mushroom.buyables[11].canAfford?player.super_mushroom.points.log(3e24).subtract(1).pow(1/1.5).floor().add(1):getBuyableAmount("super_mushroom",11)) : buyBuyable("super_mushroom",11)
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Mushroom upgrades are stronger! <br>Super Mushroom is a kind of Power-ups, first appearance is in SMB1 (1985).`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Buyables": {
                unlocked() {return (hasUpgrade("fire_flower", 11))},
                content: [
                    ["blank", "15px"],
                    "buyables"
                ]
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasMilestone('coin', 2) || hasAchievement('achievements', 13)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ]    
            },
        },
    },
})
// 第三层：火之花
addLayer("fire_flower", {
    effect(){
        return Decimal.pow(player[this.layer].points, 2).add(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
effectDescription(){
    return "multiplying coin gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    name: "fire_flower",
    symbol: "FF",
    color: "#FF8D00",                       // The color for this layer, which affects many elements.
    resource: "Fire Flowers",            // The name of this layer's main prestige resource.
    row: 1,                                 // The row this layer is on (0 is the first row).
    position: 1,
    baseResource: "coins",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.coin.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e55),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent(){return new Decimal(0.015)},                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade('coin', 34)) mult = mult.times(upgradeEffect('coin', 34))
        if (hasUpgrade('fire_flower', 15)) mult = mult.times(upgradeEffect('fire_flower', 15))
        if (hasUpgrade('fire_flower', 21)) mult = mult.times(upgradeEffect('fire_flower', 21))
        if (hasUpgrade('invincible_star', 21)) mult = mult.times(upgradeEffect('invincible_star', 21))
        if (hasChallenge('invincible_star', 11)) mult = mult.times(challengeEffect('invincible_star', 11))
        if (hasUpgrade('super_leaf', 221)) mult = mult.times(4.89e166)
        return mult              // Factor in any bonuses multiplying gain here.
    },
    gainDiv() {
        div = new Decimal(1)                         // Returns your multiplier to your gain of the prestige resource.
        return div              // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('invincible_star', 23)) exp = exp.times(1.5)
        if (hasUpgrade('oneup_mushroom', 24)) exp = exp.times(1.35)
        if (inChallenge('oneup_mushroom', 12)) exp = exp.times(0.05)
        return exp
    },
    hotkeys: [
        {key: "f", description: "F: Reset for Fire Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: ["coin"],
    layerShown() { return hasUpgrade('super_mushroom', 15) || hasAchievement('achievements', 15)},          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasUpgrade('invincible_star', 32) || hasAchievement('achievements', 61)},

    passiveGeneration(){return hasUpgrade('bouncy_ball_flower', 12) || hasAchievement('achievements', 61)},

    upgrades: {
        11: {
            title: "Press Y to fire attack",
            description: "Unlock a buyable in super mushroom layer.",
            cost: new Decimal(3),
        },
        12: {
            title: "Don't feel tired!",
            description: "Auto buy coin upgrades.",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('fire_flower', 11)}
        },
        13: {
            title: "A tier 2 power-up",
            description: "Unlock a coin buyable, a new resource and an upgrade in coin layer.",
            cost: new Decimal(80),
            unlocked() {return hasUpgrade('fire_flower', 12)}
        },
        14: {
            title: "Melt frozen coins",
            description: "x1.5 Fire Flower gain",
            cost: new Decimal(2020202),
            unlocked() {return hasUpgrade('coin', 35)}
        },
        15: {
            title: "Spin jump with two fire shots",
            description: "Multiply Fire Flowers gain based on Pink Key Coins.",
            cost: new Decimal(20190628),
            unlocked() {return hasUpgrade('fire_flower', 14)},
            effect() {
                return player.coin.pink_key_coin.add(100).log(10).div(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Get tier 1 first, then tier 2",
            description: "Multiply Fire Flowers gain based on Super Mushrooms.",
            cost: new Decimal(5e8),
            unlocked() {return hasUpgrade('fire_flower', 15)},
            effect() {
                return player.super_mushroom.points.log(10).div(10)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Use fire to defeat goombas",
            description: "Unlock the third coin buyable.",
            cost: new Decimal(6.54e9),
            unlocked() {return hasUpgrade('fire_flower', 21)},
        },
        23: {
            title: "Mario's white hat",
            description: "^1.05 cleared courses gain",
            cost: new Decimal(3.14e13),
            unlocked() {return hasUpgrade('fire_flower', 22)},
        },
        24: {
            title: "Luigi also has a white hat",
            description: "^1.1 Super Mushroom gain",
            cost: new Decimal(4.19e14),
            unlocked() {return hasUpgrade('fire_flower', 23)},
        },
        25: {
            title: "Stronger!",
            description: "Unlock a new layer",
            cost: new Decimal(7.00e15),
            unlocked() {return hasUpgrade('fire_flower', 24)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 1920000 Fire Flowers",
            effectDescription: "Autobuy coin buyables 1 and 2.",
            done() { return player.fire_flower.points.gte(1920000) },
        },
        1: {
            requirementDescription: "Get 1e51 Fire Flowers",
            effectDescription: "Unlock 10th Invincible Star upgrade.",
            done() { return player.fire_flower.points.gte(1e51) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Fire Flower is the first kind of tier 2 power-ups. <br> It can fire attack.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
        },
    },
})
// 第四层：无敌星
addLayer("invincible_star", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "IS",
    color: "#FFB15A",                       // The color for this layer, which affects many elements.
    resource: "Invincible Stars",            // The name of this layer's main prestige resource.
    row: 2,                                 // The row this layer is on (0 is the first row).
    position: 0,
    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    branches: ["fire_flower"],
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.
    effect(){
        let ISfactor = ((player[this.layer].points).add(10)).log(10)
        if (hasUpgrade('cape_feather', 14)) ISfactor = ISfactor.times(100)
        return Decimal.pow(10, (ISfactor).times(player[this.layer].points))
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
    effectDescription(){
    return "multiplying cleared courses gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    requires: new Decimal(1e16),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 2.5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)               // Factor in any bonuses multiplying gain here.
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('fire_flower', 25) || hasAchievement('achievements', 25)},          // Returns a bool for if this layer's node should be visible in the tree.

    hotkeys: [
        {key: "i", description: "I: Reset for Invincible Stars", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    canBuyMax() { return hasMilestone("invincible_star", 2) || hasAchievement('achievements', 61)},

    resetsNothing() {return hasAchievement("achievements", 44) || hasAchievement('achievements', 61)},
    autoPrestige() {return hasAchievement("achievements", 44) || hasAchievement('achievements', 61)},
    autoUpgrade() {return hasAchievement('achievements', 63)},
    upgrades: {
        11: {
            title: "I'm invincible!",
            description: "x1666390 Cleared Courses gain.",
            cost: new Decimal(1),
            unlocked() {return true},
        },
        12: {
            title: "10-second rush!!!",
            description: "x12,413,170 Cleared Courses gain.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade('invincible_star', 11)},
        },
        13: {
            title: "Star provides a speed boost!",
            description: "Autobuy coin upgrades forever, even if you don't have 2nd Fire Flower upgrade.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 12)},
        },
        14: {
            title: "What a dazzing star!",
            description: "Super Mushroom resets nothing forever, even if you don't have 2nd Super Mushroom milestone.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 13)},
        },
        15: {
            title: "Light the ghost house!",
            description: "Auto buy coin buyables 1~3 forever, even if you don't have 1st Fire Flower, Invincible Star milestones.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 14)},
        },
        21: {
            title: "Running on the spikes",
            description: "Multiply Fire Flowers gain based on best Invincible Stars.",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade('invincible_star', 15)},
            effect() {
                let ISBest = player.invincible_star.best
                return Decimal.ln(ISBest.add(2.71828)).times(100)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Run into fire",
            description: "Generate 100% Coins and Super Mushrooms passively forever, even if you don't have 1st Super Mushroom milestone and 15th coin upograde.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('invincible_star', 21)},
        },
        23: {
            title: "Hidden invincible star for a dev exit",
            description: "^1.5 Fire Flower gain.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('invincible_star', 22)},
        },
        24: {
            title: "5 pink key coins are in a gear",
            description: "x1e100 Pink Key Coin gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade('invincible_star', 23)},
        },
        25: {
            title: "What happened when you defeat 8 ememies in a star?",
            description: "Unlock a new layer.",
            cost: new Decimal(7),
            unlocked() {return hasMilestone('fire_flower', 1)},
        },
        31: {
            title: "Be faster when you have a star!",
            description: "Remove the 1st hardcap in 1UP Mushroom upgrade 4. (2nd hardcap is x4000)",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade('invincible_star', 25)},
        },
        32: {
            title: "Share the star in co-op!",
            description: "Autobuy Fire Flower upgrades.",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('invincible_star', 31)},
        },
        33: {
            title: "Fire and Invincible",
            description: "Square 1st Invincible Star Challenge's effect.(Doesn't affact the hardcap)",
            cost: new Decimal(12),
            unlocked() {return hasUpgrade('invincible_star', 32)},
        },
        34: {
            title: "Coins among the spikes",
            description: "x1e100 Coin gain.",
            cost: new Decimal(13),
            unlocked() {return hasUpgrade('invincible_star', 33)},
        },
        35: {
            title: "And... What's next?",
            description: "Unlock a new layer.",
            cost: new Decimal(14),
            unlocked() {return hasUpgrade('invincible_star', 34)},
        },
    },
        // Look in the upgrades docs to see what goes here!
    milestones: {
        0: {
            requirementDescription: "Get 1 Invincible Star",
            effectDescription: "Autobuy coin buyable 13.",
            done() { return player.invincible_star.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Invincible Stars",
            effectDescription: "6879x Super Mushroom gain.",
            done() { return player.invincible_star.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 4 Invincible Stars",
            effectDescription: "You can buy max Invincible Stars.",
            done() { return player.invincible_star.points.gte(4) },
        },
        3: {
            requirementDescription: "Get 9 Invincible Stars",
            effectDescription: "Autobuy Super Mushroom upgrades and unlock 6th 1UP Mushroom upgrade.",
            done() { return player.invincible_star.points.gte(9) },
        },
        4: {
            requirementDescription: "Get 21 Invincible Stars",
            effectDescription: "x1e20 Bouncy Ball gain.",
            done() { return player.invincible_star.points.gte(20.99999) },
        },
    },
    challenges: {
        11: {
            name: "Koopa troopas",
            challengeDescription: "^0.1 Coin gain",
            goalDescription: "Get 5.55e55 Cleared Courses",
            canComplete: function() {
                return player.points.gte(5.55e55)
                },
            rewardDescription: "Multiply Fire Flower gain based on 1UP Mushroom. (Hardcap at 1e100x)",
            rewardEffect() {
                let IS1Cfactor = player.oneup_mushroom.points.pow(2).max(1)
                if (hasUpgrade('invincible_star', 33)) IS1Cfactor = IS1Cfactor.pow(2).min(1e100)
                else IS1Cfactor = IS1Cfactor.min(1e100)
            return IS1Cfactor
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x" },
            unlocked() {return hasUpgrade('oneup_mushroom', 15) || hasAchievement('achievements', 63)},
        },
        12: {
            name: "Spikeys",
            challengeDescription: "You can't gain Pink Key Coins.",
            goalDescription: "Get 1e730 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e730")
                },
            rewardDescription: "^1.1 Super Mushroom gain",
            unlocked() {return hasChallenge('invincible_star', 11) || hasAchievement('achievements', 63)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Most invincible stars are for hidden reward in 2D Mario games. <br> But in SMM series, most of them are for dev exits.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasUpgrade('oneup_mushroom', 15) || hasAchievement('achievements', 63)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ], 
            },
        },
    },
})
// 第五层：1UP蘑菇
addLayer("oneup_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},

    color: "#5BBF2F",                       // The color for this layer, which affects many elements.
    resource: "1UP Mushrooms",              // The name of this layer's main prestige resource.
    symbol: "1UP",
    row: 2,  
    position: 1,                               // The row this layer is on (0 is the first row).
    branches: ["fire_flower"],

    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(3e51),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 1e-5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade("oneup_mushroom", 11)) mult = mult.times(2)              // Factor in any bonuses multiplying gain here.
        if (hasUpgrade("oneup_mushroom", 12)) mult = mult.times(upgradeEffect('oneup_mushroom', 12))
        if (hasUpgrade("oneup_mushroom", 13)) mult = mult.times(2)
        if (hasUpgrade("oneup_mushroom", 14)) mult = mult.times(upgradeEffect('oneup_mushroom', 14))
        if (hasUpgrade("oneup_mushroom", 21)) mult = mult.times(upgradeEffect('oneup_mushroom', 21))
        if (hasUpgrade("oneup_mushroom", 23)) mult = mult.times(upgradeEffect('oneup_mushroom', 23))
        if (hasUpgrade("bouncy_ball_flower", 34)) mult = mult.times(510541)
        if (hasUpgrade('big_mushroom', 22)) mult = mult.times(upgradeEffect('big_mushroom', 22))
        if (hasUpgrade('super_leaf', 23)) mult = mult.times(upgradeEffect('super_leaf', 23))
        if (hasUpgrade('oneup_mushroom', 32)) mult = mult.times(100)
        if (hasUpgrade('oneup_mushroom', 33)) mult = mult.times(100)
        if (hasUpgrade('oneup_mushroom', 34)) mult = mult.times(100)
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade("super_leaf", 222)) exp = exp.times(1.5)
        return exp
    },

    layerShown() { return hasUpgrade('invincible_star', 25) || hasAchievement('achievements', 35)},          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasMilestone('super_leaf', 6)},
    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    hotkeys: [
        {key: "1", description: "1: Reset for 1UP Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Nice design in the end of a course",
            description: "Double 1UP Mushroom gain.",
            cost: new Decimal(3),
            unlocked() {return true},
        },
        12: {
            title: "Softlocks with 1UP mushrooms",
            description: "Multiply 1UP Mushrooms gain based on Invincible Stars.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('oneup_mushroom', 11)},
            effect() {
                let oneUPU2factor = player.invincible_star.points.add(1)
                if (hasUpgrade('oneup_mushroom', 22)) oneUPU2factor = oneUPU2factor.pow(2)
                return oneUPU2factor
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Don't be greedy!",
            description: "Double 1UP Mushroom gain, again.",
            cost: new Decimal(45),
            unlocked() {return hasUpgrade('oneup_mushroom', 12)},
        },
        14: {
            title: "Use shell to farm lives",
            description: "Multiply 1UP Mushroom based on itself. (Hardcap at 20x)",
            cost: new Decimal(99),
            unlocked() {return hasUpgrade('oneup_mushroom', 13)},
            effect() {
                let oneUPU4factor = Decimal.cbrt(player.oneup_mushroom.points.add(1))
                if (hasUpgrade('invincible_star', 31)) oneUPU4factor = oneUPU4factor.min(4000)
                else oneUPU4factor = oneUPU4factor.min(20)
                return oneUPU4factor
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        15: {
            title: "Life farming master",
            description: "Unlock two Invincible Star challenges.",
            cost: new Decimal(512),
            unlocked() {return hasUpgrade('oneup_mushroom', 14)},
        },
        21: {
            title: "In hidden blocks",
            description: "Multiply 1UP Mushroom gain besed on Fire Flowers.",
            cost: new Decimal(1888),
            unlocked() {return hasMilestone('invincible_star', 3)},
            effect() {
                return player.fire_flower.points.add(10).log(10).pow(1.25).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Reward for beating the extra challenge",
            description: "Square 2nd 1UP Mushroom upgrade's effect.",
            cost: new Decimal(1234567),
            unlocked() {return hasUpgrade('oneup_mushroom', 21)},
        },
        23: {
            title: "Reward in minigames",
            description: "Multiply 1UP Mushroom based on Super Mushroom.",
            cost: new Decimal(1.985e8),
            unlocked() {return hasUpgrade('oneup_mushroom', 22)},
            effect() {
                return player.super_mushroom.points.add(10).log(10).sqrt()
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "999-1UP Mushroom condition",
            description: "^1.35 Fire Flower gain.",
            cost: new Decimal(5e10),
            unlocked() {return hasUpgrade('oneup_mushroom', 23)},
        },
        25: {
            title: "Better rewards",
            description: "x1e30 Pink Key Coin gain.",
            cost: new Decimal(2.019e11),
            unlocked() {return hasUpgrade('oneup_mushroom', 24)},
        },
        31: {
            title: "Auto defeating Goombas",
            description: "Auto complete challenge Goomba",
            cost: new Decimal(1e19),
            unlocked() {return hasUpgrade('oneup_mushroom', 25)},
            effect() {
                if (hasUpgrade('oneup_mushroom', 31) || hasAchievement('achievements', 53))
                return player.super_mushroom.challenges[11] = new Decimal(3)
            },
        },
        32: {
            title: "A nice sound effect",
            description: "x100 1UP Mushroom gain",
            cost: new Decimal(1.82e30),
            unlocked() {return hasUpgrade('big_mushroom', 35)},
        },
        33: {
            title: "A nicer sound effect",
            description: "x100 1UP Mushroom gain, again",
            cost: new Decimal(2.82e32),
            unlocked() {return hasUpgrade('oneup_mushroom', 32)},
        },
        34: {
            title: "Important life farming",
            description: "x100 1UP Mushroom gain, again^2.",
            cost: new Decimal(3.82e34),
            unlocked() {return hasUpgrade('oneup_mushroom', 33)},
        },
        35: {
            title: "Go to a new style",
            description: "Unlock a new layer at the row 4.",
            cost: new Decimal(4.82e36),
            unlocked() {return hasUpgrade('oneup_mushroom', 34)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Life Maxed - Get 99 1UP Mushrooms",
            effectDescription: "Autobuy Super Mushroom buyable 1.",
            done() { return player.oneup_mushroom.points.gte(99) },
        },
    },
    challenges: {
        11: {
            name: "Bob-ombs",
            challengeDescription: "^0.01 Super Mushroom gain",
            goalDescription: "Get 1e1205 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e1205")
                },
            rewardDescription: "Multiply Pink Key Coin gain based on 1UP Mushrooms. (Hardcap at 1e5000)",
            rewardEffect() {
                if (hasUpgrade('super_leaf', 25)) return player.oneup_mushroom.points.pow(Decimal.log10((player.oneup_mushroom.points.add(10))).min(75))
                else return player.oneup_mushroom.points.pow(Decimal.log10((player.oneup_mushroom.points.add(10)))).min("1e5000")
            },
            rewardDisplay() { return format(challengeEffect(this.layer, this.id))+"x" },
            unlocked() {return true},
        },
        12: {
            name: "Fire bubbles",
            challengeDescription: "^0.05 Fire Flower gain.",
            goalDescription: "Get 1e7818 Cleared Courses",
            canComplete: function() {
                return player.points.gte("1e7818")
                },
            rewardDescription: "x15 Bouncy Ball Flower and unlock 6th Bounce Ball upgrade.",
            unlocked() {return hasChallenge('oneup_mushroom', 11) || hasAchievement('achievements', 63)},
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">1UP Mushroom is a rare reward in 2D Mario games. When you get one, you can get 1 extra life. <br> In SMM series endless mode, you can only get 3 extra lives at most in one course.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones"
                ]    
            },
            "Challenges": {
                unlocked() {return hasUpgrade('bouncy_ball_flower', 15) || hasAchievement('achievements', 63)},
                content: [
                    ["blank", "15px"],
                    "challenges"
                ], 
            },
        },
    },
})
// 第六层：弹力球之花
addLayer("bouncy_ball_flower", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        bouncy_ball: new Decimal(0),
        upgrade_bought: new Decimal(0),
    }},

    color: "#606040",                       // The color for this layer, which affects many elements.
    resource: "Bouncy Ball Flowers",            // The name of this layer's main prestige resource.
    row: 2,                                 // The row this layer is on (0 is the first row).
    position: 2,
    symbol: "BBF",
    branches: ["super_mushroom"],

    baseResource: "Super Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.super_mushroom.points },  // A function to return the current amount of baseResource.
            // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    
    exponent: 1/1825.6,                          // "normal" prestige gain is (currency^exponent).

    requires: new Decimal("1e1700"),

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1) 
        if (hasUpgrade("bouncy_ball_flower", 14)) mult = mult.times(upgradeEffect('bouncy_ball_flower', 14))
        if (hasChallenge("oneup_mushroom", 12)) mult = mult.times(15)
        if (hasUpgrade("bouncy_ball_flower", 21)) mult = mult.times(2)
        if (hasUpgrade("bouncy_ball_flower", 22)) mult = mult.times(3)
        if (hasUpgrade("bouncy_ball_flower", 23)) mult = mult.times(4)
        if (hasUpgrade("bouncy_ball_flower", 24)) mult = mult.times(5)
        if (hasUpgrade("bouncy_ball_flower", 25)) mult = mult.times(6)
        if (hasUpgrade("bouncy_ball_flower", 31)) mult = mult.times(upgradeEffect('bouncy_ball_flower', 31))
        if (hasUpgrade("big_mushroom", 23)) mult = mult.times(upgradeEffect("big_mushroom", 23))
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('invincible_star', 35) || hasAchievement ('achievements', 43)},          // Returns a bool for if this layer's node should be visible in the tree.

    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    autoUpgrade() {return hasUpgrade('cape_feather', 13)},
    hotkeys: [
        {key: "b", description: "B: Reset for Bouncy Ball Flowers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    update(multBB) {     
        multBB = new Decimal(0.5)
        multBB = multBB.add(buyableEffect('bouncy_ball_flower', 11))
        multBB = multBB.times(buyableEffect('bouncy_ball_flower', 12))
        multBB = multBB.times(buyableEffect('bouncy_ball_flower', 13))
		if (hasMilestone('invincible_star', 4)) multBB = multBB.times(1e20)
        if (hasUpgrade('super_leaf', 24)) multBB = multBB.times("1.797e308")
        if (hasUpgrade('bouncy_ball_flower', 32) || hasAchievement('achievements', 62)) player.bouncy_ball_flower.bouncy_ball = player.bouncy_ball_flower.bouncy_ball.add(multBB)     
    },
    upgrades: {
        11: {
            title: "The first bounce",
            description: "Unlock Bouncy Ball subtab.",
            cost: new Decimal(1),
            unlocked() {return true},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        12: {
            title: "Two kinds of flowers",
            description: "Passive gain 100% Fire Flower per second.",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 11)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        13: {
            title: "Auto bouncy shots",
            description: "Autobuy 1st Bouncy Ball Flower buyable and buy max.",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 12)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        // Look in the upgrades docs to see what goes here!
        14: {
            title: "Don't let it go to off-screen!",
            description: "Multiply Bouncy Ball Flower gain based on Bouncy Ball.",
            cost: new Decimal(49),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 13)},
            effect() {
            return player.bouncy_ball_flower.bouncy_ball.add(10).log(10).div(45).add(1)
                },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        15: {
            title: "Bouncy Ball can't farm lives",
            description: "Unlock two 1UP Mushroom challenges.",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 14)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        21: {
            title: "Grayish-yellow style",
            description: "Double Bouncy Ball Flowers gain.",
            cost: new Decimal(2496),
            unlocked() {return hasChallenge("oneup_mushroom", 12)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        22: {
            title: "Mario's gray hat",
            description: "Triple Bouncy Ball Flowers gain.",
            cost: new Decimal(4992),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 21)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        23: {
            title: "Luigi's gray hat",
            description: "Quadruple Bouncy Ball Flowers gain.",
            cost: new Decimal(14976),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 22)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        24: {
            title: "Toad's gray head",
            description: "Quintuple Bouncy Ball Flowers gain.",
            cost: new Decimal(69904),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 23)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        25: {
            title: "Toadette's gray braids",
            description: "Sextuple Bouncy Ball Flowers gain.",
            cost: new Decimal(510541),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 24)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        31: {
            title: "Like reflection of light",
            description: "One BBF upgrade you bought, BBF gain x1.5.",
            cost: new Decimal(4200000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 25)},
            effect() {
                return Decimal.pow(1.5, player.bouncy_ball_flower.upgrade_bought)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        32: {
            title: "Get the key beside the corner",
            description: "Generate 1000% Bouncy Ball per second.",
            cost: new Decimal(300000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 31)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        33: {
            title: "Defeat the boom-boom on the top of the screen",
            description: "Autobuy BBF buyables 2 and 3.",
            cost: new Decimal(410000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 32)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        34: {
            title: "Is there a new kind of flowers?",
            description: "x510541 1UP Mushroom gain.",
            cost: new Decimal(600000000),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 33)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
        35: {
            title: "Yes. But it's too early for now",
            description: "Unlock a new layer.",
            cost: new Decimal(1e9),
            unlocked() {return hasUpgrade('bouncy_ball_flower', 34)},
            onPurchase() {return player.bouncy_ball_flower.upgrade_bought = player.bouncy_ball_flower.upgrade_bought.add(1)}
        },
},
    clickables: {
        11: {
            title: "Bounce to touch everything",
            display() {
                let clickBB = new Decimal(1)
                clickBB = clickBB.add(buyableEffect('bouncy_ball_flower', 11))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 12))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 13))
                if (hasMilestone('invincible_star', 4)) clickBB = clickBB.times(1e20)
                return "Click this botton to gain " + format(clickBB) + " Bouncy Balls"},
            canClick() {return true},
            onClick() {
                let clickBB = new Decimal(1)
                clickBB = clickBB.add(buyableEffect('bouncy_ball_flower', 11))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 12))
                clickBB = clickBB.times(buyableEffect('bouncy_ball_flower', 13))
                if (hasMilestone('invincible_star', 4)) clickBB = clickBB.times(1e20)
                return  player.bouncy_ball_flower.bouncy_ball = player.bouncy_ball_flower.bouncy_ball.add(clickBB)
            },
        },
    },
    buyables: {
        11: {
            title: "Bounce to touch coins",
            cost(x) { return new Decimal(20).times(Decimal.pow(x, 1.05).add(1)) },
            display() { if(player.bouncy_ball_flower.buyables[11].gte(1e30)) return` Get more Bouncy Balls clicking the button above. <br>
                Effect: +${format(this.effect())} (softcapped)<br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`
                else return` Get more Bouncy Balls clicking the button above. <br>
                Effect: +${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
                BBFB1effect = x
                BBFB1softcap = new Decimal(0.9)
                if (hasUpgrade('super_leaf', 231)) BBFB1softcap = new Decimal(0.7)
                if (hasUpgrade('cape_feather', 22)) BBFB1softcap = new Decimal(0.3)
                if (player.bouncy_ball_flower.buyables[11].gte(1e30)) BBFB1effect = BBFB1effect.div(Decimal.pow(BBFB1effect.div(1e30), BBFB1softcap))
                return BBFB1effect},
            unlocked() {return true}
        },
        12: {
            title: "Bounce to touch keys",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.05).add(1)) },
            display() { return ` Get more Bouncy Balls clicking the button above with a strong effect. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(2).pow(x).max(1)},
            unlocked() {return hasMilestone('bouncy_ball_flower', 0)}
        },
        13: {
            title: "Bounce to touch P switches",
            cost(x) { return new Decimal(10).pow(Decimal.pow(x, 1.24).add(1)) },
            display() { return ` Get more Bouncy Balls clicking the button above with a stronger effect. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Bouncy Balls`}, 
            canAfford() { return player[this.layer].bouncy_ball.gte(this.cost()) },
            buy() {
                player[this.layer].bouncy_ball = player[this.layer].bouncy_ball.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {return new Decimal(20).pow(x).max(1)},
            unlocked() {return hasMilestone('bouncy_ball_flower', 1)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 300 Bouncy Balls",
            effectDescription: "Unlock 2nd Bouncy Ball Flower buyable.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(300) },
        },
        1: {
            requirementDescription: "Get 8888 Bouncy Balls",
            effectDescription: "Unlock 3rd Bouncy Ball Flower buyable.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(8888) },
        },
        2: {
            requirementDescription: "Get 1e30 Bouncy Balls",
            effectDescription: "Unlock 2nd Bouncy Ball Flower upgrade.",
            done() { return player.bouncy_ball_flower.bouncy_ball.gte(1e30) },
        },
    },
    automate(){
        if (player.bouncy_ball_flower.bouncy_ball.lte(0)) return
        if (hasUpgrade('bouncy_ball_flower', 13) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63)
        ) {
            if (player.bouncy_ball_flower.bouncy_ball) {
                hasUpgrade("bouncy_ball_flower", 13) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63) ? setBuyableAmount("bouncy_ball_flower",11,tmp.bouncy_ball_flower.buyables[11].canAfford?player.bouncy_ball_flower.bouncy_ball.div(20).subtract(1).pow(1/1.05).floor().add(1):getBuyableAmount("bouncy_ball_flower",11)) : buyBuyable("bouncy_ball_flower",11)
            }
        }
        if (hasUpgrade('bouncy_ball_flower', 33)) {
            if (player.bouncy_ball_flower.bouncy_ball) {
                hasUpgrade("bouncy_ball_flower", 33) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63) ? setBuyableAmount("bouncy_ball_flower",12,tmp.bouncy_ball_flower.buyables[12].canAfford?player.bouncy_ball_flower.bouncy_ball.log(10).subtract(1).pow(1/1.05).floor().add(1):getBuyableAmount("bouncy_ball_flower",12)) : buyBuyable("bouncy_ball_flower",12)
                hasUpgrade("bouncy_ball_flower", 33) || hasMilestone('super_leaf', 2) || hasAchievement('achievements', 63)? setBuyableAmount("bouncy_ball_flower",13,tmp.bouncy_ball_flower.buyables[13].canAfford?player.bouncy_ball_flower.bouncy_ball.log(10).subtract(1).pow(1/1.24).floor().add(1):getBuyableAmount("bouncy_ball_flower",13)) : buyBuyable("bouncy_ball_flower",13)
            }
        }
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Bouncy Ball Flower is from Super Mario Land (1989). The characters will be gray when they get this power-up. <br> It's in SMM2, not in SMM1.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Bouncy Ball": {
                unlocked() {return hasUpgrade('bouncy_ball_flower', 11)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #e4e4b2; text-shadow: 0 0 10px #e4e4b2'>" + format(player.bouncy_ball_flower.bouncy_ball) + "</h2> Bouncy Balls, multiplying Super Mushroom gain by <h2 style='color: #e4e4b2; text-shadow: 0 0 10px #e4e4b2'> <br>" + format(player.bouncy_ball_flower.bouncy_ball.max(1).pow(2.35)) + "x</h2>. (Before the exponentional calculation)"],
                    "clickables",
                    "buyables",
                ]    
            },
        },
    },
})
// 第七层：大蘑菇
addLayer("big_mushroom", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),
        broken_brick: new Decimal(0), 
        broken_hard_brick: new Decimal(0), 
        broken_ice_block: new Decimal(0),  
        clickBrBfactor2: new Decimal(3),           // "points" is the internal name for the main resource of the layer.
    }},

    color: "#F7431D",                       // The color for this layer, which affects many elements.
    resource: "Big Mushrooms",            // The name of this layer's main prestige resource.
    row: 2, 
    position: 3,  
    symbol: "BM",
                                  // The row this layer is on (0 is the first row).
    branches: ["fire_flower"],
    baseResource: "Fire Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.fire_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal('3e507'),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.004,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)              // Factor in any bonuses multiplying gain here.
        mult = mult.times(clickableEffect('big_mushroom', 12))
        if (hasUpgrade('big_mushroom', 14)) mult = mult.times(10)
        if (hasUpgrade('big_mushroom', 24)) mult = mult.times(25)
        if (hasMilestone('super_leaf', 4)) mult = mult.times(10)
        if (hasUpgrade('cape_feather', 11)) mult = mult.times(upgradeEffect('cape_feather', 11))
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        exp = new Decimal(1)
        if (hasUpgrade('big_mushroom', 34)) exp = exp.times(2)
        return exp
    },

    passiveGeneration(){return hasMilestone('super_leaf', 5) || hasAchievement('achievements', 64)},
    layerShown() { return hasUpgrade('bouncy_ball_flower', 35) || hasAchievement('achievements', 52) },          // Returns a bool for if this layer's node should be visible in the tree.

    autoUpgrade() {return hasUpgrade('cape_feather', 32)},

    hotkeys: [
        {key: "B", description: "Shift+B: Reset for Big Mushrooms", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Jump onto it",
            description: "Unlock Destruction subtab.",
            cost: new Decimal(1),
            unlocked() {return true},
        },
        12: {
            title: "Faster breaking",
            description: "Multiply Broken Bricks based on Big Mushrooms.",
            cost: new Decimal(6),
            unlocked() {return hasMilestone('big_mushroom', 0)},
            effect() {
                return player.big_mushroom.points.max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Light jump onto bricks",
            description: "Auto click 1st BM clickable 100 times/sec.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('big_mushroom', 12)},
            effect() {
                let BMclickpersec = new Decimal(100)
                if (hasMilestone('big_mushroom', 1)) BMclickpersec = BMclickpersec.times(2019)
                if (hasUpgrade('big_mushroom', 32)) BMclickpersec = BMclickpersec.times(upgradeEffect('big_mushroom', 32))
                return BMclickpersec
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+" times/sec" },
        },
        14: {
            title: "Giants",
            description: "x10 Big Mushroom gain",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade('big_mushroom', 13)},
        },
        15: {
            title: "1.5-block wide",
            description: "Start to generate 1 Broken Hard Block every second.",
            cost: new Decimal(223),
            unlocked() {return hasUpgrade('big_mushroom', 14)},
        },
        21: {
            title: "Stronger jumps",
            description: "1st BM clickable also affects Broken Hard Bricks.",
            cost: new Decimal(777),
            unlocked() {return hasMilestone('big_mushroom', 2)},
        },
        22: {
            title: "Mushroom affects mushroom",
            description: "Multiply 1UP Mushroom based on Big Mushroom.",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade('big_mushroom', 21)},
            effect() {
                return player.big_mushroom.points.pow(0.6)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        23: {
            title: "Stronger jumps",
            description: "Multiply Bouncy Ball Flower based on Big Mushroom.",
            cost: new Decimal(3125),
            unlocked() {return hasUpgrade('big_mushroom', 22)},
            effect() {
                return player.big_mushroom.points.pow(0.8)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Super giants",
            description: "x25 Big Mushroom gain",
            cost: new Decimal(4000),
            unlocked() {return hasUpgrade('big_mushroom', 23)},
        },
        25: {
            title: "Frozen breaking",
            description: "Start to generate 1 Broken Ice Block every second.",
            cost: new Decimal(201906),
            unlocked() {return hasUpgrade('big_mushroom', 24)},
        },
        31: {
            title: "Powerful jumps",
            description: "1st BM clickable also affects Broken Ice Blocks.",
            cost: new Decimal(1666390),
            unlocked() {return hasMilestone('big_mushroom', 3)},
        },
        32: {
            title: "Don't break the question block!",
            description: "Multiply the click speed on 1st BM clickable based on BBF.",
            cost: new Decimal(6952965),
            unlocked() {return hasUpgrade('big_mushroom', 31)},
            effect() {
                return player.bouncy_ball_flower.points.pow(3)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        33: {
            title: "Buffer jump onto bricks",
            description: "Passive gain 1000% Broken Bricks like clicking.",
            cost: new Decimal(30303030),
            unlocked() {return hasUpgrade('big_mushroom', 32)},
        },
        34: {
            title: "Land on on-off switch",
            description: "Square Big Mushroom gain",
            cost: new Decimal(77788999),
            unlocked() {return hasUpgrade('big_mushroom', 33)},
        },
        35: {
            title: "Don't create a softlock",
            description: "Unlock 12th 1UP Mushroom upgrade.",
            cost: new Decimal(5e17),
            unlocked() {return hasUpgrade('big_mushroom', 34)},
        },
    },
        // Look in the upgrades docs to see what goes here!
    clickables: {
        11: {
            title: "Destroy more!",
            display() {
                return "Click to increase Broken Bricks gain multiplier. <br> Currently: " + format(player.big_mushroom.clickBrBfactor2.log(3)) +"x"},
            canClick() {return true},
            onClick() {
                let clickBrBfactor = new Decimal(3)
                player.big_mushroom.clickBrBfactor2 = player.big_mushroom.clickBrBfactor2.add(3)
                return player.big_mushroom.clickBrBfactor2
            },
            effect() {
                return player.big_mushroom.clickBrBfactor2.log(3)
            }
        },
        12: {
            title: "Break the bricks",
            display() {
                let clickBrB = new Decimal(1)
                let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
                clickBrB = clickBrB.times(BMBHBeff)
                clickBrB = clickBrB.times(clickableEffect('big_mushroom', 11))
                if (hasUpgrade('big_mushroom', 12)) clickBrB = clickBrB.times(upgradeEffect('big_mushroom', 12))
                return "Click this botton to gain " + format(clickBrB) + " Broken Bricks"},
            canClick() {return true},
            onClick() {
                let clickBrB = new Decimal(1)
                let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
                clickBrB = clickBrB.times(BMBHBeff)
                clickBrB = clickBrB.times(clickableEffect('big_mushroom', 11))
                if (hasUpgrade('big_mushroom', 12)) clickBrB = clickBrB.times(upgradeEffect('big_mushroom', 12))
                return  player.big_mushroom.broken_brick = player.big_mushroom.broken_brick.add(clickBrB)
            },
            effect() {
                return player.big_mushroom.broken_brick.max(1).pow(0.1)
            }
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 510 Broken Bricks",
            effectDescription: "Unlock 2nd Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_brick.gte(510) },
        },
        1: {
            requirementDescription: "Get 201906 Broken Bricks",
            effectDescription: "Auto click 1st BM clickable 2019x faster.",
            done() { return player.big_mushroom.broken_brick.gte(201906) },
        },
        2: {
            requirementDescription: "Get 114 Broken Hard Bricks",
            effectDescription: "Unlock 6th Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_hard_brick.gte(114) },
        },
        3: {
            requirementDescription: "Get 136 Broken Ice Blocks",
            effectDescription: "Unlock 11th Big Mushroom upgrade.",
            done() { return player.big_mushroom.broken_ice_block.gte(136) },
        },
    },
    update(BMBHB) {    
        BMBB = new Decimal(0.05)
        let BMBHBeff = player.big_mushroom.broken_hard_brick.max(1).pow(1.75)
        BMBB = BMBB.times(BMBHBeff)
        BMBB = BMBB.times(clickableEffect('big_mushroom', 11)) 
        if (hasUpgrade('big_mushroom', 12)) BMBB = BMBB.times(upgradeEffect('big_mushroom', 12))
        if (hasUpgrade('super_leaf', 11)) BMBB = BMBB.times(20)
        if (hasUpgrade('super_leaf', 13)) BMBB = BMBB.times(20).pow(1.25).times(0.05)
        if (hasMilestone('cape_feather', 0)) BMBB = BMBB.times(1e200)
        if (hasUpgrade('big_mushroom', 33) || hasAchievement('achievements', 62)) player.big_mushroom.broken_brick = player.big_mushroom.broken_brick.add(BMBB.times(10))
        BMBHB = new Decimal(0.05)
        if (hasUpgrade('big_mushroom', 21)) BMBHB = BMBHB.times(player.big_mushroom.clickBrBfactor2.log(3))
		let BMBICeff = player.big_mushroom.broken_ice_block.max(1).pow(2.75)
        BMBHB = BMBHB.times(BMBICeff)
        if (hasMilestone('super_leaf', 2)) BMBHB = BMBHB.times(10)
        if (hasUpgrade('super_leaf', 11)) BMBHB = BMBHB.times(20)
        if (hasUpgrade('big_mushroom', 15)) player.big_mushroom.broken_hard_brick = player.big_mushroom.broken_hard_brick.add(BMBHB)  
        BMBIC = new Decimal(0.05)
        if (hasUpgrade('big_mushroom', 31)) BMBIC = BMBIC.times(player.big_mushroom.clickBrBfactor2.log(3))
        if (hasMilestone('super_leaf', 2)) BMBIC = BMBIC.times(10)
        if (hasUpgrade('super_leaf', 11)) BMBIC = BMBIC.times(20)
        if (hasUpgrade('super_leaf', 22)) BMBIC = BMBIC.times(489040)
        if (hasUpgrade('cape_feather', 25)) BMBIC = BMBIC.times(upgradeEffect('cape_feather', 25))
		if (hasUpgrade('big_mushroom', 25)) player.big_mushroom.broken_ice_block = player.big_mushroom.broken_ice_block.add(BMBIC)
        clickBrBfactor2 = new Decimal(15)
        if (hasMilestone('big_mushroom', 1)) clickBrBfactor2 = clickBrBfactor2.times(2019)
        if (hasUpgrade('big_mushroom', 32)) clickBrBfactor2 = clickBrBfactor2.times(upgradeEffect('big_mushroom', 32))
		if (hasUpgrade('big_mushroom', 13)) player.big_mushroom.clickBrBfactor2 = player.big_mushroom.clickBrBfactor2.add(clickBrBfactor2)     
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Big Mushroom is from Super Mario Maker (2015). <br> Characters can be so big, and they are able to destroy bricks when they jump onto them.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Destruction": {
                unlocked() {return hasUpgrade('big_mushroom', 11)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #a05911; text-shadow: 0 0 10px #a05911'>" + format(player.big_mushroom.broken_brick) + "</h2> Broken Bricks, multiplying Big Mushroom gain by <h2 style='color: #a05911; text-shadow: 0 0 10px #a05911'> <br>" + format(player.big_mushroom.broken_brick.max(1).pow(0.1)) + "x</h2>. <br>You have <h2 style='color: #ffff80; text-shadow: 0 0 10px #ffff80'>" + format(player.big_mushroom.broken_hard_brick) + "</h2> Broken Hard Bricks, multiplying Broken Brick gain by <h2 style='color: #ffff80; text-shadow: 0 0 10px #ffff80'> <br>" + format(player.big_mushroom.broken_hard_brick.max(1).pow(1.75)) + "x</h2>. <br>You have <h2 style='color: #55dff8; text-shadow: 0 0 10px #55dff8'>" + format(player.big_mushroom.broken_ice_block) + "</h2> Broken Ice Blocks, multiplying Broken Hard Brick gain by <h2 style='color: #55dff8; text-shadow: 0 0 10px #55dff8'> <br>" + format(player.big_mushroom.broken_ice_block.max(1).pow(2.75)) + "x</h2>."],
                    "clickables",
                    "buyables",
                ]    
            },
        },
    },
})
// 第八层：超级叶子
addLayer("super_leaf", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        slsp: new Decimal(0),
    }},
    effect(){
        return Decimal.add(player[this.layer].points.times('1e1250')).times(player[this.layer].points.pow(20)).max(1)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    },
    effectDescription(){
        return "multiplying Cleared Courses gain by " + format(tmp[this.layer].effect)
        /*
        use format(num) whenever displaying a number
        */
    },
    color: "#F83A11",                       // The color for this layer, which affects many elements.
    resource: "Super Leaves",            // The name of this layer's main prestige resource.
    row: 3, 
    position: 0,  
    symbol: "SL",
                                  // The row this layer is on (0 is the first row).
    branches: ["oneup_mushroom"],
    baseResource: "1UP Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.oneup_mushroom.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e37),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.01,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        mult = new Decimal(1)
        if (hasUpgrade('super_leaf', 12)) mult = mult.times(5)               // Factor in any bonuses multiplying gain here.
        if (hasUpgrade('super_leaf', 14)) mult = mult.times(5)
        if (hasUpgrade('super_leaf', 21)) mult = mult.times(10)
        if (hasUpgrade('super_leaf', 31)) mult = mult.times(upgradeEffect('super_leaf', 31))
        if (hasUpgrade('super_leaf', 32)) mult = mult.times(7.77)
        if (hasUpgrade('super_leaf', 33)) mult = mult.times(10.21)
        if (hasUpgrade('super_leaf', 222)) mult = mult.times(3)
        if (hasUpgrade('super_leaf', 271)) mult = mult.times(upgradeEffect('super_leaf', 271))
        if (hasUpgrade('super_leaf', 302)) mult = mult.times(100021)
        return mult
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('oneup_mushroom', 35) || hasAchievement('achievements', 55)},          // Returns a bool for if this layer's node should be visible in the tree.

    update(multSLSP) {
        multSLSP = new Decimal(0.05)
        if (hasUpgrade('super_leaf', 34)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 34))
        if (hasUpgrade('super_leaf', 211)) multSLSP = multSLSP.times(10)
        if (hasUpgrade('super_leaf', 212)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 212))
        if (hasUpgrade('super_leaf', 241)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 241))
        if (hasUpgrade('super_leaf', 242)) multSLSP = multSLSP.times(upgradeEffect('super_leaf', 242))
        if (hasUpgrade('super_leaf', 272)) multSLSP = multSLSP.times(248)
        if (hasUpgrade('super_leaf', 273)) multSLSP = multSLSP.times(51200)
        if (hasUpgrade('super_leaf', 301)) multSLSP = multSLSP.times(1e15)
        if (hasUpgrade('super_leaf', 303)) multSLSP = multSLSP.times(1e20)
        if (hasUpgrade('super_leaf', 201)) player.super_leaf.slsp = player.super_leaf.slsp.add(multSLSP)
    },

    hotkeys: [
        {key: "l", description: "L: Reset for Super Leaves", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
            title: "Be a raccoon",
            description: "x20 all the resource except BM in BM layer.",
            cost: new Decimal(6.9999999999),
            unlocked() {return true},
        },
        12: {
            title: "Accelerate first",
            description: "Quintuple Super Leaf gain.",
            cost: new Decimal(7.9999999999),
            unlocked() {return hasUpgrade('super_leaf', 11)},
        },
        13: {
            title: "To the max speed",
            description: "^1.25 Broken Brick gain.",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('super_leaf', 12)},
        },
        14: {
            title: "Then fly!",
            description: "Quintuple Super Leaf gain, again.",
            cost: new Decimal(24),
            unlocked() {return hasUpgrade('super_leaf', 13)},
        },
        15: {
            title: "The tail attack",
            description: "Unlock SL Skill Tree.",
            cost: new Decimal(114),
            unlocked() {return hasUpgrade('super_leaf', 14)},
        },
        21: {
            title: "How about Raccoon Mario kaizo?",
            description: "x10 Super Leaf gain.<br>*This upgrade will disappear when you respec the SLST.",
            cost: new Decimal(114514),
            unlocked() {return hasUpgrade('super_leaf', 291)},
        },
        22: {
            title: "The powerful tail",
            description: "x489040 Broken Ice Block gain",
            cost: new Decimal(497000),
            unlocked() {return hasUpgrade('super_leaf', 21)},
        },
        23: {
            title: "The powerful tail",
            description: "Multiply 1UP Mushroom based on Big Mushroom",
            cost: new Decimal(697000),
            unlocked() {return hasUpgrade('super_leaf', 22)},
            effect() {
                return player.big_mushroom.points.sqrt().max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Reclaim with tail",
            description: "x1.797e308 Bouncy Ball gain.",
            cost: new Decimal(4194304),
            unlocked() {return hasUpgrade('super_leaf', 23)},
        },
        25: {
            title: "Boss fight and fly",
            description: "Remove Bob-omb challenge effect hardcap and get a softcap.",
            cost: new Decimal(5120000),
            unlocked() {return hasUpgrade('super_leaf', 24)},
        },
        31: {
            title: "Flying limit",
            description: "Multiply Super Leaf gain based on time spend on this SL reset.",
            cost: new Decimal(12413170),
            unlocked() {return hasUpgrade('super_leaf', 25)},
            effect() {
                let SLRT = player.super_leaf.resetTime
                return Decimal.pow(SLRT, 1).times(2).max(1).min(100)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x<br>Hardcap at x100 after 50s" },
        },
        32: {
            title: "Fly, land, fly",
            description: "x7.77 Super Leaf gain.",
            cost: new Decimal(400000000),
            unlocked() {return hasUpgrade('super_leaf', 31)},
        },
        33: {
            title: "Precision mid-air",
            description: "x10.21 Super Leaf gain.",
            cost: new Decimal(2.88e9),
            unlocked() {return hasUpgrade('super_leaf', 32)},
        },
        34: {
            title: "Hit ? block on the floor",
            description: "Multiply SL Skill Point gain based on Invincible Stars.",
            cost: new Decimal(3.14e10),
            unlocked() {return hasUpgrade('super_leaf', 33)},
            effect() { return player.invincible_star.points.pow(2).max(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        35: {
            title: "Speedrun mid-air",
            description: "Extend the SL Skill Tree.",
            cost: new Decimal(3.76e10),
            unlocked() {return hasUpgrade('super_leaf', 34)},
        },
        41: {
            title: "They can fly",
            description: "You can both buy SLST 11,1 11,2 11,3.",
            cost: new Decimal(1e37),
            unlocked() {return hasUpgrade('cape_feather', 12)},
        },
        42: {
            title: "Fly to a secret reward room",
            description: "Unlock 15th Cape Feather upgrade.",
            cost: new Decimal(2e205),
            unlocked() {return hasUpgrade('cape_feather', 34) && inChallenge('oneup_mushroom', 11) || hasAchievement('achievements', 81)},
        },
        // Look in the upgrades docs to see what goes here!
        // 超级叶子普通升级与树升级的分界
        201: {
            title: "Infinite flying?",
            description: "Generate 1 SL Skill Point per second.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(0),
            unlocked() {return hasUpgrade('super_leaf', 15)},
        },
        211: {
            title: "Jump on enemies to continue flying",
            description: "10x SL Skill Point gain.<br>Lock 2,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade('super_leaf', 201)},
            canAfford() {
                if (hasUpgrade('super_leaf', 251)) return true
                else if (hasUpgrade('super_leaf', 212)) return false
                else return true
            }
        },
        212: {
            title: "Trampoline boost and fly",
            description: "Multiply SL Skill point gain based on Super Leaf.<br>Lock 2,1",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(424),
            unlocked() {return hasUpgrade('super_leaf', 201)},
            canAfford() {
                if (hasUpgrade('super_leaf', 251)) return true
                else if (hasUpgrade('super_leaf', 211)) return false
                else return true
            },
            effect() {
                return player.super_leaf.points.max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        221: {
            title: "Jump on enemies to continue flying",
            description: "4.89e166x Fire Flower gain.<br>Lock 3,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20240),
            unlocked() {return hasUpgrade('super_leaf', 211) || hasUpgrade('super_leaf', 212)},
            canAfford() {
                if (hasUpgrade('super_leaf', 261)) return true
                else if (hasUpgrade('super_leaf', 222)) return false
                else return true
            }
        },
        222: {
            title: "Fly outside the screen",
            description: "^1.5 1UP Mushroom gain and triple Super-Leaf gain.<br>Lock 3,1",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(20240),
            unlocked() {return hasUpgrade('super_leaf', 211) || hasUpgrade('super_leaf', 212)},
            canAfford() {
                if (hasUpgrade('super_leaf', 261)) return true
                else if (hasUpgrade('super_leaf', 221)) return false
                else return true
            }
        },
        231: {
            title: "Fly while ducking",
            description: "The softcap of 1st BBF buyable is weaker.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(202403),
            unlocked() {return hasUpgrade('super_leaf', 221) || hasUpgrade('super_leaf', 222)},
        },
        241: {
            title: "The highest fly",
            description: "Multiply SL Skill Points based on Bouncy Ball.<br>Lock 5,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(489040),
            unlocked() {return hasUpgrade('super_leaf', 231)},
            canAfford() {
                if (hasUpgrade('super_leaf', 281)) return true
                else if (hasUpgrade('super_leaf', 242)) return false
                else return true
            },
            effect() {
                return player.bouncy_ball_flower.bouncy_ball.max(1).log(10).pow(5).div(2e10).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        242: {
            title: "The highest fly",
            description: "Multiply SL Skill Points based on Pink Key Coin.<br>Lock 5,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(324000000),
            unlocked() {return hasUpgrade('super_leaf', 231)},
            canAfford() {
                if (hasUpgrade('super_leaf', 281)) return true
                else if (hasUpgrade('super_leaf', 241)) return false
                else return true
            },
            effect() {
                return player.coin.pink_key_coin.max(1).log(10).pow(4).div(1e11).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        251: {
            title: "Balanced flying",
            description: "You can both buy SLST 2,1 and 2,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(6.92e9),
            unlocked() {return hasUpgrade('super_leaf', 241) || hasUpgrade('super_leaf', 242)},
        },
        261: {
            title: "Keep flying! Hold Y!",
            description: "You can both buy SLST 3,1 and 3,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(5.01e10),
            unlocked() {return hasUpgrade('super_leaf', 251)},
        },
        271: {
            title: "The swinging animation",
            description: "Multiply Super Leaves based on Cleared Courses.<br>Lock 8,2 and 8,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.66e13),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311)) return true
                else if (hasUpgrade('super_leaf', 272)) return false
                else if (hasUpgrade('super_leaf', 273)) return false
                else return true
            },
            effect() {
                return player.points.log(10).div(1000).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        272: {
            title: "The anti-gravity at night",
            description: "x248 SL Skill Points gain.<br>Lock 8,1 and 8,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1e11),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311)) return true
                else if (hasUpgrade('super_leaf', 271)) return false
                else if (hasUpgrade('super_leaf', 273)) return false
                else return true
            },
        },
        273: {
            title: "It looks light!",
            description: "x51200 SL Skill Points gain.<br>Lock 8,1 and 8,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(7.88e14),
            unlocked() {return hasUpgrade('super_leaf', 261)},
            canAfford() {
                if (hasUpgrade('super_leaf', 311)) return true
                else if (hasUpgrade('super_leaf', 271)) return false
                else if (hasUpgrade('super_leaf', 272)) return false
                else return true
            },
        },
        281: {
            title: "Fly together!",
            description: "You can both buy SLST 5,1 and 5,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.99e16),
            unlocked() {return hasUpgrade('super_leaf', 271) || hasUpgrade('super_leaf', 272) || hasUpgrade('super_leaf', 273)},
        },
        291: {
            title: "Look like a pilot",
            description: "Unlock 6th Super Leaf upgrade.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.14e20),
            unlocked() {return hasUpgrade('super_leaf', 281)},
        },
        301: {
            title: "Still flying?",
            description: "x1e15 SL Skill Points gain.<br>Lock 11,2 and 11,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(2e34),
            unlocked() {return hasUpgrade('super_leaf', 35)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41)) return true
                else if (hasUpgrade('super_leaf', 302)) return false
                else if (hasUpgrade('super_leaf', 303)) return false
                else return true
            },
        },
        302: {
            title: "Fly 200-block high",
            description: "x100021 Super Leaf gain.<br>Lock 11,1 and 11,3",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.88e48),
            unlocked() {return hasUpgrade('super_leaf', 35)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41)) return true
                else if (hasUpgrade('super_leaf', 301)) return false
                else if (hasUpgrade('super_leaf', 303)) return false
                else return true
            },
        },
        303: {
            title: "Fly in space",
            description: "x1e20 SL Skill Points gain.<br>Lock 11,1 and 11,2",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(8.88e53),
            unlocked() {return hasUpgrade('super_leaf', 35)},
            canAfford() {
                if (hasUpgrade('super_leaf', 41)) return true
                else if (hasUpgrade('super_leaf', 301)) return false
                else if (hasUpgrade('super_leaf', 302)) return false
                else return true
            },
        },
        311: {
            title: "One hit, 100 enemies",
            description: "You can both buy SLST 8,1 8,2 and 8,3.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1.25e59),
            unlocked() {return hasUpgrade('super_leaf', 301) || hasUpgrade('super_leaf', 302) || hasUpgrade('super_leaf', 303)},
        },
        321: {
            title: "Different flying",
            description: "Unlock a new layer.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(3e61),
            unlocked() {return hasUpgrade('super_leaf', 311)},
        },
        331: {
            title: "Back to fly",
            description: "Unlock 3rd Cape Feather upgrade.",
            currencyDisplayName: "SL Skill Points",
            currencyInternalName: "slsp",
            currencyLayer: "super_leaf",
            cost: new Decimal(1e100),
            unlocked() {return hasUpgrade('super_leaf', 41)},
        },
    },
    clickables: {
        11: {
            display() {
                return "Respec SL Skill Tree, but you won't get your SL Skill Points back. And it'll cause a Super Leaf reset. You can click this while you can reset to gain SL."
            },
            unlocked() {
                return hasUpgrade("super_leaf", 15)
            },
            canClick() {
                return canReset(this.layer)
            },
            onClick() {
                player.super_leaf.upgrades.length
                for(let i = 0; i < player.super_leaf.upgrades.length; i++) { 
                    if (+player.super_leaf.upgrades[i] > 196) { 
                        player.super_leaf.upgrades.splice(i, 1); 
                        i--; 
                    }
                }
                if (canReset(this.layer)) doReset(this.layer)
            },
        },
    },
    milestones: {
        0: {
            requirementDescription: "Get 1 Super Leaf",
            effectDescription: "Autobuy Super Mushroom, Fire Flower and Invincible Star upgrades. Passive gain 100% Fire Flowers per second. Autobuy Invincible Stars and buy max.",
            done() { return player.super_leaf.points.gte(1) },
        },
        1: {
            requirementDescription: "Get 2 Super Leaves",
            effectDescription: "Passive gain 1000% Bouncy Ball and Broken Brick per second forever.",
            done() { return player.super_leaf.points.gte(2) },
        },
        2: {
            requirementDescription: "Get 3 Super Leaves",
            effectDescription: "Autobuy BBF buyables forever. 10x Broken Hard Brick and Broken Ice Block gain.",
            done() { return player.super_leaf.points.gte(3) },
        },
        3: {
            requirementDescription: "Get 4 Super Leaves",
            effectDescription: "Autobuy Invincible Star upgrades, auto complete IS and 1UP challenges, forever.",
            done() { return player.super_leaf.points.gte(4) },
        },
        4: {
            requirementDescription: "Get 5 Super Leaves",
            effectDescription: "x10 1UP Mushroom, Bouncy ball Flower and Big Mushroom.",
            done() { return player.super_leaf.points.gte(5) },
        },
        5: {
            requirementDescription: "Get 6 Super Leaves",
            effectDescription: "Passive gain 100% 1UP Mushroom, Bouncy ball Flower and Big Mushroom per second forever.",
            done() { return player.super_leaf.points.gte(5.999999) },
        },
        6: {
            requirementDescription: "Get 3000 Super Leaves",
            effectDescription: "Autobuy 1UP Mushroom upgrades.",
            done() { return player.super_leaf.points.gte(3000) },
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Super Leaf is from Super Mario Bros. 3. (1988) <br> The main ability of this kind of power-up is flying.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "SL Skill Tree": {
                unlocked() {return hasUpgrade('super_leaf', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #f83a11; text-shadow: 0 0 10px #f83a11'>" + format(player.super_leaf.slsp) + "</h2> SL Skill Points."],
                    "clickables",
                    ["upgrades", [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]]
                ]    
            },
        },
    },
})
// 第九层：斗篷羽毛
addLayer("cape_feather", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
        ce: new Decimal(0)
    }},

    color: "#FCBF02",                       // The color for this layer, which affects many elements.
    resource: "Cape Feathers",            // The name of this layer's main prestige resource.
    row: 3,                                 // The row this layer is on (0 is the first row).
    position: 1,
    branches: ["big_mushroom"],
    symbol: "CF",
    baseResource: "Big Mushrooms",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.big_mushroom.points },  // A function to return the current amount of baseResource.

    requires: new Decimal(1e86),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 5,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    hotkeys: [
        {key: "c", description: "C: Reset for Cape Feathers", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],

    layerShown() { return hasAchievement('achievements', 72) },          // Returns a bool for if this layer's node should be visible in the tree.

    canBuyMax() { return hasUpgrade("cape_feather", 33)},

    update(multCE) {
        multCE = new Decimal(0.05)
        if (hasUpgrade('cape_feather', 15)) multCE = multCE.times(player.cape_feather.points)
        if (hasUpgrade('cape_feather', 21)) multCE = multCE.times(upgradeEffect('cape_feather', 21))
        if (hasUpgrade('cape_feather', 23)) multCE = multCE.times(upgradeEffect('cape_feather', 23))
        if (hasUpgrade('cape_feather', 24)) multCE = multCE.times(buyableEffect('cape_feather', 12))
        if (hasMilestone('cape_feather', 2)) multCE = multCE.times(1e10)
        if (hasUpgrade('cape_feather', 15)) player.cape_feather.ce = player.cape_feather.ce.add(multCE)
    },

    upgrades: {
        11: {
            title: "Useful cape",
            description: "Multiply Big Mushroom gain based on Cape Feather.<br>Formula: 1e50^x (Hardcap at 1e2000)",
            cost: new Decimal(4),
            unlocked() {return hasMilestone('cape_feather', 1)},
            effect() {
                let CFU1base = new Decimal(1)
                let CFU1hardcap = new Decimal("1e2000")
                if (hasUpgrade('cape_feather', 15)) CFU1base = CFU1base.times(buyableEffect('cape_feather', 11))
                else CFU1base = CFU1base.times(1e50) 
                if (hasUpgrade('cape_feather', 31)) CFU1hardcap = new Decimal("1e5000")
                return Decimal.pow(CFU1base, player.cape_feather.points).min(CFU1hardcap)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        12: {
            title: "Gliding",
            description: "Unlock 16th Super Leaf upgrade.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('cape_feather', 11)},
        },
        13: {
            title: "So high!",
            description: "Autobuy Bouncy Ball Flower upgrades.",
            cost: new Decimal(6),
            unlocked() {return hasUpgrade('super_leaf', 331)},
        },
        14: {
            title: "Spin gliding",
            description: "Make the IS effect better.",
            currencyDisplayName: "Coins",
            currencyInternalName: "points",
            currencyLayer: "coin",
            cost: new Decimal("1e1281000"),
            unlocked() {return hasUpgrade('cape_feather', 13)},
        },
        15: {
            title: "Accelerate to max again",
            description: "Unlock a new subtab.",
            currencyDisplayName: "Invincible Stars",
            currencyInternalName: "points",
            currencyLayer: "invincible_star",
            cost: new Decimal(116),
            unlocked() {return hasUpgrade('cape_feather', 14)},
        },
        21: {
            title: "Accelerate to max again",
            description: "Multiply Cape Essence based on Invincible Star.",
            currencyDisplayName: "Super Mushrooms",
            currencyInternalName: "points",
            currencyLayer: "super_mushroom",
            cost: new Decimal("1e691250"),
            unlocked() {return hasUpgrade('cape_feather', 15)},
            effect() {
                return player.invincible_star.points.max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Different animation",
            description: "Make the softcap of 1st Bouncy Ball buyable weaker again.",
            currencyDisplayName: "Fire Flowers",
            currencyInternalName: "points",
            currencyLayer: "fire_flower",
            cost: new Decimal("1e68888"),
            unlocked() {return hasUpgrade('cape_feather', 21)},
        },
        23: {
            title: "Fast fly in space",
            description: "Multiply Cape Essence by OoMs of Cleared Courses.",
            cost: new Decimal(7),
            unlocked() {return hasUpgrade('cape_feather', 22)},
            effect() {
                return player.points.log(10).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        24: {
            title: "Higher than max",
            description: "Unlock 2nd Cape Feather buyable.",
            currencyDisplayName: "1UP Mushrooms",
            currencyInternalName: "points",
            currencyLayer: "oneup_mushroom",
            cost: new Decimal("1e6737"),
            unlocked() {return hasUpgrade('cape_feather', 23)},
        },
        25: {
            title: "Invincible ability",
            description: "Multiply Broken Ice Blocks based on Cape Essence.",
            currencyDisplayName: "Invincible Stars",
            currencyInternalName: "points",
            currencyLayer: "invincible_star",
            cost: new Decimal(234),
            unlocked() {return hasUpgrade('cape_feather', 24)},
            effect() {
                return player.cape_feather.ce.pow(25).max(1)
                    },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "When flying",
            description: "Remove 1st hardcap of 1st Cape Feather upgrade. 2nd hardcap at x1e5000",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 25)},
        },
        32: {
            title: "But still will take any damage",
            description: "Autobuy Big Mushroom upgrades.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 31)},
        },
        33: {
            title: "Drop to ground",
            description: "You can buy max Cape Flowers.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 32)},
        },
        34: {
            title: "Like groundpound!",
            description: "You will find a secret upgrade while you are in the 1st 1UP Mushroom challenge.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('cape_feather', 33)},
        },
        35: {
            title: "Best friends forever",
            description: "Unlock the last layer of the 4th row.",
            cost: new Decimal(9),
            unlocked() {return hasUpgrade('super_leaf', 42)},
        },
        // Look in the upgrades docs to see what goes here!
    },
    milestones: {
        0: {
            requirementDescription: "Get 2 Cape Feathers",
            effectDescription: "x1e200 Broken Brick gain.",
            done() { return player.cape_feather.points.gte(2) },
        },
        1: {
            requirementDescription: "Get 4 Cape Feathers",
            effectDescription: "Unlock 1st Cape Feather upgrade.",
            done() { return player.cape_feather.points.gte(4) },
        },
        2: {
            requirementDescription: "Get 8 Cape Feathers",
            effectDescription: "x1e10 Cape Essence gain.",
            done() { return player.cape_feather.points.gte(8) },
        },
    },
    buyables: {
        11: {
            title: "More powerful flying",
            cost(x) { return new Decimal(2).add(x.div(100)).pow(x) },
            display() { return` Make 1st Cape Feather formula better. <br>
                Formula: ${format(this.effect())}^x <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Cape Essence`
            },
            canAfford() { return player[this.layer].ce.gte(this.cost()) },
            buy() {
                player[this.layer].ce = player[this.layer].ce.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
               return new Decimal(1e50).times(Decimal.pow(Decimal.sqrt(100000), x))
            },
            unlocked() {return hasUpgrade('cape_feather', 15)}
        },
        12: {
            title: "A powerfun drop",
            cost(x) { return new Decimal(6.75).pow(x.max(1).pow(1.15)) },
            display() { return` Get more Cape Essence. <br>
                Effect: x${format(this.effect())} <br>
                Level: ${format(player[this.layer].buyables[this.id])}<br>
                Cost: ${format(this.cost())} Cape Essence`
            },
            canAfford() { return player[this.layer].ce.gte(this.cost()) },
            buy() {
                player[this.layer].ce = player[this.layer].ce.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            effect(x) {
               return Decimal.pow(3.75, x)
            },
            unlocked() {return hasUpgrade('cape_feather', 24)}
        },
    },
    tabFormat: [
        "main-display",
        "prestige-button",
        ["microtabs", "stuff"],
        ["blank", "65px"],
    ],
    microtabs: {
        stuff: {
            "Upgrades": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    ["raw-html", () => `<h4 style="opacity:.5">Cape Feather is a kind of power-ups in Super Mario World (1991). <br> Players can fly with capes, and with wounderful abilities.`],
                    ["upgrades", [1,2,3,4,5,6,7,8,9]]
                ]
                
            },
            "Milestones": {
                unlocked() {return true},
                content: [
                    ["blank", "15px"],
                    "milestones",
                ]    
            },
            "Cape Essence": {
                unlocked() {return hasUpgrade('cape_feather', 15)},
                content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #fcbf02; text-shadow: 0 0 10px #fcbf02'>" + format(player.cape_feather.ce) + "</h2> Cape Essence.<br>You gain Cape Essence per second based on amount of Cape Feathers."],
                    "buyables",
                ]    
            },
        },
    },
})
// 第十层：耀西蛋
addLayer("yoshi_egg", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "YE",
    color: "#00D800",                       // The color for this layer, which affects many elements.
    resource: "Yoshi Eggs",            // The name of this layer's main prestige resource.
    row: 3,                                 // The row this layer is on (0 is the first row).
    position: 2,
    baseResource: "Bouncy Ball Flowers",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.bouncy_ball_flower.points },  // A function to return the current amount of baseResource.

    requires: new Decimal("1e11341"),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "normal",                         // Determines the formula used for calculating prestige currency.
    exponent: 2.5e-4,                          // "normal" prestige gain is (currency^exponent).
    branches: ["bouncy_ball_flower"],
    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasAchievement('achievements', 81) },          // Returns a bool for if this layer's node should be visible in the tree.
    hotkeys: [
        {key: "y", description: "Y: Reset for Yoshi Eggs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        // Look in the upgrades docs to see what goes here!
    },
})