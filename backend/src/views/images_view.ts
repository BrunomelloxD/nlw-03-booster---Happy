import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      //Define o que será retornado
      id: image.id,
      url: `http://192.168.0.105:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};