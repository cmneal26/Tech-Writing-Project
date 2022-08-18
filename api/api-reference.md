---
layout: layouts/transparency.njk
title: Transparency
templateClass: tmpl-transparency
eleventyNavigation:
  key: APIs
  order: 1
---

<center>
 <h2>Introduction</h2>
</center>

One of the core themes of the Free Free API Education website is a focus on **data APIs**, and the ways they can be used to **generate interactive content**.

While we cover APIs in greater detail within our educational modules, this section of the site will serve as a primer and starting point, introducing some of the key concepts underlying data APIs.

<center>
 <h2>The Client/Server Model</h2>
</center>

<center>
 <img src="../../img/client-server.png" alt="client/server model">
</center>

The diagram above shows two computers communicating remotely over a network via the **HTTP protocol**. The Chrome browser program running on the left computer is the **client**. The browser is the client in this example because it issues a **request** for a resource to the API **server** on the right. The API server doesn't issue requests like the client -- instead, it waits for a request from a client, and then issues a **response**.

This client/server model is critical to our experience of the internet as we know it. Without the ability for one computer to retrieve a resource from another computer over the network, we would not have access to any of our favorite sites.

<center>
  <h2>Clients Can Retrieve Different Kinds Of Resources From Servers</h2>
</center>

The client/server architectural model described above is neutral about what sorts of information computers can exchange. For example, let's suppose a user opens their browser and enters this URL: __www.google.com__. That user's browser (the client) will then make a **request** to a particular web **server**, which serves up a **response** that contains the HTML for the site that user sees when the page renders.  

However, HTML is not the only kind of data format a response can provide. For example, a data API server will often respond with data in the **JSON format** rather than HTML content.

Here are a few examples of JSON data retrieved by a client by issueing a request to a data API server:

- **Weather Data**
   ```json

    {
      "dt": 1660842384,
      "sunrise": 1660828721,
      "sunset": 1660876771,
      "temp": 301.05,
      "feels_like": 300.79,
      "pressure": 1019,
      "humidity": 41,
      "dew_point": 286.59,
      "uvi": 5.04,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 3.13,
      "wind_deg": 273,
      "wind_gust": 3.58,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ]
    }


   ```
- **User Profile Data**
  ```json
    {
        "favoriteFood": "chicken",
        "petCount": 2
    }
  ```

- **Image Data**
  ```json
      {
      "message": "https://images.dog.ceo/breeds/pyrenees/n02111500_1590.jpg",
      "status": "success"
      }
  ```

<center>
 <h2>The Data APIs This Site Communicates With</h2>
</center>





