function toggleBlockElement(id) {
    var p = document.getElementById(id);
    if (p.style.display == "none")
        p.style.display = "block";
    else
        p.style.display = "none";
}

function showElement(id) {
    document.getElementById(id).style.display = "block";
}

function setBackground(id, imgurl) {
    document.getElementById(id).style.backgroundImage = "url('/resources/" + imgurl + "')";
}

function functionstart(id, skiptoggle) {
    if (id == 'buttonstart') {
        PlayerCharacter.Name = document.getElementById("fname").value;
        PlayerCharacter.Save();

        $("#loginscreen").hide();
        $("div.storybox").show();
    }

    setBackground("smallscreen", "broom.png")
    showElement("buttonmakeup");
    showElement("buttonoutfit");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("instructions");
        toggleBlockElement("entername");
    }
    $('#first_scenario').show();
    return false;
}

function funcmakeup(id, skiptoggle) //makeup
{
    showElement("buttontank");
    showElement("buttonbaggy");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("first_scenario");
        toggleBlockElement("buttonoutfit");
    }
    $('#choosemakeup').show();
    return false;
}

function funcoutfit(id, skiptoggle) //outfit
{
    showElement("buttondress");
    showElement("buttonshirt");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("first_scenario");
        toggleBlockElement("buttonmakeup");
    }
    $('#chooseoutfit').show();
    return false;	//makes new scenario appear
}

function funcdress(id, skiptoggle) //finally you get to school
{
    setBackground("smallscreen", "hallway2.png")
    showElement("buttonfinally");
    showElement("pop1");
    showElement("please");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseoutfit");
        toggleBlockElement("buttonshirt");
    }
    $('#showfinally').show();
    return false;
}

function funcnext(id, skiptoggle) //finally you get to school
{
    setBackground("smallscreen", "hallway2.png")
    showElement("buttonfinally1");
    showElement("pop3");
    showElement("websitelink");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosetank");
    }
    $('#showfinally1').show();
    return false;
}

function funcnexty(id, skiptoggle) //finally you get to school
{
    setBackground("smallscreen", "hallway2.png")
    showElement("buttonfinally2");
    showElement("pop1");
    showElement("please");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosebaggy");
        toggleBlockElement("pop7");
        toggleBlockElement("beperfect");
    }
    $('#showfinally2').show();
    return false;
}

function funcshirt(id, skiptoggle) //finally you get to school
{
    setBackground("smallscreen", "hallway2.png")
    showElement("buttonfinally");
    showElement("pop1");
    showElement("please");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseoutfit");
        toggleBlockElement("buttondress");
    }
    $('#showfinally').show();
    return false;
}

function funcclass(id, skiptoggle) //no one notices your outfit
{
    showElement("buttongym");
    showElement("buttoncs");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("shownotice");
    }
    $('#chooseclass').show();
    return false;
}


function funcbuttonn(id, skiptoggle) {
    showElement("buttongym");
    showElement("buttoncs");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("shownotice1");
    }
    $('#chooseclass').show();
    return false;
}

function funcbuttonnn(id, skiptoggle) {
    showElement("buttongym");
    showElement("buttoncs");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("shownotice2");
    }
    $('#chooseclass').show();
    return false;
}

function funcgym(id, skiptoggle) //you pick gym as your class
{
    setBackground("smallscreen", "gym.png")
    showElement("nextnext");
    showElement("pop5");
    showElement("likeagirl");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseclass");
        toggleBlockElement("buttoncs");
    }
    $('#choosegym').show();
    return false;
}

function funccs(id, skiptoggle) //you pick cs
{
    setBackground("smallscreen", "classroom.png")
    showElement("nextnext1");
    showElement("pop2");
    showElement("weblink");

    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseclass");
        toggleBlockElement("buttongym");
    }

    $('#choosecs').show();
    return false;
}

function funcnextnext(id, skiptoggle) //you pick gym as your class
{
    showElement("yoga1");
    showElement("soccer1");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosegym");
        toggleBlockElement("likeagirl");
        toggleBlockElement("pop5");
    }
    $('#nextpage').show();
    return false;
}

