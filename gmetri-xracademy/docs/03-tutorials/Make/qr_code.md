---
title: How to make a simple QR code scanner app - GMetri XR Platform
description: Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform. 
hide_title: true
sidebar_label: QR Code Scanner
---

# QR Code Scanner

Let's learn how to make a simple QR code scanner app.

<div className="mobile">
  <div className="mobile_front_camera"></div>
  <div className="mobile_top_speaker">
  </div>
  <video autoPlay loop muted height="420" width="240" playsInline>
    <source src="https://s.vrgmetri.com/gb-web/portal-docs/assets/videos/coffee_maker.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
  </video>
  <br/>
  <div className="mobile_button">
  </div>
</div>

## Description

Made using the GMetri XR platform, this app demonstrates the versatility of the GMetri platform, for enabling the creation of 2D experiences on the platform.
This QR Code app can scan QR Codes to show product information. We have two devices, namely, a coffee maker and a frother. We show YouTube videos corresponding to these elements when their QR codes are scanned!

:::caution 
This app uses QR Code Matcher Element (see `Elements Used` section below) and hence the experience only works on mobile devices.
:::

- The above app is available to all [here](https://view.gmetri.com/v4/xyecjf/scanner/).
- To generate QR codes for any text, head [here](https://www.the-qrcode-generator.com/).

:::info 
The above app can scan QR codes with the words "coffee" and "frother" only. When it reads any of those words, it will open up a YouTube video for the corresponding elements.
:::


## Elements Used

- [Pano Image](../../../Features/Create/Elements/Pano%20Image/)
- [Image](../../../Features/Create/Elements/Image/)
- [Pop-Up](../../../Features/Create/Elements/Pop-up/)
- [QR Code Matcher](../../../Features/Create/Elements/QR%20Code%20Matcher/)

## Add Elements
1. [Create a new experience](../../../Features/Create/experiences/#create-a-new-experience) called `Scanner`.
2. [Head over to the editor](../../../Features/Create/build/#editor/).
3. Click on the [Elements](../../../Features/Create/build/#elements-button/) button inside editor.
4. Choose the [Pano Image](../../../Features/Create/Elements/Pano%20Image/).
    - Give a name to the Pano Image. Here we named it `White_Background`.
    - Now, on the right bar, click on the upload button to upload a Pano Image. 
    
        >Note: *Pano Image is the background of your Scene.*
    
        ![QR_Tutorial_Pano](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pano.png.jpg#boxShadow/)
        
    - Once you click that, the file uploader will open up. Here, either you can  upload a background of your choice or chose from the templates. To choose a white background from the templates, go to `templates/panos/helpers/` and find `white_pano.jpg`.
    
        ![QR_Tutorial_Pano](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_File_Uploader.png.jpg#boxShadow/)
        
    - Choose a Pano image and click on the `Select` button. The image will be applied as the background of your Scene.

5. Click on the Elements button again and now choose the [Image](../../../Features/Create/Elements/Image/) element. An image thumbnail will appear in the Editor. We will use this image as a button.
6. This is the right time for us to use the `Gyro lock` feature. 
    - Click on Scene in the Structure Tab on the Right Bar. 
    - Now go to Properties Tab and click on the [Gyro Lock](../../../Features/Create/build/#scene/). 
    
    > *See the yellow highlighted setting in the image below.*
     
     ![Gyro](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Gyro.png.jpg#boxShadow/)
    
    - Go ahead and try to click and drag the experience. You can't? That's right. What you just observed is, the experience got locked in 2 dimensions and became non-draggable.
    > Gyro lock is used for making 2D applications on the GMetri XR platform. 

7. Next, upload an image to the Image element that we created in step 5. The steps to upload are pretty much the same as those shown in step 4 for uploading the Pano Image. We have used an image that suggests `QR Code scanner`.
8. Once you're all set with your image, add 2 [Pop-Up](../../../Features/Create/Elements/Pop-up/) elements to the experience using the Elements button. These Pop-Ups will be used to show YouTube videos of the devices that we scan with the QR Code.

    > Decide the number of objects that you want to scan the QR code for and create as many Pop-Up elements as devices. Here we choose 2 devices from the office - Coffee Maker and Milk Frother for this demo. Hence we add 2 pano elements in step 8.

9. Double-click on the newly created Pop-Up Elements in the Structure Tab to change their names to something relevant to the product that will be displayed and click on the Properties Tab to change its properties:
    
    ![Pop-Up](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up.png.jpg#boxShadow/)
    
    - Click on the `Add` button to add `Items` to the pop-up.
    
        ![ADD](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up_Add.png.jpg#boxShadow/)
        
    - Now from the `Drop down` choose YouTube link.
    - Add the link and details of the product being displayed in the heading and description.
    
        ![ADD youtube](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Pop_Up_YouTube.png.jpg#boxShadow/)
        
    - Do step 9 for all of the Pop-Ups.

10. Add a [Text](../../../Features/Create/Elements/Text/) Element optionally to show the app name. Here, we use the name `Scanner`.
11. Now, we add the most important element for this app, the [QR Code Matcher](../../../../Features/Create/Elements/QR%20Code%20Matcher/).
    - Once added, head over to the Properties Tab of the QR Code Matcher and add two (or as many devices as you have) items as shown below.
        
        ![QR Matcher](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Code_Matcher.png.jpg#boxShadow/)
    
    - QR Matcher matches the string in a scanned QR Code to the strings above, and performs certain activities accordingly. (We will explore how as we go ahead)

**Summary:**

Once all elements are added, your editor should look something like this:

![Editor](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial.png.jpg#boxShadow/)

And the Right Bar Structure Tab should show your elements:

![Right bar](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Right_bar_summary.png.jpg#boxShadow/)
 
## Add Rules

Now that we have all the Elements in place, we need to add rules between elements for the app to work.

1. Head over to the rules window by clicking on the [Rules](../../../Features/Create/build/#rules) button.
2. Firstly, we need to have a click event for the Image that should open the QR Code Matcher and start scanning for QR codes.

![Rules](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Image_QR_Matcher_Connection.png.jpg#boxShadow#zoom/)

3. Second, we add 2 rules that tell the Code Matcher to open the respective Pop-Up Elements when a particular string is scanned.

![Rule](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/QR_Tutorial_Code_Matcher_Pop_Up_Connection.png.jpg#boxShadow#zoom/)

## Test

- That's it! It now time to test the application. You can do that by clicking the green `Play` button in Right bar. 
- A QR Code shall appear. Scan this from your phone to preview your app. The changes you make in the editor will be available in the preview as soon as you make them after refreshing the page!

:::caution 
Note that QR Code Matcher and Browser works only on mobile hence this experience should be run on a mobile device.
:::

## Deploy

- For other to view this app, you must deploy it. To do this head over to the [Publish](../../../Features/Publish/) section to know more.
    