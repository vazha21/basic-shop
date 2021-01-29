export class Item {
  public constructor(
    public title: string,
    public description: string,
    public price: number,
    public icon: string,
    public id?: number
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.icon = icon;
    this.id = id;
  }
}
