$(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/channels/132",
            dataType: "xml",
            success: xmlParseSR1
        });
        $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=132",
            dataType: "xml",
            success: xmlParseRightNow
        });
        // $.ajax({
        //     type: "GET",
        //     url: "https://api.instagram.com/v1/tags/thrashermag/media/recent?access_token=32239561.1677ed0.98e432cbd20248759036ebcb27fed222",
        //     dataType: "jsonp",
        //     success : instaTry
        // });
        var winH = $(window).height();
        $('#wrapper').delay(1000).fadeIn('slow');
        $('#wrapper').delay(2000).css('height',winH + 'px');


        $('h1').click(function(){
            $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=132",
            dataType: "xml",
            success: xmlParseRightNow
        });
        function xmlParseRightNow(xmlRightNow){
            $(xmlRightNow).find('#132').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').html("<img src='" + imageUrl + "'/>");
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
            });
        }
        // click body end    
        });

function loader(){
  $('.animate-container').fadeOut('slow');
}
function ready(){
  $('.radio').fadeIn('slow');
}

setTimeout(loader, 1500);
setTimeout(ready, 1500);

//ready end
});





function xmlParseSR1(xml){
    console.log(xml);
    $(xml).find('channel').each(function(){
        var channel  = $('liveaudio').find('url').text();
        var image = $(this).find('image').text();
        console.log(image);
        $('#current-img').html("<img src='" + image + "'/>");
    });
    $(xml).find('liveaudio').each(function(){
        var channel = $(this).find('url').text();  
        $('#channelUrl').html("<audio controls src='"+ channel +"'>SR 1</audio>");
    });     
}
 function xmlParseRightNow(xmlRightNow){
            console.log(xmlRightNow);
            $(xmlRightNow).find('#132').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').html("<img src='" + imageUrl + "'/>");
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
            });
}
// function instaTry(instaTry){
//     var instaimg = instaTry.data[0].images.standard_resolution.url;
//     //$('#insta').html("<img src='" + instaimg + "' </img>");
//     $('.radio').css({   'background' : 'url("' + instaimg + ' ")no-repeat center center fixed'
//                     });
//     console.log(instaTry);
// }