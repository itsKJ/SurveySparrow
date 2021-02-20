# Survey Sparrow - Screenshot Downloader

Frontend
1. Developed in Angular
2. Deployed in AWS s3 - Static web hosting

Backend
1. Developed in NodeJS
2. Deployed in Debian flavour of Linux - AWS EC2 instance
3. One post endpoint '/' - to get base64 string of the screenshot 
4. Body params 
  - url : the website to screenshot
  - height : height of the screenshot in pixels
  - width : width of the screenshot in pixels
  - type : 'png' | 'jpeg' format of the screenshot

# Usage
1. User can enter the url to screenshot from the input field
2. User can specify the height, width and format details in the preferences expansion panel
3. When the user clicks "capture" button, preview of the screenshot capture is displayed
4. User can download the image by clicking the download button.
