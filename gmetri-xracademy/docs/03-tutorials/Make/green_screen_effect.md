---
title: How to add a green screen effect to your experiences - GMetri XR Platform
description: Made using the GMetri XR platform, this demonstrates how to add a green screen effect to your mixed reality experiences.
hide_title: true
sidebar_label: Green Screen Effect
---

# Add a Green Screen Effect with Videos

<iframe width={"100%"} height={"380px"} src="https://view.gmetri.com/v4/gmetri/green-screen" frameBorder="0" allowFullScreen></iframe>

## Description

The use of Green Screens has come a long way in the past decade. Technology that
was primarily used in hollywood movies is now being used by everyone, including
our favorite youtubers and insta-celebs. Here we'll go through the entire
process required to enable green screen effect on your XR experience.

Before we dive into how to enrich virtual reality with green screen effect,
let's familiarize ourselves with a few key terms.

## Definitions

### Green Screen
Refers to a colored background that you want to remove from your shot. This is
usually single colored backdrop that can be of any color. Usually, a bright
green color is used because it is the furthest away from a human's skin color.
In past times, blue colored screens were also popular. When there is a green
colored prop required in the shot, a bright blue colored screen is used instead.

### Chroma Key
Goes hand-in-hand with green screen. It is the technique of compositing two
images/videos together based on color hues. All colors have a chroma component,
hence the name.

### Keying
Refers to the process of removing the green screen background from the shot
while post processing the shot. The portions of the video which match the
pre-selected color are replaced by transparent pixels which can be later filled
in with another image or video. 


--------------------------------------------------------------------------------

:::note
Even though webm video format is supported in major browsers, it still suffers
from potential failure points.

 * The internal spec is still shaky. Transparency doesn't work at times on
   certain devices. 
 * Encoding a webm video is hassle. Getting the right codec and media settings
   can be tricky. Encoding a webm video doesn't follow the well known approaches
   used by designers and VFX artists. It requires special knowledge of ffmpeg 
   and/or blender.
 * Safari doesn't support transparency in webm videos!
:::

:::success GMetri SUPPORTS GREEN SCREEN EFFECT
All GMetri XR Experiences support applying the green screen effect on virtual
reality (VR) videos. You worry about shooting and perfecting those vacation
candids, we do the job of heavy processing on it.
:::

## Elements Used

- [Image](../../../Features/Create/Elements/Video/)

## Add Elements

Let's take a look at how you can add a green screen effect to a video using the
GMetri Virtual Reality Platform.

1. Add a video element into your scene. Select a video from the file browser
with the green background applied to it. 

![Green Screen Effects on VR with GMetri XR](https://r.vrgmetri.com/image/w_900,h_450,q_85/gb-blog/gmetri/2020/04/shot11.png.jpg)

2. Now click the Green Screen Icon to apply the filter and select the background
color using the integrated color picker.

![Chroma Key Green Screen Backgrounds](https://r.vrgmetri.com/image/w_900,h_450,q_80/gb-blog/gmetri/2019/12/shot12-select-1.png.jpg)

3. Open up the preview and see the magic!

![How to do Green Screen for Videos on GMetri XR](https://s.vrgmetri.com/gb-web/real-ghost/2019/12/green-screen-virtual-reality-background.gif)

Here's an example using blue background instead of a green background:

![Blue Background instead of Green screen effect](https://r.vrgmetri.com/image/w_900,h_450,q_80/gb-blog/gmetri/2019/12/shot21.png.jpg)

## Test

- That's it! It now time to test the application. You can do that by clicking the green `Play` button in Right bar. 
- A QR Code shall appear. Scan this from your phone to preview your green screen experience or just open the link in a new tab. The changes you make in the editor will be available in the preview as soon as you make them after refreshing the page!

## Deploy

- For other to view this app, you must deploy it. To do this head over to the [Publish](../../../Features/Publish/) section to know more.