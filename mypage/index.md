---
layout: layouts/base.njk
title: My Page
---

# How to add a page to the site

### 1. Create a [https://www.markdowntutorial.com/](Markdown) file with an ".md" file extension.

The markdown file can be in the root folder of the site, an existing folder such as "/about", or in a new folder. A new folder is useful if you have multiple related pages--`index.md` will be the default page for the folder. The URL for the page will reflect where you place the file. For example, if a "/mypage.md" file is added to the root folder, then it will be available at:
[http://localhost:8080/Tech-Writing-Project/mypage/](http://localhost:8080/Tech-Writing-Project/mypage/)

    
### 2. Add meta data to the top of the markdown file

Metadata for the page, such as the page's `title` which appears in the browser tab, is placed at the top of the file denoted with starting and ending `---` markers. 

Add the following properties to the metatdata:

|Property| Example value | Purpose |
|---|---|---|
| title: | My Page! | Title to appear in the browser tab |
| layout: | layouts/base.njk | Any of the layout files in `_includes/layouts` such as `base`, `home`, or `post` |  
| eleventyNavigation:  | key: Fetch  order: 4 | Optional metadata for adding page to site's top navigagion. `key` provides the link text, and `order` speccifies the placement in navigation |
| tags: | post | Used to associate pages into a collection. See Markdwn files in `posts/` as an example |

All that is required is a title and layout:

```yaml
--- 
layout: layouts/base.njk
title: My Page
---
```

### 3. Add page content

The remainder of the file is Markdown that will be transformed into `html` for browsing. Add page content to the file.  


```markdown
--- 
layout: layouts/base.njk
title: My Page
---

# Cats vs. Dogs

Cats!

## What about adding html?

<p>Sure, if you need it, but markdown is the preferred format.</p>

```

### 4. Preview the page while you write

Start the site locally:
```
npm start
```
Open a browser, and navigate to the site including the filename in the URL path. 
[http://localhost:8080/Tech-Writing-Project/YOUR_FILE_NAME](http://localhost:8080/Tech-Writing-Project/YOUR_FILE_NAME)

The page will update when changes are made to the Markdown file.

### 5. "Publish" the page when ready

When finished, commit your new file to `git` and open a PR. Once the PR is merged, it'll appear on the live site:
[https://cmneal26.github.io/Tech-Writing-Project/YOUR_FILE_NAME](https://cmneal26.github.io/Tech-Writing-Project/YOUR_FILE_NAME)


----

### Bonus section: Adding inline JavaScript

## Example of running Javascript in the page.

```js
fetch('https://dog.ceo/api/breeds/image/random', {})
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))
```
<script>
const fetchDog = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(result => {
    console.log(result)
    document.querySelector('#dog').src = result.message
  })
  .catch(error => console.error(error))
</script>

<button onclick="fetchDog()">fetch dog image</button>
<img id="dog">

