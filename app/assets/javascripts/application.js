// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery
//= require jquery_ujs
//= require foundation


//= require_tree .

// SC.initialize({
//   clientId: "bb3b960126fc0ee3ec16de768439927f"
// });
$(document).ready(function() {

var clickEventType=((document.ontouchstart!==null)?'click':'touchstart');
console.log(clickEventType)
  $('body').on(clickEventType, '#menu', function(event) {
    $('.neste').toggle();
  })
  $('body').on('click', '.neste', function(event) {
    $('.neste').hide();
  })
  $('body').on('click', '.container', function(event) {
    $('.neste').hide();
    $('#tracks').hide();

  })
  $('body').on('click', '#home', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)

      })
  })

  $('body').on('click', '#user', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()
        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')

        $('body').prepend($header)
        $('body').append($container)
      })
  })


  $('body').on('click', '#new-playlist', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)

    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)

    })

  })

  $('body').on('submit', '#image_search', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('action')
    history.pushState({tag: true}, null, myUrl+'?'+decodeURIComponent($(this).serialize()).replace('utf8=%25E2%259C%2593&', ''))
    // console.log(myUrl)
    // console.log($(this).serialize())
    $.ajax({type: 'get', url: myUrl, data: $(this).serialize()})
      .done(function(response) {
        $('.image-results').remove()
        $('.search-prev-next').remove()
        var $images = $(response).find('.image-results')
        var $prevNext = $(response).find('.search-prev-next')
        console.log(response)
        $('.container').append($images)
        $('.container').append($prevNext)
      })
  })

  $('body').on('click', '.btn', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.image-results').remove()
        $('.search-prev-next').remove()
        var $images = $(response).find('.image-results')
        var $prevNext = $(response).find('.search-prev-next')
        $('.container').append($images)
        $('.container').append($container)
      })
  })

  $('body').on('click', '#new-song', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })

  })

  $('body').on('click', '.playlistCover', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })

  })

  $('body').on('submit', '#search-songs', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('action')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl, data: $(this).serialize()})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '.add-song', function(event) {
    var params = $(this).attr('href').match(/\?(.+)/)[1]
    var myUrl = $(this).attr('href').match(/^(.*)\?/)[1]
    history.pushState({tag: true}, null, $(this).attr('href'))
    event.preventDefault()
    $.post(myUrl, params, function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '.new_playlists', function(event) {
    var params = $(this).attr('href').match(/\?(.+)/)[1]
    var myUrl = $(this).attr('href').match(/^(.*)\?/)[1]
    history.pushState({tag: true}, null, $(this).attr('href'))
    event.preventDefault()
    $.post(myUrl, params, function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '#find-playlist', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()
        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        $('body').prepend($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '.playlists-around', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    history.pushState({tag: true}, null, myUrl)
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '#new-playlists', function(event) {
    event.preventDefault()
    if ($('.current_user').length > 0) {
      var id = $('.playlist_locations').attr('id')
      var myUrl = $(this).attr('href')+'/'+id+'/songs/new'
      history.pushState({tag: true}, null, myUrl)
    }else {
      var myUrl = $(this).attr('href')+'/new'
      history.pushState({tag: true}, null, myUrl)
    }
    $.ajax({type: 'get', url: myUrl})
    .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').prepend($header)
        $('body').append($container)

    })
  })
  $('body').on('click', '#loadMore', function(event) {
    $(this).hide()
    $('.hiddenCover').css('display', 'inline')
    $('#hide').css('display', 'table')

  })
  $('body').on('click', '#hide', function(event) {
    $(this).hide()
    $('.hiddenCover').css('display', 'none')
    $('#loadMore').css('display', 'table')

  })

  history.replaceState({tag: true}, null, null);

  window.addEventListener('popstate', function(event) {
    console.log(event)
    if (!event.state.tag) return;
    var pathname = window.location.pathname;
    window.location.pathname = pathname;
  })



  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }


  var minUpdateUserDistance = 0.01 //km
  var userId = $("div[style='display:none']").attr('id')
  var firebaseRef = new Firebase("https://blinding-fire-43.firebaseio.com/");
  var geo_options = {
                      enableHighAccuracy: true,
                      timeout: 5000
                    };

  var currentdate = new Date();




  // Create a GeoFire index
  var geoFire = new GeoFire(firebaseRef);


  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.watchPosition(checkGeoFire, null, geo_options);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }


  function checkGeoFire(position) {
    $.ajax({type: 'patch', url: '/users/'+userId+'', data: { user: {latitude: position.coords.latitude, longitude: position.coords.longitude}}})
    }



