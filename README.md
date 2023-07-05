# SpeedTest
JS app designed to measure and display certain network metrics.
The application uses a very intuitive method to measure the internet speed of the device it is run on.
It pulls a predtermined number of packages from https://unsplash.com/, determines the size of said packets (stock images) as well as the time they took to download, permitting it to calculate
an average and display the speed in 3 measurment units.
To improve accuracy at the cost of speed, 
  - locate variable testNr (index.js : 12)
  - inrease/decrease its value to obtain desired results
