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
* Now you have to download this repository as a Zip of clone it, either one works. Be sure to unzip the file if you're downloading directly.
* Afterwords, open Command Prompt or terminal and use the "cd" command to get to the path of the Card Printer folder. For example, if it were in my downloads folder, I would use the command 
<code> cd downloads/Eamin-s-Card-Printer-master </code>
* Now use your File Explorer application to navigate into that folder. Open "app.js" with Notepad or your editor of choice and replace "Eamin Ahmed" on the second line with your answerline of choice.
* Go get your QuizDB text file and put it into the folder we've been using and then rename it to "index.txt"
* Go back to your command prompt or terminal window and type in <code>node app.js</code> this will start the process of converting your text file into something Anki or Quizlet can use.
* You're almost done! After you type in your command, the card printer will create an index.csv file. You can now import that into Anki or Quizlet.
* The printer isn't perfect, you'll probably have to delete some useless cards or edit them every time you do this.

#### Feel free to improve further upon this to create an actual command line tool or anything else!

 
