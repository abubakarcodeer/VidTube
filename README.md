# VidTube - YouTube API React App

**VidTube** is a React web app that lets you browse and watch trending YouTube videos from the USA. Search, explore, and view video details seamlessly using the YouTube Data API.

## 🚀 Features

* Fetch trending and popular YouTube videos from the USA
* Fetch by Select category
* View video details (title, description, views, channel, comments)
* Watch videos directly in the app
* Responsive and user-friendly UI

## 🧩 Technologies Used

* React.js
* JavaScript
* YouTube Data API v3
* Fetch API
* CSS

## 🔑 Getting a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **YouTube Data API v3**
4. Generate an API key

## ⚙️ API Endpoint Used

```text
https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&key={YOUR_API_KEY}
```

### Parameters:

| Parameter  | Description                            |
| ---------- | -------------------------------------- |
| part       | Data to retrieve (snippet, statistics) |
| chart      | Type of videos (mostPopular)           |
| regionCode | Country code (US)                      |
| key        | Your API Key                           |

## ❗ Common Errors

| Error | Reason             |
| ----- | ------------------ |
| 401   | Invalid API Key    |
| 403   | API quota exceeded |
| 404   | Video not found    |
