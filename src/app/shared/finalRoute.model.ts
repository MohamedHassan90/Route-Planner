// This class models the Final Route (src, connection(s), destination)
export class FinalRoute {
  public source: string;
  public connector: string[] = [];
  public destination: string;

  constructor(src: string, connector: string[], dst: string) {
    this.source = src;
    this.connector = connector;
    this.destination = dst;
  }
}