function funcnextnext1(id, skiptoggle) //you pick gym as your class
{
    showElement("confidentanswer");
    showElement("shyanswer");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("pop2");
        toggleBlockElement("choosecs");
        toggleBlockElement("weblink");
    }
    $('#cspage').show();
    return false;
}

function funcshyanswer(id, skiptoggle) {
    showElement("a");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("cspage");
        toggleBlockElement("confidentanswer");
    }
    $('#shypage').show();
    return false;
}

function funcconfidentanswer(id, skiptoggle) {
    showElement("b");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("cspage");
        toggleBlockElement("shyanswer");
    }
    $('#confidentpage').show();
    return false;
}

function funca(id, skiptoggle) {
    showElement("c");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("shypage");
    }
    $('#csresolve').show();
    return false;
}

function funcb(id, skiptoggle) {
    showElement("d");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("confidentpage");
    }
    $('#csresolve').show();
    return false;
}

function funcc(id, skiptoggle) {
    setBackground("smallscreen", "living.png")
    showElement("e");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("csresolve");
    }
    $('#nextchapter').show();
    return false;
}

function funce(id, skiptoggle) {
    showElement("o");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nextchapter");
    }
    $('#convincemom').show();
    return false;
}

function funco(id, skiptoggle) {
    showElement("s");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("convincemom");
    }
    $('#dangerouscurfew').show();
    return false;
}

function funcs(id, skiptoggle) {
    setBackground("smallscreen", "concert.png")
    showElement("z");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("dangerouscurfew");
    }
    $('#prepareconcert').show();
    return false;
}

function funcz(id, skiptoggle) {
    setBackground("smallscreen", "city.png")
    showElement("partyfin");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("prepareconcert");
    }
    $('#partyfinish').show();
    return false;
}


function funcd(id, skiptoggle) {
    setBackground("smallscreen", "living.png")
    showElement("f");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("csresolve");
    }
    $('#nextchapter').show();
    return false;
}

function funcf(id, skiptoggle) {
    showElement("p");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nextchapter");
    }
    $('#convincemom').show();
    return false;
}

function funcp(id, skiptoggle) {
    showElement("v");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("convincemom");
    }
    $('#dangerouscurfew').show();
    return false;
}

function funcv(id, skiptoggle) {
    setBackground("smallscreen", "concert.png")
    showElement("w");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("dangerouscurfew");
    }
    $('#prepareconcert').show();
    return false;
}

function funcw(id, skiptoggle) {
    setBackground("smallscreen", "city.png")
    showElement("partyfin1");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("prepareconcert");
    }
    $('#partyfinish').show();
    return false;
}


function funcyoga(id, skiptoggle) //you pick gym as your class
{
    setBackground("smallscreen", "yoga.png")
    showElement("angry");
    showElement("nothing");
    showElement("pop6");
    showElement("boyswillbeboys");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("soccer1");
        toggleBlockElement("nextpage");
    }
    $('#chooseyoga').show();
    return false;
}

function funcangry(id, skiptoggle) //you pick gym as your class
{

    showElement("lol");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseyoga");
        toggleBlockElement("nothing");
        toggleBlockElement("pop6");
        toggleBlockElement("boyswillbeboys");
    }
    $('#angryresponse').show();
    return false;
}

function funcnothing(id, skiptoggle) //you pick gym as your class
{

    showElement("lel");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("chooseyoga");
        toggleBlockElement("angry");
        toggleBlockElement("boyswillbeboys");
        toggleBlockElement("pop6");
    }
    $('#nothingresponse').show();
    return false;
}

function funclol(id, skiptoggle) //you pick gym as your class
{

    showElement("lil");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("angryresponse");
    }
    $('#angryteacherresponse').show();
    return false;
}

function funclel(id, skiptoggle) //you pick gym as your class
{

    showElement("lul");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nothingresponse");
    }
    $('#nothingteacherresponse').show();
    return false;
}

