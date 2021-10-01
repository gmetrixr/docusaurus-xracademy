---
title: How to embed a livestream video - GMetri XR Platform
description: Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.
hide_title: true
sidebar_label: Live Stream Embedding
---

# Embed a Live Stream Video
  ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_live_stream.png.jpg#boxShadow)

## Description

GMetri platform supports adding youtube live stream video as embeds. Zoom meetings/webinars can also be added as embeds when streamed via youtube live (more info on this below).

## Youtube Live Stream

Live Stream must first be enabled on your Youtube account in order for you to start a Live video. For more information on this, please see [Youtube help](https://support.google.com/youtube/answer/2474026).

1. After you start your live video, obtain the embed code from the video:
    - Click on "Share"
    - Click on the "Embed" option
    - Copy the provided HTML code
    
    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_copy.png.jpg#boxShadow)

2. In the experience editor, add an [EmbedHtml](../../../Features/Create/Elements/EmbedHtml/) element. In the space provided, add the embed code copied from youtube. 

    a. To stream **without** the Live Chat feature
      
      Change the attributes `width` and `height` to: `width=100% height=100%`

      ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_editor.png.jpg#boxShadow)

    b. To embed the Live Chat feature along with your live video stream

      * Change attributes `width` and `height` to: `width=70% height=100%` in the pasted Embed Video code.
      * Add the following below the pasted code:
      ```html
      <iframe 
        width=27% height=100%
        src="https://www.youtube.com/live_chat?v={video id}&embed_domain=view.gmetri.com" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      >
      </iframe>
      ```
      * Replace the part where `{video id}` is mentioned inside the `src` attribute with the video ID of your live stream. To obtain video ID, click on "Share" and copy only the highlighted part as shown.

      ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_share_modal.png.jpg#boxShadow)

      Your Properties should now look something like this:

      ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_with_livechat.png.jpg#boxShadow)

3. Choose a display mode for the EmbedHTML element.
    * Picture-in-picture mode:
    
    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_picture_ip_mode.png.jpg#boxShadow)

    This mode opens a small window where the user can view the livestream as well as the experience at the same time.

    * Pop-up mode
    * Fullscreen mode

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/rsz_embed_youtube_fullscreen_mode.png.jpg#boxShadow)

    These modes open the live stream as an overlay on top the rest of the experience.

4. Let's add a rule to show the EmbedHTML element setup above when clicked on any button.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_youtube_rule.png.jpg#boxShadow)

## Zoom Live Stream

A Zoom meeting or webinar can be streamed lived on youtube. 
This allows participants to join meetings/webinars on youtube and comment via youtube live chat.
Those viewing on Youtube can only comment via Youtube, and cannot interact directly with other meeting/webinar attendees. 

:::caution
To stream meetings and webinars live on Youtube, you need to have a Pro, Business, Education, or Enterprise account on Zoom. You also need to have a Youtube account and live streaming enabled on Youtube.
:::

### Enabling Youtube Live Streaming for Meetings
1. Sign in to the [Zoom web portal](https://zoom.us/).
2. Click on Account Management > [Account Settings](https://zoom.us/account/setting).
3. Toggle the `Allow live streaming the meetings` under `In Meeting (Advanced)`, and enable `Youtube`.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/enable-live-stream-meeting_zoom.png.jpg#boxShadow)

For more information about Account level activation, please see [here](https://support.zoom.us/hc/en-us/articles/360028478292-Streaming-a-Meeting-or-Webinar-on-YouTube-Live).

### Enabling Youtube Live Streaming for Webinars
1. As an Owner or Account Admin, sign in to the [Zoom web portal](https://zoom.us/).
2. Go to Account Management > Webinar Settings.
3. Click Edit to the right of `In Webinar Settings`.
4. Enable `Allow hosts to live stream to webinars`, and then enable `Youtube`.

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/enable-live-stream-webinar_zoom.png.jpg#boxShadow)
5. Click on `Save Changes`. 

### Initiating a Live Stream to Youtube
1. Start the Webinar or Meeting.
2. Click on `More` in the Meeting/Webinar Controls.
3. Click `Live on YouTube`. 

    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/start-youtube-live_zoom.png.jpg#boxShadow)
4. Login to Youtube by following the steps shown.
5. After successful authentication, the following page should open up:
    
    ![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/broadcast-youtube-live_zoom.png.jpg#boxShadow)
    
    Specify the settings you need:
    - Title to display on Youtube
    - Privacy
6. Click on the `Go Live!` button.
7. You will see a progress bar, letting you know that the session is being prepared for streaming.
8. Wait for the notification from the Zoom client that your Meeting/Webinar is Live on YouTube, then begin your Meeting/Webinar.
9. Streaming stops when you end the webinar or meeting, or click `More` then `Stop Live Stream` in the meeting controls.

### Embed it in your experience
To embed youtube live streams, follow the steps in this [section](#youtube-live-stream).
