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
        $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/channels?size=8",
            dataType: "xml",
            success: showChannels
        });
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
        // click h1 end    
        });

function loader(){
  $('.animate-container').fadeOut('slow');
}
function ready(){
  $('.radio').fadeIn('slow');
}
function filterChannelList(){
  $('#channelListId4,#channelListId5,#channelListId6,#channelListId7').remove();
}
setTimeout(filterChannelList, 500);
setTimeout(loader, 1500);
setTimeout(ready, 1500);




//ready end
});
function showWhatsPlayingP1(){
          $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=132",
            dataType: "xml",
            success: function(xml){
              console.log(xml);
              $(xml).find('#132').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').css('display','none');
                  $('#current-img').html("<img src='" + imageUrl + "'/>").fadeIn('slow');
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
              });
            }
        });
}
function showWhatsPlayingP2(){
          $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=163",
            dataType: "xml",
            success: function(xml){
              console.log(xml);
              $(xml).find('#163').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').css('display','none');
                  $('#current-img').html("<img src='" + imageUrl + "'/>").fadeIn('slow');
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
              });
            }
        });
}
function showWhatsPlayingP3(){
          $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=164",
            dataType: "xml",
            success: function(xml){
              console.log(xml);
              $(xml).find('#164').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').css('display','none');
                  $('#current-img').html("<img src='" + imageUrl + "'/>").fadeIn('slow');
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
              });
            }
        });
}
function showWhatsPlayingP4(){
          $.ajax({
            type: "GET",
            url: "http://api.sr.se/api/v2/scheduledepisodes/rightnow?channelid=212",
            dataType: "xml",
            success: function(xml){
              console.log(xml);
              $(xml).find('#212').each(function(){
                  var current = $(this).find('currentscheduledepisode');
                  var next = $(this).find('nextscheduledepisode');
                  var currentTitle = $(current).find('title').text();
                  var nextProgramTitle = $(next).find('title').text();
                  var imageUrl = $(current).find('socialimage').text();
                  var nextProgramImg = $(next).find('socialimage').text();
                  $('#current-img').css('display','none');
                  $('#current-img').html("<img src='" + imageUrl + "'/>").fadeIn('slow');
                  $('#current-program').text(currentTitle);
                  $('#next-program-img').html("<img src='" + nextProgramImg + "'/>");
                  $('#next-program').text(nextProgramTitle);
              });
            }
        });
}

function showChannels(channels){
  console.log('channels');
  console.log(channels);
  $(channels).find('channels').each(function(){
    var channel = $(this).find('channel').attr('name');
    var i = 0;
    $(channels).find('channel').each(function(i){
      var name = $(this).attr('name');
      var name = name.slice(0,2);
      var radioUrl = $(this).find('url').text();
      var channelImage = $(this).find('image').text();

      var cL = "channelListId"; 
      i++;
      // $('select').append("<option id='" + cL + i +  "' img='" + channelImage + "' value='" + radioUrl +  "'>" + name + "</option>");
      $('ul').append("<li id='" + cL + i +  "' img='" + channelImage + "' value='" + radioUrl +  "'>" + name + "</li>");

    })
    $(channels).find('liveaudio').each(function(){
      var radioUrl = $(this).find('url').text();
    })
  });
  console.log(channelUrl);
};
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


 $("#radio-channels").click(function(event) {
        var channelId = event.target.id;
        console.log(channelId);

    if(channelId == 'channelListId1')
      showWhatsPlayingP1();
    if(channelId == 'channelListId2')
      showWhatsPlayingP2();
    if(channelId == 'channelListId3')
      showWhatsPlayingP3();
    if(channelId == 'channelListId8')
      showWhatsPlayingP4();
    });