function funclil(id, skiptoggle) //you pick gym as your class
{
    showElement("g");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("angryteacherresponse");
    }
    $('#resolve1').show();
    return false;
}

function funclul(id, skiptoggle) //you pick gym as your class
{
    showElement("h");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nothingteacherresponse");
    }
    $('#resolve1').show();
    return false;
}

function funcg(id, skiptoggle) //you pick gym as your class
{
    setBackground("smallscreen", "living.png")
    showElement("i");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("resolve1");
    }
    $('#nextchapter').show();
    return false;
}

function funci(id, skiptoggle) {
    showElement("q");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nextchapter");
    }
    $('#convincemom').show();
    return false;
}

function funcq(id, skiptoggle) {
    showElement("t");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("convincemom");
    }
    $('#dangerouscurfew').show();
    return false;
}

function funct(id, skiptoggle) {
    setBackground("smallscreen", "concert.png")
    showElement("x");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("dangerouscurfew");
    }
    $('#prepareconcert').show();
    return false;
}

function funcx(id, skiptoggle) {
    setBackground("smallscreen", "city.png")
    showElement("partyfin2");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("prepareconcert");
    }
    $('#partyfinish').show();
    return false;
}


function funch(id, skiptoggle) //you pick gym as your class
{
    setBackground("smallscreen", "living.png")
    showElement("j");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("resolve1");
    }
    $('#nextchapter').show();
    return false;
}


function funcj(id, skiptoggle) //you pick gym as your class
{
    showElement("r");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nextchapter");
    }
    $('#convincemom').show();
    return false;
}

function funcr(id, skiptoggle) {
    showElement("u");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("convincemom");
    }
    $('#dangerouscurfew').show();
    return false;
}
function funcu(id, skiptoggle) {
    setBackground("smallscreen", "concert.png")
    showElement("y");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("dangerouscurfew");
    }
    $('#prepareconcert').show();
    return false;
}

function funcy(id, skiptoggle) {
    setBackground("smallscreen", "city.png")
    showElement("partyfin3");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("prepareconcert");
    }
    $('#partyfinish').show();
    return false;
}

function funcsoccer(id, skiptoggle) {
    setBackground("smallscreen", "soccer.png")
    showElement("angry1");
    showElement("nothing1");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nextpage");
        toggleBlockElement("yoga1");
    }
    $('#choosesoccer').show();
    return false;
}

function funcangry1(id, skiptoggle) //you pick gym as your class
{
    showElement("k");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosesoccer");
        toggleBlockElement("nothing1");
    }
    $('#angryresponse1').show();
    return false;
}

function funcnothing1(id, skiptoggle) //you pick gym as your class
{

    showElement("l");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosesoccer");
        toggleBlockElement("angry1");
    }
    $('#nothingresponse1').show();
    return false;
}

function funck(id, skiptoggle) {
    showElement("m");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("angryresponse1");
    }
    $('#angryteacherresponse').show();
    return false;
}

function funcl(id, skiptoggle) {
    showElement("n");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nothingresponse1");
    }
    $('#nothingteacherresponse').show();
    return false;
}

function funcm(id, skiptoggle) //you pick gym as your class
{
    showElement("g");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("angryteacherresponse");
    }
    $('#resolve1').show();
    return false;
}

function funcn(id, skiptoggle) //you pick gym as your class
{
    showElement("h");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("nothingteacherresponse");
    }
    $('#resolve1').show();
    return false;
}

function functank(id, skiptoggle) {
    showElement("buttonnext");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosemakeup");
        toggleBlockElement("buttonbaggy");
    }
    $('#choosetank').show();

    return false;
}


function funcbaggy(id, skiptoggle) {
    showElement("buttonnexty");
    showElement("pop7");
    showElement("beperfect");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosemakeup");
        toggleBlockElement("buttontank");
    }
    $('#choosebaggy').show();
    return false;
}

function funcfinally(id, skiptoggle) //when next button is clicked.....
{
    showElement("buttonnextclass");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("showfinally");
        toggleBlockElement("pop1");
        toggleBlockElement("please");
    }
    $('#shownotice').show();
    return false;
}

