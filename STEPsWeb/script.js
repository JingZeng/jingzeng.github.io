//document.body.style.zoom="90%"

$(document).ready(function () {

    //switch tab on the home page : default
    document.getElementById("defaultTab").click();


    //switch between view all steps and next step
    $("#nextS").hide();
    $("#showAll").hide();
    $("#showNext").click(function () {
        $("#allS").slideUp("slow");
        $(this).slideUp("slow");
        $("#nextS").slideDown("slow");
        $("#showAll").slideDown("slow");
    });

    $("#showAll").click(function () {
        $("#allS").slideToggle("slow");
        $("#showNext").slideToggle("slow");
        $(this).slideToggle("slow");
        $("#nextS").slideToggle("slow");
    });


    $("#closeIframe").click(function () {
        var index = parent.layer.getFrameIndex(window.name);
        parent.layer.close(index);
    });

});


//switch tabs on the home page
function switchGoal(view, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < 4; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < 4; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    view.currentTarget.className += " active";
}



//all the code below are the modal box function, with reference: https://github.com/sentsin/layer/

function setGoal() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: 'set-goal.html',
    });
};

function viewGoal() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: ['view-goal.html', 'no']
    });
}

function viewSuggested() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: ['view-suggested.html', 'no']
    });
}

function viewCompleted() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: ['view-completed.html', 'no']
    });
}

function viewOnhold() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: ['view-onhold.html', 'no']
    });
}

function viewDropped() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['980px', '810px'],
        content: ['view-dropped.html', 'no']
    });
}

function dropGoal() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['420px', '420px'],
        content: ['boxDropGoal.html', 'no']
    });
}

function holdGoal() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['420px', '420px'],
        content: ['boxHoldGoal.html', 'no']
    });
}

function login() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: true,
        area: ['600px', '800px'],
        content: ['login.html', 'no']
    });
}

function signup() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: true,
        area: ['800px', '800px'],
        content: ['signup.html', 'no']
    });
}

function settings() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: true,
        area: ['800px', '800px'],
        content: ['settings.html', 'no']
    });
}

function addAttach() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['410px', '410px'],
        content: ['addAttach.html', 'no']
    });
}

function viewAttach() {
    layer.open({
        type: 2,
        title: false,
        fix: false,
        maxmin: false,
        shadeClose: false,
        area: ['420px', '420px'],
        content: ['viewAttach.html', 'no']
    });
}

function openNotif() {
    layer.open({
        type: 2,
        title: false,
        shade: [0],
        area: ['400px', '700px'],
        offset: 'rb',
        anim: 2,
        content: ['commentside.html', 'no'],
    });
}

function openRank() {
    layer.open({
        type: 2,
        title: false,
        shade: [0],
        area: ['500px', '800px'],
        offset: 'rb',
        anim: 2,
        content: ['ranking.html', 'no'],
    });
}






function largePic1() {
    layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        area: '516px',
        skin: 'layui-layer-nobg',
        shadeClose: true,
        content: $('#larger'),
    });
}

function deleteit() {
    layer.msg('Delete it?', {
        time: 0,
        btn: ['Cancel', 'Delete'],
        yes: function (index) {
            layer.close(index);
        }
    });
}

function addComt() {

    layer.open({
        type: 2,
        title: 'Add Comment',
        shade: [0],
        maxmin: true,
        area: ['400px', '600px'],
        offset: 'rb',
        anim: 2,
        content: ['commentnew.html', 'no'],
    });
}

function viewComt() {
    layer.open({
        type: 2,
        title: 'View Comment',
        shade: [0],
        maxmin: true,
        area: ['360px', '500px'],
        offset: 'rb',
        anim: 2,
        content: ['commentgoal.html', 'no'],
    });
}


function autoSave() {
    layer.msg('Saved Changes', {
        icon: 1
    }, {
        time: 500
    });
}