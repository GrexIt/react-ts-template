class LocalStorageMock {
  private store: any = {};

  // constructor() {
  //   this.store = {};
  // }

  // clear() {
  //   this.store = {};
  // }

  public getItem(key: string) {
    return this.store[key] || null;
  }

  public setItem(key: string, value: string) {
    this.store[key] = value.toString();
  }

  // removeItem(key) {
  //   delete this.store[key];
  // }
}

export default LocalStorageMock;
