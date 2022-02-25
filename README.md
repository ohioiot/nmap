# Find Your Raspberry Pi With Nmap and NodeJS

Install nmap on your computer.

Use the command: ```nmap -sn 192.168.1.0/24``` to discover all of the devices on your local network.

Replace the IP address with the base address (ending in 0) for your local network.

Make a */scripts* folder on your computer, and make sure the Windows path is pointing to that folder.

Take both of the files in this repo and past them into your */scripts* folder.

```map.js``` has the JavaScript to run nmap and then parse the results.  The ```map``` file is used to elegantly call the map.js file: ```node map.js```.

For more info on how these tools work, see:  youtube
