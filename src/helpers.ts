export default class Helpers {
  static preloadImages(urls: string[]) {
    urls.forEach((url) => {
      Helpers.preloadImage(url);
    });
  }

  static preloadImage(url: string) {
    const image = new Image();
    image.src = url;
  }
}

