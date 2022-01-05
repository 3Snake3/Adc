const creotitePowerStation = extendContent(SectorPreset, "creotite-power-station", Planets.serpulo, 194, {
  localizedName: "Creotite Power Station",
  captureWave: 50,
  difficulty: 9,
  startWaveTimeMultiplier: 1,
  
  loadIcon() {
    this.super$loadIcon();
    //may be custom icon
  }
});
