class PlaylistsController < ApplicationController
  respond_to :html, :js, :xml, :json
  GOOGLE_API_KEY = 'AIzaSyAxtw4-zu7vqxoUxtk4e7QTz7nvLZOOLVY'
  GOOGLE_SEARCH_CX = '010444673571637133719:ltyfqnzcrmy'

  def index

  end

  def new
    @playlist = Playlist.new

    render :new
  end
 
  def show
    @playlist = Playlist.find(params[:id])
    @client = Soundcloud.new({
      :client_id     => "bb3b960126fc0ee3ec16de768439927f",
      :client_secret => "7d39770bb6a7a580e69658cfef542d3b"
    }) 
    @picture = @playlist.art_url
    unless @picture
      @picture = "http://1.bp.blogspot.com/-NFIeRN1TNpU/Ukou19njwHI/AAAAAAAAARQ/iypdhkQVZvI/s200/7313935-heavy-metal-rock-and-roll-devil-horns-hand-sign-with-a-black-leather-studded-bracelet.jpg"
    end

    render 'show'



  end

  def create
    @playlist = Playlist.new(title: params[:playlist][:title], user_id: current_user.id, art_url: params[:playlist][:art_url])

    if @playlist.save
      render 'show'
    else
      render :new
    end
  end

  def destroy
    playlist = current_user.playlists.find(params[:id])
    playlist.destroy

    redirect_to '/'
  end

  def update

  end

  def find
    @current_users_around = current_users_around
  end

  def image_search
    @title = params[:playlists][:title]
    if params[:playlists][:q]
      @query = params[:playlists][:q]
      page = params[:playlists][:page] || 1
      @results = GoogleCustomSearchApi.search(params[:playlists][:q], {page: page, searchtype: 'image'})
      
    end
    render 'image_search'
  end

end
