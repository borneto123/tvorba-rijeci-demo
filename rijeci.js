const suf = [
    "čistač", "vozač","pekar", "graničar", "ronilac", "roditelj", "branitelj",
    "krivac", "čudak", "prostak", "veseljak", "luđak", "smetenjak", "dužnik", "sretnik",
    "kupačica", "košarkašica", "luđakinja", "boginja", "sutkinja", "koreografkinja",
    "Varaždinac", "Belgijac", "Rimljanin", "Brođanin", "Talijanka", "Čehinja", "Njemica",
    "kuglana", "knjižara", "ljekarna", "slastičarna", "pivnica", "čitaonica", "maslinik",
    "zatvarač", "prekidač", "Vijača", "kazaljka", "glačalo", "vozilo", "budilica", "grabilica", "grijalica",
    "hrabrost", "slabost", "prijateljstvo", "ropstvo", "dobrota", "bljedoća", "bjelina",
    "konjić", "brodić", "automobilčić", "vodica", "ručica", "perce", "zvonce", "psetance", "djetence",
    "nosina", "jezičina", "ribetina", "prozorčina", "torburina", "knjižurina",
    "klasje", "iverje", "granje", "drveće", "zviježđe", "momčad", "dugmad", "slušateljstvo",
    "pranje", "sjedenje", "pečenje", "otkupljenje", "piće", "svanuće", "kupnja", "pomirba",
    "oprezan", "suprotan", "pismen", "staklen", "muževan", "buntovan", "ponosit",
    "jajast", "maslinast", "zvrkast", "bodljikav", "pjegav", "glavat", "kosmat",
    "isplativ", "ljepljiv", "cjelcat", "samcat", "punca", "plavkast", "slankast", "svilenkast",
    "djedov", "plivačev", "staričin", "Jakovljev", "Turgenjevljev", "Cehovljev",
    "školski", "kemijski", "subjektni", "operni", "selidbeni", "bankovni", "sinoćnji", "sutrašnji", "kupaći",
    "nemilice", "jedvice", "hotimice", "žmirećke", "klečećki", "strmoglavce", "noćas", "proljetos", "zimus"
  ];
  const pref = [
    "međukat", "nadbiskup", "natkonobar", "podtajnik", "potpredsjednik", "nebriga", "nuzzarada",
    "nusprostorija", "pradjed", "prabaka", "prajezik", "predradnik", "predjelo", "suautor", "sugrađanin",
    "antioksidans", "arhiepiskop", "kvaziliječnik", "pseudoklasicizam", "postmodemizam",
    "nagluh", "osrednji", "povelik", "priglup", "proćelav", "sulud", "prevelik", "nesretan", "nepobjediv", "neobrijan",
    "predzadnji", "provladin", "protuavionski", "protuteroristički",
    "asimetričan", "antiglobalizacijski", "hiperproduktivan", "ultraljubičast", "postmoderan",
    "nekoliko", "nekako", "nerado", "osrednje", "olako", "predaleko", "preteško", "prohladno",
    "dobaciti", "dodati", "dogorjeti", "dogurati", "izletjeti", "izračunati", "ispričati", "iščešljati", "izmisliti",
    "nalijepiti", "napričati se", "nasmijati se", "napisati", "nadigrati", "nadjačati", "nadletjeti", "natpjevati",
    "ograditi", "okružiti", "obraniti", "obogatiti", "obgrliti", "obzidati", "opšiti", "optužiti", "opteretiti",
    "odmaknuti", "odumirati", "odveslati", "otplivati", "otkucati", "odazvati se",
    "omisliti", "povikati", "potražiti", "podmetnuti", "podrezati", "potpisati", "preklopiti", "prehraniti se",
    "redvidjeti", "predstaviti", "pretkazati", "pristupiti", "prisjetiti se", "prorasti", "pročitati", "progovoriti",
    "razletjeti se", "razbuktati", "raspričati se", "raščupati", "ražalostiti", "svući", "sletjeti", "zbaciti", "ščepati",
    "sudjelovati", "suodlučivati", "upisati", "ubaciti", "uzmicati", "uskratiti", "uščuvati", "zatuliti", "zauzeti"
  ];
  
  const suf_pref = [
    "bezvjerac", "beznađe", "besposlica", "naprstak", "nadglednik", "podnožje", "primorje", "zapećak",
    "beznadan", "izvanškolski", "međudržavni", "nadzemni", "nizvodni", "pomorski", "uzvodni", "interdisciplinarni",
    "subpolarni",
    "bezobzirce", "naglavce", "poimence", "potrbuške",
    "očvrsnuti", "omrznuti", "osluhnuti",
    "oživjeti", "ohladnjeti", "osijedjeti",
    "ocrniti", "oglasiti se", "označiti",
    "onemogućiti", "oneraspoložiti", "obezglaviti",
    "pocrvenjeti", "posivjeti", "požutjeti",
    "pokoriti se", "pogospoditi se",
    "ukipiti se", "upropastiti", "upozoriti"
  ];
  
  const slag = [
    "romanopisac", "bjelokost", "četverolist", "čudotvorac", "aerodrom", "autocesta", "bakrotisak", "člankopisac",
    "vodokotlić", "termoizolacija", "dvosloj", "elektrodijagnostika", "psihoterapija", "strahopoštovanje",
    "dugovrat", "samonikao", "gluhonijem", "vodootporan", "hrvatsko-talijanski"
  ];
  
  const slag_suf = [
    "rukopis", "listopad", "suncokret", "brodolom", "padobran", "dušobrižnik", "putokaz", "blatobran", "domoljub",
    "Novozelanđanin", "Babogredac", "rukohvat", "vodovod", "dobrotvor", "strujomjer", "nogomet",
    "kratkovidan", "gostoljubiv", "ljevoruk", "dugokos", "malobrojan", "književnoteorijski", "vanjskopolitički",
    "srednjovjekovni", "kratkonog", "punoljetan", "bistrook", "brzonog", "brzoplet", "crnokos", "četverostruk", "desnoruk",
    "jednostran", "višekrak", "samohran", "tvrdoglav", "velikodušan",
    "četveronoške", "stranputice"
  ];

  const sra = [
    "blagdan", "Starigrad", "takozvani", "mnogopoštovani", "tamnoplav", "svemoguć", "dangubiti",
    "odoka", "naglas", "naime", "smjesta", "uzbrdo", "štošta", "tkogod", "kadgod", "kojiput", "uoči"
  ];
  
  

  let current_word = "";
  let word_type = -1 ;

  function getNext(){

      word_type = Math.floor(Math.random()*6);
      if(word_type == 0) current_word = suf[Math.floor(Math.random()*suf.length)];
      if(word_type == 1) current_word = pref[Math.floor(Math.random()*pref.length)];
      if(word_type == 2) current_word = suf_pref[Math.floor(Math.random()*suf_pref.length)];
      if(word_type == 3) current_word = slag[Math.floor(Math.random()*slag.length)];
      if(word_type == 4) current_word = slag_suf[Math.floor(Math.random()*slag_suf.length)];
      if(word_type == 5) current_word = sra[Math.floor(Math.random()*sra.length)];
     // console.log(current_word);
     // console.log(word_type);
      document.getElementById("rijec").innerText = current_word;
      document.getElementById("rez").innerHTML= "-";
      document.getElementById("toc").innerHTML = "-";
  }

  function Type(tip){

      if(tip === word_type){
        document.getElementById("rez").innerHTML= "TOČNO";
      }
      else{
        document.getElementById("rez").innerHTML= "KIRVO";
      }

      let rez = "";
      if(word_type===0) rez = "Sufiksalna"
      if(word_type===1) rez = "Prefiksalna"
      if(word_type===2) rez = "Prefiksalno-sufikslna"
      if(word_type===3) rez = "Čisto slaganje"
      if(word_type===4) rez = "Složeno-sufiksalna"
      if(word_type===5) rez = "Srastanje"

      document.getElementById("toc").innerHTML = rez;
  }


  