// This class models the Route which user enters (src, destination).
export class Route {
  public source: string;
  public destination: string;

  constructor(src: string, destination: string) {
    this.source = src;
    this.destination = destination;
  }
}
