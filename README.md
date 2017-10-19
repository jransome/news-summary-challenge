# News Summary challenge

An app that uses the Guardian newspaper API to show headlines from their technology section. Clicking on a headline will show a summary of the article. (Styling coming soon!)

This challenge was part of the Makers Academy course and was test driven with [Peanut Butter](https://github.com/jransome/peanut-butter), a testing framework also written at Makers Academy.

## Installation

Run the following in your terminal:

```
$ git clone git@github.com:jransome/news-summary-challenge.git
$ cd news-summary-challenge
$ npm install
$ node app.js
```

...then navigate to http://localhost:8080 in your browser of choice!

### Approach

I aimed to build this app using a model-view-controller architecture. The article controller makes an initial request for headlines via an api-requester object, which it then stores as individual article-model objects. These are then used to populate the headlines-view.

Clicking on a headline triggers the controller to make a request for a summary of that article via the Alyien text summarisation API, which is then stored on the corresponding article-model and displayed in an article-view.

Navigating back to the headlines view does not automatically make another API request for headlines, nor is a request made for a summary if the article-model already has one. This was done to reduce the number of API requests as they are rate limited, as well as to improve the speed of navigation.

### Technologies

A single page web app using frontend JavaScript, CSS and HTML. A criteria for this challenge was not to use any external frameworks.


## User Stories


```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```


## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)
