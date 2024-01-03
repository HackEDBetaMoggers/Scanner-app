# HackEd Beta 2023
Scanner-app for HackED Beta 2023. Created in a group of 5 people using Scanner-app and Scanner-web-api. 
<br/>
This application takes a photo of a person's receipt, scans and analyzes the items purchased, and displays each item in a table.

# Software design
The Frontend uses React and Tailwind for web design. The camera is implemented using React-Camera-Pro.
<br/>
The Backend uses Flask, OpenCV and Pytesseract for computer vision and to analyze the characters on the receipt.

## Homepage
Here is the homepage of the application. The user takes a photo of the receipt that will be scanned and analyzed

<img src="https://github.com/HackEDBetaMoggers/Scanner-app/blob/main/Scanner-App%20homepage.png"/>

# Generated table
Once the receipt has been scanned, a table with all items and their prices will appear.
<img src="https://github.com/HackEDBetaMoggers/Scanner-app/blob/main/Scanner-App%20table.png"/>

To install, first run npm install --force. Then, do the following,
1. Run npm run build
2. Run npm run dev

