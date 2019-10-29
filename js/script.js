// Fonction appelée lors du click du bouton
function start() 
{
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather.fetchTodayForecast().then(function(response) 
  {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principale
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
  })
    .catch(function(error) 
    {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDaysForecast()
{

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();

    apiWeather.fetchThreeDaysForecast().then(function(response) 
    {

      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principale du main 
      const main1 =data.list[0].weather[0].main;//Demain
      const main2 =data.list[1].weather[0].main;//Après-Demain
      const main3 =data.list[2].weather[0].main;//Encore-Après-Demain

      // On récupère l'information principale de description
      const description1 = data.list[0].weather[0].description;
      const description2 = data.list[1].weather[0].description;
      const description3 = data.list[2].weather[0].description;

      // On récupère l'information principale de temp
      const temp1 = data.list[0].temp.day;
      const temp2 = data.list[1].temp.day;
      const temp3 = data.list[2].temp.day;
      
      // On récupère l'information principale de icon
      const icon1 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main1 ;
      document.getElementById('tomorrow-forecast-more-info').innerHTML =description1;
      document.getElementById('icon1-weather-container').innerHTML = icon1;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp1}°C`;

      document.getElementById('tomorrow2-forecast-main').innerHTML = main2;
      document.getElementById('tomorrow2-forecast-more-info').innerHTML = description2;
      document.getElementById('icon2-weather-container').innerHTML = icon2;
      document.getElementById('tomorrow2-forecast-temp').innerHTML = `${temp2}°C`;

      document.getElementById('tomorrow3-forecast-main').innerHTML = main3;
      document.getElementById('tomorrow3-forecast-more-info').innerHTML = description3;
      document.getElementById('icon3-weather-container').innerHTML = icon3;
      document.getElementById('tomorrow3-forecast-temp').innerHTML = `${temp3}°C`;

    })
    .catch(function(error) 
    {
      // Affiche une erreur
      console.error(error);
    });
}