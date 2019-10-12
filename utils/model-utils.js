module.exports = class ModelUtils {

  static getInstance(model){
    if(!model){
      throw new Error("model is empty,please ensure model is instance")
    }

    let entity = {}

    model.forEach(element => {
      entity[element.key] = element.default ? element.default : ''
    });

    return entity
  }

  static getColumns(model){
    if(!model){
      throw new Error("model is empty,please ensure model is instance")
    }

    let entity = {}

    model.forEach(element => {
      entity[element.key] = element.default ? element.default : ''
    });

    return entity
  }
}