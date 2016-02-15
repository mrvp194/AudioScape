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


  $('body').on('click', '#menu', function(event) {
    $('.neste').toggle();
    // console.log($('.content'))
    // console.log($('.is-active'))
    // console.log($(this))
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
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()

        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        console.log($header)
        $('body').append($header)
        $('body').append($container)

      })
  })

  $('body').on('click', '#user', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()
        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')

        $('body').append($header)
        $('body').append($container)
      })
  })


  $('body').on('click', '#new-playlist', function(event) {
  event.preventDefault()
  var myUrl = $(this).attr('href')

  $.ajax({type: 'get', url: myUrl})
    .done(function(response) {
      // $('header').remove()
      $('.container').remove()

      $('body').append($('<div>').addClass('container row').append(response))

    })

  })

  $('body').on('submit', '#new_playlist', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('action')
    $.ajax({type: 'post', url: myUrl, data: $(this).serialize()})
      .done(function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })
  })

  $('body').on('click', '#new-song', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })

  })

  $('body').on('click', '.playlistCover', function(event) {
    event.preventDefault()
    var myUrl = $(this).attr('href')
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })

  })

  $('body').on('submit', '#search-songs', function(event) {
    event.preventDefault()

     var myUrl = $(this).attr('action')
     console.log(myUrl)
    $.ajax({type: 'get', url: myUrl, data: $(this).serialize()})
      .done(function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })
  })

  $('body').on('click', '.add-song', function(event) {
    var auth = $(this).find('input').serialize()
    var params = $(this).attr('href').match(/\?(.+)/)[1]
    var myUrl = $(this).attr('href').match(/^(.*)\?/)[1]
    event.preventDefault()
    $.post(myUrl, params, function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })
  })

  $('body').on('click', '#find-playlist', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('header').remove()
        var $header = $(response).filter('header')
        var $container = $(response).filter('.container')
        $('body').append($header)
        $('body').append($container)
      })
  })

  $('body').on('click', '.playlists-around', function(event) {
    event.preventDefault()

    var myUrl = $(this).attr('href')
    $.ajax({type: 'get', url: myUrl})
      .done(function(response) {
        $('.container').remove()
        $('body').append($('<div>').addClass('container row').append(response))
      })
  })

  $('body').on('click', '#new-playlists', function(event) {
    event.preventDefault()
    if ($('.current_user').length > 0) {
      var id = $('.playlist_locations').attr('id')
      var myUrl = $(this).attr('href')+'/'+id+'/songs/new'
    }else {
      var myUrl = $(this).attr('href')+'/new'
    }
    $.ajax({type: 'get', url: myUrl})
    .done(function(response) {
      $('.container').remove()

      $('body').append($('<div>').addClass('container row').append(response))

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



  function shuffle(o){
      for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }


  var minUpdateUserDistance = 0.01 //km
  var userId = $("div[style='display:none']").attr('id')
  var firebaseRef = new Firebase("https://blinding-fire-43.firebaseio.com/");
  var geo_options = {
  enableHighAccuracy: true,
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



getLocation()

  var audio;
  var playlist;
  var tracks;
  var current;
  var titles;





    current = 0;
    audio = new Audio()
    $('body').on('click', '.song', function(e){
      e.preventDefault();
      link = $(this);
      var title = $($($(this).children()[1]).children()[0]).clone()
      title.addClass('clickable')
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
    $('body').on('click', '#play', function(event) {
      event.preventDefault();
      if (audio.src) {
        $('#play').toggle();
        $('#pause').toggle();
        audio.play();
      };  
    })
    $('body').on('click', '#pause', function(event) {
      event.preventDefault();
      $('#play').toggle();
      $('#pause').toggle();
      audio.pause();
    })
    $('body').on('click', '#viewPlaylist', function(event) {
      event.preventDefault();
      $('#tracks').toggle();
    })

    $('body').on('click', '.clickable', function(event) {
      current = $(this).index();
      run($(this), audio)
    })
    $('body').on('click', '#playPlaylist', function(event) {
      event.preventDefault()
      current = 0
      $($('#tracks')[0]).empty()
      playlist = $('#playlist');
      tracks = playlist.find('.songcard .song').clone();
      track = playlist.find('.songcard .song')[0]
      titles = $('.title').clone()
      titles.addClass('clickable')
      $('#tracks').append(titles)
      len = tracks.length;
      link = tracks[0]
      $(track).parent().addClass('active')
      $(track).parent().siblings().removeClass('active')
      run($(link), audio)
    })
    $('body').on('click', '#next', function(event) {
      event.preventDefault();
      current++
      if(current == len){
            current = 0;
            console.log('done')
            link = $('#tracks').find('.title')[0];
        }else{
            link = $('#tracks').find('.title')[current];
        }
        run($(link),audio);
    })
    $('body').on('click', '#last', function(event) {
      event.preventDefault();
      current--
      if(current === 0){
            current = len;
            console.log('done')
            link = $('#tracks').find('.title')[0];
        }else{
            link = $('#tracks').find('.title')[current];
        }
        run($(link),audio);
    })
    $('body').on('click', '#shuffle', function(event) {
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
  if (link.attr('href')) {
    trackUri = 'https://api.soundcloud.com/tracks/'+link.attr('href').replace('http://localhost:3000', '')+'/streams?client_id=bb3b960126fc0ee3ec16de768439927f';
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
        console.debug(result);
        if (player.paused) {
          $('#play').toggle();
          $('#pause').toggle();      
        };
        player.src = result.http_mp3_128_url;
        // player.load();
        player.play();

      });
};
})

$(function(){ $(document).foundation(); });
