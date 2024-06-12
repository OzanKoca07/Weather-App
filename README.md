# Hava Durumu Uygulaması

Bu proje, belirli bir şehir için hava durumu bilgilerini görüntüleyen basit bir React uygulamasıdır. Kullanıcı, bir şehir ismi girer ve OpenWeatherMap API'sini kullanarak o şehirdeki mevcut hava durumu verilerini alır.

## Özellikler

- Kullanıcıdan şehir ismi alır.
- OpenWeatherMap API'si kullanarak hava durumu verilerini çeker.
- Sıcaklık, nem, rüzgar hızı gibi bilgileri görüntüler.

## Başlangıç

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

- Node.js (v14 veya daha üstü)
- npm (Node Package Manager)

### Kurulum

1. Bu depoyu klonlayın:
    ```sh
    git clone https://github.com/kullanici-adi/weather-app.git
    cd weather-app
    ```

2. Gerekli paketleri yükleyin:
    ```sh
    npm install
    ```

3. OpenWeatherMap API anahtarınızı alın:
   - [OpenWeatherMap](https://openweathermap.org/api) adresinden kaydolun ve bir API anahtarı alın.

4. API anahtarınızı `App.js` dosyasındaki `API_KEY` değişkenine ekleyin:
    ```javascript
    const API_KEY = "YOUR_API_KEY_HERE";
    ```

### Kullanım

kullanılan diller; HTML, CSS, Javascript

Uygulamayı çalıştırmak için:

```sh
npm start
