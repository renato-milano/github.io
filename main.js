// check the list of fonts at https://unpkg.com/browse/figlet@1.4.0/fonts/
// the list can also be seen on demo of Figlet library:
// http://patorjk.com/software/taag/#p=display&f=Standard&t=jQuery%20Terminal
figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts(['Standard', 'Slant','Banner4','Sub-Zero','Delta Corps Priest 1','DOS Rebel','Electronic'], ready);

var term =19;

function ready() {
    if($(window).width()<=500){
        window.open('/Portfolio.html',"_self");
    }
jQuery(function($, undefined) {
    $('body').terminal(function(command) {
        if (command == '') {
            try {
                
            } catch(e) {
                this.error(new String(e));
            }
        } else if(command=="ls"){
           this.echo('[[;rgb(255,255,255);]\nbio.txt\nskills.txt\n]');
        }else if(command=="more bio.txt" ||command=="cat bio.txt"){
           this.echo('[[;rgb(255,255,255);]\nHi ! I\'m Renato Milano, I\'m 25 years old and I\'m a Computer Science student at the Università degli Studi di Salerno, Italy.\n'+
           'I\'ve been close to a computer since an early age, and been passionate about it ever since. \nI like to build all kind of stuff from simple Functional Scripts to complex Web-App Projects.\n\n'
           +'Oh right, I Love to Travel , Pizza, VideoGames...\n\n...AND CODE OBVIOUSLY!\n]');
        }else if(command=="help"){
            this.echo('[[;rgb(255,255,255);]\nCommand List:\n\n- open : Exit this and open the Portfolio with classic User Interface :)\n\n'+
            '- ls : List files in the current directory.\n\n- more <filename> || cat <filename> : open the file named as <filename>\n\n'+
            '- who am i : In case you didn\'t know.\n\n'+
            '- whythis: Full Explanation of my vision about this section in my portfolio.\n]');
         }else if(command=="more skills.txt"||command=="cat skills.txt"){
            this.echo('[[;rgb(255,255,255);]\nSkills Achieved:\n\n- OOP and procedural programming paradigm\n- SQL and NOSQL Databases'+
            '\n- Django (low level)\n- HTML5 / CSS3 / JS\n- Web Scraping using Selenium\n- Python Telegram Bot Release'+
            '\n- JAVA\n- PYTHON\n- VUE.JS\n- E-Commerce CMS Consultant (Prestashop, WooCommerce,Magento)\n- C/C++\n- HEROKU'+
            '\n- APACHE TOMCAT (.jsp , servlet)\n- AJAX\n- JQuery\n]');
         }else if(command=="whythis"){
            this.echo('[[;rgb(255,255,255);]\nOh you wanna know why this... \nSo basically I...\nYeah it\'s just...\nI dont\' know, i\'m just a Matrix fan who loves to learn new things tbh.\n]');
         }else if(command=="open"){
            window.open('/Portfolio.html',"_self");
         }else if(command=="who am i"){
            this.echo('[[;rgb(255,255,255);]\nYou.\n]');
         }else if(command=="more skills.txt"){
            this.echo('\nSkills Achieved:\n\n- JS\n- JAVA\n- PYTHON\n- VUE.JS\n- PHP\n- C/C++\n- CLOUD\n- HEROKU\n- TOMCAT\n');
         }else if(command=="more skills.txt"){
            this.echo('\nSkills Achieved:\n\n- JS\n- JAVA\n- PYTHON\n- VUE.JS\n- PHP\n- C/C++\n- CLOUD\n- HEROKU\n- TOMCAT\n');
         }else if(command=="more skills.txt"){
            this.echo('\nSkills Achieved:\n\n- JS\n- JAVA\n- PYTHON\n- VUE.JS\n- PHP\n- C/C++\n- CLOUD\n- HEROKU\n- TOMCAT\n');
         }else if(command=="more skills.txt"){
            this.echo('\nSkills Achieved:\n\n- JS\n- JAVA\n- PYTHON\n- VUE.JS\n- PHP\n- C/C++\n- CLOUD\n- HEROKU\n- TOMCAT\n');
         }
        else{
           this.echo('[[!g;rgba(255,0,0,0.99);]COMMAND NOT VALID. Type \'help\' for command list.]');
        }
    }, {
        greetings: '[[g;;]\nWelcome Stranger! I\'m\n]',
        name: 'js_demo',
        height: 200,
        onInit() {
            this.echo(() =>  render(this, 'Renato Milano') +
                `\n\nUse this console to get to know me better!\nInsert [[ib;;]help] to get the command list or [[ib;;]open] to get my usual Portfolio Interface.\n`)
        },
        prompt: 'Portfolio@Renato-Milano> ',
        onClear(){
            this.ready();
        },
    });
});
}
function render(term, text, font) {
    const cols = term.cols();
    $('[data-index="1"] div').addClass('neonText');
    return figlet.textSync(text, {
        font:'Sub-Zero',
        width: cols,
        whitespaceBreak: true
    });
   
}