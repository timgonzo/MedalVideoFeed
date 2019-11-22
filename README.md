# MedalTV React Code Challenge
This is a video feed I developed in about a day for MedalTV to demonstrate my UI/UX intuitions using their proprietary video player. While any NPM package was acceptable to use, I coded nearly everything from scratch to illustrate my understanding of React/Javascript.

### Requirements

- List all video objects using video player
- A user should bee able to play the individual videos within the feed

### Technology Requirements

- Use ReactJS
- Provided video player, reference the readme file within the zip file for additional information
- The app server must be able to be ran using this command:
  `npm install && npm run start`
  
### Bugs
-Although the UI provides the user with global video settings, the proprietary video player only changes video settings upon receiving initial props. After initial render, videos must be controlled via the individual video component. A change to the video player's code is necessary to reflect property changes on every video component.
