
interface Option {
  value: any

  empty(): Option
  map(f: Function): Option
  flatmap(f: Function): Option
  filter(p: Function): Option
  get(): any
  orElse(another: any): any
  isEmpty(): Boolean
}


class Option implements Option {
  value: any

  constructor (value: any) {
    if (!value) this.value = null
    else this.value = value
  }

  empty(): Option { return None }
  map(f: Function): Option { return this.isEmpty() ? None : new Option(f(this.get())) }
  flatmap(f: Function): Option { return  this.isEmpty() ? None : f(this.get()) }
  filter(p: Function): Option { return (this.isEmpty() || p(this.get())) ? this : None }
  get(): any { return this.value }
  orElse(another: any): any { return this.isEmpty() ? another : this.get() }
  isEmpty(): Boolean { return this === None }
}

const None = new Option(false)

export default (value: any) => new Option(value)
