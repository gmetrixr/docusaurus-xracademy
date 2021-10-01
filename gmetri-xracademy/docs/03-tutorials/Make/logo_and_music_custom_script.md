---
title: How to add persistent music and logo to your experience - GMetri XR Platform
description: Made using the GMetri XR platform, this app demonstrates the ability of GMetir platform to be able to add experience wide logo and music using custom script.
hide_title: true
sidebar_label: Logo and Music w/custom script
---

# Add a persistent logo and music to an experience

Using the custom script feature of the GMetri platform, you can a background music and logo that is persistent across all scenes.

<iframe width={"100%"} height={"380px"}  src="https://view.gmetri.com/v5/gmetri/audo_logo_demo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To add a logo or music to your experience which is persistant across all scenes:

1. Head over to the "Advanced" section in Settings.

![Adding Javacript](https://s.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/z5/add_javascript.JPG#boxShadow)
  
2. Add your custom script in the text area provided in this section.

To add a persistant background audio with mute/unmute controls, you can use the script below:

```html
<script>

const bgm = document.createElement("audio");
const btn = document.createElement("button");

bgm.setAttribute("id", "bgm");
bgm.setAttribute(
  "src",
  "https://www.chosic.com/wp-content/uploads/2020/07/Art-Of-Silence_V2.mp3"
);

function play() {
  bgm.volume = 0.4;
  bgm.play();
  bgm.loop = true;
}

function muteUnmuteAudio() {
  if (bgm.muted == false) {
    bgm.muted = true;
    btn.setAttribute(
      "style",
      "background: url(https://s.vrgmetri.com/gb-web/teaxrweb/stw/mute_white.png); width: 64px; height: 64px; transform: scale(0.7); border: none;"
    );
    btn.style.position = "absolute";
    btn.style.bottom = "0";
    btn.style.right = "0";
  } else {
    bgm.muted = false;
    btn.setAttribute(
      "style",
      "background: url(https://s.vrgmetri.com/gb-web/teaxrweb/stw/unmute_white.png); width: 64px; height: 64px; transform: scale(0.7); border: none;"
    );
    btn.style.position = "absolute";
    btn.style.bottom = "0";
    btn.style.right = "0";
  }
}

function attachAudioControls() {
  btn.setAttribute(
    "style",
    "background: url(https://s.vrgmetri.com/gb-web/teaxrweb/stw/unmute_white.png); width: 64px; height: 64px; transform: scale(0.7); border: none;"
  );
  btn.style.position = "absolute";
  btn.style.bottom = "0";
  btn.style.right = "0";
  btn.onclick = muteUnmuteAudio;
  document.getElementById("user-script").appendChild(btn);
}

let checker = setInterval(play, 1000);
attachAudioControls();
</script>
```

As you can notice in the sample experience above, a background audio plays in the experience that keeps playing even when you change scenes! Also a speaker icon at the bottom right can be clicked to mute/unmute the audio.

3. To add a logo to your experience add the script below:

```html
<script>
const logo =
  "https://avatars.githubusercontent.com/u/60691540?s=200&v=4";

function createHeader() {
  const header = document.createElement("span");
  header.style.position = "fixed";
  header.style.top = "16px";
  header.style.left = "16px";

  document.getElementById("user-script").appendChild(header);

  const img = document.createElement("img");
  img.style.width = "120px";
  img.style.height = "auto";
  img.src = logo;
  header.appendChild(img);
}

createHeader()
</script>
```

You can adjust the css in this script to place the logo at any location in the experience. As you can see, in the sample expereince above GMetri logo was added to the top left using this custom script.
