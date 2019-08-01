window.onload=function (ev) {

    var search = document.getElementById("search");

    search.onclick = function (e) {
        //alert("123");
        var input = document.getElementById("input");
        var text1 = input.value.toLowerCase();
        //var list=document.getElementsByTagName("tbody");
        //alert(list);
        var tr = document.getElementsByClassName("title");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                if (td.innerHTML.toLowerCase().indexOf(text1) > 0) {
                    e.preventDefault();
                    //tr[i].style.display="";
                    tr[i].style.backgroundColor = "yellow";
                } else {
                    // alert("123");
                    tr[i].style.display="";
                    tr[i].style.backgroundColor = "";
                }
            }
        }
    }

    var filter = document.getElementById("filter");

    filter.onclick = function (ev2) {

        var select = document.getElementById("selector");
        var text = select.value.toLowerCase();
        // var ca = "category";
        //var list=document.getElementsByTagName("tbody");
        //alert(list);
        var tr = document.getElementsByClassName("title");


            for (var i = 0; i < tr.length; i++) {
                if(text == "category")
                {
                    // alert("123");
                    tr[i].style.display="";
                }
                else
                    {
                     var td = tr[i].getElementsByTagName("td")[7];
                // if(td){
                    if (td.innerHTML.toLowerCase().indexOf(text) > -1) {
                    ev2.preventDefault();
                    tr[i].style.display = "";
                    // tr[i].style.backgroundColor="yellow";
                } else {
                    tr[i].style.display = "none";
                }
                // }
                search.onclick = function (e) {
                    //alert("123");
                    var input = document.getElementById("input");
                    var text1 = input.value.toLowerCase();
                    //var list=document.getElementsByTagName("tbody");
                    //alert(list);
                    var tr = document.getElementsByClassName("title");
                    for (var i = 0; i < tr.length; i++) {
                        var td = tr[i].getElementsByTagName("td")[2];
                        if (td) {
                            if (td.innerHTML.toLowerCase().indexOf(text1) > 0) {
                                e.preventDefault();
                                //tr[i].style.display="";
                                tr[i].style.backgroundColor = "yellow";
                            }
                            else {
                                tr[i].style.backgroundColor = "";
                            }
                        // if(td.innerHTML.toLowerCase().indexOf(text1)<-1){
                        //        alert("124");
                        // }
                        }
                    }
                }
            }
        }
    }
    var num = 0;
    document.getElementById("a").innerHTML = "(" + num + ")";
    var add = document.getElementById("add");

    add.onclick = function (e) {

        var checkBox = document.getElementsByClassName("checkbox");

        for (var i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked == true) {
                num++;
            }
        }
        //alert(num);
        e.preventDefault();
        document.getElementById("a").innerHTML = "(" + num + ")";
    }

    var reset = document.getElementById("reset");
    reset.onclick = function (ev2) {
        var checkbox = document.getElementsByClassName("checkbox");

        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
            num=0;
            document.getElementById("a").innerHTML = "(" + num + ")";
        }
        if (confirm("Are you sure to reset the cart?"))
            return true;
        else
            return false;
    }
}
