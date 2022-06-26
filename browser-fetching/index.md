---
layout: layouts/base.njk
title: How to fetch data using a web browser
eleventyNavigation:
  key: Fetch
  order: 4
---

# How fetching!

Aren't you fetching? In the web browser, that is. All modern web browsers supply a Fetch API for making an HTTP request to a web server, and handling the data returned from the server. The Fetch API provides a programming interface to asynchronously exchange data with a web server without needing to load another web page.

It's useful to web developers in scenarios such as:

* **Displaying dynamic data** that changes over time.
  For example, fetching current weather conditions for the given location.
* **Partially updating the page** in response to user interactivity.
  For example, fetching and displaying the current stock price for a user provided stock index.
* **Submitting forms** and displaying a success or error messages without needing to reload an entire page.
  For example: Adding an item to a shopping cart.

Fetch's interface only requires a single argument, the `url` to send a request to. The second argument is an object for specifying various options.

```javascript
  fetch(url, options) // return a Promise
```
As with most asynchronous APIs in JavaScript, `fetch` returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) that either resolves (succeeds) or rejects (fails) after receiving a response.

Below is a minimal example of using fetch to request a random dog image from [dog.ceo](https://dog.ceo), and displaying the image returned in the page. Open the Web Developer Tools in your browser and select the Network tab to see the HTTP request sent by fetch.


```javascript
const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random')
  // Resolve the JSON returned from the url
  .then(response => response.json())
  // Display the image and the raw JSON in the page
  .then(result => {
    console.log(result)
    document.querySelector('#dog').src = result.message
    document.querySelector('#dog-results').innerHTML = JSON.stringify(result, null, 2)
  })
  // Log any errors to the developer console
  .catch(error => console.error(error))
```

<script>
const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(result => {
    console.log(result)
    document.querySelector('#dog').src = result.message
    document.querySelector('#dog-results').innerHTML = JSON.stringify(result, null, 2)
  })
  .catch(error => console.error(error))
</script>
<button onclick="fetchDog()">Call the `fetchDog` function</button>

#### JSON from the response:
<pre class="language-javascript" id="dog-results">Nothing fetched yet.</pre>

#### Image from the response:
<div style="width: 400px;">
  <img id="dog" style="width: 100%;" alt="Random dog image" src="https://via.placeholder.com/400" />
</div>

Below is more complex example that uses multiple options to POST a request to a weather API:

```
TODO
```

## Summary

These are only a couple examples of how to use the Fetch API, but enough to indicate it's purpose and capabilities. Read the ["Using the Fetch API"](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) page on the Mozilla Developer Network for additional examples and complete detail on the Fetch API. Fetch isn't limited to web browsers, it's also available in [Node.js v18](https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental) and can be used on the server.

Fetch is an essential API for any dynamic webpage that reacts to user interactivity. If you weren't fetching before, you sure are fetching now.