// getLocation()

  var audio;
  var playlist;
  var tracks;
  var current;
  var titles;





    current = 0;
    audio = $('audio')[0]
    $('body').on('loadstart', 'audio', function(e) {
      $('audio').play()
    })
    audio.volume = 1;
    $('body').on('click', '.song', function(e){
      e.preventDefault();
      link = $(this);
      var title = $($($(this).children()[1]).children()[0]).clone()
      console.log(title)
      var a = $('<a>'+title[0].innerHTML+'</a>')
      title[0].innerHTML = ''
      a.addClass('clickable')
      title.append(a)
      var t = $('#tracks').has('#'+$(title).attr('id'))
      if ($('#tracks').has('#'+$(title).attr('id')).length === 0) {
        $('#tracks').append(title)   
      };
      playlist = $('#playlist');
      tracks = playlist.find('.songcard .song').clone();
      len = tracks.length;
      current = link.parent().index();
      run(link, audio);
    });
    $('body').on(clickEventType, '#play', function(event) {
      event.preventDefault();
      if (audio.src) {
        $('#play').toggle();
        $('#pause').toggle();
        audio.play();
      };  
    })
    $('body').on(clickEventType, '#pause', function(event) {
      event.preventDefault();
      $('#play').toggle();
      $('#pause').toggle();
      audio.pause();
    })
    $('body').on(clickEventType, '#viewPlaylist', function(event) {
      event.preventDefault();
      $('#tracks').toggle();
    })

    $('body').on('click', '.clickable', function(event) {
      tracks = playlist.find('.songcard .song').clone();
      len = tracks.length;
      current = $(this).index();
      run($(this).parent(), audio)
    })
    $('body').on(clickEventType, '#playPlaylist', function(event) {
      event.preventDefault()
      current = 0
      $($('#tracks')[0]).empty()
      playlist = $('#playlist');
      tracks = playlist.find('.songcard .song').clone();
      track = playlist.find('.songcard .song')[0]
      titles = $('.title').clone()
      titles.each(function(i,t) {
        console.log(t)
        var a = $('<a>'+t.innerHTML+'</a>')
        console.log(a.innerHTML)
        t.innerHTML = ''
        a.addClass('clickable')
        $(t).append(a)
        $('#tracks').append(t)              
      })
      len = tracks.length;
      console.log(len)
      link = tracks[0]
      $(track).parent().addClass('active')
      $(track).parent().siblings().removeClass('active')
      run($(link), audio)
    })
    $('body').on(clickEventType, '#next', function(event) {
      event.preventDefault();
      tracks = playlist.find('.songcard .song').clone();
      len = tracks.length;
      current++
      if(current == len){
            current = 0;
            link = $('#tracks').find('.title')[0];
        }else{
            link = $('#tracks').find('.title')[current];
        }
        run($(link),audio);
    })
    $('body').on(clickEventType, '#last', function(event) {
      event.preventDefault();
      tracks = playlist.find('.songcard .song').clone();
      len = tracks.length;
      current--
      if(current === 0){
            link = $('#tracks').find('.title')[0];
        }else if(current < 0){
          current = len-1
          link = $('#tracks').find('.title')[current]
        }else{
            link = $('#tracks').find('.title')[current];
        }
        run($(link),audio);
    })
    $('body').on(clickEventType, '#shuffle', function(event) {
      event.preventDefault();
      var newOrder = shuffle($('#tracks').find('div'))
      $('#tracks').empty()
      $('#tracks').append(newOrder)
    })
    audio.addEventListener('ended',function(e){
        current++;
        $('#play').toggle();
        $('#pause').toggle(); 
        if(current == len){
            current = 0;
            console.log('done')
            link = $('#tracks').find('.title')[0];
        }else{
            link = $('#tracks').find('.title')[current];
        }
        run($(link),audio);
    });
// }
function run(link, player){
  getLocation();
  if (link.attr('href')) {
    trackUri = 'https://api.soundcloud.com/tracks/'+link.attr('href').replace('http://audioscape1.herokuapp.com', '')+'/streams?client_id=bb3b960126fc0ee3ec16de768439927f';
      var bottomLink = $('#tracks').find('#'+link.attr('href'))
      bottomLink.addClass('active').siblings().removeClass('active');
      par = link.parent();
      par.addClass('active').siblings().removeClass('active');

  }else {
    trackUri = 'https://api.soundcloud.com/tracks/'+link.attr('id')+'/streams?client_id=bb3b960126fc0ee3ec16de768439927f';
    link.addClass('active').siblings().removeClass('active')
    $('.songcard').has('#'+link.attr('id')).addClass('active').siblings().removeClass('active')
  }

    $.get(encodeURI(trackUri))
      .then(function (result) {
        if (player.paused) {
          $('#play').toggle();
          $('#pause').toggle();      
        };
        player.src = result.http_mp3_128_url;
        player.load();
        player.play();

      });
      if (audio.paused) {
        $('#play').toggle();
        $('#pause').toggle();       
        audio.play() 
      };
};
})

$(function(){ $(document).foundation(); });
