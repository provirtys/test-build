class DMProto {
  constructor(model) {
    this.Model = model
  }

  encode(data) {
    const model = new this.Model(data)
    const bindata = model.toBinary()
    // return Array.from(bindata).map(v => `^${String(v).padStart(3, '0')}`).join('')
    return bindata.toString('hex')
  }

  decode(data) {
    // const bindata = Array.from(data.split('^')).map(v => v.replace(/^\^0{0,2}(?=\d)/, ''))
    const bindata = data.split(',')
    console.log(bindata)
    // bindata.shift()
    return this.Model.fromBinary(Uint8Array.from(bindata))
  }
}

export default DMProto