function funcfinally1(id, skiptoggle) //when next button is clicked.....
{
    showElement("buttonn");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("showfinally1");
        toggleBlockElement("pop3");
        toggleBlockElement("websitelink");
    }
    $('#shownotice1').show();
    return false;
}

function funcfinally2(id, skiptoggle) //when next button is clicked.....
{
    showElement("buttonnn");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("showfinally2");
        toggleBlockElement("pop1");
        toggleBlockElement("please");
    }
    $('#shownotice2').show();
    return false;
}


function funcpartyfin(id, skiptoggle) //when next button is clicked.....
{
    showElement("pop4");
    showElement("catcallvideo");
    showElement("weapon");
    showElement("ignorethem");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("partyfinish");
    }
    $('#catcall').show();
    return false;
}

function funcweapon(id, skiptoggle) //when next button is clicked.....
{
    showElement("bla");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("ignorethem");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosekeys').show();
    return false;
}

function funcbla(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosekeys");
    }
    $('#ending').show();
    return false;
}

function funcignore(id, skiptoggle) //when next button is clicked.....
{
    showElement("blahh");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("weapon");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosecross').show();
    return false;
}
function funcblahh(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosecross");
    }
    $('#ending').show();
    return false;
}

function funcpartyfin1(id, skiptoggle) //when next button is clicked.....
{
    showElement("pop4");
    showElement("catcallvideo");
    showElement("weapon1");
    showElement("ignorethem1");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("partyfinish");
    }
    $('#catcall').show();
    return false;
}

function funcweapon1(id, skiptoggle) //when next button is clicked.....
{
    showElement("abc");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("ignorethem1");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosekeys').show();
    return false;
}

function funcabc(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosekeys");
    }
    showElement("returntohome");
    $('#ending').show();
    return false;
}

function funcignore1(id, skiptoggle) //when next button is clicked.....
{
    showElement("def");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("weapon1");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosecross').show();
    return false;
}

function funcdef(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosecross");
    }
    showElement("returntohome");
    $('#ending').show();
    return false;
}

function funcpartyfin2(id, skiptoggle) //when next button is clicked.....
{
    showElement("pop4");
    showElement("catcallvideo");
    showElement("weapon2");
    showElement("ignorethem2");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("partyfinish");
    }
    $('#catcall').show();
    return false;
}

function funcweapon2(id, skiptoggle) //when next button is clicked.....
{
    showElement("ghi");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("ignorethem2");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosekeys').show();
    return false;
}

function funcghi(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosekeys");
    }
    $('#ending').show();
    return false;
}

function funcignore2(id, skiptoggle) //when next button is clicked.....
{
    showElement("jkl");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("weapon2");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosecross').show();
    return false;
}

function funcjkl(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosecross");
    }
    showElement("returntohome");
    $('#ending').show();
    return false;
}

function funcpartyfin3(id, skiptoggle) //when next button is clicked.....
{
    showElement("pop4");
    showElement("catcallvideo");
    showElement("weapon3");
    showElement("ignorethem3");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("partyfinish");
    }
    $('#catcall').show();
    return false;
}

function funcweapon3(id, skiptoggle) //when next button is clicked.....
{
    showElement("mno");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("ignorethem3");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosekeys').show();
    return false;
}

function funcmno(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosekeys");
    }
    $('#ending').show();
    return false;
}

function funcignore3(id, skiptoggle) //when next button is clicked.....
{
    showElement("pqr");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("catcall");
        toggleBlockElement("weapon3");
        toggleBlockElement("pop4");
        toggleBlockElement("catcallvideo");
    }
    $('#choosecross').show();
    return false;
}

function funcpqr(id, skiptoggle) //when next button is clicked.....
{
    setBackground("smallscreen", "startpage.png")
    showElement("returntohome");
    if (!skiptoggle) {
        toggleBlockElement(id);
        toggleBlockElement("choosecross");
    }
    $('#ending').show();
    return false;
}

