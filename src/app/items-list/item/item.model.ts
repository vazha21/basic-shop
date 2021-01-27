export class Item {
  public constructor(
    public id: number,
    public title: string,
    public description: string,
    public price: number,
    public icon: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.icon = icon;
  }
}
