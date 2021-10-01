---
title: How to upload and view a PDF in a GMetri experience
description: Made using the GMetri XR platform, this app demonstrates the compatibility of the GMetri platform with external services like chatbot.
hide_title: true
sidebar_label: PDF in a GMetri Experience
---

# How to add a PDF to a GMetri experience.

## Description

This tutorial will go about the steps on how to add a PDF to a GMetri [experience](../../../Features/Create/experiences/).

## Adding a PDF to a GMetri experience.

1. First we need to upload the pdf file using the File Manager. To access the file manager, we need to create a temporary Image element. In your experience, add an `Image` element.

2. Once the element has been created, select the element in the right bar. Then click on properties. Click on the upload button, and you will be able to access the file manager from here.

3. In the file manager ensure you are in the root folder and then click on the upload button on top. This will open the uploader. Drag and drop the desired `.pdf` file and click upload. Once the upload is done, the file will appear in the file manager.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/pdf_uploaded.png.jpg#boxShadow)

4. If the file was uploaded in the root folder, then the link for your pdf would be of the form: 
`https://s.vrgmetri.com/gb-fv4-public/organization/{your_org_slug}/{pdf_file_name.pdf}`. 

> Example, if your org slug is `gmetri`, and the filename is `dummy.pdf`, the link would be:
`https://s.vrgmetri.com/gb-fv4-public/organization/gmetri/dummy.pdf`.

> Your Org Slug can be found in your experience URL. Example, if your exprience link is `https://portal.gmetri.com/gmetri/create/50734e9-8955-4e31-9e32-8784d60d1e36`, your Org Slug is `gmetri`.

5. Now that the file has been uploaded successfully, you can delete the image element.

6. Add an `Embed Html` element in your experience, and go to the properties tab in the right bar.

7. Copy the following HTML code and add your pdf link to it:

```html
<html>
<body>
    <object data="{your_pdf_link_here}" type="application/pdf" width="100%" height="100%">
        <embed src="{your_pdf_link_here}" type="application/pdf"  width="100%" height="100%"/>
    </object>
</body>
</html>
```

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_code_3.png.jpg#boxShadow)

8. Click on the `Rules` icon on the bottom of the screen. Add a rule such that when the scene loads, the Embed Html element will appear.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/embed_html_rule.png.jpg#boxShadow)

9. Click on the `Player` icon on the bottom right to preview your exprience. As your experience loads, you will view your PDF document displayed.

![](https://r.vrgmetri.com/image/q_90/gb-web/portal-docs/assets/img/screenshots/pdf_displayed.png.jpg#boxShadow)