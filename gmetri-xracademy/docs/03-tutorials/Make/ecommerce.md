---
title: How to integrate an E-Commerce platform in a GMetri Experience
description: E-Commerce Integration
hide_title: true
sidebar_label: E-Commerce Integration in a GMetri Experience
---

# How to integrate an E-Commerce platform in a GMetri Experience 

## Description

This tutorial will demonstrate how to integrate an E-Commerce platform on a GMetri [experience](../../../Features/Create/experiences/)

## E-Commerce Integration

1. In your experience, add the `Shopping` element to the current scene from the left bar.

2. Once you have added the element, select the `E-Commerce` option under settings. You will now see the E-Commerce settings page. 

:::info
The plugin that integrates the GMetri experience with the E-Commerce platform of your choice will be automatically initialized based on your organization's subscriptions and addons. 
:::

3. Enter the API endpoint of the E-Commerce platform of your desired choice if required. You can optionally enter the the currency prefix of your choice as well.

4. Click on the `Add New Product` button on the top right corner to add a new product to your experience. A new row shall appear in the `product map` table. The product map table enables you to map an element in your experience to a particular product in the E-Commerce platform. Select the scene and element from the dropdown and add the desired product SKU to the corresponding textbox as shown below.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/ecommerce-settings.png.jpg#boxShadow)

:::caution 
Please ensure that the scene you select from the dropdown has a Shopping element present.
:::

5. Once this is done, you can preview your changes by clicking on the `Player` button, and click on `Open In New Window` in the bottom right corner. Here, on clicking on the selected element, a product card displaying the details of the product will appear.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/shopping-card.png.jpg#boxShadow)

6. The user will then be able to add, remove and modify the product to their cart. On clicking the cart icon on the top right corner, the user will be redirected to the cart page of the E-Commerce platform.