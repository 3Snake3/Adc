const weakened = extendContent(StatusEffect, "weakened", {});
weakened.speedMultiplier = 0.85;
weakened.healthMultiplier = 0.15;
weakened.damageMultiplier = 0.85;
weakened.reloadMultiplier = 0.90;
weakened.damage = 0.10;
weakened.color = Pal.gray;


const spear = extend(LaserBoltBulletType, {});
spear.width = 6;
spear.height = 35;
spear.frontColor = Color.valueOf("ffffff");
spear.backColor = Color.valueOf("0096FF");
spear.damage = 80;
spear.speed = 8;
spear.lifetime = 36.3;
spear.pierce = true;
spear.hittable = false;
spear.absorbable = false;
spear.reflectable = false;
spear.keepVelocity = false;
spear.hitSize = 4;
spear.lightning = 4;
spear.lightningLength = 15;
spear.lightningCone = 90;
spear.lightningDamage = 20;
spear.lightningColor = Color.valueOf("0096FF");
spear.hitSound = Sounds.spark;
spear.pierceBuilding = true;
spear.status = weakened;
spear.statusDuration = 70;
spear.splashDamageRadius = 25;
spear.splashDamage = 45;
spear.buildingDamageMultiplier = 0.15;

const impaler = extendContent(PowerTurret, "impaler", {});
impaler.shootType = spear;