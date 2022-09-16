HTMLDocument.prototype.e = document.getElementById;
var displayosname = document.e("osname");
var Name = "Not Known";
if( navigator.appVersion.indexOf("Win") != -1) Name = "Windows Operating System";
if( navigator.appVersion.indexOf("Mac") != -1) Name = "Mac Operating System";
if( navigator.appVersion.indexOf("X11") != -1) Name = "UNIX Operating System";
if( navigator.appVersion.indexOf("Linux") != -1) Name = "Linux Operating System";
function osname(){
    displayosname.innerHTML = Name;
}
