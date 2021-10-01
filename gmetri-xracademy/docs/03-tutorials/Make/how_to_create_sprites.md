---
title: How to create sprites for the GMetri XR platform
description: Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.
hide_title: true
sidebar_label: How to add sprites to GMetri
---

# How to create sprites for the GMetri XR platform

## Description

The GMetri [file manager](../../../Features/Create/file_manager/) allows you the ability to add sprites to use in a GMetri [experience](../../../Features/Create/experiences/). This tutorial will go over how to create a sprite with the correct format.

## Steps to create a sprite file

The GMetri [file manager](../../../Features/Create/file_manager/) handles sprite as a `.zip` file. To create your own sprite file, follow the following steps.

1. All the sprite frames need to be named in sequence. You could number them as `01.jpg`, `02.jpg` and so on, or alternatively you could label them as `a.jpg`, `b.jpg` similarly.  

2. Create an empty text file titled `sprite.txt`.

3. Compress the above mentioned files as a `.zip` file.

4. You have successfully created a sprite file. This file can be uploaded to the GMetri [file manager](../../../Features/Create/file_manager/) and can now be used in any GMetri [experience](../../../Features/Create/experiences/) as you please.

:::caution 
Please ensure that an empty text file named `sprite.txt` is present in your zip file. This is so that the file manager can identify that the zip file is meant to be used as a sprite. If this step is missed, when trying to use the file as a sprite, the file manager will display the file as not supported.
:::