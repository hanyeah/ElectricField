namespace hanyeah.electricField{
  export class ElectricField{
    public glslCanvas: GlslCanvas;
    constructor(canvas: HTMLCanvasElement) {
      console.log("electric field");
      this.glslCanvas = new GlslCanvas(canvas, null, null);
      this.glslCanvas.load(hanyeah.electricField.FragCode, hanyeah.electricField.VertCode);
    }
  }
}