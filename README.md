# Eamin's-Card-Printer
An Automated Quiz Bowl Card Printer


### Now Card Printer Really Goin BRRRRRRRRRRR

This printer takes the fundamentals of [Robert Condron's Original](https://drive.google.com/file/d/13Fwlw12VGM0xOcp8svfm9j8xEJJT5hSo/view) but automates just about every step. All credit goes to him for the idea

If you have any trouble, message me on discord at bubblebyb#4513

#### This works on all operating systems including Android or ChromeOS. DM me if you need a Chromebook tutorial

Prerequisites:
Just make sure you have [NodeJS](https://nodejs.org/en/download/) installed on your computer or else it won't work.

* First go to QuizDB and search up an answerline. Remember to lock the search to just Tossups, a few difficulties, and one category.
* Next, presss load all next to the "X tossups loaded of X found" and press the Text File button just underneath that.
* Afterwords, open Command Prompt or terminal and use the "cd" command to get to the folder where your QuizDB .txt file was downloaded. For example, if it were in my downloads folder, I would use the command 
<code> cd downloads/FILENAME.txt </code>
* After that, type in <code>npm install nodecards</code> This will install the app.
* After it installs, type in <code>nodecards FILENAME.txt</code> Remember to replace the FILENAME.txt with the name of the file that you downloaded.
* You're basically done now. The printer will create a .csv file with the name of your answerline that you can now import into Anki or Quizlet.
* The printer isn't perfect, you'll probably have to delete some useless cards or edit them every time you do this.

#### Feel free to improve further upon this to create an actual command line tool or anything else!

 
