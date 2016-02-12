class SongsController < ApplicationController

  def index

  end

  def new

    render 'new', layout: false

  end

  def show
    client = Soundcloud.new({
      :client_id     => "bb3b960126fc0ee3ec16de768439927f",
      :client_secret => "7d39770bb6a7a580e69658cfef542d3b"
    })
    @groove_song = Song.find(params[:id])
    @groove_url = @groove_song.link
  end

  def create
    song = Song.new(title: params[:song_name], artist: params[:song_artist], link: params[:song_id], playlist_id: params[:playlist_id], coverart: params[:coverart])
    if song.coverart != nil
      song.save
    else
      song.coverart = "http://static7.depositphotos.com/1001655/707/v/950/depositphotos_7070089-Woman-with-music-notes.jpg"
      song.save
    end
    @playlist = Playlist.find(song.playlist_id)
    render "playlists/show/", layout: false
  end

  def destroy
    playlist = Playlist.find(params[:playlist_id])
    song = playlist.songs.find(params[:id])
    song.destroy

    redirect_to playlist
  end

  def update

  end

  def search

    client = Soundcloud.new({
      :client_id     => "bb3b960126fc0ee3ec16de768439927f",
      :client_secret => "7d39770bb6a7a580e69658cfef542d3b"
    })
    @playlist = Playlist.find(params[:playlist_id])
    @artist_search_results = client.get('/tracks', q: params[:songs][:title])
    render 'search', layout: false
  end

end
