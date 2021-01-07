import {reactive, readonly} from 'vue';

const debug = process.env.NODE_ENV !== 'production'

export abstract class Store<T extends Record<string, any>> {
  protected state: T;

  constructor() {
    let data = this.data();
    this.setup(data);
    this.state = reactive(data) as T;
  }

  protected abstract data(): T

  protected setup(data: T): void {}

  public getState() {
    return debug ? readonly(this.state) : this.state;
  }
}
